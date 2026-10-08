import styled, { css } from "styled-components";

export const Page = styled.main`
  position: relative;
  color: var(--text-primary);
  padding-bottom: 2rem;
  background:
    radial-gradient(ellipse 58% 38% at 8% 0%, rgba(99, 102, 241, 0.28), transparent 58%),
    radial-gradient(ellipse 48% 34% at 94% 4%, rgba(168, 85, 247, 0.24), transparent 55%),
    radial-gradient(ellipse 42% 30% at 78% 68%, rgba(244, 114, 182, 0.14), transparent 52%),
    radial-gradient(ellipse 44% 32% at 12% 88%, rgba(45, 212, 191, 0.14), transparent 55%),
    linear-gradient(180deg, #14182e 0%, #0a0b16 48%, #070814 100%);
  overflow: clip;
`;

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;

  @media (max-width: 700px) {
    padding: 0 1.15rem;
  }
`;

export const Hero = styled.section`
  position: relative;
  padding: clamp(2.5rem, 6vw, 4rem) 1.5rem clamp(3rem, 7vw, 5rem);
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 700px) {
    padding-left: 1.15rem;
    padding-right: 1.15rem;
  }
`;

export const CardStack = styled.div`
  display: grid;
  gap: 0;
  /* Keep in step with StackCard margin-bottom (was 30vh — left a dead gap). */
  padding: 0 0.85rem 1.25rem;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 700px) {
    padding: 0 0.55rem 0.85rem;
  }

  @media (prefers-reduced-motion: reduce) {
    padding-bottom: 1rem;
  }
`;

const glassPanel = css`
  background: var(--glass-bg);
  backdrop-filter: blur(20px) saturate(145%);
  -webkit-backdrop-filter: blur(20px) saturate(145%);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: var(--shadow-card);
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(167, 139, 250, 0.22) 28%,
      rgba(255, 255, 255, 0.03) 55%,
      rgba(45, 212, 191, 0.16) 100%
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 0;
  }
`;

const glowBackground = (glow?: "indigo" | "violet" | "teal" | "rose" | "none") => {
  switch (glow) {
    case "violet":
      return `radial-gradient(ellipse 48% 40% at 96% 0%, var(--glow-violet), transparent 68%),
        radial-gradient(ellipse 40% 36% at 4% 100%, var(--glow-blue), transparent 66%),
        radial-gradient(ellipse 36% 30% at 80% 70%, rgba(168, 85, 247, 0.18), transparent 70%)`;
    case "teal":
      return `radial-gradient(ellipse 48% 40% at 96% 0%, var(--glow-teal), transparent 68%),
        radial-gradient(ellipse 40% 36% at 4% 100%, var(--glow-indigo), transparent 66%),
        radial-gradient(ellipse 34% 28% at 75% 65%, rgba(45, 212, 191, 0.16), transparent 70%)`;
    case "rose":
      return `radial-gradient(ellipse 48% 40% at 96% 0%, var(--glow-rose), transparent 68%),
        radial-gradient(ellipse 40% 36% at 4% 100%, var(--glow-violet), transparent 66%),
        radial-gradient(ellipse 34% 28% at 78% 68%, rgba(244, 114, 182, 0.14), transparent 70%)`;
    case "none":
      return `radial-gradient(ellipse 42% 32% at 100% 0%, rgba(255,255,255,0.08), transparent 68%),
        radial-gradient(ellipse 36% 30% at 0% 100%, rgba(99, 102, 241, 0.14), transparent 66%)`;
    default:
      return `radial-gradient(ellipse 48% 40% at 96% 0%, var(--glow-indigo), transparent 68%),
        radial-gradient(ellipse 40% 36% at 4% 100%, var(--glow-violet), transparent 66%),
        radial-gradient(ellipse 34% 28% at 78% 68%, rgba(99, 102, 241, 0.16), transparent 70%)`;
  }
};

const glassTint = (glow?: "indigo" | "violet" | "teal" | "rose" | "none") => {
  switch (glow) {
    case "violet":
      return "rgba(88, 40, 140, 0.22)";
    case "teal":
      return "rgba(20, 90, 96, 0.2)";
    case "rose":
      return "rgba(120, 40, 90, 0.18)";
    case "none":
      return "rgba(30, 36, 70, 0.12)";
    default:
      return "rgba(40, 48, 120, 0.2)";
  }
};

export const StackCard = styled.section<{
  $index: number;
  $glow?: "indigo" | "violet" | "teal" | "rose" | "none";
}>`
  position: sticky;
  top: var(--header-offset);
  z-index: ${(p) => 10 + p.$index};
  min-height: calc(100vh - var(--header-offset) - 1.25rem);
  margin-bottom: 1.25rem;
  border-radius: var(--radius-card);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(2rem, 5vw, 3.5rem) 0;
  transform-origin: center top;
  ${glassPanel};
  background:
    /* Soft reading veil — keeps type clear while edges glow */
    radial-gradient(ellipse 72% 68% at 42% 42%, rgba(8, 10, 22, 0.72), transparent 72%),
    linear-gradient(165deg, ${(p) => glassTint(p.$glow)}, transparent 55%),
    var(--glass-bg);

  @supports (animation-timeline: view()) {
    animation: stack-exit linear both;
    animation-timeline: view();
    animation-range: exit -20% exit 40%;
  }

  /* Electric edge wash — vibrant, fades before the copy column */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: 0.95;
    mix-blend-mode: screen;
    animation: liquid-shift 16s ease-in-out infinite;
    background: ${(p) => glowBackground(p.$glow)};
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 700px) {
    min-height: calc(100vh - var(--header-offset) - 0.75rem);
    border-radius: 28px;
    margin-bottom: 0.85rem;
    padding: 1.6rem 0;
  }

  @media (prefers-reduced-motion: reduce) {
    position: relative;
    top: auto;
    min-height: auto;
    margin-bottom: 1rem;

    &::before {
      animation: none;
    }
  }
