"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 500);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed right-5 bottom-5 z-50 flex size-11 items-center justify-center border border-[#fefc4c]/70 bg-[#080808]/90 text-[#fefc4c] shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-[opacity,transform,background-color,color] duration-300 hover:bg-[#fefc4c] hover:text-[#080808] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fefc4c] motion-reduce:transition-none sm:right-8 sm:bottom-8 sm:size-12 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="M12 19V5m-6 6 6-6 6 6" />
      </svg>
    </button>
  );
}
