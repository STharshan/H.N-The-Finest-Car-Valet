import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

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
    <nav className="bg-black fixed max-w-7xl p-3 mx-auto text-white tracking-wide top-3 rounded-lg left-0 right-0 z-50 backdrop-blur-sm bg-opacity-90 font-['Poppins']">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <HashLink smooth to="/#home" className="h-14 w-auto">
            <img src="/logo.png" alt="CARSY Logo" className="h-14 w-auto object-contain" />
          </HashLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, idx) => (
            <HashLink
              key={idx}
              smooth
              to={item.to}
              className="relative hover:text-[#D70C09] cursor-pointer transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </HashLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center space-x-6">
          <HashLink
            smooth
            to="/#contact"
            className="bg-[#D70C09] rounded-lg px-5 py-2 text-sm font-semibold hover:bg-[#868386] transition-all duration-300"
          >
            CONTACT US
          </HashLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaXmark size={26} className="hover:text-[#D70C09] cursor-pointer transition-all" /> : <FaBars size={26} className="hover:text-[#D70C09] cursor-pointer transition-all" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-black border-t border-gray-800 pb-4 space-y-4 mt-3 rounded-b-lg">
          {navItems.map((item, idx) => (
            <HashLink
              key={idx}
              smooth
              to={item.to}
              className="text-white hover:text-[#D70C09] transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </HashLink>
          ))}
          <HashLink
            smooth
            to="/#contact"
            className="bg-[#D70C09] rounded-lg px-5 py-2 text-sm font-semibold hover:bg-[#868386] transition-all duration-200"
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