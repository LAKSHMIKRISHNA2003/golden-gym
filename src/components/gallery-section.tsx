import GalleryGrid from "@/components/gallery-grid";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-transparent px-6 py-20 text-heading sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="gallery-intro max-w-[760px]">
          <h2
            id="gallery-heading"
            className="font-heading text-[clamp(2.8rem,10vw,4rem)] leading-[0.92] font-extrabold tracking-[-0.035em] uppercase text-[#f2f2f2] sm:text-[clamp(3.5rem,5vw,5.2rem)]"
          >
            <span className="relative block w-fit">
              A SPACE BUILT
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
              FOR <span className="text-[#fefc4c]">PROGRESS.</span>
            </span>
          </h2>
          <p className="mt-6 max-w-[600px] text-sm leading-[1.7] text-white/60">
            Take a look inside Golden Gym — from dedicated training zones and premium equipment to the energy that drives every workout.
          </p>
        </div>

        <GalleryGrid />

        <div className="mt-10 flex items-center gap-5 border-t border-white/10 pt-5 text-[10px] font-semibold tracking-[0.18em] text-white/45 uppercase">
          <span>TRAIN. PROGRESS. REPEAT.</span>
          <span aria-hidden="true" className="h-px w-10 bg-[#fefc4c]/70" />
        </div>
      </div>
    </section>
  );
}
