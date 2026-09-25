import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Button from "../components/Button";
import CardGrid from "../components/CardGrid";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Rich from "../components/Rich";
import HeroCarousel from "../components/HeroCarousel";

function Home({ page, locale, content }) {
  const hero = page.hero;
  return (
    <>
      <div className="hero hero--cinematic dark">
        <HeroCarousel slides={hero.slides} labels={content.site} />
        <div className="container hero__content">
          <span className="overline">{hero.eyebrow}</span>
          <h1>
            <Rich text={hero.h1} />
          </h1>
          <div className="hero__intro">
            {hero.intro.map((paragraph, index) => (
              <p key={index}>
                <Rich text={paragraph} />
              </p>
            ))}
          </div>
          <div className="hero__actions">
            <Button to={hero.primaryCta.to} variant="primary" arrow>
              {hero.primaryCta.label}
            </Button>
            <Button to={hero.secondaryCta.to} variant="secondary-on-dark">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>

      <Section>
        <figure className="concept-diagram">
          <img
            src={`/assets/matano-site-${locale}.svg`}
            alt={hero.imageAlt}
          />
          <figcaption className="caption concept-diagram__caption">
            {hero.caption}
          </figcaption>
        </figure>
      </Section>

      <Section>
        <div className="section-head">
          <h2>
            <Rich text={page.why.h2} />
          </h2>
          {page.why.body.map((paragraph, index) => (
            <p key={index}>
              <Rich text={paragraph} />
            </p>
          ))}
        </div>
        <CardGrid items={page.why.focuses} />
        <div className="cta-row">
          <Button to={page.why.cta.to} variant="secondary">
            {page.why.cta.label}
          </Button>
        </div>
      </Section>

      <Section className="section--alt" style={{ background: "var(--jlr-surface-alt)" }}>
        <div className="section-head">
          <h2>
            <Rich text={page.system.h2} />
          </h2>
          <p>
            <Rich text={page.system.body} />
          </p>
        </div>
        <CardGrid items={page.system.items} />
        <div className="cta-row">
          <Button to={page.system.cta.to} variant="secondary">
            {page.system.cta.label}
          </Button>
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <h2>
            <Rich text={page.validation.h2} />
          </h2>
          {page.validation.body.map((paragraph, index) => (
            <p key={index}>
              <Rich text={paragraph} />
            </p>
          ))}
        </div>
        <Button to={page.validation.cta.to} variant="secondary">
          {page.validation.cta.label}
        </Button>
      </Section>

      <Section className="section--alt" style={{ background: "var(--jlr-surface-alt)" }}>
        <div className="section-head">
          <h2>
            <Rich text={page.partnerships.h2} />
          </h2>
        </div>
        <CardGrid items={page.partnerships.tracks} />
        <div className="cta-row">
          <Button to={page.partnerships.cta.to} variant="secondary">
            {page.partnerships.cta.label}
          </Button>
        </div>
      </Section>

      <div className="section closing dark">
        <div className="container">
          <h2 className="closing__h2">
            <Rich text={page.closing.h2} />
          </h2>
          <p>
            <Rich text={page.closing.body} />
          </p>
          <Button to={page.closing.cta.to} variant="primary">
            {page.closing.cta.label}
          </Button>
        </div>
      </div>

      <div className="brand-band">
        <img
          className="brand-band__split"
          src="/assets/jalaranu-vivid-split-dark.svg"
          alt={content.site.logoAlt}
        />
        <img
          className="brand-band__vertical"
          src="/assets/jalaranu-vivid-logo-dark.svg"
          alt={content.site.logoAlt}
        />
        <p className="brand-band__slogan">{content.site.brandSlogan}</p>
      </div>
    </>
  );
}

