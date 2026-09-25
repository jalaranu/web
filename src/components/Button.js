import React from "react";
import { ArrowRight } from "lucide-react";

export default function Button({ to, variant = "primary", onClick, children, type, arrow }) {
  const label = (
    <>
      {children}
      {arrow ? <ArrowRight size={16} aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <a className={`btn btn--${variant}`} href={to} onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <button
      className={`btn btn--${variant}`}
      type={type || "button"}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
