import Image from "next/image";
import founderImage from "../../public/man.png";

export default function FounderSection() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="relative isolate overflow-hidden bg-transparent px-6 pt-28 pb-20 text-heading sm:px-10 sm:pt-32 sm:pb-24 lg:px-16 lg:pt-36 lg:pb-28"
    >
      <style>{`
        @keyframes founder-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes founder-reveal {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @supports (animation-timeline: view()) {
          .founder-name {
            animation: founder-fade 700ms ease-out both;
            animation-timeline: view();
            animation-range: entry 5% cover 30%;
          }
          .founder-image, .founder-title, .founder-established {
            animation: founder-reveal 700ms ease-out both;
            animation-timeline: view();
            animation-range: entry 5% cover 30%;
          }
          .founder-image { animation-range: entry 8% cover 34%; }
          .founder-title { animation-range: entry 10% cover 36%; }
          .founder-established { animation-range: entry 14% cover 39%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .founder-name, .founder-image, .founder-title, .founder-established {
            animation: none;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 44% 40% at 50% 56%, rgba(254,252,76,0.08) 0%, rgba(254,252,76,0.035) 42%, transparent 78%)",
        }}
      />

      <p
        aria-hidden="true"
        className="founder-name pointer-events-none absolute top-[48%] left-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 text-center font-heading text-[clamp(3.8rem,21vw,7.5rem)] leading-[0.8] font-black tracking-[-0.05em] whitespace-nowrap text-white/[0.08] uppercase sm:text-[clamp(7rem,21vw,18rem)]"
      >
        <span>BALAJI</span>{" "}
        <span>PENKE</span>
      </p>

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2
          id="founder-heading"
          className="founder-title text-center font-heading text-[clamp(2.8rem,10vw,4rem)] leading-[0.92] font-extrabold tracking-[-0.035em] text-[#f2f2f2] uppercase sm:text-left sm:text-[clamp(3.5rem,5vw,5.2rem)]"
        >
          <span className="relative mx-auto block w-fit sm:mx-0">
            FOUNDER
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-[0.02em] -left-[0.06em] h-[2px] w-[1.65em] origin-bottom-left -rotate-[36deg] bg-[#fefc4c]/80"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-[0.02em] left-[0.12em] h-[2px] w-[1.45em] origin-bottom-left -rotate-[36deg] bg-[#fefc4c]/55"
            />
          </span>
        </h2>

        <div className="relative mt-8 flex flex-col items-center pb-10 lg:block">
          <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-4 z-0 h-px bg-white/10" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-1 z-0 h-3 bg-[#777625]" />
          <Image
            src={founderImage}
            alt="Balaji Penke, founder of Golden Gym"
            placeholder="blur"
            sizes="(min-width: 1024px) 680px, (min-width: 640px) 74vw, calc(100vw - 48px)"
            style={{
              maskImage: "linear-gradient(to bottom, black 0%, black 74%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 74%, transparent 100%)",
            }}
            className="founder-image relative z-10 mx-auto block h-auto w-full max-w-[680px] object-contain sm:w-[74vw] lg:w-[min(50vw,680px)]"
          />

          <div className="founder-established relative z-20 mt-7 flex flex-col items-center gap-1 lg:absolute lg:bottom-12 lg:left-0 lg:mt-0 lg:items-start">
            <span className="text-[10px] font-semibold tracking-[0.18em] text-white/45 uppercase">ESTABLISHED</span>
            <span className="font-heading text-[clamp(2.5rem,4vw,4rem)] leading-none font-extrabold text-[#fefc4c]">2017</span>
          </div>
        </div>
      </div>
    </section>
  );
}