`;

/* One continuous wash under pricing → FAQ → closing CTA (no per-section seams). */
export const BelowStack = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(
    180deg,
    #070814 0%,
    #0e0f22 18%,
    #1a1440 38%,
    #4f46e5 58%,
    #7c3aed 74%,
    #a855f7 88%,
    #f472b6 100%
  );
`;

export const FlatSection = styled.section`
  position: relative;
  width: 100%;
  margin: 0;
  padding: clamp(2.75rem, 6vw, 4.5rem) 1.5rem;
  background: transparent;

  @media (max-width: 700px) {
    padding: 2.25rem 1.15rem;
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(1.5rem, 4vw, 2.8rem);
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCopy = styled.div`
  display: grid;
  gap: 1.15rem;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(2.4rem, 5.8vw, 4rem);
  line-height: 1.08;
  font-weight: 700;
  /* -0.05em collapsed "rn" in "Turn" into an "m"-like shape */
  letter-spacing: -0.02em;
  max-width: 13ch;
  color: #ffffff;
  font-kerning: normal;
  font-feature-settings: "kern" 1;
`;

export const HeroTitleAccent = styled.span`
  display: block;
  margin-top: 0.12em;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.92);
`;

export const HeroLead = styled.p`
  margin: 0;
  max-width: 34rem;
  font-size: clamp(1.02rem, 2vw, 1.15rem);
  line-height: 1.65;
  color: rgba(240, 243, 255, 0.9);
  font-weight: 500;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

const btnBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-height: 48px;
  padding: 0.7rem 1.25rem;
  border-radius: 999px;
  font-size: 0.98rem;
  font-weight: 700;
  transition: transform 0.18s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, filter 0.18s ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const BtnPrimary = styled.a`
  ${btnBase};
  color: #ffffff;
  background: var(--cta-gradient);
  border: 1px solid rgba(255, 255, 255, 0.28);
  box-shadow: var(--cta-glow);

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.06);
    box-shadow: var(--cta-glow-hover);
  }
`;

export const BtnSecondary = styled.a`
  ${btnBase};
  color: #ffffff;
  background: transparent;
  border: 1px solid var(--line-strong);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.35);
    background: rgba(255, 255, 255, 0.04);
  }
`;

