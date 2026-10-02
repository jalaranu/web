import React, { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyCitation({ text, label, copiedLabel }) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const copy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        ok = document.execCommand("copy");
      } catch {
        ok = false;
      }
      document.body.removeChild(textarea);
    }
    if (ok) {
      setCopied(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <span className="cite-copy">
      <button
        type="button"
        className="cite-copy__btn"
        data-copied={copied ? "true" : "false"}
        aria-label={copied ? copiedLabel : label}
        onClick={copy}
      >
        {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
      </button>
      <span className="cite-copy__status" role="status" aria-live="polite">
        {copied ? copiedLabel : null}
      </span>
    </span>
  );
}
