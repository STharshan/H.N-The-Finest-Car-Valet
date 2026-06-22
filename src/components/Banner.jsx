const GlobalCTA = () => {
  return (
    <section className="theme-surface py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-stretch gap-8 xl:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl xl:col-span-2">
            <img
              src="/Exterior-a.jpeg"
              alt="Premium vehicle detailing"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(11,31,58,0.88), rgba(22,59,109,0.72))" }}
            />

            <div className="relative z-10 flex h-full flex-col justify-center p-10 lg:p-14">
              <span className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#c9ced6]">
                Premium Automotive Support
              </span>

              <h2 className="mb-8 text-4xl font-extrabold leading-tight text-white lg:text-5xl">
                Let&apos;s discuss your vehicle needs and recommend the right finish.
              </h2>

              <a
                href="https://wa.me/447515634636"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex w-fit items-center justify-center rounded-full px-8 py-4 font-semibold"
              >
                Get a Quote via WhatsApp
              </a>
            </div>
          </div>

          <div className="theme-panel flex flex-col justify-between rounded-3xl p-10">
            <div>
              <img
                src="/logo.png"
                alt="Founder portrait"
                className="mb-6 h-16 w-16 rounded-full border border-[rgba(201,206,214,0.2)] bg-[#2e6fd6] object-cover"
              />

              <h3 className="mb-8 text-lg font-semibold leading-relaxed text-white">
                This is the H.N The Finest Car Valet team.
                <br />
                We&apos;re here to answer your questions and help you choose the
                best valeting, detailing, paint correction, or ceramic coating
                option for your vehicle.
              </h3>
            </div>

            <a
              href="https://wa.me/447515634636"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#2e6fd6] px-8 py-4 font-semibold text-white transition hover:bg-[#2e6fd6]"
            >
              Start a WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCTA;