export const HeroVisual = styled.div`
  position: relative;
  min-height: 400px;
  border-radius: 32px;
  overflow: hidden;
  padding: 1.1rem;
  background:
    radial-gradient(circle at 30% 20%, rgba(167, 139, 250, 0.5), transparent 34%),
    radial-gradient(circle at 70% 70%, rgba(99, 102, 241, 0.38), transparent 40%),
    radial-gradient(circle at 40% 80%, rgba(45, 212, 191, 0.22), transparent 42%),
    linear-gradient(160deg, rgba(28, 32, 64, 0.78), rgba(10, 12, 28, 0.92));
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow:
    0 30px 60px -30px rgba(0, 0, 0, 0.65),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(10px);

  > * {
    position: relative;
    z-index: 2;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    inset: 12% 28%;
    border-radius: 40% 45% 48% 42%;
    background:
      linear-gradient(160deg, rgba(255, 255, 255, 0.55), transparent 35%),
      radial-gradient(circle at 40% 30%, rgba(196, 181, 253, 0.9), transparent 45%),
      radial-gradient(circle at 60% 70%, rgba(99, 102, 241, 0.8), transparent 50%),
      linear-gradient(180deg, rgba(139, 92, 246, 0.4), rgba(45, 212, 191, 0.22));
    filter: blur(1px);
    box-shadow:
      inset 0 0 40px rgba(255, 255, 255, 0.15),
      0 0 60px rgba(139, 92, 246, 0.3);
    animation: liquid-shift 10s ease-in-out infinite;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      125deg,
      rgba(255, 255, 255, 0.28) 0%,
      transparent 28%,
      transparent 70%,
      rgba(255, 255, 255, 0.06) 100%
    );
    pointer-events: none;
  }

  @media (max-width: 960px) {
    min-height: 340px;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`;

export const CanvasNode = styled.div<{ $x: number; $y: number; $accent?: boolean }>`
  position: absolute;
  left: ${(p) => p.$x}%;
  top: ${(p) => p.$y}%;
  transform: translate(-50%, -50%);
  min-width: 124px;
  padding: 0.7rem 0.85rem;
  border-radius: 14px;
  background: ${(p) => (p.$accent ? "var(--accent)" : "rgba(255, 255, 255, 0.96)")};
  color: ${(p) => (p.$accent ? "#ffffff" : "#101010")};
  box-shadow: 0 16px 36px -18px rgba(0, 0, 0, 0.65);
  font-size: 0.8rem;
  font-weight: 700;
  display: grid;
  gap: 0.15rem;

  span {
    font-size: 0.68rem;
    font-weight: 600;
    opacity: 0.7;
  }
`;

export const CanvasLine = styled.div`
  position: absolute;
  inset: 18% 16%;
  border: 1.5px dashed rgba(255, 255, 255, 0.16);
  border-radius: 40% 60% 55% 45%;
  pointer-events: none;
`;

export const ChatPreview = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: min(100% - 2rem, 240px);
  border-radius: 16px;
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.65);
`;

export const ChatHead = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 0.8rem;
  background: #101010;
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 700;
`;

export const ChatDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
`;

export const ChatBody = styled.div`
  padding: 0.7rem;
  display: grid;
  gap: 0.4rem;
`;

export const Bubble = styled.div<{ $out?: boolean }>`
  justify-self: ${(p) => (p.$out ? "end" : "start")};
  max-width: 92%;
  padding: 0.5rem 0.65rem;
  border-radius: 12px;
  font-size: 0.76rem;
  line-height: 1.4;
  background: ${(p) => (p.$out ? "var(--accent)" : "#f1efeb")};
  color: ${(p) => (p.$out ? "#ffffff" : "#101010")};
`;

export const AudienceIntro = styled.p`
  margin: 0 0 1.1rem;
  color: var(--text-secondary);
  font-size: 1.02rem;
`;

export const RoleTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.25rem;
`;

export const RoleTab = styled.button<{ $active?: boolean }>`
  border: 0;
  border-radius: 999px;
  min-height: 38px;
  padding: 0.45rem 0.95rem;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  background: ${(p) => (p.$active ? "#ffffff" : "rgba(255,255,255,0.06)")};
  color: ${(p) => (p.$active ? "#101010" : "rgba(245,245,247,0.75)")};
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const RoleOutcome = styled.div`
  min-height: 3.4rem;
`;

export const RoleLabel = styled.strong`
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #ffffff;
`;

export const RoleAction = styled.span`
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.35rem, 3vw, 1.9rem);
  color: rgba(245, 245, 247, 0.5);
`;

export const RoleResult = styled.span`
  font-size: clamp(1.2rem, 2.6vw, 1.7rem);
  font-weight: 650;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

export const ProofGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const ProofCard = styled.article`
  padding: 1.35rem;
  border-radius: var(--radius-md);
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.08),
    rgba(20, 24, 48, 0.55)
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
  display: grid;
  gap: 0.5rem;
`;

