import AboutSection from "@/components/about-section";
import BarbellPreloader from "@/components/barbell-preloader";
import ContactSection from "@/components/contact-section";
import FounderSection from "@/components/founder-section";
import GallerySection from "@/components/gallery-section";
import HeroMedia from "@/components/hero-media";
import MembershipSection from "@/components/membership-section";
import PersonalTrainingSection from "@/components/personal-training-section";
import ProgramsSection from "@/components/programs-section";
import ScheduleBranchesSection from "@/components/schedule-branches-section";
import ScrollToTop from "@/components/scroll-to-top";
import ServicesSection from "@/components/services-section";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <>
    <BarbellPreloader />
    <main id="home" className="min-h-screen bg-background">
      <section
        aria-label="Golden Gym hero"
        className="relative isolate min-h-screen overflow-hidden px-6 py-8 text-heading sm:px-10 lg:px-16"
      >
        <HeroMedia />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0.08) 55%, rgba(0, 0, 0, 0.52) 100%),
              radial-gradient(circle at 72% 48%, rgba(254, 252, 76, 0.10), transparent 34%),
              linear-gradient(90deg, rgba(5, 5, 5, 0.82) 0%, rgba(5, 5, 5, 0.64) 38%, rgba(5, 5, 5, 0.30) 70%, rgba(5, 5, 5, 0.20) 100%)
            `,
          }}
          aria-hidden="true"
        />

        <style>{`
          @keyframes hero-fade-up {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .hero-headline { animation: hero-fade-up 650ms cubic-bezier(0.22, 1, 0.36, 1) 160ms both; }
          .hero-copy { animation: hero-fade-up 600ms ease-out 300ms both; }
          .hero-action { animation: hero-fade-up 600ms ease-out 430ms both; }

          @media (prefers-reduced-motion: reduce) {
            .hero-headline, .hero-copy, .hero-action {
              animation: none;
            }
          }
        `}</style>

        <div className="relative z-20 mx-auto flex max-w-7xl flex-col">
          <SiteHeader />
        </div>

        <div className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 px-6 sm:top-[50.5%] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="relative mx-auto max-w-[650px] text-center sm:mr-0 sm:ml-4 sm:text-left">
              <h1 className="hero-headline font-heading text-[clamp(3.2rem,15vw,4.2rem)] leading-[0.88] font-black tracking-[-0.04em] uppercase sm:text-[clamp(4.2rem,7vw,6.7rem)]">
                <span className="relative mx-auto block w-fit text-[#f2f2f2] sm:mx-0">
                  BUILD YOUR
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-[0.02em] -left-[0.06em] h-[2px] w-[1.65em] origin-bottom-left -rotate-[36deg] bg-[#fefc4c]/80"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-[0.02em] left-[0.12em] h-[2px] w-[1.45em] origin-bottom-left -rotate-[36deg] bg-[#fefc4c]/55"
                  />
                </span>
                <span className="block whitespace-nowrap">
                  <span className="text-[#fefc4c]">STRONGEST</span>{" "}
                  <span className="text-[#f2f2f2]">SELF.</span>
                </span>
              </h1>

              <p className="hero-copy mx-auto mt-6 max-w-[560px] text-sm leading-[1.7] text-[#b7b7b7] sm:mx-0 sm:text-[15px]">
                Premium training. Powerful equipment. An environment built for real progress.
              </p>

              <a
                href="#membership"
                className="hero-action mt-7 inline-flex items-center gap-5 border border-[#fefc4c] bg-transparent px-6 py-3.5 text-[13px] font-bold tracking-[0.04em] text-white uppercase transition-colors hover:bg-[#fefc4c]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fefc4c]"
              >
                JOIN GOLDEN COMMUNITY <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

      </section>
      <AboutSection />
      <ServicesSection />
      <ProgramsSection />
      <MembershipSection />
      <PersonalTrainingSection />
      <FounderSection />
      <GallerySection />
      <ScheduleBranchesSection />
      <ContactSection />
    </main>
    <SiteFooter />
    <ScrollToTop />
    </>
  );
}
