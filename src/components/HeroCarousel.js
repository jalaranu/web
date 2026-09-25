import React, { useCallback, useEffect, useRef, useState } from "react";

const AUTOPLAY_MS = 6000;

export default function HeroCarousel({ slides, labels }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (event) => setReducedMotion(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const goTo = useCallback((next) => {
    setIndex((current) => (next + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (reducedMotion || paused) return undefined;
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [reducedMotion, paused, slides.length]);

  const togglePause = () => setPaused((value) => !value);

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className="hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((slide, slideIndex) => (
        <div
          key={slide.src}
          className={`hero-carousel__slide${slideIndex === index ? " is-active" : ""}`}
          aria-hidden={slideIndex !== index}
        >
          <img
            src={slide.src}
            alt={slideIndex === index ? slide.alt : ""}
            loading={slideIndex === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="hero-carousel__overlay" aria-hidden="true" />

      <div className="hero-carousel__controls">
        <button
          type="button"
          className="hero-carousel__arrow"
          aria-label={labels.carouselPrev}
          onClick={() => goTo(index - 1)}
        >
          <span aria-hidden="true">&#8249;</span>
        </button>
        <div className="hero-carousel__dots" role="group" aria-label={labels.carouselSlides}>
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              className={`hero-carousel__dot${slideIndex === index ? " is-active" : ""}`}
              aria-label={`${labels.carouselGoTo} ${slideIndex + 1}`}
              aria-current={slideIndex === index ? "true" : undefined}
              onClick={() => goTo(slideIndex)}
            />
          ))}
        </div>
        <button
          type="button"
          className="hero-carousel__arrow"
          aria-label={labels.carouselNext}
          onClick={() => goTo(index + 1)}
        >
          <span aria-hidden="true">&#8250;</span>
        </button>
        <button
          type="button"
          className="hero-carousel__pause"
          aria-label={paused ? labels.carouselPlay : labels.carouselPause}
          onClick={togglePause}
        >
          <span aria-hidden="true">{paused ? "\u25B6" : "\u275A\u275A"}</span>
        </button>
      </div>

      <p className="hero-carousel__credit">
        {labels.carouselCredit} <span aria-hidden="true">/</span>{" "}
        {slides[index].credit}
      </p>
    </div>
  );
}
