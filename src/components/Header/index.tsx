import { useState } from "react";
import siteContent from "../../content/SiteContent.json";
import {
  HeaderSection,
  HeaderInner,
  Brand,
  BrandMark,
  BrandText,
  BrandName,
  BrandTagline,
  Nav,
  NavLink,
  OverflowWrap,
  OverflowButton,
  OverflowMenu,
  Actions,
  GhostButton,
  PrimaryButton,
  MobileMenuButton,
  MobilePanel,
} from "./styles";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverflowOpen, setIsOverflowOpen] = useState(false);
  const source = typeof window !== "undefined" ? window.location.hostname : "divvylore.com";
  const registerUrl = `${siteContent.appUrls.register}?source=${encodeURIComponent(source)}&placement=header`;
  const loginUrl = `${siteContent.appUrls.login}?source=${encodeURIComponent(source)}&placement=header`;
  const primaryDesktopNav = siteContent.navigation.slice(0, 5);
  const overflowDesktopNav = siteContent.navigation.slice(5);

  return (
    <HeaderSection>
      <HeaderInner>
        <Brand href="/" aria-label="Divvylore home">
          <BrandMark src="/img/svg/logo.svg" alt="Divvylore" />
          <BrandText>
            <BrandName>{siteContent.brand.name}</BrandName>
            <BrandTagline>{siteContent.brand.tagline}</BrandTagline>
          </BrandText>
        </Brand>

        <Nav>
          {primaryDesktopNav.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}

          {overflowDesktopNav.length > 0 && (
            <OverflowWrap>
              <OverflowButton
                type="button"
                onClick={() => setIsOverflowOpen((prev) => !prev)}
                aria-label="More navigation"
                aria-expanded={isOverflowOpen}
              >
                More
              </OverflowButton>
              <OverflowMenu isOpen={isOverflowOpen}>
                {overflowDesktopNav.map((item) => (
                  <NavLink
                    key={`overflow-${item.label}`}
                    href={item.href}
                    onClick={() => setIsOverflowOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </OverflowMenu>
            </OverflowWrap>
          )}
        </Nav>

        <Actions>
          <GhostButton href={loginUrl}>Login</GhostButton>
          <PrimaryButton href={registerUrl}>Get Started</PrimaryButton>
          <MobileMenuButton
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            Menu
          </MobileMenuButton>
        </Actions>
      </HeaderInner>

      <MobilePanel isOpen={isMenuOpen}>
        {siteContent.navigation.map((item) => (
          <NavLink key={`mobile-${item.label}`} href={item.href}>
            {item.label}
          </NavLink>
        ))}
        <GhostButton href={loginUrl}>Login</GhostButton>
        <PrimaryButton href={registerUrl}>Start Free</PrimaryButton>
      </MobilePanel>
    </HeaderSection>
  );
};

export default Header;
