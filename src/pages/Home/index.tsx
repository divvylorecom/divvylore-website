import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, CheckCircle2, Minus, Plus } from "lucide-react";
import siteContent from "../../content/SiteContent.json";
import {
  Page,
  Container,
  Hero,
  CardStack,
  StackCard,
  BelowStack,
  FlatSection,
  HeroGrid,
  HeroCopy,
  HeroTitle,
  HeroTitleAccent,
  HeroLead,
  HeroActions,
  BtnPrimary,
  BtnSecondary,
  HeroVisual,
  CanvasNode,
  CanvasLine,
  ChatPreview,
  ChatHead,
  ChatDot,
  ChatBody,
  Bubble,
  AudienceIntro,
  RoleTabs,
  RoleTab,
  RoleOutcome,
  RoleLabel,
  RoleAction,
  RoleResult,
  ProofGrid,
  ProofCard,
  ProofTitle,
  ProofBody,
  Eyebrow,
  DisplayTitle,
  DisplayAccent,
  SectionLead,
  ChipRow,
  Chip,
  BlockGrid,
  PointList,
  PointItem,
  MockPanel,
  MockRow,
  ControlGrid,
  ControlCard,
  ControlTitle,
  ControlText,
  StepsGrid,
  StepCard,
  StepIndex,
  StepTitle,
  StepText,
  StoriesGrid,
  StoryCard,
  StoryHeadline,
  StoryMetric,
  StoryQuote,
  StoryRole,
  EnterpriseGrid,
  EnterpriseCard,
  BillingToggle,
  BillingToggleBtn,
  PricingToggles,
  TrialOffer,
  TrialText,
  TrialTitle,
  TrialFacts,
  PlanGrid,
  PlanCard,
  PlanBadge,
  PlanName,
  PlanPrice,
  PlanAmount,
  PlanCycle,
  PlanDesc,
  PlanCta,
  PlanBilled,
  PlanSave,
  ToggleSave,
  PlanKeyList,
  PlanKeyItem,
  PlanPlusTitle,
  PricingNote,
  CompareBlock,
  CompareSummary,
  CompareScroll,
  CompareTable,
  SrOnly,
  PlanFeatureList,
  PlanIncludes,
  PlanIncludesTitle,
  PlanIncludesList,
  PlanProducts,
  PlanFeatureItem,
  FaqBlock,
  FaqList,
  FaqRow,
  FaqSummary,
  FaqBody,
  ClosingInner,
  ClosingTitle,
  ClosingAccent,
  ClosingLead,
  ClosingActions,
} from "./styles";

type BillingCycle = "monthly" | "yearly";

type PlanFeatureResponse = {
  name: string;
  description?: string;
  isIncluded: boolean;
  displayOrder?: number;
  /** "limits" for a line written from a plan limit; the numbers are shown from the plan instead. */
  category?: string | null;
};

type PricingPlanResponse = {
  id: string;
  name: string;
  description?: string;
  code?: string;
  monthlyPrice: number;
  yearlyPrice: number;
  monthlyCredits: number;
  yearlyCredits: number;
  yearlyBonusCredits?: number;
  features?: PlanFeatureResponse[];
  buttonText?: string;
  isPopular?: boolean;
  badgeText?: string;
  isTrial?: boolean;
  trialDurationDays?: number;
  trialRequiresPaymentMethod?: boolean;
  trialConvertsToPaid?: boolean;
  trialConversionPlanId?: string;
  isActive?: boolean;
  isVisible?: boolean | null;
  displayOrder?: number;
  isCustomPricing?: boolean;
  products?: string[];
  /** The plan's limits and options (maxUsers, maxWebsites, hasApiAccess…), read by name. */
  [field: string]: unknown;
};

type ProductResponse = { key: string; name?: string; highlights?: string[]; limits?: string[] };

/** A plan number the site shows: the plan field, and its words with {n} for the number. */
type LimitRow = { field: string; label?: string; text?: string; one?: string; unlimited?: string; type?: "yes" };

type AudienceRole = {
  id: string;
  label: string;
  action: string;
  outcome: string;
};

type MockLine = { tone?: "accent" | "soft" | "ink"; text: string };

const APP_URL: string = (siteContent as any).appUrls?.base || "https://app.divvylore.com";
const PRODUCT: string = (siteContent as any).product;
const PRICING_API_BASE = (import.meta.env.VITE_PORTAL_API_BASE || APP_URL).replace(/\/$/, "");
const PRICING_LIVE_HOSTS: string[] = (siteContent as any).pricing?.liveHosts || [];
const REGISTER_PATH = "/register";
const LOGIN_PATH = "/login";
const easeOut = [0.22, 1, 0.36, 1] as const;

