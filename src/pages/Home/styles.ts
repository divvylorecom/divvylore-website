import styled from "styled-components";

export const Page = styled.main`
  color: var(--text-primary);

  /* Per-section palette  AI-website inspired, brand-aligned */

  #highlights {
    background:
      radial-gradient(circle at 8% 14%, rgba(91, 60, 228, 0.12), transparent 42%),
      radial-gradient(circle at 92% 90%, rgba(31, 61, 240, 0.1), transparent 38%),
      linear-gradient(180deg, #f1eefe 0%, #f6f4ff 100%);
  }

  #how-it-works {
    background:
      radial-gradient(circle at 90% 10%, rgba(127, 232, 201, 0.22), transparent 45%),
      radial-gradient(circle at 8% 95%, rgba(31, 61, 240, 0.08), transparent 40%),
      linear-gradient(180deg, #eaf6ee 0%, #f0f8f1 100%);
  }

  #features {
    background:
      radial-gradient(circle at 12% 16%, rgba(255, 170, 105, 0.22), transparent 42%),
      radial-gradient(circle at 92% 88%, rgba(255, 122, 89, 0.14), transparent 38%),
      linear-gradient(180deg, #fdefe1 0%, #fff5ec 100%);
  }

  #security {
    background:
      radial-gradient(circle at 10% 12%, rgba(31, 61, 240, 0.18), transparent 42%),
      radial-gradient(circle at 88% 90%, rgba(91, 60, 228, 0.14), transparent 40%),
      linear-gradient(180deg, #e8f1ff 0%, #eef4ff 100%);
  }

  #stats {
    background:
      radial-gradient(circle at 10% 14%, rgba(31, 61, 240, 0.14), transparent 40%),
      radial-gradient(circle at 92% 92%, rgba(91, 60, 228, 0.14), transparent 40%),
      linear-gradient(180deg, #f3f6ff 0%, #ecf1fb 100%);
  }

  #story {
    background:
      radial-gradient(circle at 16% 18%, rgba(255, 170, 105, 0.18), transparent 38%),
      radial-gradient(circle at 86% 86%, rgba(91, 60, 228, 0.22), transparent 40%),
      linear-gradient(180deg, #1a0f3d 0%, #0a0a24 100%);
  }

  #pricing {
    background:
      radial-gradient(circle at 88% 16%, rgba(255, 170, 105, 0.18), transparent 40%),
      radial-gradient(circle at 10% 92%, rgba(31, 61, 240, 0.1), transparent 38%),
      linear-gradient(180deg, #f7f1e1 0%, #faf6ea 100%);
  }

  #faq {
    background:
      radial-gradient(circle at 14% 14%, rgba(255, 140, 170, 0.18), transparent 42%),
      radial-gradient(circle at 90% 90%, rgba(91, 60, 228, 0.12), transparent 40%),
      linear-gradient(180deg, #fcefef 0%, #fff4f4 100%);
  }
`;

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.4rem;

  @media (max-width: 700px) {
    padding: 0 1rem;
  }
`;

export const Hero = styled.section`
  position: relative;
  padding: clamp(3rem, 9vw, 6rem) 0 clamp(3rem, 8vw, 5rem);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 16% 20%, rgba(31, 61, 240, 0.16), transparent 38%),
      radial-gradient(circle at 84% 8%, rgba(255, 170, 105, 0.18), transparent 42%),
      radial-gradient(circle at 50% 110%, rgba(31, 61, 240, 0.12), transparent 48%);
    pointer-events: none;
  }

  > * {
    position: relative;
  }
`;

export const HeroEyebrowRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.34rem 0.7rem 0.34rem 0.42rem;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
  background: rgba(255, 255, 255, 0.7);
  color: var(--text-primary);
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1.4rem;
  animation: rise 0.5s ease both;
`;

export const HeroEyebrowPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.16rem 0.5rem;
  border-radius: 999px;
  background: var(--bg-ink);
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(2.4rem, 6.8vw, 4.6rem);
  line-height: 1.04;
  letter-spacing: -0.02em;
  max-width: 980px;
  font-weight: 600;
  animation: rise 0.55s ease both;
