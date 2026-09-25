import React from "react";
import Rich from "./Rich";

export default function CardGrid({ items = [], columns }) {
  const count = items.length;
  const countClass =
    count === 2 ? "card--count-2" : count === 3 ? "card--count-3" : count === 4 ? "card--count-4" : "";

  return (
    <div className="card-grid">
      {items.map((item) => (
        <div key={item.title} className={`card ${countClass}`.trim()}>
          <h3>
            <Rich text={item.title} />
          </h3>
          <p>
            <Rich text={item.body} />
          </p>
        </div>
      ))}
    </div>
  );
}
