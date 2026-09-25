# Jalaranu Website

Bilingual (EN/ID) website for the Jalaranu underlake datacenter project, the world's first
eco-friendly modular underlake datacenter concept developed in Indonesia.

Built with Gatsby 5 and deployed automatically to GitHub Pages (custom domain `jalaranu.org`)
via GitHub Actions.

## Local development

```sh
npm install
npm run dev      # gatsby develop at http://localhost:8787
npm run build    # production build into public/
npm run serve    # preview the build at http://localhost:8787
```

To build the production bundle with the contact form captcha enabled:

```sh
GATSBY_TURNSTILE_SITE_KEY=0x4AAAAAAFDUKSCYymOMWDvO npm run build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes
it to the `gh-pages` branch (GitHub Pages). Custom domain: `jalaranu.org` (Cloudflare DNS:
apex A records pointing to the GitHub Pages IPs and a `www` CNAME; proxied through Cloudflare).

Cloudflare provides HTTPS, HSTS, security headers, and redirect rules for the apex, `www`, and
legacy paths (all configured via the Cloudflare API).

## Structure

- `content/en.json`, `content/id.json`: all public copy (text, CTAs, SEO, form labels).
  URL slugs are identical for both languages (`/id/technology/`, `/id/milestones/`, etc.).
- `src/templates/Page.js`: a single template for every page; `src/pages/404.js` plus the
  root redirect template handle edge cases.
- `src/components/`: header, footer, hero carousel, contact form, and smaller UI pieces.
- `static/assets/`: brand logos, hero photos, Matano figures, partner logos, favicons,
  the OG images, and the research paper PDF.
- `workers/contact.js`: the Cloudflare Worker that verifies Turnstile tokens and sends
  emails through EmailJS (deployed separately with `wrangler`).
- Theme: swiss-grid "sharp card" system - radius 0, no shadows, hairline borders,
  red accent `#EF4136`, blue accent `#008FBF`.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Gatsby 5 (static site generation), React 18 |
| Styling | Vanilla CSS, no framework (design tokens in `src/styles/global.css`, prefix `--jlr-`) |
| Fonts | Inter, self-hosted woff2 (`static/fonts/`) |
| Icons | `lucide-react` (UI icons); brand/social logos are local inline SVGs |
| Content | Plain JSON (`content/en.json`, `content/id.json`), no CMS |
| Contact form | Cloudflare Turnstile (captcha) + EmailJS (email) behind a Cloudflare Worker |
| Edge | Cloudflare Worker `jalaranu-contact` (module format, deployed with `wrangler`) |
| CI/CD | GitHub Actions (pinned SHAs, `contents: read`, PAT-based Pages deploy) |
| Hosting | GitHub Pages (origin) behind Cloudflare (HTTPS, HSTS, security headers, redirect rules) |

## Build and rendering flow

1. `gatsby-node.js` reads `content/en.json` and `content/id.json`, then calls `createPage`
   for every `pageKey` (`home`, `technology`, `useCases`, `validation`, `partnerships`,
   `about`, `privacy`, `notFound`) in both locales.
2. URL slugs come from `content.slugs` (uniform English slugs for both languages) and are
   assembled by `slugFor()`; the page key `validation` is routed as `/milestones/`.
3. Each page renders through the single template `src/templates/Page.js`, which switches on
   `pageKey` and composes sections from `content.pages[pageKey]` via shared components.
4. Per-page SEO metadata is emitted from the `Head` export in `Page.js`: title, description,
   robots (`index,follow` / `noindex,follow`), canonical, hreflang (`en`/`id`/`x-default`),
   Open Graph (including 1200x630 `og:image`), and Twitter card tags.
5. `gatsby-ssr.js` injects favicons, the apple-touch-icon, and `lang` attributes, and strips
   the default Gatsby `generator` meta.
6. The root `/` page (`src/templates/Redirect.js`) is a JS redirect to `/en/`; the real
   301 redirect is handled by a Cloudflare Redirect Rule. Legacy `/validation/` URLs are
   also 301-redirected to `/milestones/` at the edge.
