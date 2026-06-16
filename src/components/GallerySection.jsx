import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
gsap.registerPlugin(Draggable);

const categories = [
  "All",
  "Window Tinting",
  "Headlight Restoration",
  "Headlight Crack Repair",
  "Headlight Condensation Repair",
  "Headlight Lens Replacement",
  "Exterior Enhancement Services",
  "Building Window Tinting",
  "Intelligent Ambient Light Installation",
  "Interior Trims Restoration / Wrapping",
];

const beforeAfterData = [
  { id: 1, category: "Window Tinting", before: "/tint-b.jpeg", after: "/tint-a.jpeg" },
  { id: 2, category: "Headlight Restoration", before: "/Headlight Restoration-a.png", after: "/Headlight Restoration-b.jpeg" },
  { id: 3, category: "Headlight Crack Repair", before: "/Crack-a .jpeg", after: "/Crack-b.jpeg" },
  { id: 4, category: "Headlight Condensation Repair", before: "/Condensation1-a.jpg", after: "/Condensation1-b.jpg" },
  { id: 5, category: "Headlight Lens Replacement", before: "/Crack-a .jpeg", after: "/Crack-b.jpeg" },
  { id: 6, category: "Exterior Enhancement Services", before: "/Exterior-a.jpeg", after: "/Exterior-b.jpeg" },
  { id: 7, category: "Exterior Enhancement Services", before: "/extirior-a.jpg", after: "/extirior-b.png" },
  { id: 8, category: "Building Window Tinting", before: "/building-a.jpeg", after: "/building-b.jpeg" },
  { id: 9, category: "Intelligent Ambient Light Installation", before: "/ambient1.jpeg", after: "/ambient2.jpeg" },
  { id: 10, category: "Interior Trims Restoration / Wrapping", before: "/interior1.jpeg", after: "/interior.jpeg" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const gridRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const lastIndexRef = useRef(0);
  const lastCategoryRef = useRef(activeCategory);
  const categoryScrollRef = useRef(null);

  const items = useMemo(
    () =>
      activeCategory === "All"
        ? beforeAfterData
        : beforeAfterData.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const [itemsPerView, setItemsPerView] = useState(3);
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const visibleItems = useMemo(
    () => items.slice(startIndex, startIndex + itemsPerView),
    [items, startIndex, itemsPerView]
  );

  const totalPages = Math.ceil(items.length / itemsPerView);
  const currentPage = Math.floor(startIndex / itemsPerView);

  const pressButton = async (ref) => {
    if (!ref.current) return;
    return gsap.to(ref.current, {
      scale: 0.88,
      duration: 0.1,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });
  };

  const prevSlide = useCallback(async () => {
    if (startIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      await pressButton(leftBtnRef);
      setStartIndex((prev) => Math.max(0, prev - itemsPerView));
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [startIndex, isAnimating, itemsPerView]);

  const nextSlide = useCallback(async () => {
    if (startIndex < items.length - itemsPerView && !isAnimating) {
      setIsAnimating(true);
      await pressButton(rightBtnRef);
      setStartIndex((prev) => Math.min(items.length - itemsPerView, prev + itemsPerView));
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [startIndex, items.length, isAnimating, itemsPerView]);

  const handleCategory = (cat) => {
    if (cat === activeCategory) return;
    setActiveCategory(cat);
    setStartIndex(0);
  };

  const goToPage = (page) => {
    setStartIndex(page * itemsPerView);
  };

  useEffect(() => {
    const cards = gridRef.current && Array.from(gridRef.current.querySelectorAll(":scope > div"));
    if (!cards?.length) return;

    if (lastCategoryRef.current !== activeCategory) {
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 30, scale: 0.95 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out", stagger: 0.1 }
      );
      lastCategoryRef.current = activeCategory;
      lastIndexRef.current = startIndex;
      return;
    }

    const dir = Math.sign(startIndex - lastIndexRef.current) || 1;
    gsap.fromTo(
      cards,
      { x: 60 * dir, autoAlpha: 0, scale: 0.97 },
      { x: 0, autoAlpha: 1, scale: 1, duration: 0.45, ease: "power3.out", stagger: 0.07 }
    );
    lastIndexRef.current = startIndex;
  }, [activeCategory, startIndex, visibleItems.length]);

  // Swipe support
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    let startX = 0;
    const onTouchStart = (e) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
    };
    el.addEventListener("touchstart", onTouchStart);
    el.addEventListener("touchend", onTouchEnd);
    return () => { el.removeEventListener("touchstart", onTouchStart); el.removeEventListener("touchend", onTouchEnd); };
  }, [nextSlide, prevSlide]);

  return (
    <>
      <style>{`

        .gallery-section {
          background: var(--gradient-premium);
          position: relative;
          overflow: hidden;
        }

        .gallery-section::before {
          content: '';
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(46,111,214,0.14) 0%, transparent 70%);
          pointer-events: none;
        }

        .gallery-title {
          letter-spacing: 0.08em;
          line-height: 1;
        }

        .title-accent {
          color: #2e6fd6;
          position: relative;
          display: inline-block;
        }

        .title-accent::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #2e6fd6, transparent);
        }

        .cat-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }
        .cat-scroll::-webkit-scrollbar { display: none; }

        .cat-btn {
          font-weight: 500;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          white-space: nowrap;
          border: 1px solid rgba(201,206,214,0.28);
          color: rgba(255,255,255,0.78);
          padding: 6px 14px;
          border-radius: 2px;
          background: transparent;
          transition: all 0.25s ease;
          cursor: pointer;
          text-transform: uppercase;
        }

        .cat-btn:hover {
          border-color: #2e6fd6;
          color: #fff;
          background: rgba(46,111,214,0.08);
        }

        .cat-btn.active {
          background: #2e6fd6;
          border-color: #2e6fd6;
          color: #fff;
          box-shadow: 0 0 20px rgba(46,111,214,0.3);
        }

        .nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(201,206,214,0.32);
          background: rgba(255,255,255,0.06);
          color: #2e6fd6;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        @media (min-width: 640px) {
          .nav-btn { width: 52px; height: 52px; }
          .cat-btn { font-size: 0.8rem; padding: 7px 16px; }
        }

        .nav-btn:hover:not(:disabled) {
          background: #2e6fd6;
          color: #fff;
          box-shadow: 0 0 25px rgba(46,111,214,0.35);
          border-color: #2e6fd6;
        }

        .nav-btn:disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .dot.active {
          background: #2e6fd6;
          width: 20px;
          border-radius: 3px;
          box-shadow: 0 0 8px rgba(46,111,214,0.5);
        }

        .card-wrap {
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid rgba(201,206,214,0.2);
          background: rgba(11,31,58,0.72);
          box-shadow: 0 4px 40px rgba(0,0,0,0.6);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          cursor: grab;
        }

        .card-wrap:hover {
          border-color: rgba(46,111,214,0.5);
          box-shadow: 0 8px 60px rgba(46,111,214,0.16), 0 4px 40px rgba(0,0,0,0.8);
          transform: translateY(-4px);
        }

        .label-badge {
          letter-spacing: 0.1em;
          font-size: 0.7rem;
          padding: 3px 8px;
          border-radius: 2px;
        }

        .handle-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, #2e6fd6 20%, #2e6fd6 80%, transparent);
          cursor: ew-resize;
          z-index: 10;
        }

        .handle-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 36px;
          height: 36px;
          background: #2e6fd6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          box-shadow: 0 0 20px rgba(46,111,214,0.55), 0 2px 8px rgba(0,0,0,0.5);
          border: 2px solid rgba(255,255,255,0.2);
          pointer-events: none;
        }

        .progress-bar {
          height: 2px;
          background: rgba(255,255,255,0.06);
          border-radius: 1px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #2e6fd6, #163b6d);
          border-radius: 1px;
          transition: width 0.4s ease;
        }

        @media (max-width: 639px) {
          .handle-icon { width: 30px; height: 30px; font-size: 10px; }
        }
      `}</style>

      <section className="gallery-section py-16 px-3 sm:px-6 lg:px-8" id="before-after">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#c9ced6] text-xs tracking-[0.3em] uppercase font-medium mb-3 opacity-90">
            Transformation Portfolio
          </p>
          <h2 className="gallery-title text-5xl sm:text-6xl md:text-7xl text-white">
            OUR <span className="title-accent">GALLERY</span>
          </h2>
          <p className="text-[rgba(201,206,214,0.76)] text-sm mt-4 tracking-wide max-w-sm mx-auto">
            Drag the slider to reveal before &amp; after results
          </p>
        </div>

        {/* Category Filter — horizontally scrollable on mobile */}
        <div
          ref={categoryScrollRef}
          className="cat-scroll flex gap-2 mb-8 sm:mb-10 sm:flex-wrap sm:justify-center overflow-x-auto pb-2 px-1"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`cat-btn ${activeCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="max-w-xs mx-auto mb-6 progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentPage + 1) / Math.max(totalPages, 1)) * 100}%` }}
          />
        </div>

        {/* Carousel */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-6">
          <button
            ref={leftBtnRef}
            onClick={prevSlide}
            disabled={startIndex === 0}
            className="nav-btn"
            aria-label="Previous"
          >
            <FaChevronLeft size={14} />
          </button>

          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full max-w-6xl"
          >
            {visibleItems.map((item) => (
              <BeforeAfterCard
                key={`${item.id}-${activeCategory}`}
                before={item.before}
                after={item.after}
                category={item.category}
              />
            ))}
          </div>

          <button
            ref={rightBtnRef}
            onClick={nextSlide}
            disabled={startIndex >= items.length - itemsPerView}
            className="nav-btn"
            aria-label="Next"
          >
            <FaChevronRight size={14} />
          </button>
        </div>

        {/* Dot navigation */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`dot ${i === currentPage ? "active" : ""}`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Count */}
        <p className="mt-6 text-center text-xs tracking-widest uppercase text-[rgba(201,206,214,0.76)]">
          {Math.min(startIndex + itemsPerView, items.length)} / {items.length} results
        </p>
      </section>
    </>
  );
}

function BeforeAfterCard({ before, after, category }) {
  const containerRef = useRef(null);
  const afterRef = useRef(null);
  const handleRef = useRef(null);
  const percentRef = useRef(50);
  const draggableRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const afterImg = afterRef.current;
    const handle = handleRef.current;
    if (!container || !afterImg || !handle) return;

    const init = () => {
      const width = container.offsetWidth;
      percentRef.current = 50;
      gsap.set(handle, { x: width / 2 });
      gsap.set(afterImg, { clipPath: `inset(0 50% 0 0)` });
    };

    init();

    if (draggableRef.current) {
      draggableRef.current[0]?.kill();
    }

    draggableRef.current = Draggable.create(handle, {
      type: "x",
      bounds: container,
      onDrag: function () {
        const width = container.offsetWidth;
        const percent = Math.max(0, Math.min(100, (this.x / width) * 100));
        percentRef.current = percent;
        gsap.set(afterImg, { clipPath: `inset(0 ${100 - percent}% 0 0)` });
      },
    });

    // Touch support for the container
    let touchStartX = 0;
    let touchStartPercent = 50;
    const onTouchStart = (e) => {
      if (e.target === handle || handle.contains(e.target)) return;
      const rect = container.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const p = Math.max(0, Math.min(100, (x / rect.width) * 100));
      percentRef.current = p;
      gsap.to(handle, { x: (p / 100) * rect.width, duration: 0.15 });
      gsap.set(afterImg, { clipPath: `inset(0 ${100 - p}% 0 0)` });
      touchStartX = e.touches[0].clientX;
      touchStartPercent = p;
    };
    const onTouchMove = (e) => {
      const rect = container.getBoundingClientRect();
      const dx = e.touches[0].clientX - touchStartX;
      const p = Math.max(0, Math.min(100, touchStartPercent + (dx / rect.width) * 100));
      percentRef.current = p;
      gsap.set(handle, { x: (p / 100) * rect.width });
      gsap.set(afterImg, { clipPath: `inset(0 ${100 - p}% 0 0)` });
      e.preventDefault();
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });

    const ro = new ResizeObserver(init);
    ro.observe(container);

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      ro.disconnect();
      draggableRef.current?.[0]?.kill();
    };
  }, []);

  return (
    <div className="card-wrap">
      {/* Card header */}
      <div className="flex items-center justify-between border-b border-white/8 bg-[rgba(7,17,31,0.92)] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#2e6fd6]" />
          <span className="h-2 w-2 rounded-full bg-[#c9ced6]/70" />
          <span className="h-2 w-2 rounded-full bg-[#2e8b57]/70" />
        </div>
        <span className="text-[10px] tracking-widest uppercase text-[rgba(201,206,214,0.56)]">{category?.split(" ").slice(0,2).join(" ")}</span>
      </div>

      {/* Image container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "4/3" }}
      >
        {/* Before label */}
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <span className="label-badge border border-white/10 bg-[rgba(7,17,31,0.72)] text-[#c9ced6] backdrop-blur-sm">
            BEFORE
          </span>
        </div>
        {/* After label */}
        <div className="absolute top-3 right-3 z-20 pointer-events-none">
          <span className="label-badge bg-[#2e6fd6] text-white backdrop-blur-sm">
            AFTER
          </span>
        </div>

        <img
          src={before}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        <img
          ref={afterRef}
          src={after}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Handle */}
        <div ref={handleRef} className="handle-line">
          <div className="handle-icon">⇆</div>
        </div>
      </div>
    </div>
  );
}
