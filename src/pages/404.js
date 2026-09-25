import React, { useEffect, useState } from "react";
import Page from "../templates/Page";
import en from "../../content/en.json";
import id from "../../content/id.json";
import siteConfig from "../../gatsby-config";

const locales = { en, id };
const siteUrl = siteConfig.siteMetadata.siteUrl;

const localeFromPath = (pathname) => {
  if (pathname === "/id" || pathname.startsWith("/id/")) return "id";
  return "en";
};

const equivalentFor = (pathname, locale) => {
  const other = locale === "en" ? "id" : "en";
  if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
    return pathname.replace(`/${locale}`, `/${other}`);
  }
  return `/${other}/`;
};

export default function NotFound() {
  const [route, setRoute] = useState({ locale: "en", currentPath: "/en/404/" });

  useEffect(() => {
    const pathname = window.location.pathname;
    const locale = localeFromPath(pathname);
    setRoute({ locale, currentPath: pathname });
  }, []);

  const content = locales[route.locale];
  const pageContext = {
    locale: route.locale,
    pageKey: "notFound",
    content,
    currentPath: route.currentPath,
    equivalentPath: equivalentFor(route.currentPath, route.locale),
    siteUrl,
  };

  return <Page pageContext={pageContext} />;
}

export function Head({ location }) {
  const locale = localeFromPath(location.pathname);
  const page = locales[locale].pages.notFound;

  return (
    <>
      <html lang={locale} />
      <title>{page.seoTitle}</title>
      <meta name="description" content={page.seoDescription} />
      <meta name="robots" content="noindex,follow" />
    </>
  );
}
