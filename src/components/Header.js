import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navItems = (nav, locale) => [
  { key: "technology", label: nav.technology, to: `/${locale}/technology/` },
  { key: "validation", label: nav.validation, to: `/${locale}/validation/` },
  { key: "partnerships", label: nav.partnerships, to: `/${locale}/partnerships/` },
  { key: "about", label: nav.about, to: `/${locale}/about/` },
];

export default function Header({ locale, content, currentPath, equivalentPath }) {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape" && openRef.current) {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const toggleMenu = () => {
    const next = !open;
    setOpen(next);
    if (next) {
      window.requestAnimationFrame(() => {
        navRef.current?.querySelector("a")?.focus();
      });
    }
  };

  const closeMenu = () => {
    setOpen(false);
    burgerRef.current?.focus();
  };

  const logoHref = `/${locale}/`;
  const otherLocale = locale === "en" ? "id" : "en";
  const otherLabel = locale === "en" ? "ID" : "EN";

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__logo" href={logoHref}>
          <img
            src="/assets/jalaranu-vivid-horizontal-light.svg"
            alt={content.site.logoAlt}
          />
        </a>

        <nav
          className="site-header__nav"
          id="site-nav"
          ref={navRef}
          data-open={open ? "true" : "false"}
          aria-label="Main navigation"
        >
          <ul>
            {navItems(content.nav, locale).map((item) => {
              const isCurrent = currentPath.startsWith(item.to);
              return (
                <li key={item.key}>
                  <a
                    href={item.to}
                    aria-current={isCurrent ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="site-header__nav-cta">
            <Button to={`/${locale}/partnerships/#contact`} variant="primary" arrow>
              {content.nav.primaryCta}
            </Button>
          </div>
        </nav>

        <div className="site-header__actions">
          <span className="site-header__cta-desktop">
            <Button
              to={`/${locale}/partnerships/#contact`}
              variant="primary"
              arrow
            >
              {content.nav.primaryCta}
            </Button>
          </span>
          <a
            className="lang-switch"
            href={equivalentPath}
            aria-label={`${content.site.languageSwitch} ${otherLabel}`}
            lang={otherLocale}
          >
            {otherLabel}
          </a>
          <button
            type="button"
            className="burger"
            ref={burgerRef}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={toggleMenu}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            <span className="sr-only">{content.site.menuToggle}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
