"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { galleryImages } from "@/data/gallery-images";

const galleryRows = Array.from(
  { length: Math.ceil(galleryImages.length / 2) },
  (_, rowIndex) => galleryImages.slice(rowIndex * 2, rowIndex * 2 + 2),
);

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        requestAnimationFrame(() => triggerRef.current?.focus());
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length,
        );
      } else if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % galleryImages.length,
        );
      } else if (event.key === "Tab") {
        const controls = [closeButtonRef.current, ...document.querySelectorAll<HTMLButtonElement>("[data-gallery-control]")].filter(
          (control): control is HTMLButtonElement => control !== null,
        );
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  const openImage = (index: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActiveIndex(index);
  };

  const closeImage = () => {
    setActiveIndex(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const changeImage = (step: number) => {
    setActiveIndex((current) =>
      current === null ? null : (current + step + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <>
      <style>{`
        @keyframes gallery-reveal {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @supports (animation-timeline: view()) {
          .gallery-intro, .gallery-tile {
            animation: gallery-reveal 650ms ease-out both;
            animation-timeline: view();
            animation-range: entry 5% cover 28%;
          }
          .gallery-tile:nth-child(3n + 2) { animation-range: entry 8% cover 31%; }
          .gallery-tile:nth-child(3n) { animation-range: entry 11% cover 34%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gallery-intro, .gallery-tile { animation: none; }
        }
      `}</style>

      <div className="mt-14 space-y-3 sm:space-y-4">
        {galleryRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 gap-3 sm:grid-cols-[var(--gallery-columns)] sm:gap-4"
            style={{
              "--gallery-columns": row.map((photo) => `${photo.width / photo.height}fr`).join(" "),
            } as CSSProperties}
          >
            {row.map((photo) => {
              const index = galleryImages.indexOf(photo);
              return (
                <button
                  key={photo.src}
                  type="button"
                  aria-label={`View gallery image ${index + 1} of ${galleryImages.length}: ${photo.alt}`}
                  className="gallery-tile group relative isolate block w-full overflow-hidden bg-[#171717] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fefc4c]"
                  onClick={(event) => openImage(index, event.currentTarget)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes={row.length === 1
                      ? "(min-width: 1280px) 1280px, 100vw"
                      : photo.width > photo.height
                        ? "(min-width: 640px) 76vw, 100vw"
                        : "(min-width: 640px) 24vw, 100vw"}
                    loading="lazy"
                    className="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.035] group-focus-visible:scale-[1.035] motion-reduce:transition-none"
                  />
                  <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0 group-focus-visible:bg-black/0" />
                  <span aria-hidden="true" className="pointer-events-none absolute right-4 bottom-4 left-4 flex translate-y-2 items-center gap-3 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-sm:translate-y-0 max-sm:opacity-100">
                    <span className="h-[2px] w-5 bg-[#fefc4c]" />
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-white uppercase">{photo.category}</span>
                  </span>
                  <span aria-hidden="true" className="pointer-events-none absolute top-4 left-4 text-[10px] font-medium tracking-[0.1em] text-white/60">{String(index + 1).padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          className="fixed inset-0 z-[100] flex flex-col bg-[#050505]/[0.96] px-4 py-5 text-white sm:px-8"
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
            <span className="text-[11px] font-semibold tracking-[0.16em] text-white/60 uppercase">
              {String(activeIndex + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close gallery"
              className="flex size-11 items-center justify-center text-white transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={closeImage}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
                <path d="M5 5l14 14M19 5 5 19" />
              </svg>
            </button>
          </div>

          <div
            className="relative mx-auto my-auto h-[min(75dvh,800px)] w-full max-w-7xl touch-pan-y"
            onTouchStart={(event) => { touchStartX.current = event.changedTouches[0]?.screenX ?? null; }}
            onTouchEnd={(event) => {
              const start = touchStartX.current;
              const end = event.changedTouches[0]?.screenX;
              if (start !== null && end !== undefined && Math.abs(end - start) > 50) {
                changeImage(end < start ? 1 : -1);
              }
              touchStartX.current = null;
            }}
          >
            <Image
              key={galleryImages[activeIndex].src}
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              fill
              sizes="100vw"
              loading="eager"
              className="object-contain"
            />
            <button
              type="button"
              data-gallery-control
              aria-label="Previous image"
              onClick={() => changeImage(-1)}
              className="absolute top-1/2 left-0 flex size-11 -translate-y-1/2 items-center justify-center bg-[#050505]/60 text-white transition-colors hover:bg-[#050505]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-3"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6"><path d="m15 5-7 7 7 7" /></svg>
            </button>
            <button
              type="button"
              data-gallery-control
              aria-label="Next image"
              onClick={() => changeImage(1)}
              className="absolute top-1/2 right-0 flex size-11 -translate-y-1/2 items-center justify-center bg-[#050505]/60 text-white transition-colors hover:bg-[#050505]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-3"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6"><path d="m9 5 7 7-7 7" /></svg>
            </button>
          </div>

          <p className="mx-auto w-full max-w-7xl text-center text-[11px] font-semibold tracking-[0.16em] text-white/60 uppercase">
            {galleryImages[activeIndex].category}
          </p>
        </div>
      )}
    </>
  );
}
