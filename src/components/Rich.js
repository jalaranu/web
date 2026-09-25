import React from "react";

export default function Rich({ text }) {
  if (!text) return null;

  const parts = String(text).split(/(\*\*[^*]+\*\*|==[^=]+==)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("==") && part.endsWith("==")) {
          return (
            <mark key={i} className="jlr-mark">
              {part.slice(2, -2)}
            </mark>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}
