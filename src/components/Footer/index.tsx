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
  const source = typeof window !== "undefined" ? window.location.hostname : siteContent.brand.domain;
  const query = new URLSearchParams({ source, product: siteContent.product, placement: "footer" }).toString();
  const registerUrl = `${siteContent.appUrls.register}?${query}`;
  const loginUrl = `${siteContent.appUrls.login}?${query}`;
  const crossLink = siteContent.footer.crossLink;
  const privacyUrl = siteContent.legalUrls.privacyPolicy;
  const termsUrl = siteContent.legalUrls.termsAndConditions;
  const refundUrl = siteContent.legalUrls.refundPolicy;

  return (
    <FooterShell>
      <FooterInner>
        <FooterBrandBlock>
          <FooterBrandRow href="/" aria-label={`${siteContent.brand.name} home`}>
            <FooterMark src="/img/svg/logo.svg" alt="" width={30} height={30} />
            <FooterBrandName>{siteContent.brand.name}</FooterBrandName>
          </FooterBrandRow>
          <FooterTag>{siteContent.brand.tagline}</FooterTag>
          {crossLink && (
            <FooterTag>
              {crossLink.text}{" "}
              <FooterLink href={crossLink.url} style={{ textDecoration: "underline" }}>
                {crossLink.label}
              </FooterLink>
            </FooterTag>
          )}
        </FooterBrandBlock>

        <FooterCols>
          <FooterCol>
            <FooterColTitle>Product</FooterColTitle>
            <FooterLink href="#product">Product</FooterLink>
            <FooterLink href="#use-cases">Use cases</FooterLink>
            <FooterLink href="#how-it-works">How it works</FooterLink>
            <FooterLink href="#pricing">Pricing</FooterLink>
          </FooterCol>

          <FooterCol>
            <FooterColTitle>Resources</FooterColTitle>
            <FooterLink href="#faq">FAQ</FooterLink>
            <FooterLink href={siteContent.appUrls.base}>Customer portal</FooterLink>
            <FooterLink href={registerUrl}>Create account</FooterLink>
            <FooterLink href={loginUrl}>Sign in</FooterLink>
            <FooterLink href={`mailto:${siteContent.contactEmail}`}>Contact</FooterLink>
          </FooterCol>

          <FooterCol>
            <FooterColTitle>Company</FooterColTitle>
            <FooterLink href={privacyUrl}>Privacy policy</FooterLink>
            <FooterLink href={termsUrl}>Terms and conditions</FooterLink>
            <FooterLink href={refundUrl}>Refund policy</FooterLink>
          </FooterCol>
        </FooterCols>
      </FooterInner>

      <FooterBottom>
        <span>{siteContent.footer.copyright}</span>
        <FooterLegalLinks>
          <FooterLink href={privacyUrl}>Privacy</FooterLink>
          <FooterLink href={termsUrl}>Terms</FooterLink>
          <FooterLink href={refundUrl}>Refunds</FooterLink>
        </FooterLegalLinks>
      </FooterBottom>
    </FooterShell>
  );
};

export default Footer;
