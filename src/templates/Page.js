import React from "react";
import {
  Anchor,
  Archive,
  Boxes,
  Building2,
  ClipboardList,
  Cpu,
  Database,
  DollarSign,
  Droplets,
  FlaskConical,
  History,
  KeyRound,
  Landmark,
  Layers,
  LifeBuoy,
  Lock,
  Plane,
  FileText,
  Radar,
  Radio,
  RotateCcw,
  Scale,
  Search,
  Server,
  Shield,
  ShieldCheck,
  Thermometer,
  UserCog,
  Waves,
} from "lucide-react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Button from "../components/Button";
import CardGrid from "../components/CardGrid";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Rich from "../components/Rich";
import HeroCarousel from "../components/HeroCarousel";
import FlowDiagram from "../components/FlowDiagram";
import InPageNav from "../components/InPageNav";

const PLACEMENT_ICONS = {
  building2: Building2,
  "shield-check": ShieldCheck,
  shield: Shield,
  waves: Waves,
  droplets: Droplets,
  history: History,
  thermometer: Thermometer,
  scale: Scale,
  anchor: Anchor,
  landmark: Landmark,
  plane: Plane,
  boxes: Boxes,
  "dollar-sign": DollarSign,
  "flask-conical": FlaskConical,
};

const USECASES_ICONS = {
  lock: Lock,
  "life-buoy": LifeBuoy,
  radio: Radio,
  radar: Radar,
  cpu: Cpu,
  server: Server,
  "clipboard-list": ClipboardList,
  archive: Archive,
  database: Database,
  layers: Layers,
  "key-round": KeyRound,
  shield: Shield,
  "rotate-ccw": RotateCcw,
  "user-cog": UserCog,
  search: Search,
  "flask-conical": FlaskConical,
  scale: Scale,
};

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
            <InPageNav
              items={page.index}
              label={page.indexLabel}
              moreLabel={page.indexMoreLabel}
            />
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
        <div className="compare-wrap">
          <table className="compare-table">
            <caption className="sr-only">{page.placements.h2}</caption>
            <thead>
              <tr>
                <th className="compare-table__corner" scope="col">
                  <span className="sr-only">{page.placements.table.rowHeading}</span>
                </th>
                {page.placements.table.columns.map((column, index) => {
                  const ColumnIcon = PLACEMENT_ICONS[column.icon];
                  return (
                    <th
                      key={column.name}
                      scope="col"
                      className={index === 0 ? "is-jalaranu" : undefined}
                    >
                      <span className="compare-table__header-icon">
                        {ColumnIcon ? <ColumnIcon size={18} aria-hidden="true" /> : null}
                      </span>
                      <span className="compare-table__header-name">{column.name}</span>
                      <span className="compare-table__header-sub">{column.sub}</span>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {page.placements.table.rows.map((row) => {
                const RowIcon = PLACEMENT_ICONS[row.icon];
                return (
                  <tr key={row.label}>
                    <th scope="row" className="compare-table__row-label">
                      <span className="compare-table__row-icon">
                        {RowIcon ? <RowIcon size={16} aria-hidden="true" /> : null}
                      </span>
                      <span>{row.label}</span>
                    </th>
                    {row.values.map((value, index) => {
                      const cell =
                        typeof value === "object" && value !== null
                          ? value
                          : { text: value };
                      const classes = [];
                      if (index === 0) classes.push("is-jalaranu");
                      if (cell.highlight) classes.push("is-highlight");
                      return (
                        <td
                          key={index}
                          className={classes.length ? classes.join(" ") : undefined}
                        >
                          {cell.text}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
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

function UseCases({ page, locale }) {
  const flowSteps = page.approach.flow.map((step) => ({
    ...step,
    Icon: USECASES_ICONS[step.icon],
  }));

  return (
    <>
      <div className="hero">
        <div className="container">
          <span className="overline">{page.hero.eyebrow}</span>
          <h1>
            <Rich text={page.hero.h1} />
          </h1>
          <div className="hero__intro">
            {page.hero.intro.map((paragraph, index) => (
              <p key={index}>
                <Rich text={paragraph} />
              </p>
            ))}
          </div>
          <div className="hero__actions">
            <Button to={page.hero.primaryCta.to} variant="primary" arrow>
              {page.hero.primaryCta.label}
            </Button>
            <Button to={page.hero.secondaryCta.to} variant="secondary">
              {page.hero.secondaryCta.label}
            </Button>
          </div>
          {page.index ? (
            <InPageNav
              items={page.index}
              label={page.indexLabel}
              moreLabel={page.indexMoreLabel}
            />
          ) : null}
        </div>
      </div>

      <section className="section" id="data">
        <div className="container">
          <div className="section-head">
            <h2>
              <Rich text={page.data.h2} />
            </h2>
            {page.data.intro.map((paragraph, index) => (
              <p key={index}>
                <Rich text={paragraph} />
              </p>
            ))}
          </div>
        </div>
        <figure className="concept-diagram concept-diagram--breakout">
          <img
            src={`/assets/matano-site-${locale}.svg`}
            alt={page.data.illustrationAlt}
            loading="lazy"
          />
          <figcaption className="caption concept-diagram__caption">
            <div className="container">{page.data.illustrationCaption}</div>
          </figcaption>
        </figure>
        <div className="container">
          <div className="table-wrap requirement-wrap">
            <table className="plan-table requirement-table">
              <caption className="sr-only">{page.data.h2}</caption>
              <thead>
                <tr>
                  <th>{page.data.tableHeaderRequirement}</th>
                  <th>{page.data.tableHeaderFocus}</th>
                  <th>{page.data.tableHeaderApplications}</th>
                </tr>
              </thead>
              <tbody>
                {page.data.rows.map((row) => {
                  const Icon = USECASES_ICONS[row.icon];
                  return (
                    <tr key={row.requirement}>
                      <th scope="row" className="requirement-table__label">
                        <span className="requirement-table__icon">
                          {Icon ? <Icon size={16} aria-hidden="true" /> : null}
                        </span>
                        <span>
                          <Rich text={row.requirement} />
                        </span>
                      </th>
                      <td>
                        <Rich text={row.focus} />
                      </td>
                      <td>
                        <Rich text={row.applications} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Section
        className="section--alt"
        style={{ background: "var(--jlr-surface-alt)" }}
        id="use-cases"
      >
        <div className="section-head">
          <h2>
            <Rich text={page.explore.h2} />
          </h2>
          {page.explore.intro.map((paragraph, index) => (
            <p key={index}>
              <Rich text={paragraph} />
            </p>
          ))}
          <p className="caption uc-explore__hint">{page.explore.cardsLabel}</p>
        </div>
        <div className="uc-grid">
          {page.explore.cards.map((card, index) => {
            const Icon = USECASES_ICONS[card.icon];
            return (
              <a
                className="uc-card"
                href={`#uc-${index + 1}`}
                key={card.id}
                aria-label={`${String(index + 1).padStart(2, "0")} ${card.title}`}
              >
                <div className="uc-card__top">
                  <span className="uc-card__num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="uc-card__icon">
                    {Icon ? <Icon size={22} aria-hidden="true" /> : null}
                  </span>
                </div>
                <h3 className="uc-card__title">
                  <Rich text={card.title} />
                </h3>
                {card.titleEn ? (
                  <span className="uc-card__name">{card.titleEn}</span>
                ) : null}
                <ul className="uc-card__sectors">
                  {card.sectors.map((sector) => (
                    <li key={sector} className="badge">
                      {sector}
                    </li>
                  ))}
                </ul>
              </a>
            );
          })}
        </div>
      </Section>

      <Section className="uc-details">
        {page.explore.cards.map((card, index) => {
          const Icon = USECASES_ICONS[card.icon];
          return (
            <article
              className="uc-detail"
              id={`uc-${index + 1}`}
              key={card.id}
            >
              <header className="uc-detail__head">
                <span className="uc-detail__num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="uc-detail__icon">
                  {Icon ? <Icon size={22} aria-hidden="true" /> : null}
                </span>
                <div className="uc-detail__titles">
                  <h3>
                    <Rich text={card.title} />
                  </h3>
                  {card.titleEn ? (
                    <span className="uc-detail__name">{card.titleEn}</span>
                  ) : null}
                </div>
                <ul
                  className="uc-detail__sectors"
                  aria-label={page.explore.sectorsLabel}
                >
                  {card.sectors.map((sector) => (
                    <li key={sector} className="badge">
                      {sector}
                    </li>
                  ))}
                </ul>
              </header>
              <p className="uc-detail__body">
                <Rich text={card.body} />
              </p>
              <div className="uc-detail__cols">
                <div>
                  <h4 className="uc-detail__label">
                    {page.explore.applicationsLabel}
                  </h4>
                  <ul className="uc-list">
                    {card.applications.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Rich text={item} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="uc-detail__facts">
                  <div className="uc-fact">
                    <h4 className="uc-detail__label">
                      {page.explore.objectiveLabel}
                    </h4>
                    <p>
                      <Rich text={card.objective} />
                    </p>
                  </div>
                  <div className="uc-fact">
                    <h4 className="uc-detail__label">
                      {page.explore.validateLabel}
                    </h4>
                    <p>
                      <Rich text={card.toValidate} />
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </Section>

      <Section
        className="section--alt"
        style={{ background: "var(--jlr-surface-alt)" }}
        id="mapping"
      >
        <div className="section-head">
          <h2>
            <Rich text={page.mapping.h2} />
          </h2>
          {page.mapping.intro.map((paragraph, index) => (
            <p key={index}>
              <Rich text={paragraph} />
            </p>
          ))}
        </div>
        <div className="table-wrap">
          <table className="plan-table sector-table">
            <caption className="sr-only">{page.mapping.h2}</caption>
            <thead>
              <tr>
                <th>{page.mapping.tableHeaderSector}</th>
                <th>{page.mapping.tableHeaderRequirements}</th>
                <th>{page.mapping.tableHeaderUseCases}</th>
              </tr>
            </thead>
            <tbody>
              {page.mapping.rows.map((row) => (
                <tr key={row.sector}>
                  <th scope="row" className="sector-table__sector">
                    {row.sector}
                  </th>
                  <td>
                    <Rich text={row.requirements} />
                  </td>
                  <td className="sector-table__uc">
                    {row.useCases.map((num) => (
                      <a
                        key={num}
                        className="uc-chip"
                        href={`#uc-${num}`}
                        aria-label={`Use case ${num}`}
                      >
                        {num}
                      </a>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="needs">
        <div className="section-head">
          <h2>
            <Rich text={page.needs.h2} />
          </h2>
        </div>
        <div className="card-grid">
          {page.needs.items.map((item) => {
            const Icon = USECASES_ICONS[item.icon];
            return (
              <div className="card need-card card--count-4" key={item.title}>
                <span className="need-card__icon">
                  {Icon ? <Icon size={20} aria-hidden="true" /> : null}
                </span>
                <h3>
                  <Rich text={item.title} />
                </h3>
                <p>
                  <Rich text={item.body} />
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        className="section--alt"
        style={{ background: "var(--jlr-surface-alt)" }}
        id="approach"
      >
        <div className="section-head">
          <h2>
            <Rich text={page.approach.h2} />
          </h2>
          {page.approach.body.map((paragraph, index) => (
            <p key={index}>
              <Rich text={paragraph} />
            </p>
          ))}
        </div>
        <FlowDiagram steps={flowSteps} label={page.approach.flowLabel} />
        <p className="caption visual-note">{page.approach.flowCaption}</p>
        <div className="approach-block">
          <h3 className="approach-block__title">
            <Rich text={page.approach.discussionIntro} />
          </h3>
          <ol className="numbered-list">
            {page.approach.discussion.map((item, index) => (
              <li key={index} className="numbered-item">
                <div>
                  <p>
                    <Rich text={item} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="scope-callout">
          <span className="overline">{page.approach.scopeTitle}</span>
          <p>
            <Rich text={page.approach.scope} />
          </p>
        </div>
        <div className="cta-row">
          <Button to={page.approach.cta.to} variant="secondary">
            {page.approach.cta.label}
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
          <Button to={page.closing.cta.to} variant="primary" arrow>
            {page.closing.cta.label}
          </Button>
          <p className="closing__helper">{page.closing.helperText}</p>
        </div>
      </div>
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

      <Section id="paper">
        <div className="section-head">
          <h2>
            <Rich text={page.paper.h2} />
          </h2>
          <p>
            <Rich text={page.paper.body} />
          </p>
        </div>
        <a
          className="btn btn--secondary paper-link"
          href={page.paper.linkHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText size={16} aria-hidden="true" />
          <span>{page.paper.linkLabel}</span>
          <span className="paper-link__cite">{page.paper.cite}</span>
        </a>
      </Section>

      <Section
        className="team-section section--alt"
        style={{ background: "var(--jlr-surface-alt)" }}
        id="team"
      >
        <div className="section-head">
          <h2>
            <Rich text={page.team.h2} />
          </h2>
          <p>
            <Rich text={page.team.body} />
          </p>
        </div>
        {page.team.items ? (
          <ul className="partner-grid">
            {page.team.items.map((partner) => (
              <li key={partner.name}>
                <a
                  className="partner-logo-link"
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={partner.name}
                >
                  <img src={partner.logo} alt={partner.name} loading="lazy" />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
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
    case "useCases":
      body = <UseCases page={page} locale={locale} />;
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
  const ogImage = `${siteUrl}/assets/og-default${locale === "id" ? "-id" : ""}.png`;

  return (
    <>
      <html lang={locale} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      {isNotFound ? <meta name="robots" content="noindex,follow" /> : null}
      {!isNotFound ? <meta name="robots" content="index,follow" /> : null}
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
      {!isNotFound ? <meta property="og:image" content={ogImage} /> : null}
      {!isNotFound ? (
        <meta property="og:image:alt" content={content.site.ogImageAlt} />
      ) : null}
      {!isNotFound ? (
        <meta property="og:image:width" content="1200" />
      ) : null}
      {!isNotFound ? (
        <meta property="og:image:height" content="630" />
      ) : null}
      {!isNotFound ? (
        <meta name="twitter:card" content="summary_large_image" />
      ) : null}
      {!isNotFound ? (
        <meta name="twitter:title" content={seoTitle} />
      ) : null}
      {!isNotFound ? (
        <meta name="twitter:description" content={seoDescription} />
      ) : null}
      {!isNotFound ? <meta name="twitter:image" content={ogImage} /> : null}
      {!isNotFound ? (
        <meta name="twitter:image:alt" content={content.site.ogImageAlt} />
      ) : null}
    </>
  );
}
