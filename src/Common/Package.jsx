import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiCheck, FiX } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";

const iconMap = {
  Phone: <FiPhone size={20} />,
  Mail: <FiMail size={20} />,
  MapPin: <FiMapPin size={20} />,
};

function QuoteModal({ isOpen, onClose, packageName, services }) {
  const createInitialForm = (serviceName = "") => ({
    name: "",
    phone: "",
    service: serviceName,
    date: "",
    time: "",
    info: "",
  });

  const [form, setForm] = useState({
    ...createInitialForm(packageName || ""),
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const message =
      `Hello! I'd like to get a free quote.\n\n` +
      `*Full Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Service:* ${form.service}\n` +
      `*Preferred Date:* ${form.date}\n` +
      `*Preferred Time:* ${form.time}\n` +
      `*More Info:* ${form.info}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/447515634636?text=${encoded}`, "_blank");
    setForm(createInitialForm(packageName || ""));
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(11,31,58,0.72)", backdropFilter: "blur(6px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="premium-card relative w-full max-w-lg rounded-3xl p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="site-heading text-xl font-bold theme-text sm:text-2xl">Get a Free Quote</h2>
          <button
            onClick={onClose}
            className="theme-chip flex h-8 w-8 items-center justify-center rounded-full theme-muted transition-colors hover:text-white hover:bg-[#2e6fd6]"
          >
            <FiX size={16} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider theme-muted">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="input-premium text-sm"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider theme-muted">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone"
                className="input-premium text-sm"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider theme-muted">
              Service Required
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="input-premium appearance-none text-sm"
            >
              <option value="">Select Your Service</option>
              {services?.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider theme-muted">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="input-premium text-sm"
                style={{ colorScheme: "light dark" }}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider theme-muted">
                Preferred Time
              </label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="input-premium text-sm"
                style={{ colorScheme: "light dark" }}
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider theme-muted">
              More Info
            </label>
            <textarea
              name="info"
              value={form.info}
              onChange={handleChange}
              rows={3}
              placeholder="How Can We Help Today?"
              className="input-premium resize-none text-sm"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] py-4 text-base font-bold text-white transition-all hover:opacity-90 active:scale-95"
        >
          <SiWhatsapp size={22} />
          Submit via WhatsApp
        </button>
      </div>
    </div>
  );
}

export default function Package({ data }) {
  const brandBlue = "#2e6fd6";

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  if (!data) return null;

  const { contactLinks, packages, detail } = data;
  const displayDetail = Array.isArray(detail) ? detail[0] : detail;

  const allServices = packages?.map((pkg) => pkg.type) ?? [];

  const openModal = (pkgType) => {
    setSelectedPackage(pkgType);
    setModalOpen(true);
  };

  return (
    <>
      <section id="package" className="theme-surface-muted scroll-m-10 px-4 py-10 transition-colors duration-500 sm:px-6 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="self-start space-y-8 lg:sticky lg:top-24 lg:h-fit">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-0.5 w-12" style={{ backgroundColor: brandBlue }}></div>
                <p className="text-xs font-semibold uppercase tracking-wider theme-accent sm:text-sm">
                  {displayDetail?.title}
                </p>
              </div>
              <h2 className="site-heading text-3xl font-extrabold leading-tight theme-text sm:text-4xl">
                {displayDetail?.desc}
              </h2>
            </div>

            <div className="space-y-3">
              {contactLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-card group flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 items-center justify-center theme-muted transition-colors duration-300 group-hover:text-[#2e6fd6]">
                    {iconMap[link.icon]}
                  </div>
                  <p className="text-base font-semibold theme-text transition-colors group-hover:text-[#2e6fd6]">
                    {link.title}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-10 lg:mt-0">
            {packages?.map((pkg, idx) => (
              <div key={idx} className="premium-card rounded-3xl p-6 transition-all duration-500 hover:border-[#2e6fd6]/40 hover:shadow-xl sm:p-8">
                <p className="mb-2 text-sm font-semibold theme-muted">{pkg.type}</p>
                <div className="mb-6 rounded-2xl theme-surface-muted p-5">
                  <h3 className="text-4xl font-bold text-[#2e6fd6] sm:text-5xl">{pkg.price}</h3>
                </div>

                <div className="mb-6 space-y-3">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: brandBlue }}
                      >
                        <FiCheck size={14} />
                      </div>
                      <p className="text-sm theme-muted">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => openModal(pkg.type)}
                  className="btn-primary block w-full rounded-full py-4 text-center text-sm font-bold text-white transition-all active:scale-95 md:text-base"
                >
                  {pkg.btnText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteModal
        key={selectedPackage || "default-package"}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        packageName={selectedPackage}
        services={allServices}
      />
    </>
  );
}
