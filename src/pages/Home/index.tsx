import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  Bot,
  CheckCircle,
  Globe,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
} from 'lucide-react'
import siteContent from '../../content/SiteContent.json'
import {
  CTAButton,
  Card,
  CardDescription,
  CardIcon,
  CardTitle,
  FeatureList,
  HeroActions,
  HeroBadge,
  HeroDescription,
  HeroHeading,
  HeroStat,
  HeroStatLabel,
  HeroStatValue,
  HeroStats,
  HeroSupport,
  HeroSupportItem,
  HomepageContainer,
  PricingCard,
  PricingCTA,
  PricingCards,
  PricingCurrency,
  PricingCycle,
  PricingFeature,
  PricingHeader,
  PricingPrice,
  PricingSubtext,
  Section,
  SectionCaption,
  SectionHeader,
  SectionLead,
  SectionTitle,
  ThreeColumnGrid,
  TwoColumnGrid,
  BillingToggle,
  BillingToggleButton,
} from './styles'

type BillingCycle = 'monthly' | 'yearly'

type PlanFeatureResponse = {
  name: string
  description?: string
  isIncluded: boolean
  isHighlighted?: boolean
  displayOrder?: number
}

type PricingPlanResponse = {
  id: string
  name: string
  description?: string
  code?: string
  monthlyPrice: number
  yearlyPrice: number
  monthlyCredits: number
  yearlyCredits: number
  yearlyBonusCredits?: number
  features?: PlanFeatureResponse[]
  buttonText?: string
  badgeText?: string
  isPopular?: boolean
  isActive?: boolean
  isVisible?: boolean | null
  displayOrder?: number
  isCustomPricing?: boolean
}

const APP_URL = 'https://app.divvylore.com'
const PRICING_API_BASE = (import.meta.env.VITE_PORTAL_API_BASE || APP_URL).replace(/\/$/, '')
const REGISTER_PATH = '/register'
const LOGIN_PATH = '/login'

const formatUsd = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount)

