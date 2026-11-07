"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { contactNavigationLink, navigationLinks } from "@/data/site-navigation";
import logo from "../../public/logo11111.png";
import { mobileMenuStyles } from "./site-header-styles";

const linkStyles =
  "whitespace-nowrap py-2 text-[11px] font-bold tracking-[0.06em] uppercase transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

const contactStyles =
  "inline-flex items-center justify-center gap-3 bg-primary px-6 py-3 text-[11px] font-bold tracking-[0.06em] text-background uppercase transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="relative flex items-center justify-between gap-8"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <style>{mobileMenuStyles}</style>
      <a
        href="#home"
        className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        aria-label="Golden Gym home"
        onClick={() => setMenuOpen(false)}
      >
        <Image
          src={logo}
          alt="Golden Gym"
          className="h-auto w-40 sm:w-48"
          sizes="(min-width: 640px) 192px, 160px"
          loading="eager"
        />
      </a>

      <div
        className="relative hidden items-center gap-7 py-4 pl-8 text-heading xl:flex"
      >
        <nav aria-label="Main navigation" className="flex items-center gap-6">
          {navigationLinks.map((item) => (
            <a key={item.href} href={item.href} className={linkStyles}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href={contactNavigationLink.href} className={contactStyles}>
          {contactNavigationLink.label} <span aria-hidden="true">↗</span>
        </a>
      </div>

      <button
        ref={menuButton}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        className="relative inline-flex size-11 shrink-0 items-center justify-center border border-[#fefc4c] bg-transparent text-heading transition-colors hover:bg-[#fefc4c]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fefc4c] xl:hidden"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="size-5"
        >
          {menuOpen ? (
            <path d="m6 6 12 12M18 6 6 18" />
          ) : (
            <path d="M3 6h18M3 12h18M3 18h18" />
          )}
        </svg>
      </button>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        data-open={menuOpen}
        className="mobilePanel absolute top-full right-0 z-20 mt-4 w-full bg-background/95 text-heading shadow-lg shadow-black/30 backdrop-blur-sm"
      >
        <div className="mobilePanelContent">
          <div className="flex max-h-[calc(100dvh-8rem)] flex-col gap-2 overflow-y-auto p-5">
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${linkStyles} px-1 py-3`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={contactNavigationLink.href}
              className={`${contactStyles} mt-3`}
              onClick={() => setMenuOpen(false)}
            >
              {contactNavigationLink.label} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
