import { openingHours } from "@/data/opening-hours";

const branches = ["TANUKU", "RAVULAPALEM", "KOTHAPETA"] as const;

export default function ScheduleBranchesSection() {
  return (
    <section
      id="branches"
      aria-label="Opening hours and branches"
      className="bg-transparent px-6 py-20 text-heading sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <style>{`
        @keyframes schedule-branches-reveal {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @supports (animation-timeline: view()) {
          .schedule-intro, .schedule-row, .branches-intro, .branch-card {
            animation: schedule-branches-reveal 650ms ease-out both;
            animation-timeline: view();
            animation-range: entry 5% cover 30%;
          }
          .schedule-row:nth-child(2), .branch-card:nth-child(2) {
            animation-range: entry 8% cover 33%;
          }
          .branch-card:nth-child(3) { animation-range: entry 11% cover 36%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .schedule-intro, .schedule-row, .branches-intro, .branch-card { animation: none; }
        }
      `}</style>

      <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-10 xl:gap-14">
        <div id="schedule" className="min-w-0">
          <div className="schedule-intro">
            <p className="mb-5 flex items-center gap-4 text-[12px] font-semibold tracking-[0.2em] text-[#fefc4c] uppercase">
              <span aria-hidden="true" className="h-[2px] w-8 bg-[#fefc4c]" />
              OPENING HOURS
            </p>
            <h2 className="font-heading text-[clamp(2.8rem,10vw,4rem)] leading-[0.92] font-extrabold tracking-[-0.035em] uppercase text-[#f2f2f2] sm:text-[clamp(3.5rem,4.5vw,4.8rem)]">
              <span className="relative block w-fit">
                TRAIN ON
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-[0.02em] -left-[0.06em] h-[2px] w-[1.65em] origin-bottom-left -rotate-[36deg] bg-[#fefc4c]/80"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-[0.02em] left-[0.12em] h-[2px] w-[1.45em] origin-bottom-left -rotate-[36deg] bg-[#fefc4c]/55"
                />
              </span>
              <span className="block text-[#fefc4c]">YOUR TIME.</span>
            </h2>
          </div>

          <div className="mt-12 border-t border-white/10">
            {openingHours.map((period) => (
              <div key={period.label} className="schedule-row border-b border-white/10 py-6">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-[2px] w-5 bg-[#fefc4c]" />
                  <h3 className="text-[11px] font-semibold tracking-[0.16em] text-white/50 uppercase">
                    {period.label}
                  </h3>
                </div>
                <div className="mt-3 flex items-center gap-3 font-heading text-[clamp(1.5rem,2.25vw,2.1rem)] leading-none font-bold tracking-[0.01em] text-[#f2f2f2] sm:gap-4">
                  <time dateTime={period.opensAt} className="shrink-0">{period.opens}</time>
                  <span aria-hidden="true" className="h-px min-w-3 flex-1 bg-white/20" />
                  <time dateTime={period.closesAt} className="shrink-0">{period.closes}</time>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 lg:border-l lg:border-white/10 lg:pl-10 xl:pl-14">
          <div className="branches-intro">
            <p className="mb-5 flex items-center gap-4 text-[12px] font-semibold tracking-[0.2em] text-[#fefc4c] uppercase">
              <span aria-hidden="true" className="h-[2px] w-8 bg-[#fefc4c]" />
              OUR LOCATIONS
            </p>
            <h2 className="font-heading text-[clamp(2.8rem,10vw,4rem)] leading-[0.92] font-extrabold tracking-[-0.035em] uppercase text-[#f2f2f2] sm:text-[clamp(3.5rem,4.5vw,4.8rem)]">
              <span className="relative block w-fit">
                FIND GOLDEN GYM
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-[0.02em] -left-[0.06em] h-[2px] w-[1.65em] origin-bottom-left -rotate-[36deg] bg-[#fefc4c]/80"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-[0.02em] left-[0.12em] h-[2px] w-[1.45em] origin-bottom-left -rotate-[36deg] bg-[#fefc4c]/55"
                />
              </span>
              <span className="block text-[#fefc4c]">NEAR YOU.</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch, index) => (
              <article
                key={branch}
                className={`branch-card group flex min-h-[210px] min-w-0 flex-col border border-white/8 bg-[#121212]/70 p-5 transition-[background-color,border-color] duration-300 hover:border-[#fefc4c]/35 hover:bg-[#181818]/90 sm:min-h-[220px] ${
                  index === 2 ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.5rem)] lg:col-span-1 lg:w-full" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span aria-hidden="true" className="h-[2px] w-7 bg-[#fefc4c]" />
                  <span className="text-[10px] font-semibold tracking-[0.12em] text-[#fefc4c]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-auto pt-8">
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-white/45 uppercase">GOLDEN GYM</p>
                  <h3 className="mt-2 font-heading text-[clamp(1.45rem,2.15vw,2.3rem)] leading-[0.95] font-extrabold tracking-[-0.02em] text-[#f2f2f2] uppercase transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none">
                    {branch}
                  </h3>
                  <p className="mt-4 border-t border-white/10 pt-3 text-[10px] font-semibold tracking-[0.16em] text-white/40 uppercase">BRANCH</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
