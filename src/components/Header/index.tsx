import { useState } from "react";
import siteContent from "../../content/SiteContent.json";
import {
  HeaderShell,
  HeaderInner,
  Brand,
  BrandMark,
  BrandWord,
  Nav,
  NavLink,
  Spacer,
  Actions,
  GhostLink,
  PrimaryCta,
  MobileToggle,
  MobilePanel,
} from "./styles";

const Header = () => {
  const [open, setOpen] = useState(false);
  const source = typeof window !== "undefined" ? window.location.hostname : "divvylore.com";
  const registerUrl = `${siteContent.appUrls.register}?source=${encodeURIComponent(source)}&placement=header`;
  const loginUrl = `${siteContent.appUrls.login}?source=${encodeURIComponent(source)}&placement=header`;

  return (
    <HeaderShell>
      <HeaderInner>
        <Brand href="/" aria-label="Divvylore home">
          <BrandMark src="/img/svg/logo.svg" alt="" />
          <BrandWord>DIVVYLORE</BrandWord>
        </Brand>

        <Nav>
          {siteContent.navigation.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <Spacer />

        <Actions>
          <GhostLink href={loginUrl}>Sign in</GhostLink>
          <PrimaryCta href={registerUrl}>Get started</PrimaryCta>
          <MobileToggle
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </MobileToggle>
        </Actions>
      </HeaderInner>

      <MobilePanel open={open}>
        {siteContent.navigation.map((item) => (
          <NavLink key={`m-${item.label}`} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </NavLink>
        ))}
        <NavLink href={loginUrl} onClick={() => setOpen(false)}>
          Sign in
        </NavLink>
      </MobilePanel>
    </HeaderShell>
  );
};

export default Header;
