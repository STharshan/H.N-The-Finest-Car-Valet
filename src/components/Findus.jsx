import { useState } from "react";
import { MapContainer, TileLayer, Polygon, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const offices = [
  {
    id: 0, city: "Nottingham", country: "East Midlands", lat: 52.9548, lng: -1.1581,
    subs: [
      { name: "Nottingham City Centre", lat: 52.9548, lng: -1.1581 },
      { name: "West Bridgford", lat: 52.93, lng: -1.125 },
      { name: "Arnold", lat: 53.005, lng: -1.13 },
      { name: "Beeston", lat: 52.922, lng: -1.216 },
      { name: "Carlton", lat: 52.965, lng: -1.083 },
    ],
  },
  {
    id: 1, city: "Leicester", country: "East Midlands", lat: 52.6369, lng: -1.1398,
    subs: [
      { name: "Leicester City Centre", lat: 52.6369, lng: -1.1398 },
      { name: "Oadby", lat: 52.606, lng: -1.083 },
      { name: "Wigston", lat: 52.584, lng: -1.092 },
      { name: "Birstall", lat: 52.677, lng: -1.122 },
      { name: "Glenfield", lat: 52.67, lng: -1.19 },
    ],
  },
  {
    id: 2, city: "Mansfield", country: "East Midlands", lat: 53.1435, lng: -1.2015,
    subs: [
      { name: "Mansfield Town Centre", lat: 53.1435, lng: -1.2015 },
      { name: "Woodhouse", lat: 53.163, lng: -1.185 },
      { name: "Berry Hill", lat: 53.132, lng: -1.174 },
      { name: "Rainworth", lat: 53.119, lng: -1.119 },
      { name: "Shirebrook", lat: 53.204, lng: -1.213 },
    ],
  },
  {
    id: 3, city: "Derby", country: "East Midlands", lat: 52.9225, lng: -1.4746,
    subs: [
      { name: "Derby City Centre", lat: 52.9225, lng: -1.4746 },
      { name: "Mickleover", lat: 52.912, lng: -1.53 },
      { name: "Chaddesden", lat: 52.926, lng: -1.431 },
      { name: "Allestree", lat: 52.939, lng: -1.495 },
      { name: "Borrowash", lat: 52.909, lng: -1.344 },
    ],
  },
];

function getConvexHull(points) {
  if (points.length <= 3) return points;

  const sorted = [...points].sort((a, b) => (a[1] - b[1]) || (a[0] - b[0]));
  const cross = (o, a, b) => (a[1] - o[1]) * (b[0] - o[0]) - (a[0] - o[0]) * (b[1] - o[1]);

  const lower = [];
  for (const point of sorted) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) {
      lower.pop();
    }
    lower.push(point);
  }

  const upper = [];
  for (let i = sorted.length - 1; i >= 0; i -= 1) {
    const point = sorted[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0) {
      upper.pop();
    }
    upper.push(point);
  }

  lower.pop();
  upper.pop();
  return lower.concat(upper);
}

function buildAreaPolygon(office) {
  const points = [[office.lat, office.lng], ...office.subs.map((sub) => [sub.lat, sub.lng])];
  const hull = getConvexHull(points);

  // Fallback to a visible radius if the points collapse into a line or a tiny shape.
  if (hull.length < 3) {
    const latOffset = 0.06;
    const lngOffset = 0.08;
    return [
      [office.lat + latOffset, office.lng - lngOffset],
      [office.lat + latOffset, office.lng + lngOffset],
      [office.lat - latOffset, office.lng + lngOffset],
      [office.lat - latOffset, office.lng - lngOffset],
    ];
  }

  return hull;
}


function RecenterMap({ lat, lng }) {
  const map = useMap();
  map.setView([lat, lng], 11);
  return null;
}

const LocationPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0116 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Findus() {
  const [activeTab, setActiveTab] = useState(0);
  const active = offices[activeTab];
  const activeArea = buildAreaPolygon(active);

  return (
    <section className="theme-surface-strong w-full min-h-screen overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">

        {/* ── LEFT PANEL ── */}
        <div className="flex flex-col w-full lg:w-[45%] px-6 sm:px-10 md:px-14 py-12 md:py-16 lg:min-h-screen">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#2e6fd6]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2e6fd6]">Coverage</span>
          </div>

          <h2 className="site-heading max-w-2xl text-3xl md:text-5xl mb-5">
            Proudly Serving<br />
            <span className="site-heading-accent gradient-text-fix inline-block pr-2">
              The East
            </span> <br />
            <span className="site-heading-accent gradient-text-fix inline-block pr-2">
              Midlands
            </span>
          </h2>

          <p className="site-subheading mb-10 max-w-sm">
            We bring premium mobile vehicle valeting and detailing services directly to customers across Nottingham, Leicester, Mansfield, Derby, and nearby locations, delivering professional results wherever you are.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {offices.map((office) => {
              const isActive = activeTab === office.id;
              return (
                <button
                  key={office.id}
                  onClick={() => setActiveTab(office.id)}
                  className="flex flex-col items-start gap-1 px-4 py-3 rounded-xl text-left transition-all duration-300 border"
                  style={{
                    background: isActive ? "linear-gradient(135deg, rgba(46,111,214,0.2) 0%, rgba(22,59,109,0.26) 100%)" : "rgba(255,255,255,0.04)",
                    borderColor: isActive ? "rgba(46,111,214,0.55)" : "rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <span style={{ color: isActive ? "#2E6FD6" : "#B8C0CC" }}><LocationPinIcon /></span>
                    <span className="text-sm font-semibold" style={{ color: isActive ? "#FFFFFF" : "#B8C0CC" }}>{office.city}</span>
                  </div>
                  <span className="text-[11px]" style={{ color: isActive ? "rgba(201,206,214,0.86)" : "rgba(184,192,204,0.55)", paddingLeft: "18px" }}>
                    {office.country}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center gap-2.5 self-start rounded-xl px-4 py-2.5" style={{ background: "rgba(46,111,214,0.12)", border: "1px solid rgba(46,111,214,0.28)" }}>
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#2e6fd6]" />
            <span className="text-xs font-medium text-[#2e6fd6]">Viewing: {active.city}</span>
          </div>
        </div>

        {/* ── RIGHT PANEL: MAP ── */}
        <div className="flex flex-col w-full lg:w-[55%] min-h-125 lg:min-h-screen">
          {/* Top Bar Tabs */}
          <div className="flex flex-wrap items-center gap-2 px-4 py-3 shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {offices.map((office) => (
              <button
                key={office.id}
                onClick={() => setActiveTab(office.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                style={{
                  background: activeTab === office.id ? "rgba(46,111,214,0.16)" : "transparent",
                  color: activeTab === office.id ? "#2E6FD6" : "rgba(184,192,204,0.6)",
                }}
              >
                {office.city}
              </button>
            ))}
          </div>

          <div className="relative flex-1 overflow-hidden rounded-tl-2xl lg:rounded-tl-3xl">
            <MapContainer
              center={[active.lat, active.lng]}
              zoom={11}
              className="absolute inset-0 w-full h-full"
              style={{ filter: "invert(0.9) hue-rotate(195deg) saturate(0.9) brightness(0.92)" }}
            >
              <RecenterMap lat={active.lat} lng={active.lng} />

              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <Polygon
                positions={activeArea}
                pathOptions={{
                  color: "#2E6FD6",
                  weight: 2,
                  opacity: 0.95,
                  fillColor: "#2E6FD6",
                  fillOpacity: 0.24,
                }}
              />
            </MapContainer>

            {/* Overlay UI */}
            <div className="absolute bottom-0 left-0 right-0 z-1000 flex items-end justify-between px-5 py-4 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(11,31,58,0.95), transparent)" }}>
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-[#2e6fd6]">Currently viewing</p>
                <h3 className="font-bold text-white text-2xl">{active.city}</h3>
                <p className="text-xs text-[rgba(201,206,214,0.72)]">{active.country}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
