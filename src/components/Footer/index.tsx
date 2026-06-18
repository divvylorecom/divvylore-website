import siteContent from "../../content/SiteContent.json";
import {
  FooterShell,
  FooterInner,
  FooterBrandBlock,
  FooterBrandRow,
  FooterMark,
  FooterBrandName,
  FooterTag,
  FooterCols,
  FooterCol,
  FooterColTitle,
  FooterLink,
  FooterBottom,
  FooterLegalLinks,
} from "./styles";

const Footer = () => {
  const source = typeof window !== "undefined" ? window.location.hostname : "divvylore.com";
  const registerUrl = `${siteContent.appUrls.register}?source=${encodeURIComponent(source)}&placement=footer`;
  const loginUrl = `${siteContent.appUrls.login}?source=${encodeURIComponent(source)}&placement=footer`;
  const privacyUrl = `${siteContent.appUrls.base}/privacy-policy`;
  const termsUrl = `${siteContent.appUrls.base}/terms-and-conditions`;

  return (
    <FooterShell>
      <FooterInner>
        <FooterBrandBlock>
          <FooterBrandRow href="/" aria-label="Divvylore home">
            <FooterMark src="/img/svg/logo.svg" alt="" />
            <FooterBrandName>DIVVYLORE</FooterBrandName>
          </FooterBrandRow>
          <FooterTag>{siteContent.brand.tagline}</FooterTag>
        </FooterBrandBlock>

        <FooterCols>
          <FooterCol>
            <FooterColTitle>Product</FooterColTitle>
            <FooterLink href="#highlights">Platform</FooterLink>
            <FooterLink href="#how-it-works">How it works</FooterLink>
            <FooterLink href="#features">Capabilities</FooterLink>
            <FooterLink href="#security">Security</FooterLink>
            <FooterLink href="#pricing">Pricing</FooterLink>
          </FooterCol>

          <FooterCol>
            <FooterColTitle>Resources</FooterColTitle>
            <FooterLink href="#faq">FAQ</FooterLink>
            <FooterLink href={siteContent.appUrls.base}>Customer portal</FooterLink>
            <FooterLink href={registerUrl}>Create account</FooterLink>
            <FooterLink href={loginUrl}>Sign in</FooterLink>
            <FooterLink href="mailto:hello@divvylore.com">Contact</FooterLink>
          </FooterCol>

          <FooterCol>
            <FooterColTitle>Company</FooterColTitle>
            <FooterLink href={siteContent.appUrls.base}>About</FooterLink>
            <FooterLink href={privacyUrl}>Privacy policy</FooterLink>
            <FooterLink href={termsUrl}>Terms and conditions</FooterLink>
          </FooterCol>
        </FooterCols>
      </FooterInner>

      <FooterBottom>
        <span>{siteContent.footer.copyright}</span>
        <FooterLegalLinks>
          <FooterLink href={privacyUrl}>Privacy</FooterLink>
          <FooterLink href={termsUrl}>Terms</FooterLink>
        </FooterLegalLinks>
      </FooterBottom>
    </FooterShell>
  );
};

export default Footer;