`;

export const HeroTitleAccent = styled.span`
  background: linear-gradient(120deg, #1f3df0 0%, #5b3ce4 55%, #ec6f3a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const HeroLead = styled.p`
  margin: 1.3rem 0 0;
  max-width: 700px;
  font-size: clamp(1.05rem, 2.2vw, 1.25rem);
  line-height: 1.6;
  color: var(--text-secondary);
  animation: rise 0.6s ease 0.04s both;
`;

export const HeroActions = styled.div`
  margin-top: 1.7rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  animation: rise 0.6s ease 0.08s both;
`;

export const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-height: 46px;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  font-size: 0.98rem;
  font-weight: 600;
  color: #ffffff;
  background: var(--bg-ink);
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: #14192a;
  }
`;

export const BtnSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-height: 46px;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid var(--line-strong);
  transition: background 0.15s ease, transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.9);
  }
`;

export const HeroVisualWrap = styled.div`
  margin-top: clamp(2.5rem, 6vw, 4rem);
  border-radius: 28px;
  border: 1px solid var(--line-strong);
  background: linear-gradient(160deg, #ffffff 0%, #f2eee2 100%);
  padding: clamp(0.85rem, 2.4vw, 1.4rem);
  box-shadow:
    0 30px 60px -28px rgba(20, 30, 70, 0.22),
    0 8px 18px -10px rgba(20, 30, 70, 0.12);
  animation: rise 0.7s ease 0.12s both;
`;

export const HeroVisualInner = styled.div`
  border-radius: 20px;
  background: #0a0d14;
  color: #d6dff5;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.35fr 1fr;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroChatPanel = styled.div`
  padding: 1.1rem 1.2rem 1.3rem;
  display: grid;
  gap: 0.7rem;
  align-content: start;
  border-right: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 820px) {
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
`;

export const HeroChatToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding-bottom: 0.7rem;
  margin-bottom: 0.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const HeroChatAvatar = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1f3df0, #5b3ce4);
  color: #ffffff;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.86rem;
`;

export const HeroChatIdentity = styled.div`
  display: grid;
  gap: 0.1rem;
`;

export const HeroChatName = styled.strong`
  font-size: 0.88rem;
  color: #ffffff;
  font-weight: 600;
`;

export const HeroChatStatus = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.74rem;
  color: #7fe8c9;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 700;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: #7fe8c9;
    box-shadow: 0 0 0 4px rgba(127, 232, 201, 0.18);
  }
`;

export const HeroChatBubble = styled.div<{ side?: "in" | "out" }>`
  align-self: ${(p) => (p.side === "out" ? "flex-end" : "flex-start")};
  max-width: 90%;
  padding: 0.7rem 0.9rem;
  border-radius: 14px;
  font-size: 0.92rem;
  line-height: 1.5;
  background: ${(p) =>
    p.side === "out"
      ? "linear-gradient(135deg, #1f3df0, #1a31bc)"
      : "rgba(255, 255, 255, 0.06)"};
  color: ${(p) => (p.side === "out" ? "#ffffff" : "#cfd9f1")};
  border: 1px solid ${(p) => (p.side === "out" ? "transparent" : "rgba(255,255,255,0.07)")};
`;

export const HeroChatTyping = styled.div`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.55rem 0.75rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.06);

  span {
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: #9aa8c8;
    opacity: 0.4;
    animation: typing 1.2s ease-in-out infinite;
  }

  span:nth-child(2) {
    animation-delay: 0.15s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes typing {
    0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
    30% { opacity: 1; transform: translateY(-2px); }
  }
`;

export const HeroChatMeta = styled.span`
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #6f7da0;
`;

export const HeroSidePanel = styled.div`
  padding: 1.1rem 1.2rem 1.3rem;
  display: grid;
  gap: 0.85rem;
  align-content: start;
`;

export const HeroSideHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-bottom: 0.7rem;
  margin-bottom: 0.1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const HeroSideTitle = styled.strong`
  font-size: 0.88rem;
  color: #ffffff;
  font-weight: 600;
`;

export const HeroSideTag = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #7fe8c9;
  font-weight: 700;
`;

export const HeroStat = styled.div`
  display: grid;
  gap: 0.18rem;
  padding: 0.55rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const HeroStatValue = styled.strong`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.5rem, 3.6vw, 1.95rem);
  color: #ffffff;
  letter-spacing: -0.01em;
  line-height: 1.1;
