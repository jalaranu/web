export const pathFor = (content, pageKey) => {
  const locale = content.locale;
  if (pageKey === "home") return `/${locale}/`;
  const slug = content.slugs?.[pageKey] || pageKey;
  return `/${locale}/${slug}/`;
};
