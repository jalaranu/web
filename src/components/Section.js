import React from "react";

export default function Section({ id, eyebrow, className = "", children, ...rest }) {
  return (
    <section id={id} className={`section ${className}`.trim()} {...rest}>
      <div className="container">
        {eyebrow ? <span className="overline">{eyebrow}</span> : null}
        {children}
      </div>
    </section>
  );
}
