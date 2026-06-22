import { FaCheckCircle } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0" style={{ background: "var(--color-hero-overlay)" }} />
      <div className="absolute inset-0" style={{ background: "var(--color-hero-glow)" }} />

      <section className="relative z-10 flex min-h-screen items-center px-6 py-28">
        <div className="mx-auto w-full max-w-5xl text-center">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[rgba(255,255,255,0.72)]">
            H.N The Finest Car Valet
          </p>

          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-[58px]">
            Professional Mobile Detailing & Vehicle Protection Services
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-[rgba(255,255,255,0.82)] md:text-lg">
            From routine maintenance valets to advanced paint correction and ceramic coatings, we
            help keep your vehicle looking its absolute best with expert care and attention to
            detail.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary inline-flex rounded-full px-8 py-3.5 font-semibold shadow-lg">
              Book Your Valet
            </a>
            <a
              href="#service"
              className="inline-flex rounded-full border border-white/35 px-8 py-3.5 font-semibold text-white transition hover:border-[#2e6fd6] hover:bg-[#2e6fd6] hover:text-white"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 grid gap-4 text-sm sm:grid-cols-3">
            {[
              "Paint Correction Specialists",
              "Fully Mobile Service Across the East Midlands",
              "Trusted by Car Enthusiasts & Daily Drivers",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-2xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.06)] px-3 py-3 text-left backdrop-blur-sm sm:justify-center sm:px-4 sm:text-center"
              >
                <FaCheckCircle className="shrink-0 text-[#2e6fd6]" size={14} />
                <span className="whitespace-nowrap text-xs leading-5 text-[rgba(255,255,255,0.88)] sm:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
