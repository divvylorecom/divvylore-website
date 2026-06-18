import styled from "styled-components";

export const FooterShell = styled.footer`
  background: var(--bg-ink);
  color: #c9d1e3;
  padding: 4rem 1.4rem 2.4rem;
`;

export const FooterInner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(260px, 1.1fr) 2fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FooterBrandBlock = styled.div`
  display: grid;
  gap: 1rem;
  align-content: start;
`;

export const FooterBrandRow = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #ffffff;
`;

export const FooterMark = styled.img`
  width: 38px;
  height: 38px;
`;

export const FooterBrandName = styled.span`
  font-family: 'DM Serif Display', 'Space Grotesk', serif;
  font-weight: 400;
  font-size: 1.45rem;
  color: #ffffff;
  letter-spacing: 0.08em;
  line-height: 1;
  position: relative;
  top: 1px;
`;

export const FooterTag = styled.p`
  margin: 0;
  color: #95a2bf;
  line-height: 1.65;
  max-width: 320px;
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
  margin: 0 0 0.4rem;
  color: #ffffff;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
`;

export const FooterLink = styled.a`
  color: #b9c4dd;
  font-size: 0.95rem;
  line-height: 1.5;
  transition: color 0.15s ease;

  &:hover {
    color: #ffffff;
  }
`;

export const FooterBottom = styled.div`
  max-width: 1240px;
  margin: 3rem auto 0;
  padding-top: 1.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  color: #8190ae;
  font-size: 0.85rem;
`;

export const FooterLegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
