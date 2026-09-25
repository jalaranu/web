import React, { useEffect, useRef, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import Button from "./Button";
import { Flag } from "./Flags";

const navItems = (nav, locale) => [
  { key: "technology", label: nav.technology, to: `/${locale}/technology/` },
  { key: "validation", label: nav.validation, to: `/${locale}/milestones/` },
  { key: "partnerships", label: nav.partnerships, to: `/${locale}/partnerships/` },
  { key: "about", label: nav.about, to: `/${locale}/about/` },
];

const languageOptions = (content, locale, currentPath, equivalentPath) =>
  Object.keys(content.site.languages).map((code) => ({
    code,
    label: content.site.languages[code],
    href: code === locale ? currentPath : equivalentPath,
  }));

export default function Header({ locale, content, currentPath, equivalentPath }) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const openRef = useRef(false);
  const langOpenRef = useRef(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);
  const langButtonRef = useRef(null);
  const langMenuRef = useRef(null);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    langOpenRef.current = langOpen;
  }, [langOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key !== "Escape") return;
      if (langOpenRef.current) {
        setLangOpen(false);
        langButtonRef.current?.focus();
        return;
      }
      if (openRef.current) {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onDown = (event) => {
      if (!langOpenRef.current) return;
      const menu = langMenuRef.current;
      const button = langButtonRef.current;
      if (menu && !menu.contains(event.target) && button && !button.contains(event.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const toggleMenu = () => {
    const next = !open;
    setOpen(next);
    if (next) {
      setLangOpen(false);
      window.requestAnimationFrame(() => {
        navRef.current?.querySelector("a")?.focus();
      });
    }
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const toggleLanguage = () => {
    setLangOpen((value) => !value);
    setOpen(false);
  };

  const logoHref = `/${locale}/`;

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

          <div className="lang">
            <button
              type="button"
              className="lang-switch"
              ref={langButtonRef}
              aria-expanded={langOpen}
              aria-haspopup="true"
              aria-controls="lang-menu"
              aria-label={content.site.languageMenu}
              onClick={toggleLanguage}
            >
              <Globe size={16} aria-hidden="true" />
              <Flag code={locale} />
            </button>
            {langOpen ? (
              <div
                className="lang-backdrop"
                aria-hidden="true"
                onClick={() => setLangOpen(false)}
              />
            ) : null}
            <ul
              className="lang-menu"
              id="lang-menu"
              ref={langMenuRef}
              data-open={langOpen ? "true" : "false"}
            >
              {languageOptions(content, locale, currentPath, equivalentPath).map(
                (option) => (
                  <li key={option.code}>
                    <a
                      href={option.href}
                      hreflang={option.code}
                      lang={option.code}
                      aria-current={option.code === locale ? "true" : undefined}
                    >
                      <Flag code={option.code} />
                      <span>{option.label}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

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
