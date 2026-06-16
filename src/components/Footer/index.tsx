import siteContent from "../../content/SiteContent.json";
import {
  FooterSection,
  FooterInner,
  FooterBrandColumn,
  FooterBrand,
  FooterTag,
  FooterButton,
  FooterInlineLinks,
  FooterSocialRow,
  FooterSocialButton,
  FooterBottom,
  FooterColumns,
  FooterGroup,
  FooterGroupTitle,
  FooterLink,
} from "./styles";

const Footer = () => {
  const source = typeof window !== "undefined" ? window.location.hostname : "divvylore.com";
  const registerUrl = `${siteContent.appUrls.register}?source=${encodeURIComponent(source)}&placement=footer`;
  const loginUrl = `${siteContent.appUrls.login}?source=${encodeURIComponent(source)}&placement=footer`;
  const privacyUrl = `${siteContent.appUrls.base}/privacy-policy`;
  const termsUrl = `${siteContent.appUrls.base}/terms-and-conditions`;

  return (
    <FooterSection>
      <FooterInner>
        <FooterBrandColumn>
          <FooterBrand>{siteContent.brand.name}</FooterBrand>
          <FooterTag>{siteContent.brand.tagline}</FooterTag>

          <FooterInlineLinks>
            <FooterButton href={registerUrl}>Get Started</FooterButton>
            <FooterButton href={loginUrl}>Login</FooterButton>
            <FooterButton href="#">Contact</FooterButton>
          </FooterInlineLinks>

          <FooterSocialRow>
            <FooterSocialButton href="#" aria-label="LinkedIn">in</FooterSocialButton>
            <FooterSocialButton href="#" aria-label="Instagram">ig</FooterSocialButton>
            <FooterSocialButton href="#" aria-label="X">x</FooterSocialButton>
            <FooterSocialButton href="#" aria-label="YouTube">yt</FooterSocialButton>
          </FooterSocialRow>

          <FooterBottom>{siteContent.footer.copyright}</FooterBottom>
        </FooterBrandColumn>

        <FooterColumns>
          <FooterGroup>
            <FooterGroupTitle>Product</FooterGroupTitle>
            <FooterLink href="#highlights">Overview</FooterLink>
            <FooterLink href="#how-it-works">How it works</FooterLink>
            <FooterLink href="#features">Capabilities</FooterLink>
          </FooterGroup>

          <FooterGroup>
            <FooterGroupTitle>Resources</FooterGroupTitle>
            <FooterLink href="#security">Security</FooterLink>
            <FooterLink href="#pricing">Pricing</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
            <FooterLink href={registerUrl}>Register</FooterLink>
          </FooterGroup>

          <FooterGroup>
            <FooterGroupTitle>Company</FooterGroupTitle>
            <FooterLink href={siteContent.appUrls.base}>Platform</FooterLink>
            <FooterLink href={loginUrl}>Sign in</FooterLink>
            <FooterLink href={registerUrl}>Create account</FooterLink>
            <FooterLink href={privacyUrl}>Privacy policy</FooterLink>
            <FooterLink href={termsUrl}>Terms and conditions</FooterLink>
          </FooterGroup>
        </FooterColumns>
      </FooterInner>
    </FooterSection>
  );
};

export default Footer;
