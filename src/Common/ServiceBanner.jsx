const ServiceBanner = ({ data }) => {
  const brandColor = "#2e6fd6";

  if (!data) return null;

  const { title, description, desc1, desc2, thumbnailImage, thumbnailAlt } = data;

  return (
    <section className="theme-surface pt-2 pb-10 transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-4xl animate-fade-in">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-0.5 w-12" style={{ backgroundColor: brandColor }}></div>
            <span
              className="text-xs font-bold uppercase tracking-[0.3em] theme-accent"
              style={{ color: brandColor }}
            >
              Premium Experience
            </span>
          </div>

          <h1 className="site-heading mb-8 text-4xl font-bold tracking-tighter theme-text md:text-7xl uppercase">
            {title}
          </h1>

          <p className="max-w-2xl text-lg font-medium leading-relaxed theme-muted md:text-xl">
            {description}
          </p>
          <p className="mt-2 max-w-2xl text-lg font-medium leading-relaxed theme-muted md:text-xl">
            {desc1}
          </p>
          <p className="mt-2 max-w-2xl text-lg font-medium leading-relaxed theme-muted md:text-xl">
            {desc2}
          </p>
        </div>

        <div className="relative mx-auto w-full overflow-hidden rounded-3xl border theme-border premium-card lg:w-[1200px]">
          <img
            src={thumbnailImage}
            alt={thumbnailAlt || `${title} vehicle detailing service by H.N Automotive Care`}
            className="h-[450px] w-full rounded-3xl object-cover transition-all duration-1000 grayscale-[0.2] hover:grayscale-0 hover:scale-105"
            decoding="async"
            loading="lazy"
            fetchPriority="high"
          />

          <div className="absolute inset-0 opacity-90" style={{ background: "var(--color-hero-overlay)" }} />

          <div className="absolute bottom-8 left-8 flex items-center gap-4">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ backgroundColor: brandColor }}
            >
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-white">
              Professional Service
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
