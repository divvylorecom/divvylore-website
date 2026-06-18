import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
  Zap,
} from "lucide-react";
import siteContent from "../../content/SiteContent.json";
import {
  Page,
  Container,
  Hero,
  HeroEyebrowRow,
  HeroEyebrowPill,
  HeroTitle,
  HeroTitleAccent,
  HeroLead,
  HeroActions,
  BtnPrimary,
  BtnSecondary,
  HeroVisualWrap,
  HeroVisualInner,
  HeroChatPanel,
  HeroChatToolbar,
  HeroChatAvatar,
  HeroChatIdentity,
  HeroChatName,
  HeroChatStatus,
  HeroChatBubble,
  HeroChatTyping,
  HeroSidePanel,
  HeroSideHeading,
  HeroSideTitle,
  HeroSideTag,
  HeroStat,
  HeroStatValue,
  HeroStatLabel,
  TrustStrip,
  TrustLabel,
  MarqueeWindow,
  MarqueeTrack,
  MarqueeItem,
  Section,
  SectionEyebrow,
  SectionTitle,
  SectionLead,
  CardsRow,
  TwoCol,
  SoftCard,
  CardIcon,
  CardTitle,
  CardText,
  SplitSection,
  StatsBand,
  StatsGrid,
  StatTile,
  StatTileValue,
  StatTileLabel,
  QuoteBand,
  QuoteCard,
  QuoteText,
  QuoteAttribution,
  PricingBand,
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
  Timeline,
  TimelineItem,
  TimelineBadge,
  TimelineContent,
  TimelineTitle,
  TimelineText,
  FaqList,
  FaqRow,
  FaqSummary,
  FaqBody,
  ClosingCta,
  ClosingCard,
  ClosingTitle,
  ClosingLead,
  ClosingActions,
  ClosingPrimaryCta,
  ClosingGhostCta,
} from "./styles";

type BillingCycle = "monthly" | "yearly";

type PlanFeatureResponse = {
  name: string;
  description?: string;
  isIncluded: boolean;
  isHighlighted?: boolean;
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
  badgeText?: string;
  isPopular?: boolean;
  isActive?: boolean;
  isVisible?: boolean | null;
  displayOrder?: number;
  isCustomPricing?: boolean;
};

const APP_URL = "https://app.divvylore.com";
const PRICING_API_BASE = (import.meta.env.VITE_PORTAL_API_BASE || APP_URL).replace(/\/$/, "");
const REGISTER_PATH = "/register";
const LOGIN_PATH = "/login";

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

const trustLogoLabels = [
  "ENTERPRISE",
  "SUPPORT TEAMS",
  "FINTECH",
  "SAAS",
  "HEALTHCARE",
  "MARKETPLACES",
  "RETAIL",
  "EDUCATION",
];

const heroStats = [
  { value: "24/7", label: "Always-on coverage" },
  { value: "<2m", label: "Median first response" },
  { value: "99.9%", label: "Platform reliability target" },
];

