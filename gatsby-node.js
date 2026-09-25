const path = require("path");
const en = require("./content/en.json");
const id = require("./content/id.json");
const siteConfig = require("./gatsby-config");

const locales = {
  en: en,
  id: id,
};

const defaultLocale = Object.keys(locales).find((key) => locales[key].default) || "en";

const pageKeys = [
  "home",
  "technology",
  "validation",
  "partnerships",
  "about",
  "privacy",
];

const slimContent = (content, pageKey) => ({
  locale: content.locale,
  langLabel: content.langLabel,
  default: content.default,
  slugs: content.slugs,
  site: content.site,
  nav: content.nav,
  footer: content.footer,
  pages: { [pageKey]: content.pages[pageKey] },
});

const slugFor = (locale, pageKey, content) => {
  if (pageKey === "home") return `/${locale}/`;
  if (pageKey === "notFound") return `/${locale}/404/`;
  const slug = content.slugs?.[pageKey] || pageKey;
  return `/${locale}/${slug}/`;
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const localeEntries = Object.entries(locales);
  const otherLocale = (locale) =>
    localeEntries.find(([key]) => key !== locale)?.[0];

  localeEntries.forEach(([locale, content]) => {
    const equivalentRoot = `/${otherLocale(locale)}/`;

    pageKeys.forEach((pageKey) => {
      const currentPath = slugFor(locale, pageKey, content);
      const equivalentPath =
        pageKey === "home"
          ? equivalentRoot
          : slugFor(otherLocale(locale), pageKey, locales[otherLocale(locale)]);

      createPage({
        path: currentPath,
        component: path.resolve("src/templates/Page.js"),
        context: {
          locale,
          pageKey,
          content: slimContent(content, pageKey),
          currentPath,
          equivalentPath,
          siteUrl: siteConfig.siteMetadata.siteUrl,
        },
      });
    });
  });

  createPage({
    path: "/",
    component: path.resolve("src/templates/Redirect.js"),
    context: {
      to: `/${defaultLocale}/`,
    },
  });
};
