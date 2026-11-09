"use client";

import { useState } from "react";

const plans = [
  {
    number: "01",
    title: "STRENGTH",
    description:
      "For members focused on strength, muscle building and resistance training.",
    price: "₹1,800",
    priceNote: "/ MONTH",
    features: [
      "Weight Training Access",
      "Strength Zone Access",
      "Free Weight Area",
      "Resistance Machines",
      "General Gym Access",
    ],
    action: "CHOOSE STRENGTH",
    featured: false,
    options: [
      { duration: "1 MONTH", price: "₹1,800" },
      { duration: "3 MONTHS", price: "₹4,500" },
      { duration: "6 MONTHS", price: "₹8,000" },
      { duration: "12 MONTHS", price: "₹12,000" },
    ],
  },
  {
    number: "02",
    title: "STRENGTH + CARDIO",
    description:
      "Complete gym access for strength, cardio, conditioning and overall fitness.",
    price: "₹2,500",
    priceNote: "/ MONTH",
    features: [
      "Everything in Strength",
      "Cardio Zone Access",
      "Treadmills & Cardio Equipment",
      "Conditioning Training Area",
      "Complete Gym Access",
    ],
    action: "CHOOSE COMPLETE",
    featured: true,
    options: [
      { duration: "1 MONTH", price: "₹2,500" },
      { duration: "3 MONTHS", price: "₹6,000" },
      { duration: "6 MONTHS", price: "₹10,000" },
      { duration: "12 MONTHS", price: "₹15,000" },
    ],
  },
  {
    number: "03",
    title: "CUSTOM PLAN",
    description:
      "Personalised membership and training options based on your goals and requirements.",
    price: "CUSTOM",
    priceNote: "CONTACT US",
    features: [
      "Personalised Training Options",
      "Flexible Membership Duration",
      "Personal Training Add-ons",
      "Goal-Based Planning",
      "Custom Support",
    ],
    action: "CONTACT US",
    featured: false,
    options: null,
  },
] as const;

function PlanPrice({ plan }: { plan: (typeof plans)[number] }) {
  const [selectedDuration, setSelectedDuration] = useState<string>("1 MONTH");
  const selectedOption = plan.options?.find((option) => option.duration === selectedDuration) ?? plan.options?.[0];

  return (
    <div className="min-h-[200px] border-b border-white/10">
      {plan.options ? (
        <div className="mt-3 mb-8 grid grid-cols-4 gap-1" role="group" aria-label={`${plan.title} membership duration`}>
          {plan.options.map((option) => (
            <button
              key={option.duration}
              type="button"
              aria-pressed={selectedOption?.duration === option.duration}
              onClick={() => setSelectedDuration(option.duration)}
              className={`min-h-8 border px-1 text-[10px] font-semibold tracking-[0.03em] whitespace-nowrap uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fefc4c] ${
                selectedOption?.duration === option.duration
                  ? "border-[#fefc4c] bg-[#fefc4c] text-[#080808]"
                  : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {option.duration}
            </button>
          ))}
        </div>
      ) : (
        <a
          href="#contact"
          className="mt-3 mb-8 flex min-h-8 w-full items-center justify-center gap-2 border border-[#fefc4c] px-3 text-[10px] font-semibold tracking-[0.08em] text-[#fefc4c] uppercase transition-colors duration-200 hover:bg-[#fefc4c] hover:text-[#080808] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fefc4c]"
        >
          CONTACT US <span aria-hidden="true">↗</span>
        </a>
      )}

      <p
        className={`font-heading leading-none font-extrabold tracking-[-0.04em] ${
          plan.featured ? "text-[#fefc4c]" : "text-white"
        } ${
          plan.price === "CUSTOM"
            ? "text-[clamp(2.2rem,3.2vw,3.8rem)]"
            : "text-[clamp(3rem,4vw,4.8rem)]"
        }`}
      >
        {selectedOption?.price ?? plan.price}
      </p>
      <p className="mt-3 text-[11px] font-medium tracking-[0.12em] text-white/50 uppercase">
        {selectedOption
          ? selectedOption.duration === "1 MONTH" ? "/ MONTH" : `FOR ${selectedOption.duration}`
          : plan.priceNote}
      </p>
    </div>
  );
}

export default function MembershipSection() {
  return (
    <section
      id="membership"
      aria-labelledby="membership-heading"
      className="bg-transparent px-6 py-20 text-heading sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <style>{`
        @keyframes membership-reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @supports (animation-timeline: view()) {
          .membership-intro, .membership-card {
            animation: membership-reveal 650ms ease-out both;
            animation-timeline: view();
            animation-range: entry 5% cover 30%;
          }

          .membership-card:nth-child(2) { animation-range: entry 8% cover 33%; }
          .membership-card:nth-child(3) { animation-range: entry 11% cover 36%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .membership-intro, .membership-card { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="membership-intro max-w-[800px]">
          <h2
            id="membership-heading"
            className="font-heading text-[clamp(2.8rem,10vw,4rem)] leading-[0.92] font-extrabold tracking-[-0.035em] uppercase text-[#f2f2f2] sm:text-[clamp(3.5rem,5vw,5.2rem)]"
          >
            <span className="relative block w-fit">
              CHOOSE THE PLAN
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
              THAT FITS <span className="text-[#fefc4c]">YOUR TRAINING.</span>
            </span>
          </h2>
          <p className="mt-6 max-w-[620px] text-sm leading-[1.7] text-white/60">
            Simple membership options built around strength, cardio, and personalised training needs.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={plan.number}
              className={`membership-card flex h-full min-h-[700px] flex-col border bg-[#141414]/80 p-6 sm:min-h-[660px] sm:p-7 ${
                plan.featured ? "border-[#fefc4c]/45" : "border-white/10"
              } ${
                index === 2
                  ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] lg:col-span-1 lg:w-full"
                  : ""
              }`}
            >
              <div className="flex h-8 shrink-0 items-start justify-between gap-3">
                <span className="text-xs font-bold tracking-[0.12em] text-[#fefc4c]">
                  {plan.number}
                </span>
                {plan.featured && (
                  <span className="bg-[#fefc4c] px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] text-[#080808] uppercase">
                    MOST POPULAR
                  </span>
                )}
              </div>

              <h3 className="mt-6 min-h-[68px] font-heading text-[clamp(2rem,2.6vw,2.6rem)] leading-[0.95] font-extrabold tracking-[-0.02em] text-[#f2f2f2] uppercase">
                {plan.title}
              </h3>

              <p className="min-h-[56px] text-[13px] leading-[1.6] text-white/65">
                {plan.description}
              </p>

              <PlanPrice plan={plan} />

              <ul className="min-h-[210px] flex-1 space-y-4 py-8 text-[13px] leading-[1.6] text-white/70">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      aria-hidden="true"
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-[#fefc4c]"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="m2.5 8 3.5 3.5 7.5-8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-auto flex min-h-12 items-center justify-between gap-4 border px-5 py-3 text-xs font-bold tracking-[0.06em] uppercase transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fefc4c] ${
                  plan.featured
                    ? "border-[#fefc4c] bg-[#fefc4c] text-[#080808] hover:border-[#f5f23e] hover:bg-[#f5f23e]"
                    : "border-white/30 bg-transparent text-white hover:border-white hover:bg-white hover:text-[#080808]"
                }`}
              >
                <span>{plan.action}</span>
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
