import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Top-quality service. He was patient, thorough, and took his time to make sure every detail was perfect. The car is absolutely immaculate inside and out. You can tell he genuinely cares about the quality of his work. What impressed me even more was the price incredibly reasonable for the level of care, time, and attention that went into the job. Excellent value for money. Highly recommended and I'll definitely be using him again.",
    name: "reem Khalifeh",
    href: "https://www.google.com/maps/contrib/112627090237023908383/reviews?hl=en-GB",
    location: "Google Review",
    avatar: "1.png",
  },
  {
    id: 2,
    quote:
      "Absolutely top-class service from start to finish. The attention to detail was incredible - the car genuinely looks better than when I first bought it. Every inch was spotless, from the paintwork and wheels to the interior finishes. Professional, friendly, and clearly takes real pride in the work. Communication was excellent throughout and the turnaround time was spot on. Would highly recommend to anyone wanting their car treated properly.",
    name: "Sanjay",
    href: "https://www.google.com/maps/contrib/100015155963527408198/reviews?hl=en-GB",
    location: "Google Review",
    avatar: "2.png",
  },
  {
    id: 3,
    quote:
      "I am pleased to share my experience with this car polishing and cleaning service provider. From start to finish, the level of professionalism demonstrated was truly commendable. The quality of work delivered exceeded my expectations. Every detail of my vehicle was attended to with exceptional care, leaving it in pristine, showroom condition. It was clear that he takes genuine pride in his craft and is committed to delivering results of the highest standard. His professional conduct throughout the entire process was equally impressive - respectful, reliable, and focused. I would not hesitate to use his services again and wholeheartedly recommend him to anyone seeking a trustworthy and skilled car polishing and cleaning professional.",
    name: "DanYas KuRd",
    href: "https://www.google.com/maps/contrib/107453120923582760342/reviews?hl=en-GB",
    location: "Google Review",
    avatar: "3.png",
  },
  {
    id: 4,
    quote:
      "I have been using Roshawn for over a year. Comes out to my car every month, always punctual and friendly, keeping the standard high as always. Definitely would recommend, especially if you're looking for that attention and care for your car, trust, and excellent customer service all the time.",
    name: "Rohan walt",
    href: "https://www.google.com/maps/contrib/111642569599191942241/reviews?hl=en-GB",
    location: "Google Review",
    avatar: "4.png",
  },
  {
    id: 5,
    quote:
      "Have been using H&N Valet for a while and the service is impeccable. Always happy to tailor cleaning to my needs and requirements, and the cleaning is always very thorough with excellent attention to detail and no corners ever cut.",
    name: "MO",
    location: "Customer Review",
    avatar: "1.png",
  },
];

const starRow = (
  <div className="mb-4 flex gap-1 text-[#f4b400]">
    {Array.from({ length: 5 }).map((_, index) => (
      <span key={index}>★</span>
    ))}
  </div>
);

const renderAuthor = (item) => {
  if (!item.href) {
    return (
      <h4 className="whitespace-nowrap text-sm font-semibold theme-text">
        {item.name}
      </h4>
    );
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="whitespace-nowrap text-sm font-semibold theme-text transition hover:text-[var(--color-accent)]"
    >
      {item.name}
    </a>
  );
};

const getInitial = (name) => name?.trim()?.charAt(0)?.toUpperCase() || "C";

const renderTestimonialCard = (item, key) => (
  <div
    key={key}
    className="premium-card flex min-h-[21rem] w-90 shrink-0 flex-col rounded-3xl p-6 transition hover:-translate-y-1"
  >
    {starRow}
    <p className="flex-1 text-[15px] leading-relaxed italic theme-text">
      "{item.quote}"
    </p>
    <div className="mt-6 flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-bold text-white ring-1 ring-[rgba(46,111,214,0.25)]">
        {getInitial(item.name)}
      </div>
      <div className="min-w-0">
        {renderAuthor(item)}
        <p className="whitespace-nowrap text-xs theme-muted">{item.location}</p>
      </div>
    </div>
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
      className="relative overflow-hidden theme-surface-muted px-6 py-24 md:px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[rgba(46,111,214,0.12)] blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[rgba(11,31,58,0.12)] blur-[140px]" />
      </div>

      <div
        className="relative z-10 mx-auto mb-14 flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center"
        data-aos="fade-up"
      >
        <div data-aos="fade-right">
          <p className="theme-accent mb-2 text-sm font-semibold uppercase tracking-[0.3em]">
            Testimonials
          </p>
          <h2 className="text-4xl font-extrabold leading-[1.2] md:text-5xl">
            What our customers say
          </h2>
          <p className="mt-4 max-w-2xl theme-muted">
            At H.N The Finest Car Valet, we take pride in transforming and
            protecting vehicles with professional care and attention to detail.
            See what our customers think of our services.
          </p>
        </div>

        <button
          onClick={() => scrollToSection("contact")}
          data-aos="zoom-in"
          data-aos-delay="200"
          className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold uppercase tracking-wide"
        >
          Book Your Repair
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="relative z-10 flex gap-8 animate-scroll-left"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[...testimonials, ...testimonials].map((item, i) =>
          renderTestimonialCard(item, `row1-${i}`)
        )}
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="relative z-10 mt-10 flex gap-8 animate-scroll-right"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[...testimonials, ...testimonials].map((item, i) =>
          renderTestimonialCard(item, `row2-${i}`)
        )}
      </div>

      <div className="theme-gradient-edge-left pointer-events-none absolute bottom-0 left-0 top-0 w-24" />
      <div className="theme-gradient-edge-right pointer-events-none absolute bottom-0 right-0 top-0 w-24" />

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
