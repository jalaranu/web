import React from "react";

export default function FAQ({ items = [] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <div className="faq__answer">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