export const ProofTitle = styled.h3`
  margin: 0;
  font-size: 1.12rem;
  font-weight: 700;
  color: #ffffff;
`;

export const ProofBody = styled.p`
  margin: 0;
  font-size: 0.96rem;
  color: rgba(236, 240, 255, 0.88);
  font-weight: 500;
`;

export const Eyebrow = styled.span`
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.7rem;
`;

export const DisplayTitle = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4.8vw, 3.4rem);
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -0.045em;
  color: #ffffff;
  max-width: 16ch;
`;

export const DisplayAccent = styled.span`
  display: block;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.03em;
`;

export const SectionLead = styled.p`
  margin: 1rem 0 0;
  max-width: 40rem;
  font-size: clamp(1.02rem, 2vw, 1.12rem);
  color: rgba(240, 243, 255, 0.9);
  font-weight: 500;
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1.8rem;
`;

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  font-weight: 650;
  color: rgba(245, 245, 247, 0.88);
`;

export const BlockGrid = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(1.4rem, 4vw, 2.8rem);
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const PointList = styled.ul`
  list-style: none;
  margin: 1.3rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem 1.2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const PointItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: 0.98rem;
  color: rgba(240, 243, 255, 0.9);
  line-height: 1.45;
  font-weight: 500;
`;

export const MockPanel = styled.div`
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #16161a;
  padding: 1.2rem;
  min-height: 260px;
  display: grid;
  gap: 0.7rem;
  align-content: start;
`;

export const MockRow = styled.div<{ $tone?: "accent" | "soft" | "ink" }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1rem;
  border-radius: 14px;
  font-weight: 650;
  font-size: 0.92rem;
  background: ${(p) =>
    p.$tone === "accent"
      ? "var(--accent)"
      : p.$tone === "ink"
      ? "#0d0d10"
      : "rgba(255,255,255,0.06)"};
  color: #ffffff;
`;

export const ControlGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const ControlCard = styled.article`
  padding: 1.35rem;
  border-radius: var(--radius-md);
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.08),
    rgba(20, 24, 48, 0.55)
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
  display: grid;
  gap: 0.5rem;
`;

export const ControlTitle = styled.h3`
  margin: 0;
  color: #ffffff;
  font-size: 1.08rem;
  font-weight: 700;
`;

export const ControlText = styled.p`
  margin: 0;
  color: rgba(236, 240, 255, 0.88);
  font-size: 0.95rem;
  font-weight: 500;
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.9rem;
  margin-top: 2rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const StepCard = styled.article`
  padding: 1.25rem;
  border-radius: var(--radius-md);
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.08),
    rgba(20, 24, 48, 0.55)
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
  display: grid;
  gap: 0.65rem;
`;

export const StepIndex = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #101010;
  font-weight: 800;
`;

export const StepTitle = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
`;

export const StepText = styled.p`
  margin: 0;
  font-size: 0.93rem;
  color: rgba(236, 240, 255, 0.88);
  font-weight: 500;
`;

export const StoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.8rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const StoryCard = styled.article`
  padding: 1.5rem;
  border-radius: var(--radius-md);
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.08),
    rgba(20, 24, 48, 0.55)
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
  display: grid;
  gap: 0.9rem;
`;

export const StoryHeadline = styled.h3`
  margin: 0;
  font-size: clamp(1.25rem, 2.6vw, 1.55rem);
  font-weight: 700;
  color: #ffffff;
`;

export const StoryMetric = styled.span`
  display: block;
  margin-top: 0.2rem;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.1rem;
  color: rgba(245, 245, 247, 0.5);
`;

export const StoryQuote = styled.p`
  margin: 0;
  font-size: 1rem;
  color: rgba(236, 240, 255, 0.88);
  font-weight: 500;
`;

export const StoryRole = styled.span`
  font-size: 0.88rem;
  font-weight: 700;
  color: rgba(245, 245, 247, 0.5);
`;

export const EnterpriseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const EnterpriseCard = styled.article`
  padding: 1.35rem;
  border-radius: var(--radius-md);
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.08),
    rgba(20, 24, 48, 0.55)
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
  display: grid;
  gap: 0.45rem;
`;

export const BillingToggle = styled.div`
  margin: 1.4rem 0 0;
  display: inline-flex;
  padding: 0.28rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  gap: 0.2rem;
`;

