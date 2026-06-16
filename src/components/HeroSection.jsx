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

      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,31,58,0.82),rgba(11,31,58,0.58))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(46,111,214,0.22),transparent_45%)]" />

      <section className="relative z-10 flex min-h-screen items-center px-6 py-28">
        <div className="mx-auto w-full max-w-5xl text-center">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[rgba(255,255,255,0.72)]">
            Premium Automotive Detailing
          </p>

          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-[58px]">
            Luxury finish, trusted care, and a cleaner drive every time.
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-[rgba(255,255,255,0.82)] md:text-lg">
            Professional detailing, tinting, and exterior restoration crafted for a premium
            automotive look with honest service and lasting quality.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary inline-flex rounded-full px-8 py-3.5 font-semibold shadow-lg">
              Book Your Detail
            </a>
            <a
              href="#service"
              className="btn-secondary inline-flex rounded-full px-8 py-3.5 font-semibold text-white"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 grid gap-4 text-sm sm:grid-cols-3">
            {[
              "Premium protection and polish",
              "Trusted workmanship",
              "Modern luxury finish",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-2xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.06)] px-4 py-3 backdrop-blur-sm"
              >
                <FaCheckCircle className="text-[#2e6fd6]" size={16} />
                <span className="text-[rgba(255,255,255,0.88)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