`;

export const HeroStatLabel = styled.span`
  font-size: 0.78rem;
  color: #8f9bbb;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`;

export const TrustStrip = styled.section`
  padding: 1.5rem 0 3rem;
  border-top: 1px solid var(--line);
  margin-top: 2rem;
`;

export const TrustLabel = styled.p`
  margin: 0 0 1rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 600;
`;

export const MarqueeWindow = styled.div`
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
`;

export const MarqueeTrack = styled.div`
  display: flex;
  gap: 3rem;
  width: max-content;
  animation: marquee 28s linear infinite;
`;

export const MarqueeItem = styled.span`
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 1.2rem;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.7);
  color: var(--text-primary);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  letter-spacing: 0.04em;
  white-space: nowrap;
`;

export const Section = styled.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
`;

export const SectionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.28rem 0.66rem;
  border-radius: 999px;
  background: rgba(31, 61, 240, 0.08);
  color: var(--brand-strong);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin: 0.85rem 0 0;
  font-size: clamp(1.75rem, 4.4vw, 2.85rem);
  line-height: 1.1;
  letter-spacing: -0.018em;
  max-width: 820px;
  font-weight: 600;
`;

export const SectionLead = styled.p`
  margin: 0.85rem 0 0;
  max-width: 720px;
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.65;
  color: var(--text-secondary);
`;

export const CardsRow = styled.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const TwoCol = styled.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const SoftCard = styled.article`
  padding: 1.4rem;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.85);
  display: grid;
  gap: 0.6rem;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--line-strong);
    box-shadow: 0 18px 30px -22px rgba(20, 30, 70, 0.2);
  }
`;

export const CardIcon = styled.span`
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: rgba(31, 61, 240, 0.1);
  color: var(--brand-strong);
`;

export const CardTitle = styled.h3`
  margin: 0.2rem 0 0;
  font-size: 1.12rem;
  font-weight: 600;
`;

export const CardText = styled.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.98rem;
  line-height: 1.6;
`;

export const SplitSection = styled.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
`;

export const SplitGrid = styled.div<{ reverse?: boolean }>`
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: center;

  ${(p) =>
    p.reverse &&
    `
    & > *:first-child {
      order: 2;
    }
  `}

  @media (max-width: 920px) {
    grid-template-columns: 1fr;

    & > *:first-child,
    & > *:last-child {
      order: initial;
    }
  }
`;

export const SplitVisual = styled.div`
  border-radius: 24px;
  border: 1px solid var(--line-strong);
  background: linear-gradient(160deg, #ffffff, #efeadc);
  padding: clamp(1rem, 3vw, 1.8rem);
  min-height: 280px;
  display: grid;
  gap: 0.8rem;
  align-content: center;
  box-shadow: 0 22px 40px -28px rgba(20, 30, 70, 0.2);
`;

export const SplitVisualRow = styled.div<{ tone?: "primary" | "soft" | "outline" }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1rem;
  border-radius: 14px;
  background: ${(p) =>
    p.tone === "primary"
      ? "linear-gradient(135deg, #1f3df0, #1a31bc)"
      : p.tone === "soft"
      ? "rgba(31, 61, 240, 0.08)"
      : "rgba(255, 255, 255, 0.92)"};
  border: 1px solid ${(p) => (p.tone === "primary" ? "transparent" : "var(--line)")};
  color: ${(p) => (p.tone === "primary" ? "#ffffff" : "var(--text-primary)")};
  font-weight: 500;
  font-size: 0.95rem;
`;

export const StatsBand = styled.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const StatTile = styled.div`
  padding: 1.5rem;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 14px 28px -22px rgba(20, 30, 70, 0.15);
