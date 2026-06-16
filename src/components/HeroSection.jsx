import React, { useEffect } from "react";

import { FaCheckCircle } from "react-icons/fa";

export default function HeroSection() {


  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* HERO CONTENT */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div
          className="max-w-4xl w-full text-center"
          data-aos="fade-up"
        >
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            UK Tintz – Window Tinting Specialists
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Nottingham’s Trusted Automotive <br />
            <span className="text-red-500">Tinting Expert</span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Professional window tinting, car vinyl wrapping, and commercial
            tinting - delivered with precision and care.
          </p>

          {/* Button */}
          <div className="flex justify-center mb-10">
            <a
              href="#contact"
              className="bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded-full font-semibold transition"
            >
              Get in Touch
            </a>
          </div>

          {/* Key points – VISUALLY CONNECTED */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 justify-center">
              <FaCheckCircle className="text-red-500" size={18} />
              <span>Over 10000+ Vehicles Transformed</span>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <FaCheckCircle className="text-red-500" size={18} />
              <span>20+ Years of Experience</span>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <FaCheckCircle className="text-red-500" size={18} />
              <span>Nottinghams Most Trusted Tinting Specialist</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}