const formatUsd = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);

const fill = (text: string = "", values: Record<string, string>) =>
  text.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");

/**
 * A plan number in words, or null when the plan does not say (the site's own fallback plans): 0 is
 * unlimited, shown only where the row words it, so limits that use credits never read as unlimited.
 */
const limitLine = (row: LimitRow, value: unknown): string | null => {
  if (typeof value !== "number") return null;
  if (value <= 0) return row.unlimited || null;
  return value === 1 && row.one ? row.one : fill(row.text, { n: value.toLocaleString("en-US") });
};

/** A line with its first number in bold, so the numbers lead. */
const withNumber = (text: string) => {
  const match = /\d[\d,.]*/.exec(text);
  if (!match) return text;
  return (
    <>
      {text.slice(0, match.index)}
      <strong>{match[0]}</strong>
      {text.slice(match.index + match[0].length)}
    </>
  );
};

const toNumber = (value: unknown): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const buildFallbackPlans = (raw: any): PricingPlanResponse[] => {
  const items = Array.isArray(raw?.pricing?.plans) ? raw.pricing.plans : [];
  return items.map((plan: any, idx: number) => {
    const numericPrice = Number(String(plan.price || "").replace(/[^\d.]/g, ""));
    const monthly = Number.isFinite(numericPrice) ? numericPrice : 0;
    return {
      id: plan.planCode || `${plan.name}-${idx}`,
      name: plan.name,
      description: plan.description,
      code: plan.planCode,
      monthlyPrice: monthly,
      yearlyPrice: monthly > 0 ? Math.round(monthly * 10) : 0,
      monthlyCredits: 0,
      yearlyCredits: 0,
      yearlyBonusCredits: 0,
      features: (plan.features || []).map((name: string, i: number) => ({
        name,
        isIncluded: true,
        displayOrder: i,
      })),
      buttonText: plan.ctaLabel,
      isPopular: !!plan.highlighted,
      isActive: true,
      isVisible: true,
      displayOrder: idx,
      isCustomPricing: String(plan.price || "").toLowerCase().includes("custom"),
    } as PricingPlanResponse;
  });
};

