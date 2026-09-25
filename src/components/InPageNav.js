import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

export default function InPageNav({ items = [], label, moreLabel }) {
  const listRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return undefined;

    const update = () => {
      const overflow = el.scrollWidth - el.clientWidth - el.scrollLeft;
      setCanScrollRight(overflow > 4);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(update);
    }

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollNext = () => {
    const el = listRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: Math.min(el.clientWidth, el.scrollWidth - el.scrollLeft),
      behavior: reduced ? "auto" : "smooth",
    });
  };

  return (
    <div className="inpage-nav__wrap">
      <nav className="inpage-nav" aria-label={label}>
        <ul ref={listRef}>
          {items.map((entry) => (
            <li key={entry.id}>
              <a href={`#${entry.id}`}>{entry.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        className="inpage-nav__more"
        data-visible={canScrollRight ? "true" : "false"}
        aria-label={moreLabel}
        onClick={scrollNext}
      >
        <ChevronRight size={16} aria-hidden="true" />
      </button>
    </div>
  );
}
