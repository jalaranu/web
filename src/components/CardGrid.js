import React from "react";

export default function CardGrid({ items = [], columns }) {
  const count = items.length;
  const countClass =
    count === 2 ? "card--count-2" : count === 3 ? "card--count-3" : count === 4 ? "card--count-4" : "";

  return (
    <div className="card-grid">
      {items.map((item) => (
        <div key={item.title} className={`card ${countClass}`.trim()}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
