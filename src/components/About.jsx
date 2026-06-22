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
      <div className="container mx-auto px-4 xl:px-12">
        <div className="grid items-center gap-12 xl:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] theme-accent">About H.N The Finest Car Valet</p>
            <h2 className="site-heading mb-6 text-4xl font-bold lg:text-5xl">
              Professional mobile detailing and protection with trusted results.
            </h2>

            <p className="mb-6 text-lg leading-relaxed theme-muted">
              H.N The Finest Car Valet provides professional mobile valeting, detailing, paint
              correction, and ceramic coating services throughout Nottingham and the surrounding
              areas. Our mission is simple: deliver exceptional results, outstanding customer
              service, and long-lasting protection for every vehicle we work on.
            </p>
            <p className="mb-6 text-lg leading-relaxed theme-muted">
              Whether it&apos;s a family car, classic vehicle, motorbike, caravan, or fleet
              vehicle, we bring the expertise, equipment, and attention to detail needed to
              restore and maintain your vehicle&apos;s appearance without you having to leave home.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { title: "Fully Mobile", label: "We Come To You" },
                { title: "Fully Insured", label: "Professional & Reliable Service" },
                { title: "Autobrite Accredited", label: "Trusted Industry Standards" },
                { title: "7 Days A Week", label: "Flexible Appointments Available" },
              ].map((stat) => (
                <div key={stat.title} className="premium-card rounded-2xl p-5 text-left">
                  <div className="text-lg font-bold theme-accent lg:text-xl">{stat.title}</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.2em] theme-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            <button type="button" onClick={scrollToContact} className="btn-primary rounded-full px-6 py-3 font-semibold">
              Get a Free Quote
            </button>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_70px_rgba(11,31,58,0.12)]" style={{ "--gap": `${gapPx}px` }}>
            <div className="relative h-80 xl:h-96 2xl:h-[28rem]" style={{ margin: "0 calc(var(--gap) * -1)" }}>
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
