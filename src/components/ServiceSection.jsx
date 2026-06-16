import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Window Tinting",
    desc: "Enhance your vehicle's style, comfort, and privacy with our professional window tinting services. We use premium films to reduce heat, block UV rays, and prevent interior fading while giving your car a sleek, modern look.",
    before: "tint-b.jpeg",
    after: "tint-a.jpeg",
    link: "/Window-Tinting",
  },
  {
    title: "Headlight Restoration",
    desc: "Bring clarity back to your headlights with our advanced restoration services. We remove oxidation, yellowing, and scratches to improve night-time visibility and restore headlights to near-new condition.",
    before: "Headlight Restoration-b.jpeg",
    after: "Headlight Restoration-a.png",
    link: "/Headlight-Restoration",
  },
  {
    title: "Headlight Crack Repair",
    desc: "Avoid unnecessary replacements with our expert headlight crack repair services. We fix cracks to prevent moisture ingress, stop further damage, and extend headlight lifespan.",
    before: "Crack-b.jpeg",
    after: "Crack-a .jpeg",
    link: "/Crack-Repair",
  },
  {
    title: "Headlight Condensation Repair",
    desc: "Moisture inside headlights can reduce visibility and damage electrical components. Our condensation repair services restore clarity and prevent future fogging for safer driving.",
    before: "Condensation1-b.jpg",
    after: "Condensation1-a.jpg",
    link: "/Condensation-Repair",
  },
  {
    title: "Headlight Lens Replacement",
    desc: "When restoration isn't enough, we provide professional headlight lens replacement services. Our high-quality replacements ensure optimal light output, improved safety, and a refreshed vehicle appearance.",
    before: "Crack1-b.jpeg",
    after: "Crack1-a .jpeg",
    link: "/Lens-Replacement",
  },
  {
    title: "Exterior Enhancement",
    desc: "Transform your vehicle’s appearance with professional body kit styling and exterior enhancements. We refine bumpers, splitters, side skirts, and trims to create a bold, factory-level finish tailored to your vehicle.",
    before: "extirior-b.png",
    after: "extirior-a.jpg",
    link: "/Headlight",
  },
  {
    title: "Building Window Tinting",
    desc: "Upgrade comfort, privacy, and heat protection with professional building window tinting for homes, offices, terraces, and custom spaces. Reduce glare, block UV rays, and create a clean modern finish.",
    before: "building-b.jpeg",
    after: "building-a.jpeg",
    link: "/Building-Window-Tinting",
  },
  {
    title: "Ambient Light Installation",
    desc: "Transform your vehicle or space with intelligent ambient lighting. We install clean, safe, and professionally wired lighting solutions that improve visibility, enhance mood, and add a premium look.",
    before: "ambient1.jpeg",
    after: "ambient2.jpeg",
    link: "/Intelligent-Ambient-Light-Installation",
  },
  {
    title: "Interior Trims Restoration",
    desc: "Bring your interior back to life with trim restoration and wrapping. We repair worn or faded trims and apply high-quality wraps for a fresh, modern look—perfect for upgrading panels and interior detailing.",
    before: "interior.jpeg",
    after: "interior1.jpeg",
    link: "/Interior-Trims-Restoration",
  }
];

// ─── Before/After Slider ────────────────────────────────────────────────
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
      className="relative h-full w-full overflow-hidden cursor-ew-resize select-none"
      style={{ touchAction: "none" }}
    >
      {/* after */}
      <img
        src={after}
        className="w-full h-full object-top"
        draggable="false"
      />

      {/* before */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          className="absolute inset-0 w-full h-full object-top"
          draggable="false"
        />
      </div>

      {/* DIVIDER + LUCIDE ARROWS */}
      <div
        className="absolute top-0 h-full w-1 bg-[#F21B23]"
        style={{ left: `${pos}%` }}
      >
        <div
          className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            flex items-center justify-center gap-1
            h-10 w-10 rounded-full
            bg-[#F21B23] text-white
            shadow-lg
            cursor-ew-resize
          "
        >
          <ChevronLeft size={16} />
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  );
}

// ─── Main Carousel Section ───────────────────────────────────────────────
export default function ServiceSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const trackRef = useRef(null);
  const autoRef = useRef(null);

  const goTo = useCallback((idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(Math.max(0, Math.min(idx, services.length - 1)));
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

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
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="text-4xl font-bold">Our Services</h2>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <p className="text-[#404143] max-w-lg">
              Professional exterior upgrades designed to improve appearance, safety, and comfort.
            </p>

            {/* NAV + COUNTER */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => { prev(); resetAuto(); }}
                disabled={current === 0}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#404143]/30 text-[#404143] hover:border-[#F21B23] hover:bg-[#F21B23] hover:text-white disabled:opacity-25 transition-all duration-200"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => { next(); resetAuto(); }}
                disabled={current === services.length - 1}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#404143]/30 text-[#404143] hover:border-[#F21B23] hover:bg-[#F21B23] hover:text-white disabled:opacity-25 transition-all duration-200"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
              <span className="text-sm text-[#404143]">
                <span className="font-bold text-black">{String(current + 1).padStart(2, "0")}</span>
                &nbsp;/&nbsp;{String(services.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* CAROUSEL TRACK */}
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
                  <div className="group bg-[#F6F7FB] rounded-2xl overflow-hidden hover:shadow-xl transition">

                    {/* BEFORE / AFTER SLIDER */}
                    <div
                      className="relative h-58 overflow-hidden m-5 rounded-xl cursor-ew-resize select-none"
                    >
                      <BeforeAfterSlider
                        before={item.before}
                        after={item.after}
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="px-6 pb-6">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                      <p className="text-sm text-[#404143] line-clamp-3">
                        {item.desc}
                      </p>

                      <Link
                        to={item.link}
                        className="mt-4 inline-flex items-center font-semibold text-[#F21B23] bg-white hover:bg-[#404143] hover:text-white px-4 py-2 rounded-full transition"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DOT INDICATORS */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetAuto(); }}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "28px" : "7px",
                height: "7px",
                background: i === current ? "#F21B23" : "rgba(0,0,0,0.15)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}