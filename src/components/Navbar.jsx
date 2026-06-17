import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", to: "/#" },
    { name: "ABOUT US", to: "/#about" },
    { name: "SERVICE", to: "/#service" },
    { name: "GALLERY", to: "/#gallery" },
    { name: "TESTIMONIAL", to: "/#testimonials" },
    { name: "FAQ", to: "/#faq" },
    { name: "CONTACT", to: "/#contact" },
  ];

  return (
    <nav className="theme-glass fixed left-0 right-0 top-3 z-50 mx-auto w-[calc(100%-1.5rem)] max-w-7xl rounded-2xl px-4 py-3 text-white md:w-[calc(100%-2.5rem)]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 cursor-pointer">
          <HashLink smooth to="/#home" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="H.N The Finest Car Valet logo"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-[rgba(201,206,214,0.28)]"
            />
            <div className="hidden sm:block">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#7fb1ff]">
                Mobile Valeting
              </p>
              <p className="text-sm font-semibold text-white">H.N The Finest Car Valet</p>
            </div>
          </HashLink>
        </div>

        <div className="hidden xl:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item, idx) => (
            <HashLink
              key={idx}
              smooth
              to={item.to}
              className="relative cursor-pointer text-[rgba(255,255,255,0.86)] transition-colors duration-300 hover:text-[#2e6fd6]"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </HashLink>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-4">
          <ThemeToggle />
          <HashLink
            smooth
            to="/#contact"
            className="btn-primary inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white"
          >
            CONTACT US
          </HashLink>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle compact className="theme-chip-dark" />
          <button
            className="theme-chip-dark rounded-full p-2 transition-colors hover:text-[#2e6fd6]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden mt-4 flex flex-col gap-3 rounded-2xl border border-[rgba(201,206,214,0.14)] bg-[rgba(7,17,31,0.96)] px-4 py-4">
          {navItems.map((item, idx) => (
            <HashLink
              key={idx}
              smooth
              to={item.to}
              className="rounded-xl px-3 py-2 text-sm font-medium text-[rgba(255,255,255,0.88)] transition-colors hover:bg-[rgba(46,111,214,0.12)] hover:text-[#2e6fd6]"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </HashLink>
          ))}
          <ThemeToggle
            compact
            className="theme-chip-dark w-full justify-center"
          />
          <HashLink
            smooth
            to="/#contact"
            className="btn-primary inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white"
            onClick={() => setIsOpen(false)}
          >
            CONTACT US
          </HashLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
