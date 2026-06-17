import { Check } from "lucide-react";

const ServiceDetail = ({ data }) => {
  const brandColor = "#2e6fd6";

  if (!data) return null;

  const {
    mainTitle,
    mainDescription,
    benefits,
    process,
    subDesc,
    additionalDescriptions = [],
    extraSections = [],
    cta,
  } = data;

  const descriptionBlocks = [
    ...(mainDescription ? [mainDescription] : []),
    ...(Array.isArray(subDesc) ? subDesc : subDesc ? [subDesc] : []),
    ...additionalDescriptions,
  ];

  return (
    <section className="theme-surface py-10 transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-4xl">
          <div className="mb-4 flex items-center gap-3">
            <div
              className="h-0.5 w-10"
              style={{ backgroundColor: brandColor }}
            ></div>
            <span
              className="text-[10px] font-bold uppercase tracking-[0.3em] theme-accent"
              style={{ color: brandColor }}
            >
              Professional Service • Excellence
            </span>
          </div>

          <h2 className="site-heading mb-8 text-4xl font-bold tracking-tighter theme-text md:text-5xl lg:text-6xl uppercase">
            {mainTitle}
          </h2>
          <div className="space-y-3">
            {descriptionBlocks.map((paragraph, index) => (
              <p
                key={`${mainTitle}-paragraph-${index}`}
                className="max-w-3xl text-lg leading-relaxed theme-muted md:text-xl"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
          <div className="premium-card group rounded-3xl p-8 lg:p-12">
            <h3 className="mb-10 flex items-center gap-3 text-2xl font-bold tracking-tight theme-text md:text-3xl uppercase">
              <span
                className="h-8 w-2 rounded-full"
                style={{ backgroundColor: brandColor }}
              ></span>
              {benefits?.title}
            </h3>

            <div className="space-y-10">
              {benefits?.items?.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div className="mt-1 shrink-0">
                    <div
                      className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2e6fd6]/30 transition-colors duration-500 group-hover:bg-[#2e6fd6]"
                      style={{ backgroundColor: "rgba(46,111,214,0.12)" }}
                    >
                      <Check
                        className="h-3.5 w-3.5 transition-colors duration-500 group-hover:text-white"
                        style={{ color: brandColor }}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold uppercase tracking-wide theme-text transition-colors group-hover:text-[#2e6fd6]">
                      {item.heading}
                    </h4>
                    <p className="text-sm leading-relaxed theme-muted md:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card group rounded-3xl p-8 lg:p-12">
            <h3 className="mb-10 flex items-center gap-3 text-2xl font-bold tracking-tight theme-text md:text-3xl uppercase">
              <span className="h-8 w-2 rounded-full bg-[rgba(46,111,214,0.16)] transition-colors group-hover:bg-[#2e6fd6]"></span>
              {process?.title}
            </h3>

            <div className="space-y-10">
              {process?.steps?.map((step, index) => (
                <div key={index} className="relative flex gap-5">
                  {index !== process.steps.length - 1 && (
                    <div className="absolute left-4 top-10 h-full w-px bg-[rgba(46,111,214,0.14)] transition-colors group-hover:bg-[rgba(46,111,214,0.24)]" />
                  )}

                  <div className="theme-surface relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(46,111,214,0.18)] text-xs font-black theme-muted transition-all duration-500 group-hover:border-[#2e6fd6] group-hover:bg-[#2e6fd6] group-hover:text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold uppercase tracking-wide theme-text">
                      {step.heading}
                    </h4>
                    <p className="text-sm leading-relaxed theme-muted md:text-base">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {extraSections.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {extraSections.map((section) => (
              <div key={section.title} className="premium-card rounded-3xl p-8 lg:p-10">
                <h3 className="mb-6 text-2xl font-bold uppercase tracking-tight theme-text">
                  {section.title}
                </h3>
                <div className="space-y-5">
                  {section.items?.map((item) => (
                    <div key={item.heading || item.text}>
                      {item.heading ? (
                        <h4 className="mb-2 text-lg font-bold uppercase tracking-wide theme-text">
                          {item.heading}
                        </h4>
                      ) : null}
                      <p className="text-sm leading-relaxed theme-muted md:text-base">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {cta ? (
          <div className="premium-card mt-10 rounded-3xl p-8 text-center lg:p-10">
            <h3 className="site-heading text-3xl font-bold theme-text md:text-4xl">
              {cta.title}
            </h3>
            {cta.buttonText ? (
              <p className="mt-3 text-lg font-semibold theme-accent">
                {cta.buttonText}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ServiceDetail;
