import Image from "next/image";
import functionalImage from "../../public/functional1.png";
import muscleImage from "../../public/muscle1.png";
import weightLossImage from "../../public/weightl.png";

const programs = [
  {
    title: "MUSCLE BUILDING",
    description:
      "Build size, strength and definition through structured resistance training and progressive overload.",
    image: muscleImage,
    alt: "Athlete in a gym wearing a red training top",
  },
  {
    title: "WEIGHT LOSS",
    description:
      "Improve conditioning, burn calories and build sustainable fitness with focused training.",
    image: weightLossImage,
    alt: "Athlete running in a gym",
  },
  {
    title: "FUNCTIONAL FITNESS",
    description:
      "Improve strength, mobility, balance and overall movement for better everyday performance.",
    image: functionalImage,
    alt: "Athlete training with battle ropes in a gym",
  },
] as const;

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="bg-transparent px-6 py-20 text-heading sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <style>{`
        @keyframes programs-reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @supports (animation-timeline: view()) {
          .programs-intro, .program-card {
            animation: programs-reveal 650ms ease-out both;
            animation-timeline: view();
            animation-range: entry 5% cover 30%;
          }

          .program-card:nth-child(2) { animation-range: entry 8% cover 33%; }
          .program-card:nth-child(3) { animation-range: entry 11% cover 36%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .programs-intro, .program-card { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="programs-intro max-w-[760px]">
          <h2
            id="programs-heading"
            className="font-heading text-[clamp(2.8rem,10vw,4rem)] leading-[0.92] font-extrabold tracking-[-0.035em] uppercase text-[#f2f2f2] sm:text-[clamp(3.5rem,5vw,5.2rem)]"
          >
            <span className="relative block w-fit">
              CHOOSE YOUR GOAL.
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[0.02em] -left-[0.06em] h-[2px] w-[1.65em] origin-bottom-left -rotate-[36deg] bg-[#fefc4c]/80"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[0.02em] left-[0.12em] h-[2px] w-[1.45em] origin-bottom-left -rotate-[36deg] bg-[#fefc4c]/55"
              />
            </span>
            <span className="block">
              BUILD YOUR <span className="text-[#fefc4c]">RESULTS.</span>
            </span>
          </h2>

          <p className="mt-6 max-w-[620px] text-sm leading-[1.7] text-white/60">
            Focused programs designed around the results you want to achieve — from building muscle and reducing body fat to improving strength, movement and overall fitness.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {programs.map((program, index) => (
            <article
              key={program.title}
              className={`program-card group relative isolate aspect-[3/4] overflow-hidden ${
                index === 2
                  ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] lg:col-span-1 lg:w-full"
                  : ""
              }`}
            >
              <Image
                src={program.image}
                alt={program.alt}
                fill
                sizes="(min-width: 1024px) 31vw, (min-width: 640px) 45vw, 90vw"
                placeholder="blur"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-85"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.02) 20%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.90) 100%)",
                }}
              />

              <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-7">
                <span
                  aria-hidden="true"
                  className="block h-[2px] w-8 bg-[#fefc4c] transition-[width] duration-500 group-hover:w-12 motion-reduce:transition-none"
                />
                <h3 className="mt-3 font-heading text-[clamp(1.4rem,2vw,2rem)] leading-none font-extrabold tracking-[-0.02em] text-white uppercase transition-transform duration-500 group-hover:-translate-y-1 motion-reduce:transition-none sm:mt-4">
                  {program.title}
                </h3>
                <p className="mt-3 max-w-[90%] text-[13px] leading-[1.6] text-white/65">
                  {program.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