const closingStats = [
  { value: "90%", label: "Faster resolutions on common tickets" },
  { value: "60%", label: "Reduction in repeat contacts" },
  { value: "10x", label: "Throughput vs. linear staffing" },
  { value: "Days", label: "From kickoff to first deployment" },
];

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
  const fallbackPlans = useMemo(() => buildFallbackPlans(content), [content]);
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const [plans, setPlans] = useState<PricingPlanResponse[]>(fallbackPlans);
  const [isPlansLoading, setIsPlansLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadPlans = async () => {
      setIsPlansLoading(true);

      try {
        const response = await fetch(`${PRICING_API_BASE}/account/tenant/plans`, {
          method: "GET",
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Pricing API returned ${response.status}`);
        }

        const data = (await response.json()) as PricingPlanResponse[];
        if (!Array.isArray(data)) {
          throw new Error("Pricing API response is not a plan list");
        }

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
        }
      } catch (error) {
        if ((error as Error).name === "AbortError") {
          return;
        }
      } finally {
        setIsPlansLoading(false);
      }
    };

    loadPlans();

    return () => controller.abort();
  }, []);

  const activePlans = useMemo(() => plans.filter((plan) => plan.name), [plans]);
  const cycleLabel = cycle === "monthly" ? "/month" : "/year";
  const source = typeof window !== "undefined" ? window.location.hostname : "divvylore.com";

  const buildAuthUrl = (path: string, params?: Record<string, string>) => {
    const query = new URLSearchParams({ source, ...(params || {}) }).toString();
    return `${APP_URL}${path}?${query}`;
  };

  const marqueeItems = [...trustLogoLabels, ...trustLogoLabels];

  return (
    <Page>
      <Hero>
        <Container>
          <HeroEyebrowRow>
            <HeroEyebrowPill>New</HeroEyebrowPill>
            Conversational AI for customer support
          </HeroEyebrowRow>

          <HeroTitle>
            Support agents that resolve issues and{" "}
            <HeroTitleAccent>keep customers moving.</HeroTitleAccent>
          </HeroTitle>

          <HeroLead>{content.hero?.description}</HeroLead>

          <HeroActions>
            <BtnPrimary
              href={buildAuthUrl(REGISTER_PATH, { placement: "hero" })}
              target="_blank"
              rel="noreferrer"
            >
              Get started
              <ArrowRight size={16} />
            </BtnPrimary>
            <BtnSecondary href="#pricing">View pricing</BtnSecondary>
          </HeroActions>

          <HeroVisualWrap>
            <HeroVisualInner>
              <HeroChatPanel>
                <HeroChatToolbar>
                  <HeroChatAvatar>D</HeroChatAvatar>
                  <HeroChatIdentity>
                    <HeroChatName>Divvylore Agent</HeroChatName>
                    <HeroChatStatus>Online · responds in &lt; 2s</HeroChatStatus>
                  </HeroChatIdentity>
                </HeroChatToolbar>
                <HeroChatBubble side="in">
                  Hi, I can&rsquo;t access my dashboard after the billing update.
                </HeroChatBubble>
                <HeroChatBubble side="out">
                  Got it. I&rsquo;ve verified your account and re-issued access. You should be back
                  in under a minute.
                </HeroChatBubble>
                <HeroChatBubble side="in">Perfect &mdash; works now. Thanks!</HeroChatBubble>
                <HeroChatTyping aria-hidden>
                  <span /> <span /> <span />
                </HeroChatTyping>
              </HeroChatPanel>

              <HeroSidePanel>
                <HeroSideHeading>
                  <HeroSideTitle>Live metrics</HeroSideTitle>
                  <HeroSideTag>Today</HeroSideTag>
                </HeroSideHeading>
                {heroStats.map((stat) => (
                  <HeroStat key={stat.label}>
                    <HeroStatValue>{stat.value}</HeroStatValue>
                    <HeroStatLabel>{stat.label}</HeroStatLabel>
                  </HeroStat>
                ))}
              </HeroSidePanel>
            </HeroVisualInner>
          </HeroVisualWrap>
        </Container>

        <Container>
          <TrustStrip>
            <TrustLabel>Built for customer-facing teams across</TrustLabel>
            <MarqueeWindow>
              <MarqueeTrack>
                {marqueeItems.map((label, idx) => (
                  <MarqueeItem key={`${label}-${idx}`}>{label}</MarqueeItem>
                ))}
              </MarqueeTrack>
            </MarqueeWindow>
          </TrustStrip>
        </Container>
      </Hero>

      <Section id="highlights">
        <Container>
          <SectionEyebrow>
            <Sparkles size={14} /> Platform
          </SectionEyebrow>
          <SectionTitle>{content.highlights?.title}</SectionTitle>
          <SectionLead>{content.highlights?.subtitle}</SectionLead>
          <CardsRow>
            {(content.highlights?.cards || []).map(
              (item: { title: string; description: string }) => (
                <SoftCard key={item.title}>
                  <CardIcon>
                    <Star size={18} />
                  </CardIcon>
                  <CardTitle>{item.title}</CardTitle>
                  <CardText>{item.description}</CardText>
                </SoftCard>
              ),
            )}
          </CardsRow>
        </Container>
      </Section>

      <SplitSection id="how-it-works">
        <Container>
          <SectionEyebrow>
            <Workflow size={14} /> How it works
          </SectionEyebrow>
          <SectionTitle>{content.howItWorks?.title}</SectionTitle>
          <SectionLead>
            Configure your workflows, connect business context, and let agents resolve common
            requests with smart escalation when needed.
          </SectionLead>
          <Timeline>
            {(content.howItWorks?.steps || []).map(
              (step: { title: string; description: string }, idx: number) => (
                <TimelineItem key={step.title}>
                  <TimelineBadge>{String(idx + 1).padStart(2, "0")}</TimelineBadge>
                  <TimelineContent>
                    <TimelineTitle>{step.title}</TimelineTitle>
                    <TimelineText>{step.description}</TimelineText>
                  </TimelineContent>
                </TimelineItem>
              ),
            )}
          </Timeline>
        </Container>
      </SplitSection>

      <Section id="features">
        <Container>
          <SectionEyebrow>
            <Bot size={14} /> Capabilities
          </SectionEyebrow>
          <SectionTitle>{content.features?.title}</SectionTitle>
          <SectionLead>
            Everything you need to launch and scale production AI support, from configuration to
            analytics and escalation.
          </SectionLead>
          <TwoCol>
            {(content.features?.items || []).map(
              (feature: { title: string; description: string }) => (
                <SoftCard key={feature.title}>
                  <CardIcon>
                    <Zap size={18} />
                  </CardIcon>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardText>{feature.description}</CardText>
                </SoftCard>
              ),
            )}
          </TwoCol>
        </Container>
      </Section>

      <Section id="security">
        <Container>
          <SectionEyebrow>
            <ShieldCheck size={14} /> Security
          </SectionEyebrow>
          <SectionTitle>{content.security?.title}</SectionTitle>
          <SectionLead>
            Built with tenant isolation, secure transport, and response guardrails so customer-facing
            agents stay safe and predictable.
          </SectionLead>
          <CardsRow>
            {(content.security?.items || []).map(
              (item: { title: string; description: string }) => (
                <SoftCard key={item.title}>
                  <CardIcon>
                    <ShieldCheck size={18} />
                  </CardIcon>
                  <CardTitle>{item.title}</CardTitle>
                  <CardText>{item.description}</CardText>
                </SoftCard>
              ),
            )}
          </CardsRow>
        </Container>
      </Section>

      <StatsBand id="stats">
        <Container>
          <SectionEyebrow>
            <Sparkles size={14} /> Outcomes
          </SectionEyebrow>
          <SectionTitle>Results customers see in production</SectionTitle>
          <SectionLead>
            Modern AI support that ships in days, not quarters, and earns its place in your team.
          </SectionLead>
          <StatsGrid style={{ marginTop: "2.4rem" }}>
            {closingStats.map((stat) => (
              <StatTile key={stat.label}>
                <StatTileValue>{stat.value}</StatTileValue>
                <StatTileLabel>{stat.label}</StatTileLabel>
              </StatTile>
            ))}
          </StatsGrid>
        </Container>
      </StatsBand>

      <QuoteBand id="story">
        <Container>
          <QuoteCard>
            <QuoteText>
              &ldquo;Divvylore lets us launch production-grade support agents quickly, keep humans
              in the loop, and resolve customer issues without losing brand voice.&rdquo;
            </QuoteText>
            <QuoteAttribution>— Customer success leader, SaaS support team</QuoteAttribution>
          </QuoteCard>
        </Container>
      </QuoteBand>

      <PricingBand id="pricing">
        <Container>
          <SectionEyebrow>
            <Star size={14} /> Pricing
          </SectionEyebrow>
          <SectionTitle>{content.pricing?.title}</SectionTitle>
          <SectionLead>{content.pricing?.subtitle}</SectionLead>

          <BillingToggle role="tablist" aria-label="Billing cycle">
            <BillingToggleBtn
              type="button"
              className={cycle === "monthly" ? "active" : ""}
              onClick={() => setCycle("monthly")}
            >
              Monthly
            </BillingToggleBtn>
            <BillingToggleBtn
              type="button"
              className={cycle === "yearly" ? "active" : ""}
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
                placement: "pricing",
                plan: plan.code || plan.id,
                billing: cycle,
              }).toString();

              return (
                <PlanCard
                  key={plan.id || plan.name}
                  featured={!!plan.isPopular}
                  muted={isUnavailable}
                >
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

                  <PlanCredits>
                    {credits.toLocaleString()} credits / {cycle === "monthly" ? "mo" : "yr"}
                    {bonus > 0 ? ` · +${bonus.toLocaleString()} bonus` : ""}
                  </PlanCredits>

                  <PlanCta
                    href={isUnavailable ? undefined : `${APP_URL}${REGISTER_PATH}?${query}`}
                    muted={isUnavailable}
                    aria-disabled={isUnavailable}
                    onClick={(event) => {
                      if (isUnavailable) {
                        event.preventDefault();
                      }
                    }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {isUnavailable ? "Not available" : plan.buttonText || "Get started"}
                  </PlanCta>

                  <PlanFeatureList>
                    {planFeatures.map((feature) => (
                      <PlanFeatureItem key={`${plan.name}-${feature.name}`}>
                        <CheckCircle2 size={16} color="#1f3df0" />
                        <span>{feature.name}</span>
                      </PlanFeatureItem>
                    ))}
                  </PlanFeatureList>
                </PlanCard>
              );
            })}
          </PlanGrid>
        </Container>
      </PricingBand>

      <Section id="faq">
        <Container>
          <SectionEyebrow>FAQ</SectionEyebrow>
          <SectionTitle>{content.faq?.title}</SectionTitle>
          <SectionLead>Answers to common questions before you launch your first agent.</SectionLead>
          <FaqList>
            {(content.faq?.items || []).map(
              (item: { question: string; answer: string }, idx: number) => (
                <FaqRow key={item.question} {...(idx === 0 ? { open: true } : {})}>
                  <FaqSummary>
                    <span>{item.question}</span>
                    <Plus size={20} aria-hidden />
                  </FaqSummary>
                  <FaqBody>{item.answer}</FaqBody>
                </FaqRow>
              ),
            )}
          </FaqList>
        </Container>
      </Section>

      <ClosingCta id="cta">
        <Container>
          <ClosingCard>
            <ClosingTitle>Launch your AI support agent in days.</ClosingTitle>
            <ClosingLead>
              Move customer conversations from backlog to resolution with a production-ready agent
              platform.
            </ClosingLead>
            <ClosingActions>
              <ClosingPrimaryCta
                href={buildAuthUrl(REGISTER_PATH, { placement: "bottom-cta" })}
                target="_blank"
                rel="noreferrer"
              >
                Get started
                <ArrowRight size={16} />
              </ClosingPrimaryCta>
              <ClosingGhostCta
                href={buildAuthUrl(LOGIN_PATH, { placement: "bottom-cta" })}
                target="_blank"
                rel="noreferrer"
              >
                Sign in
              </ClosingGhostCta>
            </ClosingActions>
          </ClosingCard>
        </Container>
      </ClosingCta>
    </Page>
  );
};

export default Home;
