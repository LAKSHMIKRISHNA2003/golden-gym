import Image from "next/image";
import { openingHours } from "@/data/opening-hours";
import { contactNavigationLink, navigationLinks } from "@/data/site-navigation";
import footerLogo from "../../public/footerimg1.png";
import craftedByLogo from "../../public/logo10.png";

const locations = ["Tanuku", "Ravulapalem", "Kothapeta"] as const;

export default function SiteFooter() {
  return (
    <footer className="bg-[#050505] px-4 text-[#f2f2f2] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 items-start gap-x-6 gap-y-10 pt-20 pb-12 sm:gap-x-10 sm:gap-y-12 sm:pt-24 sm:pb-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.85fr)_minmax(0,0.8fr)_minmax(0,1.1fr)] lg:gap-10 lg:pt-28 lg:pb-20">
          <a
            href="#home"
            aria-label="Golden Gym home"
            className="-mt-2 col-span-2 block w-full max-w-[220px] justify-self-center self-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fefc4c] sm:-mt-3 sm:max-w-[290px] lg:col-span-1 lg:justify-self-start"
          >
            <Image
              src={footerLogo}
              alt="Golden Gym"
              className="h-auto w-full max-w-full object-contain"
              sizes="(min-width: 640px) 290px, 220px"
            />
          </a>

          <nav aria-label="Footer navigation" className="flex min-w-0 flex-col items-center gap-1.5 sm:gap-2 lg:items-start lg:pl-6">
            <h2 className="mb-2 text-sm font-semibold tracking-[0.1em] text-[#fefc4c] uppercase sm:text-lg sm:tracking-[0.16em]">EXPLORE</h2>
            {[...navigationLinks, contactNavigationLink].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1 text-[10px] font-medium tracking-[0.04em] text-white/65 uppercase transition-colors duration-250 hover:text-[#fefc4c] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#fefc4c] sm:text-xs sm:tracking-[0.08em]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex min-w-0 flex-col gap-9 text-center lg:contents lg:text-left">
            <div className="min-w-0">
              <h2 className="text-sm font-semibold tracking-[0.1em] text-[#fefc4c] uppercase sm:text-lg sm:tracking-[0.16em]">LOCATIONS</h2>
              <ul className="mt-3 flex flex-col gap-2 text-[11px] font-medium text-[#f1f1f1] sm:text-sm">
                {locations.map((location) => (
                  <li key={location}>{location}</li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h2 className="text-sm font-semibold tracking-[0.1em] text-[#fefc4c] uppercase sm:text-lg sm:tracking-[0.16em]">OPENING HOURS</h2>
              <dl className="mt-3 space-y-4">
                {openingHours.map((period) => (
                  <div key={period.label}>
                    <dt className="text-xs text-white/45 capitalize sm:text-sm">{period.label.toLowerCase()}</dt>
                    <dd className="mt-1 text-xs font-medium text-[#f1f1f1] sm:text-sm xl:text-base">
                      <span className="sm:hidden">{period.compact}</span>
                      <span className="hidden sm:inline">{period.opens} — {period.closes}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="border-t border-white/6 py-5 text-center text-[10px] tracking-[0.08em] text-white/35 uppercase">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span>© 2026 Golden Gym. All rights reserved.</span>
            <span aria-hidden="true" className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="inline-flex items-center gap-2">
              Crafted by
              <a
                href="https://faasz.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit FAASZ (opens in a new tab)"
                className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#fefc4c]"
              >
                <Image
                  src={craftedByLogo}
                  alt="FAASZ"
                  className="h-auto w-[68px] object-contain sm:w-20"
                  sizes="(min-width: 640px) 80px, 68px"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
