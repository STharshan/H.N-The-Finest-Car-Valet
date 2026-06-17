import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Professional Add-On Services",
    desc: "Specialist add-on treatments including engine bay detailing, pet hair removal, sand removal, and headlight restoration.",
    before: "/tab.jpg",
    after: "/tab.jpg",
    link: "/services/professional-add-on-services",
  },
  {
    title: "Full Interior Deep Clean",
    desc: "A complete interior restoration service to remove stains, odours, bacteria, and embedded contamination.",
    before: "/tab.jpg",
    after: "/tab.jpg",
    link: "/services/full-interior-deep-clean",
  },
  {
    title: "Maintenance Valet Packages",
    desc: "Regular valet plans designed to preserve previous detailing work and keep your vehicle clean year-round.",
    before: "/tab.jpg",
    after: "/tab.jpg",
    link: "/services/maintenance-valet-packages",
  },
  {
    title: "New Car Protection Package",
    desc: "Long-term ceramic protection and surface enhancement designed to keep new vehicles looking newer for longer.",
    before: "/tab.jpg",
    after: "/tab.jpg",
    link: "/services/new-car-protection-package",
  },
];

function BeforeAfterSlider({ before, after }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPos(Math.round((x / rect.width) * 100));
  }, []);

  const onMouseDown = (e) => {
    e.preventDefault();
    dragging.current = true;
    updateFromClientX(e.clientX);
    const move = (ev) => dragging.current && updateFromClientX(ev.clientX);
    const up = () => {
      dragging.current = false;
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const onTouchMove = (e) => {
    if (e.touches?.[0]) updateFromClientX(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
      className="relative h-full w-full select-none overflow-hidden rounded-xl cursor-ew-resize"
      style={{ touchAction: "none" }}
    >
      <img src={after} alt="" className="h-full w-full object-cover object-top" draggable="false" />

      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt="" className="absolute inset-0 h-full w-full object-cover object-top" draggable="false" />
      </div>

      <div className="absolute top-0 h-full w-1 bg-[#2e6fd6]" style={{ left: `${pos}%` }}>
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 rounded-full bg-[#2e6fd6] text-white shadow-lg">
          <ChevronLeft size={16} />
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  );
}

export default function ServiceSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const trackRef = useRef(null);
  const autoRef = useRef(null);

  const goTo = useCallback(
    (idx) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(Math.max(0, Math.min(idx, services.length - 1)));
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating]
  );

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const resetAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c + 1 >= services.length ? 0 : c + 1));
    }, 5000);
  }, []);

  useEffect(() => {
    resetAuto();
    return () => clearInterval(autoRef.current);
  }, [resetAuto]);

  const onPointerDown = (e) => setDragStart(e.clientX);
  const onPointerUp = (e) => {
    if (dragStart === null) return;
    const diff = dragStart - e.clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    setDragStart(null);
    resetAuto();
  };

  return (
    <section id="service" className="theme-surface py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] theme-accent">Services</p>
            <h2 className="text-4xl font-bold md:text-5xl">Built for a premium automotive finish</h2>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <p className="max-w-lg theme-muted">
              Professional detailing and restoration services presented with a clean luxury look,
              strong contrast, and trusted workmanship.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  prev();
                  resetAuto();
                }}
                disabled={current === 0}
                className="flex h-10 w-10 items-center justify-center rounded-full border theme-border theme-muted transition-all duration-200 hover:border-[#2e6fd6] hover:bg-[#2e6fd6] hover:text-white disabled:opacity-25"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => {
                  next();
                  resetAuto();
                }}
                disabled={current === services.length - 1}
                className="flex h-10 w-10 items-center justify-center rounded-full border theme-border theme-muted transition-all duration-200 hover:border-[#2e6fd6] hover:bg-[#2e6fd6] hover:text-white disabled:opacity-25"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
              <span className="text-sm theme-muted">
                <span className="font-bold theme-text">{String(current + 1).padStart(2, "0")}</span>
                &nbsp;/&nbsp;{String(services.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={() => setDragStart(null)}
          style={{ cursor: dragStart !== null ? "grabbing" : "grab" }}
        >
          <div
            ref={trackRef}
            className="flex gap-8 transition-transform duration-420 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{
              transform: `translateX(calc(-${current} * (min(360px, 85vw) + 32px)))`,
            }}
          >
            {services.map((item, i) => {
              const isActive = i === current;
              const isNear = Math.abs(i - current) <= 1;

              return (
                <div
                  key={i}
                  className="flex-none transition-all duration-500"
                  style={{
                    width: "min(360px, 85vw)",
                    opacity: isNear ? 1 : 0.4,
                    transform: isActive ? "scale(1)" : "scale(0.97)",
                  }}
                >
                  <div className="premium-card rounded-3xl overflow-hidden transition hover:-translate-y-1">
                    <div className="relative m-5 h-58 overflow-hidden rounded-2xl">
                      <BeforeAfterSlider before={item.before} after={item.after} />
                    </div>

                    <div className="px-6 pb-6">
                      <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                      <p className="line-clamp-3 text-sm theme-muted">{item.desc}</p>
                      <Link
                        to={item.link}
                        className="mt-4 inline-flex items-center rounded-full px-4 py-2 font-semibold text-[#2e6fd6] transition hover:bg-[rgba(46,111,214,0.08)]"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                goTo(i);
                resetAuto();
              }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "28px" : "7px",
                height: "7px",
                background: i === current ? "#2e6fd6" : "rgba(17,24,39,0.18)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