const toNumber = (value: unknown): number => {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

const Home = () => {
  const content = siteContent as any
  const [cycle, setCycle] = useState<BillingCycle>('monthly')
  const [plans, setPlans] = useState<PricingPlanResponse[]>([])
  const [isPlansLoading, setIsPlansLoading] = useState(true)
  const [plansError, setPlansError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const loadPlans = async () => {
      setIsPlansLoading(true)
      setPlansError(null)

      try {
        const response = await fetch(`${PRICING_API_BASE}/account/tenant/plans`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Pricing API returned ${response.status}`)
        }

        const data = (await response.json()) as PricingPlanResponse[]
        if (!Array.isArray(data)) {
          throw new Error('Pricing API response is not a plan list')
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
          .sort((a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999))

        setPlans(normalized)
      } catch (error) {
        if ((error as Error).name === 'AbortError') {
          return
        }

        setPlansError('Unable to load live pricing right now.')
      } finally {
        setIsPlansLoading(false)
      }
    }

    loadPlans()

    return () => {
      controller.abort()
    }
  }, [])

  const activePlans = useMemo(() => plans.filter((plan) => plan.name), [plans])

  const cycleLabel = cycle === 'monthly' ? '/month' : '/year'
  const source = typeof window !== 'undefined' ? window.location.hostname : 'divvylore.com'
  const heroPills = (content.hero?.supportPills || []) as string[]
  const heroStats = [
    { value: '24/7', label: 'always-on support' },
    { value: '<2m', label: 'median response time' },
    { value: '99.9%', label: 'platform reliability target' },
  ]

  const buildAuthUrl = (path: string, params?: Record<string, string>) => {
    const query = new URLSearchParams({ source, ...(params || {}) }).toString()
    return `${APP_URL}${path}?${query}`
  }

  return (
    <HomepageContainer>
      <Section id="hero" className="hero-section">
        <SectionCaption>AI agents that close revenue</SectionCaption>
        <HeroBadge>
          <Sparkles size={14} />
          {content.hero?.eyebrow || 'Conversational AI for customer support'}
        </HeroBadge>
        <HeroHeading>{content.hero?.title}</HeroHeading>
        <HeroDescription>{content.hero?.description}</HeroDescription>

        <HeroActions>
          <CTAButton href={buildAuthUrl(REGISTER_PATH, { placement: 'hero' })} className="primary" target="_blank" rel="noreferrer">
            Start free trial
            <ArrowRight size={16} />
          </CTAButton>
          <CTAButton href="#pricing" className="ghost">
            View plans
          </CTAButton>
        </HeroActions>

        <HeroSupport>
          {heroPills.map((item: string) => (
            <HeroSupportItem key={item}>
              <CheckCircle size={16} /> {item}
            </HeroSupportItem>
          ))}
        </HeroSupport>

        <HeroStats>
          {heroStats.map((stat) => (
            <HeroStat key={stat.label}>
              <HeroStatValue>{stat.value}</HeroStatValue>
              <HeroStatLabel>{stat.label}</HeroStatLabel>
            </HeroStat>
          ))}
        </HeroStats>
      </Section>

      <Section id="highlights">
        <SectionHeader>
          <SectionCaption>Product</SectionCaption>
          <SectionTitle>{content.highlights?.title}</SectionTitle>
          <SectionLead>{content.highlights?.subtitle}</SectionLead>
        </SectionHeader>
        <ThreeColumnGrid>
          {(content.highlights?.cards || []).map((item: { title: string; description: string }) => (
            <Card key={item.title}>
              <CardIcon>
                <Star size={18} />
              </CardIcon>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          ))}
        </ThreeColumnGrid>
      </Section>

      <Section id="how-it-works">
        <SectionHeader>
          <SectionCaption>How it works</SectionCaption>
          <SectionTitle>{content.howItWorks?.title}</SectionTitle>
          <SectionLead>Configure your workflows, connect your data, and automate resolutions with smart handoff.</SectionLead>
        </SectionHeader>
        <ThreeColumnGrid>
          {(content.howItWorks?.steps || []).map((step: { title: string; description: string }, idx: number) => (
            <Card key={step.title}>
              <CardIcon>
                {idx === 0 && <Globe size={18} />}
                {idx === 1 && <Workflow size={18} />}
                {idx === 2 && <MessageSquare size={18} />}
                {idx > 2 && <Workflow size={18} />}
              </CardIcon>
              <CardTitle>{step.title}</CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </Card>
          ))}
        </ThreeColumnGrid>
      </Section>

      <Section id="features">
        <SectionHeader>
          <SectionCaption>Capabilities</SectionCaption>
          <SectionTitle>{content.features?.title}</SectionTitle>
          <SectionLead>Everything you need to launch and scale production AI support journeys.</SectionLead>
        </SectionHeader>
        <TwoColumnGrid>
          {(content.features?.items || []).map((feature: { title: string; description: string }) => (
            <Card key={feature.title}>
              <CardIcon>
                <Bot size={18} />
              </CardIcon>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
              <FeatureList>
                {[feature.description].filter(Boolean).map((bullet: string) => (
                  <li key={`${feature.title}-${bullet}`}>
                    <CheckCircle size={15} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </FeatureList>
            </Card>
          ))}
        </TwoColumnGrid>
      </Section>

      <Section id="security">
        <SectionHeader>
          <SectionCaption>Security</SectionCaption>
          <SectionTitle>{content.security?.title}</SectionTitle>
          <SectionLead>Built with tenant isolation, secure transport, and safe response controls.</SectionLead>
        </SectionHeader>
        <ThreeColumnGrid>
          {(content.security?.items || []).map((item: { title: string; description: string }) => (
            <Card key={item.title}>
              <CardIcon>
                <ShieldCheck size={18} />
              </CardIcon>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          ))}
        </ThreeColumnGrid>
      </Section>

      <Section id="pricing">
        <SectionHeader>
          <SectionCaption>Pricing</SectionCaption>
          <SectionTitle>{content.pricing?.title}</SectionTitle>
          <SectionLead>{content.pricing?.subtitle}</SectionLead>
        </SectionHeader>

        <BillingToggle role="tablist" aria-label="Billing cycle toggle">
          <BillingToggleButton
            type="button"
            className={cycle === 'monthly' ? 'active' : ''}
            onClick={() => setCycle('monthly')}
          >
            Monthly
          </BillingToggleButton>
          <BillingToggleButton
            type="button"
            className={cycle === 'yearly' ? 'active' : ''}
            onClick={() => setCycle('yearly')}
          >
            Yearly
          </BillingToggleButton>
        </BillingToggle>

        {isPlansLoading && <PricingSubtext>Loading live plans...</PricingSubtext>}
        {!isPlansLoading && plansError && <PricingSubtext>{plansError}</PricingSubtext>}

        <PricingCards>
          {activePlans.map((plan) => {
            const isUnavailable = plan.isActive === false || plan.isVisible === false
            const planPrice = cycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice
            const credits = cycle === 'monthly' ? plan.monthlyCredits : plan.yearlyCredits
            const bonusCredits = cycle === 'yearly' ? plan.yearlyBonusCredits || 0 : 0
            const planFeatures = (plan.features || [])
              .filter((feature) => feature.isIncluded)
              .sort((a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999))

            const query = new URLSearchParams({
              source,
              placement: 'pricing',
              plan: plan.code || plan.id,
              billing: cycle,
            }).toString()

            return (
              <PricingCard
                key={plan.id || plan.name}
                className={`${plan.isPopular ? 'popular' : ''} ${isUnavailable ? 'unavailable' : ''}`.trim()}
              >
                <PricingHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  {isUnavailable ? <HeroBadge>Unavailable</HeroBadge> : plan.badgeText && <HeroBadge>{plan.badgeText}</HeroBadge>}
                </PricingHeader>

                <PricingPrice>
                  {plan.isCustomPricing ? (
                    <span>Custom</span>
                  ) : (
                    <>
                      <PricingCurrency>{formatUsd(planPrice)}</PricingCurrency>
                      <PricingCycle>{cycleLabel}</PricingCycle>
                    </>
                  )}
                </PricingPrice>

                <PricingSubtext className="description">{plan.description}</PricingSubtext>
                <PricingSubtext className="credits">
                  {credits.toLocaleString()} credits per {cycle === 'monthly' ? 'month' : 'year'}
                  {bonusCredits > 0 ? ` + ${bonusCredits.toLocaleString()} bonus` : ''}
                </PricingSubtext>

                <PricingCTA
                  href={isUnavailable ? undefined : `${APP_URL}${REGISTER_PATH}?${query}`}
                  className={isUnavailable ? 'disabled' : ''}
                  aria-disabled={isUnavailable}
                  onClick={(event) => {
                    if (isUnavailable) {
                      event.preventDefault()
                    }
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  {isUnavailable ? 'Not available' : plan.buttonText || 'Start now'}
                </PricingCTA>

                <ul>
                  {planFeatures.map((feature) => (
                    <PricingFeature key={`${plan.name}-${feature.name}`}>
                      <CheckCircle size={16} />
                      <span>{feature.name}</span>
                    </PricingFeature>
                  ))}
                </ul>
              </PricingCard>
            )
          })}
        </PricingCards>
      </Section>

      <Section id="faq">
        <SectionHeader>
          <SectionCaption>FAQ</SectionCaption>
          <SectionTitle>{content.faq?.title}</SectionTitle>
          <SectionLead>Answers to common questions before you launch your first agent.</SectionLead>
        </SectionHeader>
        <TwoColumnGrid>
          {(content.faq?.items || []).map((item: { question: string; answer: string }) => (
            <Card key={item.question}>
              <CardTitle>{item.question}</CardTitle>
              <CardDescription>{item.answer}</CardDescription>
            </Card>
          ))}
        </TwoColumnGrid>
      </Section>

      <Section id="cta" className="cta-section">
        <SectionTitle>Launch your AI support agent in minutes</SectionTitle>
        <SectionLead>Start your free trial and move customer conversations from backlog to resolution.</SectionLead>
        <HeroActions>
          <CTAButton href={buildAuthUrl(REGISTER_PATH, { placement: 'bottom-cta' })} className="primary" target="_blank" rel="noreferrer">
            Start free trial
            <ArrowRight size={16} />
          </CTAButton>
          <CTAButton href={buildAuthUrl(LOGIN_PATH, { placement: 'bottom-cta' })} className="ghost" target="_blank" rel="noreferrer">
            Login
          </CTAButton>
        </HeroActions>
      </Section>
    </HomepageContainer>
  )
}

export default Home
