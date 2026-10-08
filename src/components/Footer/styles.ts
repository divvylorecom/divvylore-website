import styled from "styled-components";

export const FooterShell = styled.footer`
  background: transparent;
  color: rgba(245, 245, 247, 0.62);
  padding: 2.5rem 1.5rem 2.2rem;
`;

export const FooterInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(240px, 1.1fr) 2fr;
  gap: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FooterBrandBlock = styled.div`
  display: grid;
  gap: 0.9rem;
  align-content: start;
`;

export const FooterBrandRow = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #ffffff;
`;

export const FooterMark = styled.img`
  width: 30px;
  height: 30px;
`;

export const FooterBrandName = styled.span`
  font-weight: 800;
  font-size: 1.05rem;
  color: #ffffff;
  letter-spacing: -0.04em;
  line-height: 1;
`;

export const FooterTag = styled.p`
  margin: 0;
  color: rgba(245, 245, 247, 0.5);
  line-height: 1.65;
  max-width: 340px;
`;

export const FooterCols = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  gap: 1.6rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterCol = styled.div`
  display: grid;
  gap: 0.55rem;
  align-content: start;
`;

export const FooterColTitle = styled.h4`
  margin: 0 0 0.35rem;
  color: #ffffff;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 800;
`;

export const FooterLink = styled.a`
  color: rgba(245, 245, 247, 0.58);
  font-size: 0.95rem;
  line-height: 1.5;
  transition: color 0.15s ease;

  &:hover {
    color: #ffffff;
  }
`;

export const FooterBottom = styled.div`
  max-width: 1180px;
  margin: 2.4rem auto 0;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  color: rgba(245, 245, 247, 0.4);
  font-size: 0.85rem;
`;

export const FooterLegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
