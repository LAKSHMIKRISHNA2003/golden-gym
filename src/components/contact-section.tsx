import ContactForm from "@/components/contact-form";

const enquiryTopics = ["MEMBERSHIP", "PERSONAL TRAINING", "BRANCH ENQUIRIES"] as const;

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-transparent px-6 py-20 text-heading sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <style>{`
        @keyframes contact-reveal {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @supports (animation-timeline: view()) {
          .contact-intro, .contact-form {
            animation: contact-reveal 650ms ease-out both;
            animation-timeline: view();
            animation-range: entry 5% cover 30%;
          }
          .contact-form { animation-range: entry 8% cover 33%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-intro, .contact-form { animation: none; }
        }
      `}</style>

      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
        <div className="contact-intro min-w-0 lg:self-center">
          <h2
            id="contact-heading"
            className="font-heading text-[clamp(2.8rem,10vw,4rem)] leading-[0.92] font-extrabold tracking-[-0.035em] uppercase text-[#f2f2f2] sm:text-[clamp(4rem,5vw,5.5rem)]"
          >
            <span className="relative block w-fit">
              READY TO START
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[0.02em] -left-[0.06em] h-[2px] w-[1.65em] origin-bottom-left -rotate-[36deg] bg-[#fefc4c]/80"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[0.02em] left-[0.12em] h-[2px] w-[1.45em] origin-bottom-left -rotate-[36deg] bg-[#fefc4c]/55"
              />
            </span>
            <span className="block text-[#fefc4c]">YOUR FITNESS JOURNEY?</span>
          </h2>

          <p className="mt-8 max-w-[560px] text-sm leading-[1.75] text-white/62">
            Tell us what you&apos;re looking for and our team will help you choose the right membership, training program, or personal training option. Whether you&apos;re starting fresh or looking to take your training further, Golden Gym is ready to help.
          </p>

          <div className="mt-9 flex flex-col items-start gap-x-4 gap-y-3 border-t border-white/10 pt-5 text-[10px] font-semibold tracking-[0.13em] text-white/55 uppercase sm:flex-row sm:flex-wrap sm:items-center">
            {enquiryTopics.map((topic, index) => (
              <span key={topic} className="inline-flex items-center gap-4">
                <span aria-hidden="true" className="h-1 w-1 bg-[#fefc4c] sm:hidden" />
                {index > 0 && <span aria-hidden="true" className="hidden h-1 w-1 bg-[#fefc4c] sm:block" />}
                {topic}
              </span>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
