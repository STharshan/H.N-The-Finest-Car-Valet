import { useState } from "react";
import { MapContainer, TileLayer, Polygon, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const offices = [
  {
    id: 0, city: "Salford", country: "Greater Manchester", lat: 53.4875, lng: -2.2901,
    subs: [
      { name: "Salford City Centre", lat: 53.4875, lng: -2.2901 },
      { name: "Eccles", lat: 53.4839, lng: -2.3341 },
      { name: "Swinton", lat: 53.514, lng: -2.337 },
      { name: "Worsley", lat: 53.503, lng: -2.383 },
      { name: "Walkden", lat: 53.516, lng: -2.397 },
      { name: "Irlam", lat: 53.442, lng: -2.423 },
      { name: "Pendleton", lat: 53.479, lng: -2.273 },
      { name: "Ordsall", lat: 53.474, lng: -2.275 },
      { name: "Little Hulton", lat: 53.533, lng: -2.416 },
      { name: "Boothstown", lat: 53.499, lng: -2.428 },
    ],
  },
  {
    id: 1, city: "Stockport", country: "Greater Manchester", lat: 53.4106, lng: -2.1575,
    subs: [
      { name: "Stockport Town Centre", lat: 53.4106, lng: -2.1575 },
      { name: "Cheadle", lat: 53.394, lng: -2.214 },
      { name: "Bramhall", lat: 53.358, lng: -2.166 },
      { name: "Hazel Grove", lat: 53.376, lng: -2.11 },
      { name: "Marple", lat: 53.394, lng: -2.062 },
      { name: "Romiley", lat: 53.414, lng: -2.089 },
      { name: "Edgeley", lat: 53.399, lng: -2.169 },
      { name: "Heaton Moor", lat: 53.421, lng: -2.179 },
      { name: "Gatley", lat: 53.392, lng: -2.231 },
      { name: "Bredbury", lat: 53.423, lng: -2.11 },
    ],
  },
  {
    id: 2, city: "Bolton", country: "Greater Manchester", lat: 53.5781, lng: -2.4282,
    subs: [
      { name: "Bolton Town Centre", lat: 53.5781, lng: -2.4282 },
      { name: "Horwich", lat: 53.601, lng: -2.548 },
      { name: "Farnworth", lat: 53.55, lng: -2.404 },
      { name: "Westhoughton", lat: 53.549, lng: -2.524 },
      { name: "Radcliffe", lat: 53.559, lng: -2.324 },
      { name: "Kearsley", lat: 53.53, lng: -2.375 },
      { name: "Leigh", lat: 53.497, lng: -2.518 },
      { name: "Atherton", lat: 53.523, lng: -2.494 },
      { name: "Tyldesley", lat: 53.513, lng: -2.467 },
      { name: "Little Lever", lat: 53.565, lng: -2.378 },
    ],
  },
  {
    id: 3, city: "Wigan", country: "Greater Manchester", lat: 53.5450, lng: -2.6325,
    subs: [
      { name: "Wigan Town Centre", lat: 53.5450, lng: -2.6325 },
      { name: "Leigh", lat: 53.497, lng: -2.518 },
      { name: "Atherton", lat: 53.523, lng: -2.494 },
      { name: "Hindley", lat: 53.533, lng: -2.577 },
      { name: "Ashton-in-Makerfield", lat: 53.483, lng: -2.644 },
      { name: "Skelmersdale", lat: 53.55, lng: -2.77 },
      { name: "Standish", lat: 53.586, lng: -2.665 },
      { name: "Golborne", lat: 53.476, lng: -2.597 },
      { name: "Abram", lat: 53.508, lng: -2.586 },
      { name: "Ince", lat: 53.539, lng: -2.61 },
    ],
  },
  {
    id: 4, city: "Rochdale", country: "Greater Manchester", lat: 53.6097, lng: -2.1561,
    subs: [
      { name: "Rochdale Town Centre", lat: 53.6097, lng: -2.1561 },
      { name: "Heywood", lat: 53.59, lng: -2.219 },
      { name: "Middleton", lat: 53.55, lng: -2.2 },
      { name: "Milnrow", lat: 53.611, lng: -2.112 },
      { name: "Littleborough", lat: 53.644, lng: -2.095 },
      { name: "Wardle", lat: 53.65, lng: -2.13 },
      { name: "Norden", lat: 53.64, lng: -2.18 },
      { name: "Bamford", lat: 53.61, lng: -2.17 },
      { name: "Castleton", lat: 53.59, lng: -2.18 },
      { name: "Whitworth", lat: 53.656, lng: -2.178 },
    ],
  },
  {
    id: 5, city: "Oldham", country: "Greater Manchester", lat: 53.5409, lng: -2.1114,
    subs: [
      { name: "Oldham Town Centre", lat: 53.54, lng: -2.11 },
      { name: "Saddleworth", lat: 53.55, lng: -2.02 },
      { name: "Royton", lat: 53.565, lng: -2.122 },
      { name: "Chadderton", lat: 53.536, lng: -2.147 },
      { name: "Failsworth", lat: 53.51, lng: -2.164 },
      { name: "Lees", lat: 53.55, lng: -2.08 },
      { name: "Shaw", lat: 53.577, lng: -2.095 },
      { name: "Crompton", lat: 53.58, lng: -2.1 },
      { name: "Springhead", lat: 53.53, lng: -2.08 },
      { name: "Uppermill", lat: 53.55, lng: -2.0 },
    ],
  },
  {
    id: 6, city: "Trafford", country: "Greater Manchester", lat: 53.4448, lng: -2.3484,
    subs: [
      { name: "Trafford", lat: 53.4448, lng: -2.3484 },
      { name: "Stretford", lat: 53.447, lng: -2.308 },
      { name: "Sale", lat: 53.425, lng: -2.324 },
      { name: "Altrincham", lat: 53.387, lng: -2.348 },
      { name: "Urmston", lat: 53.448, lng: -2.354 },
      { name: "Partington", lat: 53.42, lng: -2.43 },
      { name: "Bowdon", lat: 53.376, lng: -2.365 },
      { name: "Hale", lat: 53.378, lng: -2.332 },
      { name: "Timperley", lat: 53.4, lng: -2.335 },
      { name: "Flixton", lat: 53.45, lng: -2.39 },
      { name: "Davyhulme", lat: 53.457, lng: -2.34 },
    ],
  },
  {
    id: 7, city: "Cheshire", country: "North West", lat: 53.3000, lng: -2.5000,
    subs: [
      { name: "Cheshire", lat: 53.3000, lng: -2.5000 },
      { name: "Chester", lat: 53.193, lng: -2.893 },
      { name: "Crewe", lat: 53.1, lng: -2.443 },
      { name: "Macclesfield", lat: 53.26, lng: -2.125 },
      { name: "Wilmslow", lat: 53.326, lng: -2.231 },
      { name: "Congleton", lat: 53.163, lng: -2.211 },
      { name: "Northwich", lat: 53.258, lng: -2.516 },
      { name: "Winsford", lat: 53.19, lng: -2.52 },
      { name: "Knutsford", lat: 53.302, lng: -2.374 },
      { name: "Nantwich", lat: 53.067, lng: -2.521 },
      { name: "Ellesmere Port", lat: 53.28, lng: -2.895 },
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
              Greater
            </span> <br />
            <span className="site-heading-accent gradient-text-fix inline-block pr-2">
              Manchester
            </span>
          </h2>

          <p className="site-subheading mb-10 max-w-sm">
            Based in Manchester, we provide professional autobody repair services across the surrounding areas.
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
