import React from "react";
import Rich from "./Rich";

export default function FlowDiagram({ steps = [], label }) {
  return (
    <ol className="flow" aria-label={label || undefined}>
      {steps.map((step, index) => {
        const Icon = step.Icon;
        const isTerminal = index === steps.length - 1;
        return (
          <React.Fragment key={step.title}>
            {index > 0 ? (
              <li className="flow__edge" aria-hidden="true">
                <span className="flow__edge-line" />
                <span className="flow__edge-head" />
              </li>
            ) : null}
            <li
              className={`flow__step${isTerminal ? " flow__step--terminal" : ""}`.trim()}
            >
              <div className="flow__step-top">
                <span className="flow__num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flow__icon">
                  {Icon ? <Icon size={20} aria-hidden="true" /> : null}
                </span>
              </div>
              <h3 className="flow__title">
                <Rich text={step.title} />
              </h3>
              <p className="flow__body">
                <Rich text={step.body} />
              </p>
            </li>
          </React.Fragment>
        );
      })}
    </ol>
  );
}
