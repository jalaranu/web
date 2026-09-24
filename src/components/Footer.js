import React from "react";

export default function Footer({ locale, content }) {
  return (
    <footer className="site-footer dark">
      <div className="container">
        <div className="site-footer__logo">
          <img
            src="/assets/jalaranu-vivid-horizontal-dark.svg"
            alt={content.site.logoAlt}
          />
        </div>
        <p className="site-footer__tagline">{content.site.footerTagline}</p>
        <ul className="site-footer__links">
          <li>
            <a href={`/${locale}/privacy/`}>{content.footer.privacy}</a>
          </li>
          <li>
            <a href={`/${locale}/partnerships/#contact`}>{content.footer.contact}</a>
          </li>
        </ul>
        <div className="site-footer__bottom">
          <span>© 2026 {content.site.copyright}</span>
          <span className="privacy-note">{content.footer.privacyNote}</span>
        </div>
      </div>
    </footer>
  );
}
