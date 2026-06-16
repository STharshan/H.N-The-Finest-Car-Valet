import { useEffect, useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiCheck, FiX } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";

const iconMap = {
    Phone: <FiPhone size={20} />,
    Mail: <FiMail size={20} />,
    MapPin: <FiMapPin size={20} />,
};

// ─── WhatsApp Quote Modal ───────────────────────────────────────────────────
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

    useEffect(() => {
        setForm(createInitialForm(packageName || ""));
    }, [packageName]);

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
        window.open(`https://wa.me/447446253967?text=${encoded}`, "_blank");
        setForm(createInitialForm(packageName || ""));
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div
                className="relative w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl"
                style={{ backgroundColor: "#1a1a1a", border: "1px solid rgba(255,255,255,0.08)" }}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Get a Free Quote</h2>
                    <button
                        onClick={onClose}
                        className="h-8 w-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                        style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    >
                        <FiX size={16} />
                    </button>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter Your Name"
                                className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:ring-2 transition-all"
                                style={{ backgroundColor: "#111", border: "1px solid rgba(255,255,255,0.08)" }}
                                onFocus={(e) => (e.target.style.border = "1px solid #13AFFE")}
                                onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Enter Your Phone"
                                className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
                                style={{ backgroundColor: "#111", border: "1px solid rgba(255,255,255,0.08)" }}
                                onFocus={(e) => (e.target.style.border = "1px solid #13AFFE")}
                                onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                            Service Required
                        </label>
                        <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full rounded-lg px-4 py-3 text-sm text-white outline-none transition-all appearance-none"
                            style={{ backgroundColor: "#111", border: "1px solid #13AFFE" }}
                        >
                            <option value="">Select Your Service</option>
                            {services?.map((s, i) => (
                                <option key={i} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                                Preferred Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                className="w-full rounded-lg px-4 py-3 text-sm text-white outline-none transition-all"
                                style={{ backgroundColor: "#111", border: "1px solid rgba(255,255,255,0.08)", colorScheme: "dark" }}
                                onFocus={(e) => (e.target.style.border = "1px solid #13AFFE")}
                                onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                                Preferred Time
                            </label>
                            <input
                                type="time"
                                name="time"
                                value={form.time}
                                onChange={handleChange}
                                className="w-full rounded-lg px-4 py-3 text-sm text-white outline-none transition-all"
                                style={{ backgroundColor: "#111", border: "1px solid rgba(255,255,255,0.08)", colorScheme: "dark" }}
                                onFocus={(e) => (e.target.style.border = "1px solid #13AFFE")}
                                onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                            More Info
                        </label>
                        <textarea
                            name="info"
                            value={form.info}
                            onChange={handleChange}
                            rows={3}
                            placeholder="How Can We Help Today?"
                            className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all resize-none"
                            style={{ backgroundColor: "#111", border: "1px solid rgba(255,255,255,0.08)" }}
                            onFocus={(e) => (e.target.style.border = "1px solid #13AFFE")}
                            onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    className="mt-5 w-full flex items-center justify-center gap-3 py-4 rounded-full font-bold text-white text-base transition-all hover:opacity-90 active:scale-95"
                    style={{ backgroundColor: "#25D366" }}
                >
                    <SiWhatsapp size={22} />
                    Submit via WhatsApp
                </button>
            </div>
        </div>
    );
}

// ─── Main Package Component ─────────────────────────────────────────────────
export default function Package({ data }) {
    const brandBlue = "#13AFFE";

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState("");

    if (!data) return null;

    const { contactLinks, packages, detail } = data;
    const displayDetail = Array.isArray(detail) ? detail[0] : detail;

    const allServices = ["Paint Protection Film Installation", "Ceramic Coating", "Polishing", "Car Detailing"];

    const openModal = (pkgType) => {
        setSelectedPackage(pkgType);
        setModalOpen(true);
    };

    return (
        <>
            <section
                id="package"
                className="scroll-m-10 py-10 px-4 sm:px-6 lg:px-12 transition-colors duration-500 
                bg-linear-to-b from-gray-50 via-white to-gray-100 
                dark:from-black dark:via-[#0b0b0b] dark:to-[#1a1a1a] 
                text-black dark:text-white"
            >
                <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[0.9fr_1.1fr] gap-12">

                    {/* LEFT COLUMN */}
                    <div className="space-y-8 lg:sticky lg:top-24 lg:h-fit self-start">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-0.5 w-12" style={{ backgroundColor: brandBlue }}></div>
                                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider" style={{ color: brandBlue }}>
                                    {displayDetail?.title}
                                </p>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                                {displayDetail?.desc}
                            </h2>
                        </div>

                        {/* Contact Links */}
                        <div className="space-y-3">
                            {contactLinks?.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 border border-black/5 dark:border-white/10 rounded-xl p-4 bg-white dark:bg-[#111]/70 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex items-center justify-center h-10 w-10 text-[#F5A623] group-hover:text-[#13AFFE] transition-colors duration-300">
                                        {iconMap[link.icon]}
                                    </div>
                                    <p className="text-base font-semibold group-hover:text-[#13AFFE] transition-colors">
                                        {link.title}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-10 mt-10 lg:mt-0">
                        {packages?.map((pkg, idx) => (
                            <div
                                key={idx}
                                className="border border-black/5 dark:border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-500
                                bg-white dark:bg-[#151515] hover:border-[#13AFFE]/40 shadow-sm hover:shadow-xl"
                            >
                                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">{pkg.type}</p>
                                <div className="rounded-lg p-5 mb-6 bg-gray-100 dark:bg-[#0b0b0b]">
                                    <h3 className="text-4xl sm:text-5xl font-bold text-[#F5A623]">{pkg.price}</h3>
                                </div>

                                <div className="space-y-3 mb-6">
                                    {pkg.features.map((feature, index) => (
                                        <div key={index} className="flex gap-4 items-center">
                                            <div
                                                className="shrink-0 h-6 w-6 rounded-full flex items-center justify-center text-white"
                                                style={{ backgroundColor: brandBlue }}
                                            >
                                                <FiCheck size={14} />
                                            </div>
                                            <p className="text-gray-600 dark:text-white text-sm">
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => openModal(pkg.type)}
                                    className="w-full block text-sm md:text-base text-white font-bold py-4 rounded-full transition-all text-center hover:opacity-90 active:scale-95"
                                    style={{ backgroundColor: brandBlue }}
                                >
                                    {pkg.btnText}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <QuoteModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                packageName={selectedPackage}
                services={allServices}
            />
        </>
    );
}
