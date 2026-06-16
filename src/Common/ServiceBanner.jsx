const ServiceBanner = ({ data }) => {
  // Brand color constant
  const brandColor = '#13AFFE';

  if (!data) return null;

  const { title, description, desc1, desc2, thumbnailImage, thumbnailAlt } = data;

  return (
    /* Background flips between White and Black */
    <section className="bg-white dark:bg-black py-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* Text Content Area */}
        <div className="max-w-4xl mb-16 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 mt-20" style={{ backgroundColor: brandColor }}></div>
            <span className="font-bold uppercase tracking-[0.3em] text-xs pt-20" style={{ color: brandColor }}>
              Premium Experience
            </span>
          </div>
          {/* Title flips between Black and White */}
          <h1 className="text-4xl md:text-7xl font-bold text-black dark:text-white mb-8 tracking-tighter uppercase">
            {title}
          </h1>
          {/* Description flips between dark gray and light gray */}
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
            {description}
          </p>
          <p className="text-gray-600 mt-2 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
            {desc1}
          </p>
          <p className="text-gray-600 mt-2 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
            {desc2}
          </p>
        </div>

        {/* Image Only Section */}
        <div className="relative overflow-hidden rounded-sm w-full lg:w-[1200px] mx-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-black/5 dark:border-white/5">
          <img
            src={thumbnailImage}
            alt={thumbnailAlt || `${title} vehicle detailing service by Crystal Clean`}
            className="w-full h-[450px] rounded-xl object-cover transition-all duration-1000 grayscale-[0.2] hover:grayscale-0 hover:scale-105"
            decoding="async"
            loading="lazy"
            fetchPriority="high"
          />

          {/* Subtle Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Bottom Label */}
          <div className="absolute bottom-8 left-8 flex items-center gap-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: brandColor }}>
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className="text-white font-black uppercase tracking-[0.2em] text-sm">
              Professional Service
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
