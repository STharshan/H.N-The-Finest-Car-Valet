import { FaFacebookF } from "react-icons/fa";
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
  ];

  return (
    <footer className="theme-panel border-t border-[rgba(201,206,214,0.12)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#2e6fd6] text-xl font-bold text-white">
              HN
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-bold text-white">H.N Automotive Care</h3>
              <p className="text-sm text-[rgba(201,206,214,0.76)]">Premium Detailing</p>
            </div>
          </div>
          <p className="mb-4 max-w-xs text-sm text-[rgba(201,206,214,0.76)]">
            Premium automotive detailing, restoration, and tinting with a clean luxury finish
            and trustworthy service.
          </p>
          <div className="flex space-x-4 text-lg text-[#2e6fd6]">
            <a
              href="https://www.facebook.com/profile.php?id=61562506876945"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebookF />
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
                <HashLink smooth to={link.to} className="transition hover:text-white">
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Contact Info</h3>
          <ul className="space-y-3 text-sm text-[rgba(201,206,214,0.76)]">
            <li className="flex items-start">
              <FiPhone className="mt-1 mr-2 text-[#2e6fd6]" />
              <a href="tel:+447851823807" className="transition hover:text-white">
                +44 7851 823807
              </a>
            </li>
            <li className="flex items-start">
              <FiMapPin className="mt-1 mr-2 text-[#2e6fd6]" />
              <a
                href="https://maps.app.goo.gl/me2GLeqXUvnRav5v8"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Greater Manchester,
                <br />
                United Kingdom
              </a>
            </li>
            <li className="flex items-start">
              <FiClock className="mt-1 mr-2 text-[#2e6fd6]" />
              <span>
                Mon-Sat: By Appointment
                <br />
                Quick quotes via WhatsApp
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[rgba(201,206,214,0.12)] text-sm text-[rgba(201,206,214,0.72)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 md:flex-row">
          <p>&copy; {new Date().getFullYear()} H.N Automotive Care. All rights reserved.</p>
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
