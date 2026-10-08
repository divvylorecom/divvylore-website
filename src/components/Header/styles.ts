import styled from "styled-components";

export const HeaderShell = styled.header`
  position: sticky;
  top: 0.85rem;
  z-index: 200;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  pointer-events: none;
`;

export const HeaderInner = styled.div`
  width: min(1120px, 100%);
  min-height: 58px;
  padding: 0.45rem 0.55rem 0.45rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  pointer-events: auto;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.04) 45%,
    rgba(16, 20, 34, 0.55) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: saturate(160%) blur(18px);
  -webkit-backdrop-filter: saturate(160%) blur(18px);
  box-shadow:
    0 18px 40px -24px rgba(0, 0, 0, 0.65),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  flex-shrink: 0;
`;

export const BrandMark = styled.img`
  width: 28px;
  height: 28px;
  display: block;
`;

export const BrandWord = styled.span`
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: -0.04em;
  color: #ffffff;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.05rem;
  margin-left: 0.2rem;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 0.9rem;
  font-weight: 650;
  color: rgba(244, 246, 251, 0.72);
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  transition: color 0.15s ease, background-color 0.15s ease;

  &:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`;

export const GhostLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 700;
  color: rgba(244, 246, 251, 0.88);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const PrimaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 800;
  color: #ffffff;
  background: var(--cta-gradient);
  border: 1px solid rgba(255, 255, 255, 0.28);
  transition: transform 0.16s ease, filter 0.16s ease, box-shadow 0.16s ease;
  box-shadow: var(--cta-glow);

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
    box-shadow: var(--cta-glow-hover);
  }
`;

export const MobileToggle = styled.button`
  display: none;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 960px) {
    display: inline-flex;
  }
`;

export const MobilePanel = styled.div<{ open: boolean }>`
  display: ${(p) => (p.open ? "grid" : "none")};
  position: absolute;
  top: calc(100% + 0.55rem);
  left: 1rem;
  right: 1rem;
  gap: 0.25rem;
  padding: 0.7rem;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(18, 22, 36, 0.88);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  pointer-events: auto;
  box-shadow: 0 20px 40px -24px rgba(0, 0, 0, 0.7);

  ${NavLink} {
    padding: 0.75rem 0.9rem;
    border-radius: 12px;
    font-size: 1rem;
  }

  @media (min-width: 961px) {
    display: none;
  }
`;
