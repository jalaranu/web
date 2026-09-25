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