export const BillingToggleBtn = styled.button`
  border: 0;
  border-radius: 999px;
  padding: 0.5rem 1.05rem;
  background: transparent;
  color: rgba(245, 245, 247, 0.65);
  font-weight: 700;
  font-size: 0.92rem;
  cursor: pointer;

  &.active {
    color: #101010;
    background: #ffffff;
  }
`;

export const PlanGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.35rem;
  align-items: stretch;

  @media (max-width: 1100px) {
    gap: 1.1rem;
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const PlanCard = styled.article<{ featured?: boolean; muted?: boolean }>`
  position: relative;
  padding: 1.5rem 1.3rem 1.35rem;
  border-radius: var(--radius-md);
  border: 1px solid ${(p) => (p.featured ? "rgba(139, 92, 246, 0.55)" : "rgba(255,255,255,0.1)")};
  background: ${(p) =>
    p.featured
      ? "linear-gradient(180deg, rgba(139,92,246,0.14), rgba(45,212,191,0.05))"
      : "rgba(255,255,255,0.03)"};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
  opacity: ${(p) => (p.muted ? 0.65 : 1)};
`;

export const PlanBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.28rem 0.6rem;
  border-radius: 999px;
  background: var(--accent);
  color: #ffffff;
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 800;
`;

export const PlanName = styled.h3`
  margin: 0;
  padding-right: 5.5rem;
  font-size: 1.12rem;
  font-weight: 700;
  color: #ffffff;
  min-height: 1.4em;
`;

export const PlanPrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  min-height: 2.6rem;
`;

export const PlanAmount = styled.strong`
  font-size: clamp(1.75rem, 2.8vw, 2.25rem);
  letter-spacing: -0.04em;
  font-weight: 750;
  color: #ffffff;
`;

export const PlanCycle = styled.span`
  color: var(--text-muted);
  font-size: 0.95rem;
`;

export const PlanDesc = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.45;
  min-height: 2.9em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const PlanCredits = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 0.88rem;
  padding: 0.32rem 0.65rem;
  border-radius: 999px;
  background: var(--accent-soft);
  width: fit-content;
  font-weight: 650;
  color: #ddd6fe;
  min-height: 1.85rem;
`;

export const PlanCta = styled.a<{ muted?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  font-weight: 750;
  background: ${(p) => (p.muted ? "rgba(255,255,255,0.08)" : "#ffffff")};
  color: ${(p) => (p.muted ? "var(--text-muted)" : "#101010")};
  pointer-events: ${(p) => (p.muted ? "none" : "auto")};

  &:hover {
    filter: ${(p) => (p.muted ? "none" : "brightness(0.95)")};
  }
`;

export const PlanFeatureList = styled.ul`
  margin: 0.15rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
  align-content: start;
`;

export const PlanFeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.45;
  color: var(--text-secondary);
`;

export const FaqBlock = styled.div`
  max-width: 760px;
  margin: 0 auto;
  text-align: center;

  ${DisplayTitle} {
    max-width: none;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FaqList = styled.div`
  display: grid;
  gap: 0.7rem;
  margin-top: 1.6rem;
  text-align: left;
`;

export const FaqRow = styled.details`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  overflow: hidden;

  &[open] {
    border-color: rgba(139, 92, 246, 0.45);
  }

  &[open] summary svg {
    transform: rotate(45deg);
    color: var(--accent-2);
  }
`;

export const FaqSummary = styled.summary`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.02rem;
  color: #ffffff;
  user-select: none;

  &::-webkit-details-marker {
    display: none;
  }

  svg {
    flex-shrink: 0;
    transition: transform 0.2s ease, color 0.2s ease;
    color: var(--text-muted);
  }
`;

export const FaqBody = styled.div`
  padding: 0 1.25rem 1.15rem;
  color: var(--text-secondary);
  line-height: 1.65;
  font-size: 0.97rem;
`;

export const ClosingInner = styled.div`
  text-align: center;
  display: grid;
  gap: 1rem;
  justify-items: center;
`;

export const ClosingTitle = styled.h2`
  margin: 0;
  max-width: 14ch;
  font-size: clamp(2.1rem, 5vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.045em;
  color: #ffffff;
  line-height: 1.05;
`;

export const ClosingAccent = styled.span`
  display: block;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
`;

export const ClosingLead = styled.p`
  margin: 0;
  max-width: 36rem;
  color: var(--text-secondary);
  font-size: 1.05rem;
`;

export const ClosingActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 0.4rem;
`;