const Home = () => {
  const content = siteContent as any;
  const reduceMotion = useReducedMotion();
  const roles = (content.audience?.roles || []) as AudienceRole[];
  const [activeRole, setActiveRole] = useState(roles[0]?.id || "sales");
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const fallbackPlans = useMemo(() => buildFallbackPlans(content), [content]);
  const [plans, setPlans] = useState<PricingPlanResponse[]>(fallbackPlans);
  // The comparison table needs the platform's plans: the site's own fallback copy has no limits.
  const [plansLive, setPlansLive] = useState(false);
  // What every plan of this site's product includes, and the names of the products a bundle sells:
  // the platform's product catalog, else the site's own copy.
  const [includes, setIncludes] = useState<string[]>(content.pricing?.includes || []);
  const [productNames, setProductNames] = useState<Record<string, string>>({});
  // Which product each product-only limit belongs to (the catalog's `limits`), so a card shows only
  // the limits of the products its plan sells.
  const [limitOwners, setLimitOwners] = useState<Record<string, string>>({});
  const productBlocks = content.productBlocks || [];

  useEffect(() => {
    if (!roles.length || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveRole((current) => {
        const idx = roles.findIndex((role) => role.id === current);
        return roles[(idx + 1) % roles.length]?.id || roles[0].id;
      });
    }, 3200);
    return () => window.clearInterval(timer);
  }, [roles, reduceMotion]);

  useEffect(() => {
    // Only call the portal from hosts it allows (CORS). Elsewhere (local preview,
    // audits) the content plans are shown and nothing is logged.
    const host = typeof window !== "undefined" ? window.location.hostname : "";
    if (!import.meta.env.VITE_PORTAL_API_BASE && !PRICING_LIVE_HOSTS.includes(host)) return;
    const controller = new AbortController();
    const loadPlans = async () => {
      try {
        const query = new URLSearchParams({ product: PRODUCT }).toString();
        const response = await fetch(`${PRICING_API_BASE}/account/tenant/plans?${query}`, {
          method: "GET",
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Pricing API returned ${response.status}`);
        const data = (await response.json()) as PricingPlanResponse[];
        if (!Array.isArray(data)) throw new Error("Pricing API response is not a plan list");
        const normalized = data
          .map((plan) => ({
            ...plan,
            monthlyPrice: toNumber(plan.monthlyPrice),
            yearlyPrice: toNumber(plan.yearlyPrice),
            monthlyCredits: toNumber(plan.monthlyCredits),
            yearlyCredits: toNumber(plan.yearlyCredits),
            yearlyBonusCredits: toNumber(plan.yearlyBonusCredits ?? 0),
            displayOrder: toNumber(plan.displayOrder ?? 999),
            features: Array.isArray(plan.features) ? plan.features : [],
          }))
          .sort((a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999));
        if (normalized.length > 0) {
          setPlans(normalized);
          setPlansLive(true);
        }
      } catch {
        // Keep the fallback plans silently.
      }
    };
    const loadProducts = async () => {
      try {
        const response = await fetch(`${PRICING_API_BASE}/account/tenant/products`, {
          method: "GET",
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Products API returned ${response.status}`);
        const data = (await response.json()) as ProductResponse[];
        if (!Array.isArray(data)) throw new Error("Products API response is not a product list");
        setProductNames(Object.fromEntries(data.map((product) => [product.key, product.name || product.key])));
        setLimitOwners(
          Object.fromEntries(data.flatMap((product) => (product.limits || []).map((limit) => [limit, product.key]))),
        );
        const own = data.find((product) => product.key === PRODUCT)?.highlights || [];
        if (own.length > 0) setIncludes(own);
      } catch {
        // Keep the site's own copy silently.
      }
    };
    loadPlans();
    loadProducts();
    return () => controller.abort();
  }, []);

  const activePlans = useMemo(() => plans.filter((plan) => plan.name), [plans]);
  // The plan groups a visitor switches between, read from the plans themselves: this site's product
  // on its own first, then each bundle (one group per set of products the plans sell). A trial shows
  // in every group whose products it gives.
  const isTrialOffer = (plan: PricingPlanResponse) => !!plan.isTrial && plan.trialConvertsToPaid !== false;
  const planViews = useMemo(() => {
    const sells = (plan: PricingPlanResponse) => (plan.products?.length ? plan.products : [PRODUCT]);
    const keyOf = (plan: PricingPlanResponse) => Array.from(new Set(sells(plan))).sort().join("+");
    const keys = Array.from(new Set(activePlans.filter((plan) => !plan.isTrial).map(keyOf))).sort(
      (a, b) =>
        Number(b === PRODUCT) - Number(a === PRODUCT) ||
        a.split("+").length - b.split("+").length ||
        a.localeCompare(b),
    );
    return keys.map((key) => {
      const parts = key.split("+");
      return {
        key,
        parts,
        plans: activePlans.filter((plan) => !isTrialOffer(plan) && keyOf(plan) === key),
        // The trial for exactly these products (a product's own trial becomes that product's plan),
        // else a trial that gives them all.
        trial:
          activePlans.find((plan) => isTrialOffer(plan) && keyOf(plan) === key) ||
          activePlans.find((plan) => isTrialOffer(plan) && parts.every((k) => sells(plan).includes(k))),
      };
    });
  }, [activePlans]);
  const [viewKey, setViewKey] = useState("");
  const currentView = planViews.find((view) => view.key === viewKey) || planViews[0];
  const shownPlans = currentView?.plans || activePlans.filter((plan) => !isTrialOffer(plan));
  const trial = currentView ? currentView.trial : activePlans.find(isTrialOffer);
  // The trial line, every value from the trial plan set in Admin; the words are the site's.
  const trialFacts = (() => {
    if (!trial) return [];
    const words = content.pricing?.trial || {};
    const facts: string[] = [];
    if (trial.monthlyCredits > 0) facts.push(fill(words.credits, { credits: trial.monthlyCredits.toLocaleString() }));
    if (!trial.trialRequiresPaymentMethod) {
      facts.push(words.noCard);
    } else {
      const next = plans.find((plan) => plan.id === trial.trialConversionPlanId);
      facts.push(
        next && !next.isCustomPricing
          ? fill(words.cardThenPlan, { plan: next.name, price: formatUsd(next.monthlyPrice), cycle: "/month" })
          : words.card,
      );
    }
    return facts.filter(Boolean);
  })();
  // The switch waits for the product names, so it never shows raw keys.
  const showViews = planViews.length > 1 && planViews.every((view) => view.parts.every((k) => productNames[k]));
  const pricing = content.pricing || {};
  const sellsOf = (plan: PricingPlanResponse) => (plan.products?.length ? plan.products : [PRODUCT]);
  // A product-only limit shows only on plans that sell its product.
  const hasRow = (plan: PricingPlanResponse, field: string) =>
    !limitOwners[field] || sellsOf(plan).includes(limitOwners[field]);
  const yearlySaving = (plan: PricingPlanResponse) =>
    plan.monthlyPrice > 0 && plan.yearlyPrice > 0
      ? Math.round((1 - plan.yearlyPrice / (plan.monthlyPrice * 12)) * 100)
      : 0;
  const bestSaving = Math.max(0, ...shownPlans.map(yearlySaving));
  const creditsLine = (plan: PricingPlanResponse) => {
    const words = pricing.credits || {};
    if (cycle === "monthly") {
      return plan.monthlyCredits > 0 ? fill(words.monthly, { n: plan.monthlyCredits.toLocaleString("en-US") }) : null;
    }
    const bonus = plan.yearlyBonusCredits || 0;
    const total = plan.yearlyCredits + bonus;
    if (total <= 0) return null;
    return bonus > 0
      ? fill(words.yearlyBonus, { n: total.toLocaleString("en-US"), bonus: bonus.toLocaleString("en-US") })
      : fill(words.yearly, { n: total.toLocaleString("en-US") });
  };
  // The lines written in Admin that are not limits; a higher plan lists only what the plan before it lacks.
  const extrasOf = (plan: PricingPlanResponse) =>
    (plan.features || [])
      .filter((feature) => feature.isIncluded && feature.category !== "limits")
      .sort((a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999));
  const compareRows = ((pricing.compare?.rows || []) as LimitRow[]).filter((row) =>
    shownPlans.some((plan) => hasRow(plan, row.field) && plan[row.field] !== undefined),
  );
  const showCompare = plansLive && shownPlans.length > 1 && compareRows.length > 0;
  const source =
    typeof window !== "undefined" ? window.location.hostname : content.brand?.domain || "";
  const selectedRole = roles.find((role) => role.id === activeRole) || roles[0];

  const buildAuthUrl = (path: string, params?: Record<string, string>) => {
    const query = new URLSearchParams({ source, product: PRODUCT, ...(params || {}) }).toString();
    return `${APP_URL}${path}?${query}`;
  };

  let cardIndex = 0;
  const nextIndex = () => cardIndex++;

  return (
    <Page>
      <Hero id="hero">
        <Container>
          <HeroGrid>
            <HeroCopy>
              <m.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: easeOut }}
              >
                <HeroTitle>
                  {content.hero?.titleLine1}
                  <br />
                  {content.hero?.titleLine2}
                  <HeroTitleAccent>{content.hero?.titleAccent}</HeroTitleAccent>
                </HeroTitle>
              </m.div>
              <HeroLead>{content.hero?.description}</HeroLead>
              <HeroActions>
                <BtnPrimary
                  href={buildAuthUrl(REGISTER_PATH, { placement: "hero" })}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.hero?.primaryCta?.label}
                  <ArrowRight size={16} />
                </BtnPrimary>
                <BtnSecondary href={content.hero?.secondaryCta?.url || "#pricing"}>
                  {content.hero?.secondaryCta?.label}
                </BtnSecondary>
              </HeroActions>
            </HeroCopy>

            <HeroVisual aria-hidden>
              <CanvasLine />
              {(content.heroVisual?.nodes || []).map(
                (node: { label: string; sub: string; x: number; y: number; accent?: boolean }) => (
                  <CanvasNode key={node.label} $x={node.x} $y={node.y} $accent={!!node.accent}>
                    {node.label}
                    <span>{node.sub}</span>
                  </CanvasNode>
                ),
              )}
              {content.heroVisual?.chat && (
                <ChatPreview>
                  <ChatHead>
                    <ChatDot />
                    {content.heroVisual.chat.title}
                  </ChatHead>
                  <ChatBody>
                    {(content.heroVisual.chat.messages || []).map(
                      (msg: { text: string; out?: boolean }) => (
                        <Bubble key={msg.text} $out={!!msg.out}>
                          {msg.text}
                        </Bubble>
                      ),
                    )}
                  </ChatBody>
                </ChatPreview>
              )}
            </HeroVisual>
          </HeroGrid>
        </Container>
      </Hero>

      <CardStack>
        <StackCard id="use-cases" $index={nextIndex()} $glow="rose">
          <Container>
            <AudienceIntro>{content.audience?.intro}</AudienceIntro>
            <RoleTabs>
              {roles.map((role) => (
                <RoleTab
                  key={role.id}
                  type="button"
                  $active={role.id === activeRole}
                  onClick={() => setActiveRole(role.id)}
                >
                  {role.label}
                </RoleTab>
              ))}
            </RoleTabs>
            <RoleOutcome>
              <AnimatePresence mode="wait">
                {selectedRole && (
                  <m.div
                    key={selectedRole.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: easeOut }}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.45rem 0.65rem",
                      alignItems: "baseline",
                    }}
                  >
                    <RoleLabel>{selectedRole.label}</RoleLabel>
                    <RoleAction>{selectedRole.action}</RoleAction>
                    <RoleResult>{selectedRole.outcome}</RoleResult>
                  </m.div>
                )}
              </AnimatePresence>
            </RoleOutcome>

            <ProofGrid style={{ marginTop: "2.2rem" }}>
              {(content.proof || []).map((item: { title: string; body: string }) => (
                <ProofCard key={item.title}>
                  <ProofTitle>{item.title}</ProofTitle>
                  <ProofBody>{item.body}</ProofBody>
                </ProofCard>
              ))}
            </ProofGrid>
          </Container>
        </StackCard>

        <StackCard id="product" $index={nextIndex()} $glow="indigo">
          <Container>
            <DisplayTitle>
              {content.integrations?.titleLine1}
              <DisplayAccent>{content.integrations?.titleLine2}</DisplayAccent>
            </DisplayTitle>
            <SectionLead>{content.integrations?.subtitle}</SectionLead>
            <ChipRow>
              {(content.integrations?.items || []).map((item: string) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ChipRow>
            <div style={{ marginTop: "1.6rem" }}>
              <BtnSecondary href="#how-it-works">{content.integrations?.cta}</BtnSecondary>
            </div>
          </Container>
        </StackCard>

        {productBlocks.map(
          (
            block: {
              id: string;
              eyebrow: string;
              titleLine1: string;
              titleLine2: string;
              body: string;
              points: string[];
              mock?: MockLine[];
            },
            idx: number,
          ) => (
            <StackCard
              key={block.id}
              id={block.id}
              $index={nextIndex()}
              $glow={(["violet", "teal", "indigo"] as const)[idx % 3]}
            >
              <Container>
                <BlockGrid>
                  <div>
                    <Eyebrow>{block.eyebrow}</Eyebrow>
                    <DisplayTitle>
                      {block.titleLine1}
                      <DisplayAccent>{block.titleLine2}</DisplayAccent>
                    </DisplayTitle>
                    <SectionLead>{block.body}</SectionLead>
                    <PointList>
                      {block.points.map((point) => (
                        <PointItem key={point}>
                          <CheckCircle2 size={18} color="#2dd4bf" />
                          <span>{point}</span>
                        </PointItem>
                      ))}
                    </PointList>
                  </div>
                  <MockPanel aria-hidden>
                    {(block.mock || []).map((line) => (
                      <MockRow key={line.text} $tone={line.tone || "soft"}>
                        {line.text}
                      </MockRow>
                    ))}
                  </MockPanel>
                </BlockGrid>
              </Container>
            </StackCard>
          ),
        )}

        <StackCard $index={nextIndex()} $glow="rose">
          <Container>
            <DisplayTitle>
              {content.control?.titleLine1}
              <DisplayAccent>{content.control?.titleLine2}</DisplayAccent>
            </DisplayTitle>
            <SectionLead>{content.control?.subtitle}</SectionLead>
            <ControlGrid>
              {(content.control?.points || []).map(
                (item: { title: string; description: string }) => (
                  <ControlCard key={item.title}>
                    <ControlTitle>{item.title}</ControlTitle>
                    <ControlText>{item.description}</ControlText>
                  </ControlCard>
                ),
              )}
            </ControlGrid>
          </Container>
        </StackCard>

        <StackCard id="how-it-works" $index={nextIndex()} $glow="indigo">
          <Container>
            <DisplayTitle>
              {content.howItWorks?.titleLine1}
              <DisplayAccent>{content.howItWorks?.titleLine2}</DisplayAccent>
            </DisplayTitle>
            <SectionLead>{content.howItWorks?.subtitle}</SectionLead>
            <PointList style={{ marginTop: "1.4rem" }}>
              {(content.howItWorks?.steps || []).slice(0, 4).map(
                (step: { title: string }) => (
                  <PointItem key={step.title}>
                    <CheckCircle2 size={18} color="#ffffff" />
                    <span>{step.title}</span>
                  </PointItem>
                ),
              )}
            </PointList>
            <StepsGrid>
              {(content.howItWorks?.steps || []).map(
                (step: { title: string; description: string }, idx: number) => (
                  <StepCard key={step.title}>
                    <StepIndex>{String(idx + 1).padStart(2, "0")}</StepIndex>
                    <StepTitle>{step.title}</StepTitle>
                    <StepText>{step.description}</StepText>
                  </StepCard>
                ),
              )}
            </StepsGrid>
          </Container>
        </StackCard>

        {(content.stories?.items || []).length > 0 && (
          <StackCard id={content.stories?.id} $index={nextIndex()} $glow="teal">
            <Container>
              <Eyebrow>{content.stories?.eyebrow}</Eyebrow>
              <DisplayTitle>
                {content.stories?.titleLine1}
                <DisplayAccent>{content.stories?.titleLine2}</DisplayAccent>
              </DisplayTitle>
              <StoriesGrid>
                {(content.stories?.items || []).map(
                  (story: { headline: string; metric: string; body: string; fit: string }) => (
                    <StoryCard key={story.headline}>
                      <div>
                        <StoryHeadline>{story.headline}</StoryHeadline>
                        <StoryMetric>{story.metric}</StoryMetric>
                      </div>
                      <StoryQuote>{story.body}</StoryQuote>
                      <StoryRole>{story.fit}</StoryRole>
                    </StoryCard>
                  ),
                )}
              </StoriesGrid>
            </Container>
          </StackCard>
        )}

        <StackCard $index={nextIndex()} $glow="violet">
          <Container>
            <Eyebrow>{content.enterprise?.eyebrow}</Eyebrow>
            <DisplayTitle>
              {content.enterprise?.titleLine1}
              <DisplayAccent>{content.enterprise?.titleLine2}</DisplayAccent>
            </DisplayTitle>
            <SectionLead>{content.enterprise?.subtitle}</SectionLead>
            <EnterpriseGrid>
              {(content.enterprise?.cards || []).map(
                (card: { title: string; description: string }) => (
                  <EnterpriseCard key={card.title}>
                    <ControlTitle>{card.title}</ControlTitle>
                    <ControlText>{card.description}</ControlText>
                  </EnterpriseCard>
                ),
              )}
            </EnterpriseGrid>
          </Container>
        </StackCard>
      </CardStack>

      <BelowStack>
        <FlatSection id="pricing">
          <Container>
            <DisplayTitle>{content.pricing?.title}</DisplayTitle>
            <SectionLead>{content.pricing?.subtitle}</SectionLead>
            {includes.length > 0 && (
              <PlanIncludes aria-label={content.pricing?.includesTitle}>
                <PlanIncludesTitle>{content.pricing?.includesTitle}</PlanIncludesTitle>
                <PlanIncludesList>
                  {includes.map((line) => (
                    <PlanFeatureItem key={line}>
                      <CheckCircle2 size={16} color="#2dd4bf" aria-hidden="true" />
                      <span>{line}</span>
                    </PlanFeatureItem>
                  ))}
                </PlanIncludesList>
              </PlanIncludes>
            )}
            <PricingToggles>
            {showViews && (
              <BillingToggle role="group" aria-label={content.pricing?.viewsLabel}>
                {planViews.map((view) => (
                  <BillingToggleBtn
                    key={view.key}
                    type="button"
                    className={view.key === currentView?.key ? "active" : ""}
                    aria-pressed={view.key === currentView?.key}
                    onClick={() => setViewKey(view.key)}
                  >
                    {/* Named in the catalog's order, the same on every site. */}
                    {[...view.parts]
                      .sort((a, b) => Object.keys(productNames).indexOf(a) - Object.keys(productNames).indexOf(b))
                      .map((k) => productNames[k])
                      .join(" + ")}
                  </BillingToggleBtn>
                ))}
              </BillingToggle>
            )}
            <BillingToggle role="group" aria-label="Billing cycle">
              <BillingToggleBtn
                type="button"
                className={cycle === "monthly" ? "active" : ""}
                aria-pressed={cycle === "monthly"}
                onClick={() => setCycle("monthly")}
              >
                Monthly
              </BillingToggleBtn>
              <BillingToggleBtn
                type="button"
                className={cycle === "yearly" ? "active" : ""}
                aria-pressed={cycle === "yearly"}
                onClick={() => setCycle("yearly")}
              >
                Yearly
                {bestSaving > 0 && (
                  <ToggleSave>
                    {fill(
                      shownPlans.every((plan) => yearlySaving(plan) === bestSaving) ? pricing.save : pricing.saveUpTo,
                      { percent: String(bestSaving) },
                    )}
                  </ToggleSave>
                )}
              </BillingToggleBtn>
            </BillingToggle>
            </PricingToggles>

            {trial && (
              <TrialOffer aria-label={trial.name}>
                <TrialText>
                  <TrialTitle>
                    {(content.pricing?.trial?.title || "").replace("{days}", String(trial.trialDurationDays || 0))}
                  </TrialTitle>
                  <TrialFacts>{trialFacts.join(" · ")}</TrialFacts>
                </TrialText>
                <PlanCta
                  href={`${APP_URL}${REGISTER_PATH}?${new URLSearchParams({
                    source,
                    product: PRODUCT,
                    placement: "pricing",
                    plan: trial.code || trial.id,
                  }).toString()}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {trial.buttonText || content.pricing?.trial?.cta}
                </PlanCta>
              </TrialOffer>
            )}

            <PlanGrid $count={shownPlans.length}>
              {shownPlans.map((plan, index) => {
                const isUnavailable = plan.isActive === false || plan.isVisible === false;
                const isYearly = cycle === "yearly" && plan.yearlyPrice > 0;
                // Yearly shows what a month costs, with what is billed and what it saves.
                const planPrice = isYearly ? Math.round((plan.yearlyPrice / 12) * 100) / 100 : plan.monthlyPrice;
                // What a year costs less than twelve months, in dollars on the card.
                const saving = isYearly ? Math.round((plan.monthlyPrice * 12 - plan.yearlyPrice) * 100) / 100 : 0;
                const keyLines = [
                  creditsLine(plan),
                  ...((pricing.keyRows || []) as LimitRow[])
                    .filter((row) => hasRow(plan, row.field))
                    .map((row) => limitLine(row, plan[row.field])),
                ].filter((line): line is string => !!line);
                const previous = index > 0 ? shownPlans[index - 1] : null;
                const previousExtras = new Set(previous ? extrasOf(previous).map((feature) => feature.name) : []);
                const extras = extrasOf(plan).filter((feature) => !previousExtras.has(feature.name));
                const query = new URLSearchParams({
                  source,
                  product: PRODUCT,
                  placement: "pricing",
                  plan: plan.code || plan.id,
                  billing: cycle,
                }).toString();

                return (
                  <PlanCard key={plan.id || plan.name} featured={!!plan.isPopular} muted={isUnavailable}>
                    {!isUnavailable && (plan.badgeText || (plan.isPopular && content.pricing?.popularLabel)) && (
                      <PlanBadge>{plan.badgeText || content.pricing?.popularLabel}</PlanBadge>
                    )}
                    {isUnavailable && <PlanBadge>Unavailable</PlanBadge>}
                    <PlanName>{plan.name}</PlanName>
                    {(plan.products?.length || 0) > 1 && (
                      <PlanProducts>
                        Includes {plan.products!.map((key) => productNames[key] || key).join(" + ")}
                      </PlanProducts>
                    )}
                    <PlanPrice>
                      {plan.isCustomPricing ? (
                        <PlanAmount>Custom</PlanAmount>
                      ) : (
                        <>
                          <PlanAmount>{formatUsd(planPrice)}</PlanAmount>
                          <PlanCycle>{pricing.perMonth}</PlanCycle>
                        </>
                      )}
                    </PlanPrice>
                    {isYearly && !plan.isCustomPricing && (
                      <PlanBilled>
                        {fill(pricing.billedYearly, { total: formatUsd(plan.yearlyPrice) })}
                        {saving > 0 && (
                          <>
                            {" · "}
                            <PlanSave>{fill(pricing.saveAmount, { amount: formatUsd(saving) })}</PlanSave>
                          </>
                        )}
                      </PlanBilled>
                    )}
                    <PlanDesc>{plan.description}</PlanDesc>
                    <PlanCta
                      href={isUnavailable ? undefined : `${APP_URL}${REGISTER_PATH}?${query}`}
                      muted={isUnavailable}
                      aria-disabled={isUnavailable}
                      onClick={(event) => {
                        if (isUnavailable) event.preventDefault();
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {isUnavailable ? "Not available" : plan.buttonText || "Get started"}
                    </PlanCta>
                    {keyLines.length > 0 && (
                      <PlanKeyList>
                        {keyLines.map((line) => (
                          <PlanKeyItem key={`${plan.name}-${line}`}>
                            <CheckCircle2 size={16} color="#2dd4bf" aria-hidden="true" />
                            <span>{withNumber(line)}</span>
                          </PlanKeyItem>
                        ))}
                      </PlanKeyList>
                    )}
                    {extras.length > 0 && previous && (
                      <PlanPlusTitle>{fill(pricing.plusTitle, { plan: previous.name })}</PlanPlusTitle>
                    )}
                    {extras.length > 0 && (
                      <PlanFeatureList>
                        {extras.map((feature) => (
                          <PlanFeatureItem key={`${plan.name}-${feature.name}`}>
                            <CheckCircle2 size={16} color="#2dd4bf" aria-hidden="true" />
                            <span>{feature.name}</span>
                          </PlanFeatureItem>
                        ))}
                      </PlanFeatureList>
                    )}
                  </PlanCard>
                );
              })}
            </PlanGrid>

            {pricing.creditsNote && <PricingNote>{pricing.creditsNote}</PricingNote>}

            {showCompare && (
              <CompareBlock>
                <CompareSummary>
                  <span>{pricing.compare?.title}</span>
                  <Plus size={18} aria-hidden="true" />
                </CompareSummary>
                <CompareScroll>
                  <CompareTable aria-label={pricing.compare?.label}>
                    <thead>
                      <tr>
                        <th scope="col">
                          <SrOnly>{pricing.compare?.featureHeading}</SrOnly>
                        </th>
                        {shownPlans.map((plan) => (
                          <th scope="col" key={plan.id || plan.name}>
                            {plan.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {compareRows.map((row) => (
                        <tr key={row.field}>
                          <th scope="row">{row.label}</th>
                          {shownPlans.map((plan) => {
                            const value = plan[row.field];
                            const yes = row.type === "yes" ? value === true : null;
                            const text = row.type === "yes" ? null : hasRow(plan, row.field) ? limitLine(row, value) : null;
                            return (
                              <td key={plan.id || plan.name}>
                                {yes === true && (
                                  <>
                                    <Check size={18} color="#2dd4bf" aria-hidden="true" />
                                    <SrOnly>{pricing.compare?.included}</SrOnly>
                                  </>
                                )}
                                {(yes === false || (row.type !== "yes" && !text)) && (
                                  <>
                                    <Minus size={18} aria-hidden="true" />
                                    <SrOnly>{pricing.compare?.notIncluded}</SrOnly>
                                  </>
                                )}
                                {text}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </CompareTable>
                </CompareScroll>
              </CompareBlock>
            )}
          </Container>
        </FlatSection>

        <FlatSection id="faq">
          <Container>
            <FaqBlock>
              <DisplayTitle>{content.faq?.title}</DisplayTitle>
              <FaqList>
                {(content.faq?.items || []).map(
                  (
                    item: { question: string; answer: string; link?: { label: string; url: string } },
                    idx: number,
                  ) => (
                    <FaqRow key={item.question} {...(idx === 0 ? { open: true } : {})}>
                      <FaqSummary>
                        <span>{item.question}</span>
                        <Plus size={20} aria-hidden />
                      </FaqSummary>
                      <FaqBody>
                        {item.answer}
                        {item.link && (
                          <>
                            {" "}
                            <a href={item.link.url} style={{ textDecoration: "underline" }}>
                              {item.link.label}
                            </a>
                          </>
                        )}
                      </FaqBody>
                    </FaqRow>
                  ),
                )}
              </FaqList>
            </FaqBlock>
          </Container>
        </FlatSection>

        <FlatSection id="cta">
          <Container>
            <ClosingInner>
              <ClosingTitle>
                {content.closing?.titleLine1}
                <ClosingAccent>{content.closing?.titleLine2}</ClosingAccent>
              </ClosingTitle>
              <ClosingLead>{content.closing?.subtitle}</ClosingLead>
              <ClosingActions>
                <BtnPrimary
                  href={buildAuthUrl(REGISTER_PATH, { placement: "bottom-cta" })}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.closing?.cta || "Start building"}
                  <ArrowRight size={16} />
                </BtnPrimary>
                <BtnSecondary
                  href={buildAuthUrl(LOGIN_PATH, { placement: "bottom-cta" })}
                  target="_blank"
                  rel="noreferrer"
                >
                  Sign in
                </BtnSecondary>
              </ClosingActions>
            </ClosingInner>
          </Container>
        </FlatSection>
      </BelowStack>
    </Page>
  );
};

export default Home;