`;

export const StatTileValue = styled.strong`
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4.6vw, 2.6rem);
  letter-spacing: -0.02em;
  color: var(--text-primary);
`;

export const StatTileLabel = styled.span`
  display: block;
  margin-top: 0.4rem;
  color: var(--text-muted);
  font-size: 0.95rem;
`;

export const QuoteBand = styled.section`
  padding: clamp(3rem, 7vw, 6rem) 0;
`;

export const QuoteCard = styled.blockquote`
  margin: 0;
  padding: clamp(2rem, 5vw, 3.5rem);
  border-radius: 24px;
  background: var(--bg-ink);
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 86% 12%, rgba(255, 170, 105, 0.22), transparent 35%),
      radial-gradient(circle at 8% 86%, rgba(31, 61, 240, 0.32), transparent 38%);
    pointer-events: none;
  }

  > * {
    position: relative;
  }
`;

export const QuoteText = styled.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.35rem, 3.4vw, 2rem);
  line-height: 1.32;
  color: #ffffff;
  letter-spacing: -0.012em;
`;

export const QuoteAttribution = styled.div`
  margin-top: 1.4rem;
  font-size: 0.92rem;
  color: #b9c4dd;
`;

export const PricingBand = styled.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
`;

export const BillingToggle = styled.div`
  margin-top: 1.6rem;
  display: inline-flex;
  padding: 0.25rem;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
  background: rgba(255, 255, 255, 0.85);
  gap: 0.2rem;
`;

export const BillingToggleBtn = styled.button`
  border: 0;
  border-radius: 999px;
  padding: 0.45rem 1.05rem;
  background: transparent;
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.92rem;
  cursor: pointer;
  transition: color 0.15s ease, background 0.15s ease;

  &.active {
    color: #ffffff;
    background: var(--bg-ink);
  }
`;

export const PlanGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  align-items: stretch;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const PlanCard = styled.article<{ featured?: boolean; muted?: boolean }>`
  position: relative;
  padding: 1.3rem 1.2rem;
  border-radius: 20px;
  border: 1px solid ${(p) => (p.featured ? "rgba(31, 61, 240, 0.45)" : "var(--line)")};
  background: ${(p) =>
    p.featured ? "linear-gradient(180deg, #ffffff, #eef1ff)" : "rgba(255, 255, 255, 0.85)"};
  display: grid;
  gap: 0.7rem;
  opacity: ${(p) => (p.muted ? 0.65 : 1)};
  box-shadow: ${(p) =>
    p.featured ? "0 22px 40px -22px rgba(31, 61, 240, 0.35)" : "none"};
  min-width: 0;
`;

export const PlanBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.22rem 0.6rem;
  border-radius: 999px;
  background: var(--bg-ink);
  color: #ffffff;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
`;

export const PlanName = styled.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
`;

export const PlanPrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
`;

export const PlanAmount = styled.strong`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.8rem, 3.6vw, 2.3rem);
  letter-spacing: -0.02em;
  color: var(--text-primary);
`;

export const PlanCycle = styled.span`
  color: var(--text-muted);
  font-size: 0.95rem;
`;

export const PlanDesc = styled.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: 0.92rem;
  min-height: 42px;
`;

export const PlanCredits = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.9rem;
  color: var(--text-primary);
  padding: 0.32rem 0.6rem;
  border-radius: 999px;
  background: rgba(31, 61, 240, 0.08);
  width: fit-content;
`;

