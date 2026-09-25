import React, { useEffect, useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PRESET_TO_OPTION = {
  investor: 0,
  institution: 1,
  industry: 2,
  research: 3,
};

function readHashPreset() {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash || "";
  const queryIndex = hash.indexOf("?");
  if (queryIndex === -1) return null;
  const query = hash.slice(queryIndex + 1);
  const params = new URLSearchParams(query);
  const type = params.get("type");
  if (!type) return null;
  return PRESET_TO_OPTION[type] ?? null;
}

export default function ContactForm({ contact, privacyPath }) {
  const fields = contact.fields;

  const [values, setValues] = useState({
    name: "",
    org: "",
    email: "",
    type: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const applyPreset = () => {
      const presetIndex = readHashPreset();
      if (presetIndex !== null) {
        setValues((previous) => ({
          ...previous,
          type: fields.typeOptions[presetIndex] || "",
        }));
      }
    };
    applyPreset();
    window.addEventListener("hashchange", applyPreset);
    return () => window.removeEventListener("hashchange", applyPreset);
  }, [fields.typeOptions]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    if (errors[name]) {
      setErrors((previous) => ({ ...previous, [name]: undefined }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = contact.requiredError;
    if (!values.org.trim()) nextErrors.org = contact.requiredError;
    if (!values.email.trim()) {
      nextErrors.email = contact.requiredError;
    } else if (!EMAIL_RE.test(values.email.trim())) {
      nextErrors.email = contact.emailError;
    }
    if (!values.type) nextErrors.type = contact.requiredError;
    if (!values.message.trim()) nextErrors.message = contact.requiredError;
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    const endpoint = typeof window !== "undefined" ? window.JLR_FORM_ENDPOINT : null;
    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          org: values.org.trim(),
          email: values.email.trim(),
          type: values.type,
          message: values.message.trim(),
        }),
      });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      setStatus("success");
      setValues({ name: "", org: "", email: "", type: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__field">
        <label className="form__label" htmlFor="contact-name">
          {fields.name}
        </label>
        <input
          className="form__input"
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={errors.name ? "true" : undefined}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name ? (
          <span className="form__error" id="contact-name-error">
            {errors.name}
          </span>
        ) : null}
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="contact-org">
          {fields.org}
        </label>
        <input
          className="form__input"
          id="contact-org"
          name="org"
          type="text"
          autoComplete="organization"
          value={values.org}
          onChange={handleChange}
          aria-invalid={errors.org ? "true" : undefined}
          aria-describedby={errors.org ? "contact-org-error" : undefined}
        />
        {errors.org ? (
          <span className="form__error" id="contact-org-error">
            {errors.org}
          </span>
        ) : null}
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="contact-email">
          {fields.email}
        </label>
        <input
          className="form__input"
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email ? (
          <span className="form__error" id="contact-email-error">
            {errors.email}
          </span>
        ) : null}
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="contact-type">
          {fields.type}
        </label>
        <select
          className="form__select"
          id="contact-type"
          name="type"
          value={values.type}
          onChange={handleChange}
          aria-invalid={errors.type ? "true" : undefined}
          aria-describedby={errors.type ? "contact-type-error" : undefined}
        >
          <option value="">—</option>
          {fields.typeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.type ? (
          <span className="form__error" id="contact-type-error">
            {errors.type}
          </span>
        ) : null}
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="contact-message">
          {fields.message}
        </label>
        <textarea
          className="form__textarea"
          id="contact-message"
          name="message"
          value={values.message}
          placeholder={fields.messagePlaceholder}
          onChange={handleChange}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "contact-message-error" : "contact-message-help"}
        />
        {errors.message ? (
          <span className="form__error" id="contact-message-error">
            {errors.message}
          </span>
        ) : null}
        <span className="form__help" id="contact-message-help">{contact.helpText}</span>
      </div>

      <button className="btn btn--primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "…" : fields.submit}
      </button>

      {status === "error" ? (
        <div className="form__status form__status--error" role="alert">
          {contact.error}
        </div>
      ) : null}
      {status === "success" ? (
        <div className="form__status form__status--success" role="alert">
          {contact.success}
        </div>
      ) : null}

      <p className="form__privacy">
        <a href={privacyPath}>{contact.privacyLink}</a>
      </p>
    </form>
  );
}
