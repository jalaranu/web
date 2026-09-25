import React from "react";
import Rich from "./Rich";

export default function FAQ({ items = [] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>
            <Rich text={item.q} />
          </summary>
          <div className="faq__answer">
            <p>
              <Rich text={item.a} />
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