export const PlanCta = styled.a<{ muted?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  font-weight: 600;
  background: ${(p) => (p.muted ? "rgba(14, 22, 45, 0.08)" : "var(--bg-ink)")};
  color: ${(p) => (p.muted ? "var(--text-muted)" : "#ffffff")};
  pointer-events: ${(p) => (p.muted ? "none" : "auto")};

  &:hover {
    background: ${(p) => (p.muted ? "rgba(14, 22, 45, 0.08)" : "#14192a")};
  }
`;

export const PlanFeatureList = styled.ul`
  margin: 0.3rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
`;

export const PlanFeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--text-primary);
  font-size: 0.9rem;
  line-height: 1.45;
`;

export const FaqGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const FaqItem = styled.div`
  padding: 1.2rem 1.3rem;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.85);
`;

export const FaqQuestion = styled.h3`
  margin: 0 0 0.4rem;
  font-size: 1.05rem;
  font-weight: 600;
`;

export const FaqAnswer = styled.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
`;

export const ClosingCta = styled.section`
  padding: clamp(3rem, 7vw, 5.5rem) 0;
  border-top: 1px solid var(--line);
`;

export const ClosingCard = styled.div`
  padding: clamp(2rem, 5vw, 3.5rem);
  border-radius: 24px;
  background:
    radial-gradient(circle at 90% -10%, rgba(255, 170, 105, 0.4), transparent 38%),
    radial-gradient(circle at 0% 110%, rgba(31, 61, 240, 0.5), transparent 38%),
    var(--bg-ink);
  color: #ffffff;
  display: grid;
  gap: 1rem;
  text-align: center;
  justify-items: center;
`;

export const ClosingTitle = styled.h2`
  margin: 0;
  font-size: clamp(1.8rem, 4.6vw, 2.8rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #ffffff;
  max-width: 720px;
`;

export const ClosingLead = styled.p`
  margin: 0;
  color: #c9d1e3;
  max-width: 620px;
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.6;
`;

export const ClosingActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  justify-content: center;
`;

export const ClosingPrimaryCta = styled(BtnPrimary)`
  background: #ffffff;
  color: var(--text-primary);

  &:hover {
    background: #f1f1f1;
  }
`;

export const ClosingGhostCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  color: #ffffff;
  font-weight: 600;
  background: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const Timeline = styled.ol`
  list-style: none;
  margin: 2.4rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.9rem;
  counter-reset: step;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 23px;
    top: 14px;
    bottom: 14px;
    width: 2px;
    background: linear-gradient(180deg, var(--brand), transparent);
    opacity: 0.25;
    pointer-events: none;

    @media (max-width: 640px) {
      left: 19px;
    }
  }
`;

export const TimelineItem = styled.li`
  counter-increment: step;
  position: relative;
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 1rem;
  padding: 1rem 1.2rem 1rem 0.4rem;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.85);
  align-items: start;
  transition: border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: var(--line-strong);
    transform: translateY(-1px);
    box-shadow: 0 14px 24px -18px rgba(20, 30, 70, 0.18);
  }

  @media (max-width: 640px) {
    grid-template-columns: 40px 1fr;
    padding: 0.85rem 1rem 0.85rem 0.3rem;
  }
`;

export const TimelineBadge = styled.span`
  width: 36px;
  height: 36px;
  margin-left: 6px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-ink);
  color: #ffffff;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.85);
`;

export const TimelineContent = styled.div`
  display: grid;
  gap: 0.3rem;
`;

export const TimelineTitle = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
`;

export const TimelineText = styled.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.55;
`;

export const FaqList = styled.div`
  margin-top: 2.2rem;
  display: grid;
  gap: 0.65rem;
  max-width: 880px;
`;

export const FaqRow = styled.details`
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.92);
  padding: 0;
  overflow: hidden;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &[open] {
    border-color: rgba(31, 61, 240, 0.32);
    box-shadow: 0 14px 30px -22px rgba(20, 30, 70, 0.18);
  }

  &[open] summary svg {
    transform: rotate(45deg);
    color: var(--brand-strong);
  }
`;

export const FaqSummary = styled.summary`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.05rem 1.25rem;
  cursor: pointer;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.02rem;
  color: var(--text-primary);
  user-select: none;

  &::-webkit-details-marker {
    display: none;
  }

  svg {
    flex-shrink: 0;
    transition: transform 0.18s ease, color 0.18s ease;
    color: var(--text-muted);
  }
`;

export const FaqBody = styled.div`
  padding: 0 1.25rem 1.1rem;
  color: var(--text-secondary);
  line-height: 1.65;
  font-size: 0.97rem;
`;

