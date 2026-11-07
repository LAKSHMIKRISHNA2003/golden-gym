import PersonalTrainingPrice from "@/components/personal-training-price";
import { publicAssetPath } from "@/data/site-path";

const benefits = [
  ["01", "PERSONALISED TRAINING"],
  ["02", "FORM & TECHNIQUE"],
  ["03", "PROGRESS TRACKING"],
  ["04", "GOAL-BASED COACHING"],
] as const;

export default function PersonalTrainingSection() {
  return (
    <section
      id="personal-training"
      aria-labelledby="personal-training-heading"
      className="relative isolate min-h-[700px] overflow-hidden px-6 py-20 text-heading sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${publicAssetPath("/secbg2222.png")}')`,
          backgroundSize: "cover",
          backgroundPosition: "40% center",
          backgroundRepeat: "no-repeat",
          transform: "scaleX(-1)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, transparent 55%, rgba(5,5,5,0.72) 100%), linear-gradient(90deg, rgba(5,5,5,0.94) 0%, rgba(5,5,5,0.82) 38%, rgba(5,5,5,0.40) 70%, rgba(5,5,5,0.58) 100%)",
        }}
      />

      <style>{`
        @keyframes personal-training-reveal {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @supports (animation-timeline: view()) {
          .personal-training-heading,
          .personal-training-benefits,
          .personal-training-actions {
            animation: personal-training-reveal 650ms ease-out both;
            animation-timeline: view();
            animation-range: entry 5% cover 30%;
          }

          .personal-training-benefits { animation-range: entry 11% cover 36%; }
          .personal-training-actions { animation-range: entry 14% cover 39%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .personal-training-heading,
          .personal-training-benefits,
          .personal-training-actions { animation: none; }
        }
      `}</style>

      <div className="relative z-20 mx-auto flex min-h-[508px] max-w-7xl items-center lg:min-h-[560px]">
        <div className="max-w-[680px]">
          <h2
            id="personal-training-heading"
            className="personal-training-heading font-heading text-[clamp(2.8rem,10vw,4rem)] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase text-[#f4f4f4] sm:text-[clamp(4rem,6vw,6.5rem)]"
          >
            <span className="relative block w-fit">
              TRAIN WITH PURPOSE.
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
              PROGRESS WITH <span className="text-[#fefc4c]">GUIDANCE.</span>
            </span>
          </h2>

          <div className="personal-training-benefits mt-9 grid max-w-[580px] grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {benefits.map(([number, label]) => (
              <div
                key={number}
                className="flex items-center gap-3 border-t border-white/15 pt-3 text-[11px] font-semibold tracking-[0.06em] text-[#eaeaea] uppercase"
              >
                <span className="text-[#fefc4c]">{number}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <PersonalTrainingPrice />
        </div>
      </div>
    </section>
  );
}
