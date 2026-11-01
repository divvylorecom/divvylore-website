import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";
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
  PlanGrid,
  PlanCard,
  PlanBadge,
  PlanName,
  PlanPrice,
  PlanAmount,
  PlanCycle,
  PlanDesc,
  PlanCredits,
  PlanCta,
  PlanFeatureList,
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
  isActive?: boolean;
  isVisible?: boolean | null;
  displayOrder?: number;
  isCustomPricing?: boolean;
};

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
        if (normalized.length > 0) setPlans(normalized);
      } catch {
        // Keep the fallback plans silently.
      }
    };
    loadPlans();
    return () => controller.abort();
  }, []);

  const activePlans = useMemo(() => plans.filter((plan) => plan.name), [plans]);
  const cycleLabel = cycle === "monthly" ? "/month" : "/year";
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
              </BillingToggleBtn>
            </BillingToggle>

            <PlanGrid>
              {activePlans.map((plan) => {
                const isUnavailable = plan.isActive === false || plan.isVisible === false;
                const planPrice = cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
                const credits = cycle === "monthly" ? plan.monthlyCredits : plan.yearlyCredits;
                const bonus = cycle === "yearly" ? plan.yearlyBonusCredits || 0 : 0;
                const planFeatures = (plan.features || [])
                  .filter((feature) => feature.isIncluded)
                  .sort((a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999));
                const query = new URLSearchParams({
                  source,
                  product: PRODUCT,
                  placement: "pricing",
                  plan: plan.code || plan.id,
                  billing: cycle,
                }).toString();

                return (
                  <PlanCard key={plan.id || plan.name} featured={!!plan.isPopular} muted={isUnavailable}>
                    {plan.isPopular && !isUnavailable && <PlanBadge>Most popular</PlanBadge>}
                    {isUnavailable && <PlanBadge>Unavailable</PlanBadge>}
                    <PlanName>{plan.name}</PlanName>
                    <PlanPrice>
                      {plan.isCustomPricing ? (
                        <PlanAmount>Custom</PlanAmount>
                      ) : (
                        <>
                          <PlanAmount>{formatUsd(planPrice)}</PlanAmount>
                          <PlanCycle>{cycleLabel}</PlanCycle>
                        </>
                      )}
                    </PlanPrice>
                    <PlanDesc>{plan.description}</PlanDesc>
                    {credits > 0 && (
                      <PlanCredits>
                        {credits.toLocaleString()} credits / {cycle === "monthly" ? "mo" : "yr"}
                        {bonus > 0 ? ` · +${bonus.toLocaleString()} bonus` : ""}
                      </PlanCredits>
                    )}
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
                    <PlanFeatureList>
                      {planFeatures.map((feature) => (
                        <PlanFeatureItem key={`${plan.name}-${feature.name}`}>
                          <CheckCircle2 size={16} color="#2dd4bf" />
                          <span>{feature.name}</span>
                        </PlanFeatureItem>
                      ))}
                    </PlanFeatureList>
                  </PlanCard>
                );
              })}
            </PlanGrid>
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
