import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-teal-700 text-white w-10 h-10 flex items-center justify-center text-xl rounded-md font-bold">
              JS
            </div>
            <div className="ml-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                JS Automotive
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Services</p>
            </div>
          </div>
          <p className="text-sm max-w-50 mx-auto mb-4 text-gray-600 dark:text-gray-400">
            At JS Automotive Edlington, we pride ourselves on providing high-quality, honest, and affordable vehicle care to our local community
          </p>
          <div className="flex space-x-4 text-teal-700 dark:text-teal-400 text-lg">
            <a
              href="https://www.facebook.com/profile.php?id=61562506876945"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-blue-700" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-500">
              <Link to="/services/mot">MOT Testing</Link>
            </li>
            <li className="hover:text-teal-500">
              <Link to="/services/servicing">Full Servicing</Link>
            </li>
            <li className="hover:text-teal-500">
              <Link to="/services/brake">Brake Services</Link>
            </li>
            <li className="hover:text-teal-500">
              <Link to="/services/diagnostics">Diagnostics</Link>
            </li>
            <li className="hover:text-teal-500">
              <Link to="/services/dpf-clean">DPF Cleaning</Link>
            </li>
            <li className="hover:text-teal-500">
              <Link to="/services/cam-belt">Cam Belt Replacement</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-500">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-teal-500">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-teal-500">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-teal-500">
              <Link to="/services/mot">Book MOT</Link>
            </li>
            <li className="hover:text-teal-500">
              <Link to="/contact">Get Quote</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Contact Info
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <FiPhone className="mt-1 mr-2 text-teal-700 dark:text-teal-400" />
              <a href="tel:+441709863222" className="hover:text-teal-500">
                +44 1709 863222<br />
              </a>
            </li>
            <li className="flex items-start">
              <FiMail className="mt-1 mr-2 text-teal-700 dark:text-teal-400" />
              <a
                href="mailto:Js.automotive1@outlook.com"
                className="hover:text-teal-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Js.automotive1@outlook.com
              </a>
            </li>
            <li className="flex items-start">
              <FiMapPin className="mt-1 mr-2 text-teal-700 dark:text-teal-400" />
              <a
                href="https://maps.app.goo.gl/me2GLeqXUvnRav5v8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500"
              >
                New Edlington,<br />
                Doncaster DN12 1DJ,<br />
                United Kingdom
              </a>
            </li>
            <li className="flex items-start">
              <FiClock className="mt-1 mr-2 text-teal-700 dark:text-teal-400" />
              <span>
                Mon-Wed: 8AM-5PM<br />
                Thu: 8AM-5:30PM <br />
                Fri: 8AM-5PM <br />
                Sat: 8AM-2PM<br />
                Sun: Closed
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} JS Automotive Services. All rights reserved.</p>
          <div>
            Powered By{" "}
            <a
              href="https://www.ansely.co.uk/"
              className="hover:text-teal-500 hover:underline"
            >
              Ansely
            </a>
          </div>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-teal-500">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-teal-500">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;