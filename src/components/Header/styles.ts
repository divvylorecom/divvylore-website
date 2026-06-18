import styled from "styled-components";

export const HeaderShell = styled.header`
  position: sticky;
  top: 0;
  z-index: 120;
  background: rgba(245, 243, 238, 0.82);
  backdrop-filter: saturate(140%) blur(16px);
  border-bottom: 1px solid var(--line);
`;

export const HeaderInner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0.7rem 1.4rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 700px) {
    padding: 0.6rem 1rem;
  }
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--text-primary);
  flex-shrink: 0;
`;

export const BrandMark = styled.img`
  width: 38px;
  height: 38px;
  display: block;
`;

export const BrandWord = styled.span`
  font-family: 'DM Serif Display', 'Space Grotesk', serif;
  font-weight: 400;
  font-size: 1.45rem;
  letter-spacing: 0.08em;
  color: #2a2a2a;
  line-height: 1;
  position: relative;
  top: 1px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-left: 0.6rem;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: color 0.15s ease, background-color 0.15s ease;

  &:hover {
    color: var(--text-primary);
    background-color: rgba(14, 22, 45, 0.05);
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 700px) {
    gap: 0.4rem;
  }
`;

export const GhostLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  background: transparent;

  &:hover {
    background: rgba(14, 22, 45, 0.06);
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
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background: var(--bg-ink);
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: #14192a;
  }
`;

export const MobileToggle = styled.button`
  display: none;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;

  @media (max-width: 960px) {
    display: inline-flex;
  }
`;

export const MobilePanel = styled.div<{ open: boolean }>`
  display: ${(p) => (p.open ? "grid" : "none")};
  gap: 0.3rem;
  padding: 0.5rem 1rem 1rem;
  border-bottom: 1px solid var(--line);
  background: var(--bg-page);

  ${NavLink} {
    padding: 0.7rem 0.8rem;
    border-radius: 10px;
    font-size: 1rem;
  }

  @media (min-width: 961px) {
    display: none;
  }
`;
