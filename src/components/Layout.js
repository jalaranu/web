import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ locale, content, currentPath, equivalentPath, children }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onDocumentClick = (event) => {
      const anchor = event.target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      try {
        const target = new URL(href, window.location.href);
        if (
          target.pathname === window.location.pathname &&
          target.search === window.location.search &&
          !target.hash
        ) {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      } catch {
        // Ignore malformed hrefs; the browser handles them.
      }
    };
    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, []);

  return (
    <div className="site">
      <a className="skip-link" href="#main-content">
        {content.site.skipLink}
      </a>
      <Header
        locale={locale}
        content={content}
        currentPath={currentPath}
        equivalentPath={equivalentPath}
      />
      <main id="main-content">{children}</main>
      <Footer locale={locale} content={content} />
    </div>
  );
}
