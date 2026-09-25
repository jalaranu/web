module.exports = {
  siteMetadata: {
    siteUrl: "https://jalaranu.org",
    title: "Jalaranu",
  },
  pathPrefix: process.env.PATH_PREFIX || "",
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jalaranu",
        short_name: "Jalaranu",
        start_url: "/en/",
        background_color: "#101820",
        theme_color: "#101820",
        display: "standalone",
        lang: "en",
        description: "The world's first underlake datacenter project.",
        icon: "static/assets/icon-512.png",
        icon_options: { purpose: "any maskable" },
        include_favicon: false,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/en/", "/id/"],
        workboxConfig: {
          runtimeCaching: [
            {
              // Page documents (pretty URLs): stale-while-revalidate so
              // direct visits render instantly from cache and update in the
              // background. Workbox's default "runtime" cache names are
              // cleared when a new service worker takes over.
              urlPattern:
                /^https?:\/\/[^/]+\/(en|id)(\/(technology|use-cases|milestones|partnerships|about|privacy))?\/?(\?.*)?$/,
              handler: "StaleWhileRevalidate",
            },
          ],
        },
      },
    },
  ],
};