7. `src/pages/404.js` renders the localized not-found page directly on the requested URL
   (no redirect), with `noindex` metadata.

## Code map

- `gatsby-config.js` - site URL metadata (no plugins).
- `gatsby-node.js` - page creation, locale pairing (`equivalentPath`), slim page context.
- `gatsby-ssr.js` / `gatsby-browser.js` - head components, global CSS import.
- `content/en.json`, `content/id.json` - every user-facing string, per locale.
- `src/templates/Page.js` - the single page template: `Home`, `Technology`, `UseCases`,
  `Validation` (rendered at `/milestones/`), `Partnerships`, `About`, `Privacy`, `NotFound`,
  plus `Head`.
- `src/templates/Redirect.js` - root redirect page.
- `src/pages/404.js` - client-routed 404 (localizes by URL prefix, no redirect).
- `src/components/`
  - `Layout.js` - skip link, header, main, footer; same-page navigation scroll reset.
  - `Header.js` - sticky nav, mobile burger menu (Escape/outside-click handling), language
    dropdown (globe icon + EN/ID flags).
  - `Footer.js` - brand column, social icons, email link, page/legal link columns.
  - `HeroCarousel.js` - cinematic hero (autoplay 6s, pause on hover/focus, explicit pause,
    dots, arrows, `prefers-reduced-motion`, responsive `srcSet`).
  - `ContactForm.js` - Turnstile widget (explicit render), client validation, error focus,
    POST to `/api/contact`.
  - `CardGrid.js`, `FAQ.js`, `Section.js`, `Button.js`, `Rich.js` - shared UI primitives
    (`Rich` renders the limited `**bold**` / `==highlight==` markdown used in content).
  - `FlowDiagram.js` - sharp-edged horizontal flow diagram with directed edges, used for
    the Use Cases evaluation path.
  - `Flags.js`, `SocialIcons.js` - local flag and brand icons.
- `src/lib/paths.js` - `pathFor()` helper (slug-aware internal links).
- `src/styles/global.css` - design tokens and all styles (swiss-grid theme).
- `static/` - `robots.txt` (allows all search and AI crawlers), `sitemap.xml` (14 URLs),
  `assets/` (logos, hero webp set, Matano figures, partner SVGs, favicons, OG images, paper PDF).
- `workers/contact.js` - Cloudflare Worker: CORS, server-side input validation, Turnstile
  siteverify, EmailJS REST send (with `Origin` header), generic error responses.
- `.github/workflows/deploy.yml` - build with `GATSBY_TURNSTILE_SITE_KEY` from secrets,
  deploy `public/` to `gh-pages`.

## Partnership contact form

The form on `/en/partnerships/#contact` (and its ID counterpart) is fully functional:

1. The browser renders a Cloudflare Turnstile widget (site key injected at build time via the
   `TURNSTILE_SITE_KEY` GitHub secret).
2. On submit, the form POSTs JSON to `https://jalaranu.org/api/contact`.
3. The Cloudflare Worker `jalaranu-contact` verifies the Turnstile token server-side
   (secret stored as a Worker secret) and then sends the email through the EmailJS REST API
   (service `service_1erp3i4`, template `template_uystsfp`) to `info@jalaranu.org`.
4. The template receives `title`, `name`, `time`, `OrganisationName`, `PartnershipType`,
   `message`, `IPaddr` (from `CF-Connecting-IP`), and `reply_to`.

Credentials live only in GitHub Secrets (`TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`,
`EMAILJS_PUBLIC_KEY`) and Cloudflare Worker secrets; none are stored in the repository.

For local experimentation, the endpoint can be overridden with
`window.JLR_FORM_ENDPOINT` before hydration.

## Content policy

The copy follows a strict honesty policy: unproven performance, cost, or environmental claims
are not asserted as facts. Where measurements are pending, the text says so explicitly.
