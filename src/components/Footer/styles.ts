import styled from "styled-components";

export const FooterSection = styled.footer`
  background: #020712;
  border-top: 1px solid #14233d;
  color: #d6e2ff;
  padding: 3.2rem 1.25rem 2.7rem;
`;

export const FooterInner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(260px, 1fr) 2fr;
  gap: 2.4rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterBrandColumn = styled.div`
  display: grid;
  gap: 0.9rem;
  align-content: start;
`;

export const FooterBrand = styled.strong`
  color: #ffffff;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 1.2rem;
`;

export const FooterTag = styled.p`
  margin: 0;
  color: #9cb3da;
  max-width: 280px;
  line-height: 1.6;
`;

export const FooterActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

export const FooterSocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex-wrap: wrap;
`;

export const FooterSocialButton = styled.a`
  color: #a7bbe0;
  text-decoration: none;
  font-size: 0.95rem;
  line-height: 1.4;

  &:hover {
    color: #ffffff;
  }
`;

export const FooterInlineLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const FooterButton = styled.a`
  color: #a7bbe0;
  text-decoration: none;
  font-size: 0.95rem;
  line-height: 1.4;

  &:hover {
    color: #ffffff;
  }
`;

export const FooterBottom = styled.small`
  color: #92a7cc;
  font-size: 0.82rem;
`;

export const FooterColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  gap: 1.5rem;

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, minmax(130px, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterGroup = styled.div`
  display: grid;
  align-content: start;
  gap: 0.52rem;
`;

export const FooterGroupTitle = styled.h4`
  margin: 0 0 0.26rem;
  color: #ffffff;
  font-size: 0.92rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const FooterLink = styled.a`
  color: #a7bbe0;
  text-decoration: none;
  line-height: 1.55;

  &:hover {
    color: #ffffff;
  }
`;
