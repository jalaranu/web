import React from "react";

const FLAG_EDGE = "rgba(16, 24, 32, 0.25)";

export function FlagGB() {
  return (
    <svg
      className="flag"
      viewBox="0 0 24 16"
      role="img"
      aria-label=""
      focusable="false"
    >
      <rect width="24" height="16" fill="#012169" />
      <g stroke="#FFFFFF" strokeWidth="2.6">
        <path d="M0 0 L24 16 M24 0 L0 16" />
        <path d="M0 8 H24 M12 0 V16" />
      </g>
      <g stroke="#C8102E" strokeWidth="1.3">
        <path d="M0 0 L24 16 M24 0 L0 16" />
        <path d="M0 8 H24 M12 0 V16" />
      </g>
      <rect width="24" height="16" fill="none" stroke={FLAG_EDGE} strokeWidth="0.6" />
    </svg>
  );
}

export function FlagID() {
  return (
    <svg
      className="flag"
      viewBox="0 0 24 16"
      role="img"
      aria-label=""
      focusable="false"
    >
      <rect width="24" height="8" fill="#CE1126" />
      <rect y="8" width="24" height="8" fill="#FFFFFF" />
      <rect width="24" height="16" fill="none" stroke={FLAG_EDGE} strokeWidth="0.6" />
    </svg>
  );
}

export function Flag({ code }) {
  return code === "id" ? <FlagID /> : <FlagGB />;
}
