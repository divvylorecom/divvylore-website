import styled from 'styled-components'

export const HomepageContainer = styled.main`
  background:
    radial-gradient(circle at 10% -20%, rgba(196, 232, 255, 0.4), transparent 42%),
    radial-gradient(circle at 92% 0%, rgba(255, 239, 203, 0.5), transparent 48%),
    #ffffff;
  color: #11222f;
`

export const Section = styled.section`
  max-width: 1160px;
  margin: 0 auto;
  padding: 84px 24px;

  &.hero-section {
    padding-top: 120px;
    text-align: center;
  }

  &.cta-section {
    text-align: center;
    padding-bottom: 108px;
  }

  @media (max-width: 768px) {
    padding: 64px 20px;

    &.hero-section {
      padding-top: 96px;
    }
  }
`

export const SectionHeader = styled.div`
  max-width: 760px;
  margin-bottom: 34px;
`

export const SectionCaption = styled.p`
  margin: 0;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.78rem;
  color: #1e6ca5;
`

export const SectionTitle = styled.h2`
  margin: 10px 0 12px;
  font-size: clamp(1.9rem, 2.4vw, 2.8rem);
  line-height: 1.14;
  color: #0f2030;
`

export const SectionLead = styled.p`
  margin: 0;
  font-size: 1.06rem;
  color: #4a5f70;
  line-height: 1.65;
`

export const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  border: 1px solid #d6e8f7;
  background: #f5fbff;
  color: #185f91;
  font-size: 0.84rem;
  font-weight: 700;
  padding: 8px 16px;
`

export const HeroHeading = styled.h1`
  margin: 18px auto 14px;
  max-width: 900px;
  font-size: clamp(2.4rem, 5vw, 4.3rem);
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: #0b1824;
`

export const HeroDescription = styled.p`
  margin: 0 auto;
  max-width: 780px;
  font-size: clamp(1rem, 1.7vw, 1.24rem);
  line-height: 1.72;
  color: #4f6272;
`

export const HeroActions = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
`

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 14px;
  padding: 12px 22px;
  border: 1px solid transparent;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.2s ease;

  &.primary {
    background: linear-gradient(135deg, #1166a2, #0b4f80);
    color: #ffffff;
    box-shadow: 0 10px 26px rgba(15, 89, 141, 0.24);
  }

  &.primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 32px rgba(12, 76, 122, 0.3);
  }

  &.ghost {
    border-color: #c9dced;
    color: #12314a;
    background: #ffffff;
  }

  &.ghost:hover {
    border-color: #97b7d1;
    background: #f4f9fd;
  }
`

export const HeroSupport = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
`

export const HeroSupportItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.92rem;
  color: #496173;
`

export const HeroStats = styled.div`
  margin-top: 34px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const HeroStat = styled.div`
  border: 1px solid #d8e7f4;
  background: linear-gradient(165deg, #ffffff, #f6fbff);
  border-radius: 18px;
  padding: 18px;
`

export const HeroStatValue = styled.div`
  font-size: 1.35rem;
  font-weight: 800;
  color: #0c2b43;
`

export const HeroStatLabel = styled.div`
  font-size: 0.9rem;
  margin-top: 6px;
  color: #5c7182;
`

export const ThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.article`
  border: 1px solid #dbe9f4;
  border-radius: 20px;
  background: linear-gradient(165deg, #ffffff, #f8fcff);
  padding: 22px;
`

export const CardIcon = styled.div`
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #135e94;
  background: #e7f3fc;
  border-radius: 10px;
`

export const CardTitle = styled.h3`
  margin: 14px 0 8px;
  font-size: 1.1rem;
  color: #11283b;
`

export const CardDescription = styled.p`
  margin: 0;
  color: #516576;
  line-height: 1.62;
`

export const FeatureList = styled.ul`
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;

  li {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    color: #2d4a61;
    font-size: 0.95rem;
  }
`

export const ArtifactImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid #d8e8f4;
  margin-bottom: 12px;
`

export const ArtifactImageFallback = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  border: 1px dashed #bbd3e6;
  background: #f5fafe;
  color: #4f6a7f;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;
`

export const ArtifactTitle = styled.h4`
  margin: 0;
  color: #16344a;
  font-size: 1rem;
`

export const PricingCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export const BillingToggle = styled.div`
  display: inline-flex;
  border: 1px solid #cfe1ee;
  border-radius: 999px;
  padding: 4px;
  background: #f2f8fc;
  margin-bottom: 20px;
`

export const BillingToggleButton = styled.button`
  border: none;
  background: transparent;
  color: #2c4a60;
  border-radius: 999px;
  padding: 8px 16px;
  font-weight: 700;
  cursor: pointer;

  &.active {
    background: #ffffff;
    color: #10314a;
    box-shadow: 0 3px 10px rgba(17, 53, 80, 0.12);
  }
`

export const PricingCard = styled.article`
  border: 1px solid #d8e7f3;
  border-radius: 20px;
  padding: 22px;
  background: #ffffff;

  &.popular {
    border-color: #5ca3d8;
    box-shadow: 0 14px 34px rgba(17, 96, 151, 0.16);
  }

  &.unavailable {
    opacity: 0.78;
    border-style: dashed;
  }

  ul {
    list-style: none;
    margin: 14px 0 0;
    padding: 0;
    display: grid;
    gap: 8px;
  }
`

export const PricingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

export const PricingPrice = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: baseline;
  gap: 6px;
  color: #0c2235;
`

export const PricingCurrency = styled.span`
  font-size: 2rem;
  font-weight: 800;
`

export const PricingCycle = styled.span`
  color: #607788;
`

export const PricingSubtext = styled.p`
  margin: 9px 0 0;
  color: #5a6f7f;
  line-height: 1.52;

  &.description {
    min-height: 72px;
  }

  &.credits {
    min-height: 56px;
  }
`

export const PricingCTA = styled.a`
  margin-top: 14px;
  display: inline-flex;
  width: 100%;
  justify-content: center;
  border-radius: 12px;
  background: #0f5e96;
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  padding: 11px 14px;

  &.disabled {
    background: #9eb4c6;
    cursor: not-allowed;
    pointer-events: auto;
  }
`

export const PricingFeature = styled.li`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  color: #2f4c61;
  font-size: 0.93rem;
`
