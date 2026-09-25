import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Button from "../components/Button";
import CardGrid from "../components/CardGrid";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";

function Home({ page, locale, content }) {
  const hero = page.hero;
  return (
    <>
      <div className="hero">
        <div className="container">
          <span className="overline">{hero.eyebrow}</span>
          <h1>{hero.h1}</h1>
          <div className="hero__intro">
            {hero.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="hero__actions">
            <Button to={hero.primaryCta.to} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button to={hero.secondaryCta.to} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <figure className="concept-diagram">
            <img
              src={`/assets/matano-site-${locale}.svg`}
              alt={hero.imageAlt}
            />
            <figcaption className="caption concept-diagram__caption">
              {hero.caption}
            </figcaption>
          </figure>
        </div>
      </div>

      <Section>
        <div className="section-head">
          <h2>{page.why.h2}</h2>
          {page.why.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
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
          <h2>{page.system.h2}</h2>
          <p>{page.system.body}</p>
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
          <h2>{page.validation.h2}</h2>
          {page.validation.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <Button to={page.validation.cta.to} variant="secondary">
          {page.validation.cta.label}
        </Button>
      </Section>

      <Section className="section--alt" style={{ background: "var(--jlr-surface-alt)" }}>
        <div className="section-head">
          <h2>{page.partnerships.h2}</h2>
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
          <h2 className="closing__h2">{page.closing.h2}</h2>
          <p>{page.closing.body}</p>
          <Button to={page.closing.cta.to} variant="primary">
            {page.closing.cta.label}
          </Button>
        </div>
      </div>

      <div className="brand-band">
        <img
          src="/assets/jalaranu-vivid-split-dark.svg"
          alt={content.site.logoAlt}
        />
      </div>
    </>
  );
}

function Technology({ page, locale }) {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1 style={{ fontSize: "var(--jlr-fs-h1)" }}>{page.hero.h1}</h1>
          <div className="hero__intro">
            <p>{page.hero.body}</p>
          </div>
        </div>
      </div>

      <Section id={page.architecture.anchor}>
        <div className="section-head">
          <h2>{page.architecture.h2}</h2>
          {page.architecture.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
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

      <Section className="section--alt" style={{ background: "var(--jlr-surface-alt)" }}>
        <div className="section-head">
          <h2>{page.engineering.h2}</h2>
        </div>
        <ol className="numbered-list">
          {page.engineering.items.map((item) => (
            <li key={item.title} className="numbered-item">
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="section-head">
          <h2>{page.comparison.h2}</h2>
          {page.comparison.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section className="section--alt" style={{ background: "var(--jlr-surface-alt)" }}>
        <div className="section-head">
          <h2>{page.scenarios.h2}</h2>
          {page.scenarios.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
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
          <h1 style={{ fontSize: "var(--jlr-fs-h1)" }}>{page.hero.h1}</h1>
          <div className="hero__intro">
            <p>{page.hero.body}</p>
          </div>
        </div>
      </div>

      <Section>
        <div className="section-head">
          <h2>{page.status.h2}</h2>
        </div>
        <ul className="status-list">
          {page.status.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section className="section--alt" style={{ background: "var(--jlr-surface-alt)" }}>
        <div className="section-head">
          <h2>{page.plan.h2}</h2>
          <p>{page.plan.body}</p>
        </div>
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
                <td>{row.area}</td>
                <td>{row.question}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section>
        <div className="section-head">
          <h2>{page.framework.h2}</h2>
        </div>
        <ol className="numbered-list">
          {page.framework.steps.map((step) => (
            <li key={step.title} className="numbered-item">
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="caption visual-note">{page.framework.note}</p>
      </Section>

      <Section className="section--alt" style={{ background: "var(--jlr-surface-alt)" }}>
        <div className="section-head">
          <h2>{page.environment.h2}</h2>
          {page.environment.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-head">
          <h2>{page.results.h2}</h2>
          <p>{page.results.body}</p>
        </div>
        <Button to={page.results.cta.to} variant="secondary">
          {page.results.cta.label}
        </Button>
      </Section>

      <Section className="section--alt" style={{ background: "var(--jlr-surface-alt)" }}>
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
          <h1 style={{ fontSize: "var(--jlr-fs-h1)" }}>{page.hero.h1}</h1>
          <div className="hero__intro">
            <p>{page.hero.body}</p>
          </div>
        </div>
      </div>

      <Section>
        {page.tracks.map((track) => (
          <div className="track" id={track.id} key={track.id}>
            <h2>{track.h2}</h2>
            {track.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <Button to={`#contact?type=${track.cta.formPreset}`} variant="secondary">
              {track.cta.label}
            </Button>
          </div>
        ))}
      </Section>

      <Section className="section--alt" style={{ background: "var(--jlr-surface-alt)" }}>
        <div className="section-head">
          <h2>{page.process.h2}</h2>
        </div>
        <ol className="numbered-list">
          {page.process.steps.map((step) => (
            <li key={step} className="numbered-item">
              <div>
                <p>{step}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="contact">
        <div className="section-head">
          <h2>{page.contact.h2}</h2>
          <p>{page.contact.body}</p>
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
          <h1 style={{ fontSize: "var(--jlr-fs-h1)" }}>{page.hero.h1}</h1>
          <div className="hero__intro">
            <p>{page.hero.body}</p>
          </div>
        </div>
      </div>

      <Section>
        <div className="section-head">
          <h2>{page.story.h2}</h2>
        </div>
        <img
          className="about-mark"
          src="/assets/jalaranu-vivid-mark.svg"
          alt={content.site.logoAlt}
        />
        <div className="prose">
          {page.story.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section className="section--alt" style={{ background: "var(--jlr-surface-alt)" }}>
        <div className="section-head">
          <h2>{page.principles.h2}</h2>
        </div>
        <CardGrid items={page.principles.items} />
      </Section>

      <Section>
        <div className="section-head">
          <h2>{page.team.h2}</h2>
          <p>{page.team.body}</p>
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
    <div className="hero">
      <div className="container">
        <h1>{page.h1}</h1>
        <div className="hero__intro">
          {page.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function NotFound({ page, locale }) {
  return (
    <div className="hero">
      <div className="container">
        <h1>{page.h1}</h1>
        <div className="hero__intro">
          <p>{page.body}</p>
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

  return (
    <>
      <html lang={locale} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hreflang={locale} href={canonical} />
      <link rel="alternate" hreflang={locale === "en" ? "id" : "en"} href={alternate} />
      <link rel="alternate" hreflang="x-default" href={`${siteUrl}/en/`} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={locale === "en" ? "en_US" : "id_ID"} />
      <meta property="og:site_name" content={content.site.title} />
    </>
  );
}
