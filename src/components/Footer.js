import React from "react";
import { pathFor } from "../lib/paths";

const pageLinks = ["technology", "validation", "partnerships", "about"];

export default function Footer({ locale, content }) {
  return (
    <footer className="site-footer dark">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <div className="site-footer__logo">
              <img
                src="/assets/jalaranu-vivid-horizontal-dark.svg"
                alt={content.site.logoAlt}
              />
            </div>
            <p className="site-footer__tagline">{content.site.footerTagline}</p>
          </div>

          <nav className="site-footer__col" aria-label="Footer pages">
            <h2 className="site-footer__heading">{content.site.title}</h2>
            <ul>
              {pageLinks.map((key) => (
                <li key={key}>
                  <a href={pathFor(content, key)}>{content.nav[key]}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer__col" aria-label="Footer legal">
            <h2 className="site-footer__heading">{content.footer.legalHeading}</h2>
            <ul>
              <li>
                <a href={pathFor(content, "privacy")}>{content.footer.privacy}</a>
              </li>
              <li>
                <a href={pathFor(content, "partnerships") + "#contact"}>
                  {content.footer.contact}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 {content.site.copyright}</span>
          <span className="privacy-note">{content.footer.privacyNote}</span>
        </div>
      </div>
    </footer>
  );
}