function Technology({ page, locale }) {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1 style={{ fontSize: "var(--jlr-fs-h1)" }}>
            <Rich text={page.hero.h1} />
          </h1>
          <div className="hero__intro">
            <p>
              <Rich text={page.hero.body} />
            </p>
          </div>
          {page.index ? (
            <nav className="inpage-nav" aria-label={page.indexLabel}>
              <ul>
                {page.index.map((entry) => (
                  <li key={entry.id}>
                    <a href={`#${entry.id}`}>{entry.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>

      <Section id={page.architecture.anchor}>
        <div className="section-head">
          <h2>
            <Rich text={page.architecture.h2} />
          </h2>
          {page.architecture.body.map((paragraph, index) => (
            <p key={index}>
              <Rich text={paragraph} />
            </p>
          ))}
        </div>
        <figure className="concept-diagram">
          <img
            src={`/assets/matano-structure-${locale}.svg`}
            alt={page.architecture.imageAlt}
            loading="lazy"
          />
          <figcaption className="caption concept-diagram__caption">
            {page.architecture.imageCaption}
          </figcaption>
        </figure>
        <p className="caption visual-note">{page.architecture.visualNote}</p>
      </Section>

      <Section
        className="section--alt"
        style={{ background: "var(--jlr-surface-alt)" }}
        id={page.inside.anchor}
      >
        <div className="section-head">
          <h2>
            <Rich text={page.inside.h2} />
          </h2>
          {page.inside.intro.map((paragraph, index) => (
            <p key={index}>
              <Rich text={paragraph} />
            </p>
          ))}
        </div>
        <CardGrid items={page.inside.items} />
        <p className="caption visual-note">{page.inside.note}</p>
      </Section>

      <Section>
        <div className="section-head">
          <h2>
            <Rich text={page.engineering.h2} />
          </h2>
        </div>
        <ol className="numbered-list">
          {page.engineering.items.map((item) => (
            <li key={item.title} className="numbered-item">
              <div>
                <h3>
                  <Rich text={item.title} />
                </h3>
                <p>
                  <Rich text={item.body} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        className="section--alt"
        style={{ background: "var(--jlr-surface-alt)" }}
        id="comparison"
      >
        <div className="section-head">
          <h2>
            <Rich text={page.comparison.h2} />
          </h2>
          {page.comparison.body.map((paragraph, index) => (
            <p key={index}>
              <Rich text={paragraph} />
            </p>
          ))}
        </div>
      </Section>

      <Section id="placements">
        <div className="section-head">
          <h2>
            <Rich text={page.placements.h2} />
          </h2>
          {page.placements.intro.map((paragraph, index) => (
            <p key={index}>
              <Rich text={paragraph} />
            </p>
          ))}
        </div>
        <CardGrid items={page.placements.items} />
        <p className="caption visual-note">{page.placements.note}</p>
      </Section>

      <Section
        className="section--alt"
        style={{ background: "var(--jlr-surface-alt)" }}
        id="scenarios"
      >
        <div className="section-head">
          <h2>
            <Rich text={page.scenarios.h2} />
          </h2>
          {page.scenarios.body.map((paragraph, index) => (
            <p key={index}>
              <Rich text={paragraph} />
            </p>
          ))}
        </div>
        <Button to={page.scenarios.cta.to} variant="secondary">
          {page.scenarios.cta.label}
        </Button>
      </Section>
    </>
  );
}

function Validation({ page }) {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1 style={{ fontSize: "var(--jlr-fs-h1)" }}>
            <Rich text={page.hero.h1} />
          </h1>
          <div className="hero__intro">
            <p>
              <Rich text={page.hero.body} />
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="section-head">
          <h2>
            <Rich text={page.status.h2} />
          </h2>
        </div>
        <ul className="status-list">
          {page.status.items.map((item, index) => (
            <li key={index}>
              <Rich text={item} />
            </li>
          ))}
        </ul>
      </Section>

      <Section className="section--alt" style={{ background: "var(--jlr-surface-alt)" }}>
        <div className="section-head">
          <h2>
            <Rich text={page.plan.h2} />
          </h2>
          <p>
            <Rich text={page.plan.body} />
          </p>
        </div>
        <div className="table-wrap">
          <table className="plan-table">
            <thead>
              <tr>
                <th>{page.plan.tableHeaderArea || "Area"}</th>
                <th>{page.plan.tableHeaderQuestion || "Question"}</th>
              </tr>
            </thead>
            <tbody>
              {page.plan.table.map((row) => (
                <tr key={row.area}>
                  <td>
                    <Rich text={row.area} />
                  </td>
                  <td>
                    <Rich text={row.question} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <h2>
            <Rich text={page.framework.h2} />
          </h2>
        </div>
        <ol className="numbered-list">
          {page.framework.steps.map((step) => (
            <li key={step.title} className="numbered-item">
              <div>
                <h3>
                  <Rich text={step.title} />
                </h3>
                <p>
                  <Rich text={step.body} />
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="caption visual-note">{page.framework.note}</p>
      </Section>

      <Section
        className="section--alt"
        style={{ background: "var(--jlr-surface-alt)" }}
        id="environment"
      >
        <div className="section-head">
          <h2>
            <Rich text={page.environment.h2} />
          </h2>
          {page.environment.body.map((paragraph, index) => (
            <p key={index}>
              <Rich text={paragraph} />
            </p>
          ))}
        </div>
        {page.environment.items ? (
          <CardGrid items={page.environment.items} />
        ) : null}
      </Section>

      <Section>
        <div className="section-head">
          <h2>
            <Rich text={page.results.h2} />
          </h2>
          <p>
            <Rich text={page.results.body} />
          </p>
        </div>
        <Button to={page.results.cta.to} variant="secondary">
          {page.results.cta.label}
        </Button>
      </Section>

      <Section className="section--alt" style={{ background: "var(--jlr-surface-alt)" }}>
        <div className="section-head">
          <h2>
            <Rich text={page.faqTitle} />
          </h2>
        </div>
        <FAQ items={page.faq} />
      </Section>
    </>
  );
}

function Partnerships({ page, locale }) {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1 style={{ fontSize: "var(--jlr-fs-h1)" }}>
            <Rich text={page.hero.h1} />
          </h1>
          <div className="hero__intro">
            <p>
              <Rich text={page.hero.body} />
            </p>
          </div>
        </div>
      </div>

      <Section>
        {page.tracks.map((track) => (
          <div className="track" id={track.id} key={track.id}>
            <h2>
              <Rich text={track.h2} />
            </h2>
            {track.body.map((paragraph, index) => (
              <p key={index}>
                <Rich text={paragraph} />
              </p>
            ))}
            <Button to={`?type=${track.cta.formPreset}#contact`} variant="secondary">
              {track.cta.label}
            </Button>
          </div>
        ))}
      </Section>

      <Section className="section--alt" style={{ background: "var(--jlr-surface-alt)" }}>
        <div className="section-head">
          <h2>
            <Rich text={page.process.h2} />
          </h2>
        </div>
        <ol className="numbered-list">
          {page.process.steps.map((step) => (
            <li key={step} className="numbered-item">
              <div>
                <p>
                  <Rich text={step} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="contact">
        <div className="section-head">
          <h2>
            <Rich text={page.contact.h2} />
          </h2>
          <p>
            <Rich text={page.contact.body} />
          </p>
        </div>
        <ContactForm contact={page.contact} privacyPath={`/${locale}/privacy/`} />
      </Section>
    </>
  );
}

function About({ page, content }) {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1 style={{ fontSize: "var(--jlr-fs-h1)" }}>
            <Rich text={page.hero.h1} />
          </h1>
          <div className="hero__intro">
            <p>
              <Rich text={page.hero.body} />
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="section-head">
          <h2>
            <Rich text={page.story.h2} />
          </h2>
        </div>
        <img
          className="about-mark"
          src="/assets/jalaranu-vivid-mark.svg"
          alt={content.site.logoAlt}
        />
        <div className="prose">
          {page.story.body.map((paragraph, index) => (
            <p key={index}>
              <Rich text={paragraph} />
            </p>
          ))}
        </div>
      </Section>

      <Section className="section--alt" style={{ background: "var(--jlr-surface-alt)" }}>
        <div className="section-head">
          <h2>
            <Rich text={page.principles.h2} />
          </h2>
        </div>
        <CardGrid items={page.principles.items} />
      </Section>

      <Section>
        <div className="section-head">
          <h2>
            <Rich text={page.team.h2} />
          </h2>
          <p>
            <Rich text={page.team.body} />
          </p>
        </div>
        <Button to={page.team.cta.to} variant="secondary">
          {page.team.cta.label}
        </Button>
      </Section>
    </>
  );
}

function Privacy({ page }) {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>
            <Rich text={page.h1} />
          </h1>
          <div className="hero__intro">
            {page.body.map((paragraph, index) => (
              <p key={index}>
                <Rich text={paragraph} />
              </p>
            ))}
          </div>
        </div>
      </div>
      <Section>
        {page.sections.map((section) => (
          <div className="privacy-section" key={section.title}>
            <h2>
              <Rich text={section.title} />
            </h2>
            {section.body.map((paragraph, index) => (
              <p key={index}>
                <Rich text={paragraph} />
              </p>
            ))}
          </div>
        ))}
      </Section>
    </>
  );
}

function NotFound({ page, locale }) {
  return (
    <div className="hero">
      <div className="container">
        <h1>
          <Rich text={page.h1} />
        </h1>
        <div className="hero__intro">
          <p>
            <Rich text={page.body} />
          </p>
        </div>
        <Button to={`/${locale}/`} variant="primary">
          {page.back}
        </Button>
      </div>
    </div>
  );
}

export default function Page({ pageContext }) {
  const { locale, pageKey, content, currentPath, equivalentPath } = pageContext;
  const page = content.pages[pageKey];

  let body;
  switch (pageKey) {
    case "home":
      body = <Home page={page} locale={locale} content={content} />;
      break;
    case "technology":
      body = <Technology page={page} locale={locale} />;
      break;
    case "validation":
      body = <Validation page={page} />;
      break;
    case "partnerships":
      body = <Partnerships page={page} locale={locale} />;
      break;
    case "about":
      body = <About page={page} content={content} />;
      break;
    case "privacy":
      body = <Privacy page={page} />;
      break;
    case "notFound":
      body = <NotFound page={page} locale={locale} />;
      break;
    default:
      body = null;
  }

  return (
    <Layout
      locale={locale}
      content={content}
      currentPath={currentPath}
      equivalentPath={equivalentPath}
    >
      {body}
    </Layout>
  );
}

export function Head(props) {
  const { locale, pageKey, content, currentPath, equivalentPath, siteUrl } =
    props.pageContext;
  const page = content.pages[pageKey];
  const seoTitle = page.seoTitle || content.site.title;
  const seoDescription = page.seoDescription || content.site.description;
  const canonical = `${siteUrl}${currentPath}`;
  const alternate = `${siteUrl}${equivalentPath}`;
  const isNotFound = pageKey === "notFound";
  const xDefault = `${siteUrl}${locale === "en" ? currentPath : equivalentPath}`;

  return (
    <>
      <html lang={locale} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      {isNotFound ? <meta name="robots" content="noindex,follow" /> : null}
      {!isNotFound ? <link rel="canonical" href={canonical} /> : null}
      {!isNotFound ? <link rel="alternate" hreflang={locale} href={canonical} /> : null}
      {!isNotFound ? (
        <link rel="alternate" hreflang={locale === "en" ? "id" : "en"} href={alternate} />
      ) : null}
      {!isNotFound ? (
        <link rel="alternate" hreflang="x-default" href={xDefault} />
      ) : null}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content="website" />
      {!isNotFound ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:locale" content={locale === "en" ? "en_US" : "id_ID"} />
      <meta property="og:site_name" content={content.site.title} />
    </>
  );
}
