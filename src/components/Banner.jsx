

const GlobalCTA = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* LEFT CTA CARD */}
          <div className="relative lg:col-span-2 rounded-3xl overflow-hidden">
            {/* Background Image */}
            <img
              src="/Exterior-a.jpeg"
              alt="Plumbing Service"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#404143]/90 to-[#404143]/60"></div>

            {/* Content */}
            <div className="relative z-10 p-10 md:p-14 h-full flex flex-col justify-center">
              <span className="text-[#F21B23] font-semibold mb-4">
                Looking for Professional Window Tinting or Headlight Services?
              </span>

              <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Let’s discuss your vehicle needs and provide the right solution.
              </h2>

              <a
                href="https://wa.me/447851823807"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#F21B23] text-black font-semibold px-8 py-4 rounded-full w-fit hover:bg-white transition"
              >
                Get a Quote via WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT AGENT CARD */}
          <div className="bg-[#404143] rounded-3xl p-10 flex flex-col justify-between">
            <div>
              {/* Agent Image */}
              <img
                src="tag.jpeg"
                alt="Wade Warren"
                className="w-16 h-16 rounded-full bg-[#F21B23] mb-6"
              />

              {/* Text */}
              <h3 className="text-white text-lg font-semibold leading-relaxed mb-8">
                This is Tomas, Founder of Tomas Exterior. <br />
                I’m here to personally answer your questions and help you choose the best window tinting or headlight solution for your vehicle.
              </h3>
            </div>

            {/* Call Button */}
            <a
              href="https://wa.me/447851823807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#F21B23] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#141420] transition"
            >
              Start a WhatsApp Chat
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalCTA;
