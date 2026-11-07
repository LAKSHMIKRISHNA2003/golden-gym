import Image from "next/image";
import athleteImage from "../../public/2.png";
import equipmentImage from "../../public/3.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-transparent px-6 py-20 text-heading sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <style>{`
        @keyframes about-reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @supports (animation-timeline: view()) {
          .about-visual, .about-copy, .about-details {
            animation: about-reveal 650ms ease-out both;
            animation-timeline: view();
            animation-range: entry 5% cover 30%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-visual, .about-copy, .about-details {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:grid-rows-[auto_auto] lg:gap-y-7 xl:gap-x-20">
        <div className="about-copy lg:col-start-2 lg:row-start-1 lg:self-end">
          <h2
            id="about-heading"
            className="font-heading text-[clamp(2.8rem,10vw,4rem)] leading-[0.92] font-extrabold tracking-[-0.035em] uppercase text-[#f2f2f2] sm:text-[clamp(2.8rem,4.5vw,5.5rem)]"
          >
            <span className="relative block w-fit">
              MORE THAN A GYM.
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
              BUILT FOR <span className="text-[#fefc4c]">PROGRESS.</span>
            </span>
          </h2>

          <div className="mt-7 max-w-[560px] space-y-4 text-sm leading-[1.75] text-[#a8a8a8] sm:text-[15px]">
            <p className="font-medium text-[#e6e6e6]">
              Golden Gym is built for people who want more from their training.
            </p>
            <p>
              From strength and muscle building to cardio, conditioning, and personal training, we provide a focused environment where every workout has a purpose.
            </p>
            <p>
              With quality equipment, dedicated training spaces, and a strong fitness community, Golden Gym is designed to support beginners, regular lifters, and serious athletes at every stage of their journey. Our goal is simple — create the right environment for you to train consistently, push your limits, and keep making progress.
            </p>
          </div>
        </div>

        <div className="about-visual grid h-[390px] w-full max-w-[520px] grid-cols-2 items-start gap-3 sm:h-[520px] sm:gap-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:h-[590px] lg:max-w-none xl:h-[620px]">
          <div className="relative h-[calc(100%-2.5rem)] overflow-hidden">
            <Image
              src={equipmentImage}
              alt="Dumbbells and strength training equipment at Golden Gym"
              fill
              sizes="(min-width: 1280px) 260px, (min-width: 1024px) 20vw, (min-width: 640px) 252px, calc(50vw - 30px)"
              placeholder="blur"
              className="object-cover object-center"
            />
          </div>
          <div className="relative mt-10 h-[calc(100%-2.5rem)] overflow-hidden">
            <Image
              src={athleteImage}
              alt="Athlete training at Golden Gym"
              fill
              sizes="(min-width: 1280px) 260px, (min-width: 1024px) 20vw, (min-width: 640px) 252px, calc(50vw - 30px)"
              placeholder="blur"
              className="object-cover object-[center_24%]"
            />
          </div>
        </div>

        <div className="about-details lg:col-start-2 lg:row-start-2 lg:self-start">
          <div className="grid grid-cols-1 gap-3 text-[10px] font-semibold tracking-[0.06em] uppercase sm:grid-cols-3 sm:gap-0 sm:text-[11px]">
            <div className="flex items-baseline gap-2 text-[#eaeaea]">
              <span className="text-[#fefc4c]">01</span> QUALITY EQUIPMENT
            </div>
            <div className="flex items-baseline gap-2 text-[#eaeaea] sm:border-l sm:border-white/15 sm:pl-4">
              <span className="text-[#fefc4c]">02</span> FOCUSED TRAINING
            </div>
            <div className="flex items-baseline gap-2 text-[#eaeaea] sm:border-l sm:border-white/15 sm:pl-4">
              <span className="text-[#fefc4c]">03</span> REAL PROGRESS
            </div>
          </div>

          <a
            href="#services"
            className="mt-9 inline-flex items-center gap-4 bg-[#fefc4c] px-[22px] py-[14px] text-xs font-bold tracking-[0.06em] text-[#080808] uppercase transition-colors hover:bg-[#f5f23e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fefc4c]"
          >
            DISCOVER GOLDEN GYM <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
