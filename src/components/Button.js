import React from "react";

export default function Button({ to, variant = "primary", onClick, children, type }) {
  if (to) {
    return (
      <a className={`btn btn--${variant}`} href={to} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={`btn btn--${variant}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
