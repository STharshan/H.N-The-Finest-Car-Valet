export default function About() {
  const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg", "/5.jpeg", "/6.jpeg", "/7.jpeg", "/8.jpeg"];

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const n = images.length || 1;
  const secondsPerImage = 10;
  const gapPx = 16;
  const EASING = "linear";

  return (
    <section id="about" className="theme-surface-muted py-20">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] theme-accent">Why Choose Us</p>
            <h2 className="site-heading mb-6 text-3xl font-bold md:text-5xl">
              Premium care for drivers who expect a flawless finish.
            </h2>

            <p className="mb-6 text-lg leading-relaxed theme-muted">
              We combine precision detailing, trusted products, and a luxury-first approach to
              keep your vehicle looking sharp, protected, and professionally finished.
            </p>
            <p className="mb-6 text-lg leading-relaxed theme-muted">
              Every service is tailored for quality, consistency, and that clean high-contrast
              automotive look that feels polished from every angle.
            </p>

            <div className="mb-8 grid grid-cols-3 gap-4">
              {[
                { value: "1000+", label: "Vehicles Serviced" },
                { value: "10+", label: "Years Experience" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="premium-card rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold theme-accent md:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] theme-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            <button type="button" onClick={scrollToContact} className="btn-primary rounded-full px-6 py-3 font-semibold">
              Contact Us
            </button>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_70px_rgba(11,31,58,0.12)]" style={{ "--gap": `${gapPx}px` }}>
            <div className="relative h-80 md:h-96 lg:h-[28rem]" style={{ margin: "0 calc(var(--gap) * -1)" }}>
              <div
                className="flex h-full will-change-transform"
                style={{
                  "--n": n,
                  "--dur": `${n * secondsPerImage}s`,
                  animation: `aboutscroll var(--dur) ${EASING} infinite`,
                }}
              >
                {[...images, ...images].map((src, i) => (
                  <div
                    key={i}
                    className="h-full w-full flex-[0_0_100%]"
                    style={{ boxSizing: "border-box", padding: "0 var(--gap)" }}
                  >
                    <div className="h-full w-full overflow-hidden rounded-2xl bg-black">
                      <img
                        src={src}
                        alt={`Detailing showcase ${i + 1}`}
                        className="block h-full w-full object-contain"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="theme-gradient-edge-left pointer-events-none absolute inset-y-0 left-0 w-16" />
            <div className="theme-gradient-edge-right pointer-events-none absolute inset-y-0 right-0 w-16" />
          </div>
        </div>
      </div>

      <style>{`
        .group:hover div[style*='aboutscroll'] {
          animation-play-state: paused;
        }
        @keyframes aboutscroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% * var(--n))); }
        }
      `}</style>
    </section>
  );
}
