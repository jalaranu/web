import React from "react";
import { pathFor } from "../lib/paths";
import { Mail } from "lucide-react";
import { SOCIAL_BRANDS } from "./SocialIcons";

const pageLinks = ["technology", "validation", "partnerships", "about"];

export default function Footer({ locale, content }) {
  const social = content.site.social || {};

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
            <p className="site-footer__social-title">{content.site.socialFollow}</p>
            <ul className="site-footer__social">
              {SOCIAL_BRANDS.map(({ key, label, Icon }) => {
                const href = social[key];
                if (!href) return null;
                const handle = href.replace(/^https?:\/\//, "");
                return (
                  <li key={key}>
                    <a
                      className="site-footer__social-link"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label}: ${handle}`}
                      title={`${label}: ${handle}`}
                    >
                      <Icon size={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
            <a className="site-footer__email" href={"mailto:" + content.footer.email}>
              <Mail size={16} aria-hidden="true" />
              {content.footer.email}
            </a>
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
