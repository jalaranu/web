import React, { useState } from "react";
import Button from "./Button";

const navItems = (nav, locale) => [
  { key: "technology", label: nav.technology, to: `/${locale}/technology/` },
  { key: "validation", label: nav.validation, to: `/${locale}/validation/` },
  { key: "partnerships", label: nav.partnerships, to: `/${locale}/partnerships/` },
  { key: "about", label: nav.about, to: `/${locale}/about/` },
];

export default function Header({ locale, content, currentPath, equivalentPath }) {
  const [open, setOpen] = useState(false);

  const logoHref = `/${locale}/`;
  const otherLocale = locale === "en" ? "id" : "en";
  const otherLabel = locale === "en" ? "ID" : "EN";

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__logo" href={logoHref} aria-label={content.site.logoAlt}>
          <img
            src="/assets/jalaranu-vivid-horizontal-light.svg"
            alt={content.site.logoAlt}
          />
        </a>

        <nav
          className="site-header__nav"
          id="site-nav"
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
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="site-header__actions">
          <span className="site-header__cta-desktop">
            <Button
              to={`/${locale}/partnerships/#contact`}
              variant="primary"
            >
              {content.nav.primaryCta}
            </Button>
          </span>
          <a
            className="lang-switch"
            href={equivalentPath}
            aria-current={otherLocale === locale ? "true" : undefined}
            aria-label={`Switch language to ${otherLabel}`}
            lang={otherLocale}
          >
            {otherLabel}
          </a>
          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
