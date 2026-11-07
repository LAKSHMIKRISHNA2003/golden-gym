import Image from "next/image";
import cardioImage from "../../public/cardio.png";
import personalTrainingImage from "../../public/pt.png";
import weightTrainingImage from "../../public/weight2.png";
import { publicAssetPath } from "@/data/site-path";

const services = [
  {
    number: "01",
    title: "WEIGHT TRAINING",
    description:
      "Build strength, power and muscle with a complete free-weight and resistance training setup.",
    image: weightTrainingImage,
    alt: "Athlete performing a barbell deadlift in the weight training area",
  },
  {
    number: "02",
    title: "PERSONAL TRAINING",
    description:
      "Train with focused one-to-one guidance designed around your goals, ability and progress.",
    image: personalTrainingImage,
    alt: "Trainer guiding an athlete through a dumbbell workout",
  },
  {
    number: "03",
    title: "CARDIO ZONE",
    description:
      "Improve endurance, stamina and conditioning with dedicated cardio equipment and training space.",
    image: cardioImage,
    alt: "Athlete running on a treadmill in the cardio zone",
  },
] as const;

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden px-6 py-20 text-heading sm:px-10 sm:py-24 lg:px-16 lg:py-28"
      style={{
        backgroundImage: `url('${publicAssetPath("/secbg.png")}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,5,0.72) 0%, rgba(5,5,5,0.55) 45%, rgba(5,5,5,0.82) 100%)",
        }}
      />

      <style>{`
        @keyframes services-reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @supports (animation-timeline: view()) {
          .services-intro, .service-card {
            animation: services-reveal 650ms ease-out both;
            animation-timeline: view();
            animation-range: entry 5% cover 30%;
          }

          .service-card:nth-child(2) { animation-range: entry 8% cover 33%; }
          .service-card:nth-child(3) { animation-range: entry 11% cover 36%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .services-intro, .service-card { animation: none; }
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="services-intro max-w-[680px]">
          <h2
            id="services-heading"
            className="font-heading text-[clamp(2.8rem,10vw,4rem)] leading-[0.92] font-extrabold tracking-[-0.035em] uppercase text-[#f3f3f3] sm:text-[clamp(3.5rem,5vw,5.5rem)]"
          >
            <span className="relative block w-fit">
              EVERYTHING YOU NEED
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
              TO <span className="text-[#fefc4c]">TRAIN BETTER.</span>
            </span>
          </h2>

          <p className="mt-6 max-w-[560px] text-sm leading-[1.7] text-white/65">
            From expert guidance to dedicated cardio and strength zones, Golden Gym gives you the right environment to train with purpose.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.number}
              className={`service-card group relative isolate aspect-square overflow-hidden ${
                index === 2
                  ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] lg:col-span-1 lg:w-full"
                  : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(min-width: 1024px) 31vw, (min-width: 640px) 45vw, 90vw"
                placeholder="blur"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-85"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.05) 20%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.90) 100%)",
                }}
              />

              <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-7">
                <span className="text-xs font-bold text-[#fefc4c]">{service.number}</span>
                <span
                  aria-hidden="true"
                  className="mt-3 block h-[2px] w-8 bg-[#fefc4c] transition-[width] duration-500 group-hover:w-12 motion-reduce:transition-none sm:mt-4"
                />
                <h3 className="mt-3 font-heading text-[clamp(1.7rem,2.2vw,2.25rem)] leading-none font-extrabold tracking-[-0.02em] text-white uppercase transition-transform duration-500 group-hover:-translate-y-1 motion-reduce:transition-none sm:mt-4">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-[290px] text-[13px] leading-[1.6] text-white/70">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
