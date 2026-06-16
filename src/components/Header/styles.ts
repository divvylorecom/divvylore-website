import styled from "styled-components";

export const HeaderSection = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(247, 249, 255, 0.88);
  border-bottom: 1px solid #dde6ff;
`;

export const HeaderInner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0.72rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #152a59;
`;

export const BrandMark = styled.img`
  width: 34px;
  height: 34px;
`;

export const BrandText = styled.span`
  display: flex;
  flex-direction: column;
`;

export const BrandName = styled.strong`
  font-size: 0.96rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const BrandTagline = styled.span`
  font-size: 0.68rem;
  color: #5a6f9d;
  letter-spacing: 0.02em;

  @media (max-width: 1180px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.35rem;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #4a5f8f;
  padding: 0.5rem 0.72rem;
  border-radius: 999px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    color: #1c3675;
    background-color: #edf3ff;
  }
`;

export const OverflowWrap = styled.div`
  position: relative;
`;

export const OverflowButton = styled.button`
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #4a5f8f;
  padding: 0.5rem 0.72rem;
  border-radius: 999px;
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;

  &:hover {
    color: #1c3675;
    background-color: #edf3ff;
  }
`;

export const OverflowMenu = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "grid" : "none")};
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 180px;
  border: 1px solid #d7e4ff;
  border-radius: 12px;
  background: #ffffff;
  padding: 0.45rem;
  box-shadow: 0 18px 32px rgba(20, 45, 90, 0.14);
  z-index: 30;

  ${NavLink} {
    text-transform: none;
    letter-spacing: 0.02em;
    border-radius: 8px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  @media (max-width: 980px) {
    gap: 0.45rem;
  }
`;

const CtaBase = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  font-size: 0.84rem;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.01em;
  padding: 0.45rem 0.92rem;
  border-radius: 999px;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const GhostButton = styled(CtaBase)`
  border-color: #cbd9ff;
  color: #2d4b93;
  background: #f5f8ff;
`;

export const PrimaryButton = styled(CtaBase)`
  color: #ffffff;
  background: linear-gradient(145deg, #2f5be7, #2b4fd0);
  box-shadow: 0 8px 16px rgba(39, 79, 201, 0.24);
`;

export const MobileMenuButton = styled.button`
  display: none;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  min-height: 40px;
  padding: 0.5rem 0.78rem;
  color: #2d4b93;
  background: #eef3ff;
  border: 1px solid #cbd9ff;
  border-radius: 999px;
  cursor: pointer;

  @media (max-width: 980px) {
    display: inline-flex;
  }
`;

export const MobilePanel = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1.25rem 1rem;
  max-width: 1180px;
  margin: 0 auto;

  @media (min-width: 981px) {
    display: none;
  }
`;
