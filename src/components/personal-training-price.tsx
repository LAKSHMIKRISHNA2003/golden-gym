export default function PersonalTrainingPrice() {
  return (
    <div className="personal-training-actions mt-9 max-w-[580px]">
      <div className="w-fit">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-white/65 uppercase">
          PERSONAL TRAINING
        </p>
        <p className="mt-1 font-heading text-[clamp(3rem,5vw,5rem)] leading-none font-extrabold tracking-[-0.04em] text-[#fefc4c]">
          ₹6,000
        </p>
        <div className="mt-2 flex items-center gap-3">
          <span aria-hidden="true" className="h-[2px] w-7 bg-[#fefc4c]" />
          <span className="text-[11px] font-medium tracking-[0.14em] text-white/55 uppercase">
            / MONTH
          </span>
        </div>
      </div>

      <a
        href="#contact"
        className="mt-6 inline-flex min-h-12 items-center justify-center gap-5 border border-[#fefc4c] bg-[#fefc4c] px-6 py-3.5 text-xs font-bold tracking-[0.06em] text-[#080808] uppercase transition-colors duration-300 hover:border-[#f5f23e] hover:bg-[#f5f23e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fefc4c]"
      >
        CONTACT NOW <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
