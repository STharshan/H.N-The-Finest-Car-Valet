import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const serviceLinks = [
    { label: "Professional Add-On Services", to: "/services/professional-add-on-services" },
    { label: "Full Interior Deep Clean", to: "/services/full-interior-deep-clean" },
    { label: "Maintenance Valet Packages", to: "/services/maintenance-valet-packages" },
    { label: "New Car Protection Package", to: "/services/new-car-protection-package" },
  ];

  const quickLinks = [
    { label: "Home", to: "/#home" },
    { label: "About Us", to: "/#about" },
    { label: "Services", to: "/#service" },
    { label: "Gallery", to: "/#before-after" },
    { label: "Contact", to: "/#contact" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms & Conditions", to: "/terms-and-conditions" },
  ];

  return (
    <footer className="theme-panel border-t border-[rgba(201,206,214,0.12)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center">
            <img
              src="/logo.png"
              alt="H.N The Finest Car Valet logo"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-[rgba(201,206,214,0.28)]"
            />
            <div className="ml-3">
              <h3 className="text-lg font-bold text-white">H.N The Finest Car Valet</h3>
            
            </div>
          </div>
          <p className="mb-4 max-w-xs text-sm text-[rgba(201,206,214,0.76)]">
            Premium mobile valeting, detailing, paint correction, and ceramic
            coating with professional results and trusted customer care.
          </p>
          <div className="flex space-x-4 text-lg text-[#2e6fd6]">
            <a
              href="https://www.facebook.com/share/KRgENLZ9c85CbnS6/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/h.nthefinestcarvalet?igsh=MWo5MWl3aGoxeGN6eg=="
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@h.n.thefinestcar.valet?_t=8qDSJDeCWky&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Our Services</h3>
          <ul className="space-y-2 text-sm text-[rgba(201,206,214,0.76)]">
            {serviceLinks.map((service) => (
              <li key={service.to}>
                <Link to={service.to} className="transition hover:text-white">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[rgba(201,206,214,0.76)]">
            {quickLinks.map((link) => (
              <li key={link.label}>
                {link.to.startsWith("/#") ? (
                  <HashLink smooth to={link.to} className="transition hover:text-white">
                    {link.label}
                  </HashLink>
                ) : (
                  <Link to={link.to} className="transition hover:text-white">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Contact Info</h3>
          <ul className="space-y-3 text-sm text-[rgba(201,206,214,0.76)]">
            <li className="flex items-start">
              <FiPhone className="mt-1 mr-2 text-[#2e6fd6]" />
              <a href="tel:07515634636" className="transition hover:text-white">
                07515 634636
              </a>
            </li>
            <li className="flex items-start">
              <FiPhone className="mt-1 mr-2 opacity-0" />
              <a
                href="mailto:h.nfinestcarvalet@gmail.com"
                className="break-all transition hover:text-white"
              >
                h.nfinestcarvalet@gmail.com
              </a>
            </li>
            <li className="flex items-start">
              <FiMapPin className="mt-1 mr-2 text-[#2e6fd6]" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=H.N+The+Finest+Car+Valet+%26+Detailing"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Nottingham, Leicester,
                <br />
                Mansfield, Derby
              </a>
            </li>
            <li className="flex items-start">
              <FiClock className="mt-1 mr-2 text-[#2e6fd6]" />
              <span>
                Mon-Sat: By Appointment
                <br />
                Mobile service across the East Midlands
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[rgba(201,206,214,0.12)] text-sm text-[rgba(201,206,214,0.72)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 md:flex-row">
          <p>&copy; {new Date().getFullYear()} H.N The Finest Car Valet. All rights reserved.</p>
          <div>
            Powered By{" "}
            <a href="https://www.ansely.co.uk/" className="transition hover:text-white hover:underline">
              Ansely
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
