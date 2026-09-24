import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ locale, content, currentPath, equivalentPath, children }) {
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">
        Skip to main content
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
