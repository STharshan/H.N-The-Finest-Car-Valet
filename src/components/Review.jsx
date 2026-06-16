import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "The finish looked incredible and the communication throughout was excellent. The result felt premium and professional from start to finish.",
    name: "Kitti Nangtalar",
    location: "UK",
    avatar: "1.png",
  },
  {
    id: 2,
    quote:
      "A really careful job with attention to detail. The car came back looking sharp, clean, and noticeably improved.",
    name: "Jerome Mowat",
    location: "UK",
    avatar: "2.png",
  },
  {
    id: 3,
    quote:
      "Great service, fast turnaround, and an honest approach. The work was completed to a very high standard.",
    name: "Jay J",
    location: "UK",
    avatar: "3.png",
  },
  {
    id: 4,
    quote:
      "Professional, welcoming, and the car looks fantastic. Everything about the experience felt trustworthy and premium.",
    name: "Phoebe Potkins",
    location: "UK",
    avatar: "4.png",
  },
];

const starRow = (
  <div className="mb-4 flex gap-1 text-[#f4b400]">
    {Array.from({ length: 5 }).map((_, index) => (
      <span key={index}>★</span>
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [paused, setPaused] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden theme-surface-muted py-24 px-6 md:px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-[rgba(46,111,214,0.12)] blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[rgba(11,31,58,0.12)] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto mb-14 flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center" data-aos="fade-up">
        <div data-aos="fade-right">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] theme-accent">Testimonials</p>
          <h2 className="text-4xl font-extrabold leading-[1.2] md:text-5xl">
            What our customers say
          </h2>
          <p className="mt-4 max-w-lg theme-muted">
            Real feedback from drivers who wanted a premium finish, dependable service, and a
            clean result they could trust.
          </p>
        </div>

        <button
          onClick={() => scrollToSection("contact")}
          data-aos="zoom-in"
          data-aos-delay="200"
          className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold uppercase tracking-wide"
        >
          Book Your Repair
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="relative z-10 flex gap-8 animate-scroll-left"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[...testimonials, ...testimonials].map((item, i) => (
          <div
            key={`row1-${i}`}
            className="premium-card min-h-[21rem] w-90 shrink-0 rounded-3xl p-6 transition hover:-translate-y-1"
          >
            {starRow}
            <p className="line-clamp-8 text-[15px] leading-relaxed italic theme-text">
              “{item.quote}”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="h-10 w-10 rounded-full object-cover ring-1 ring-[rgba(46,111,214,0.25)]"
              />
              <div>
                <h4 className="text-sm font-semibold theme-text">{item.name}</h4>
                <p className="text-xs theme-muted">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="relative z-10 mt-10 flex gap-8 animate-scroll-right"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[...testimonials, ...testimonials].map((item, i) => (
          <div
            key={`row2-${i}`}
            className="premium-card min-h-[21rem] w-90 shrink-0 rounded-3xl p-6 transition hover:-translate-y-1"
          >
            {starRow}
            <p className="line-clamp-8 text-[15px] leading-relaxed italic theme-text">
              “{item.quote}”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="h-10 w-10 rounded-full object-cover ring-1 ring-[rgba(46,111,214,0.25)]"
              />
              <div>
                <h4 className="text-sm font-semibold theme-text">{item.name}</h4>
                <p className="text-xs theme-muted">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[rgba(245,247,250,1)] to-transparent dark:from-[rgba(7,17,31,1)]" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[rgba(245,247,250,1)] to-transparent dark:from-[rgba(7,17,31,1)]" />

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 45s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
