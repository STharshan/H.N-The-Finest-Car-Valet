import { useState } from "react";

const Contact = () => {
  const services = [
    "Valeting",
    "Detailing",
    "Paint Correction",
    "Ceramic Coating",
    "Interior Deep Clean",
    "Exterior Enhancement",
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    note: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.service) newErrors.service = "Please select a service";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const message = encodeURIComponent(`Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Note: ${formData.note || "N/A"}`);

    window.open(`https://wa.me/447515634636?text=${message}`, "_blank");

    setFormData({
      name: "",
      phone: "",
      service: "",
      note: "",
    });

    setErrors({
      name: "",
      phone: "",
      service: "",
    });
  };

  return (
    <section id="contact" className="theme-surface py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mt-20 mb-2 text-sm uppercase tracking-[0.28em] theme-accent">Contact</p>
          <h1 className="site-heading mb-4 text-4xl font-extrabold md:text-5xl">Get in Touch</h1>
          <p className="mx-auto max-w-2xl leading-relaxed theme-muted">
            Have questions about our valeting, detailing, paint correction, or
            ceramic coating services? Need a quote or advice on the best
            package for your vehicle? Contact H.N The Finest Car Valet and
            we&apos;ll be happy to help.
          </p>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed theme-muted">
            Whether you&apos;re looking to book a valet, discuss paint
            correction options, or protect your vehicle with ceramic coating,
            we provide professional advice, flexible scheduling, and
            exceptional customer service every step of the way.
          </p>
        </div>

        <div className="grid gap-10 overflow-hidden rounded-3xl theme-surface-muted p-6 shadow-sm lg:grid-cols-2 md:p-10">
          <div className="flex h-full w-full flex-col gap-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d613002.0021771084!2d-1.56298345!3d53.118468050000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2bdce634767d79af%3A0xea788e7b33b7b903!2sH%26N%20The%20Finest%20Car%20Valet%20%26%20Detailing!5e0!3m2!1sen!2slk!4v1781712375830!5m2!1sen!2slk"
              width="100%"
              height="400"
              className="min-h-[400px] rounded-2xl border-0 shadow-md md:min-h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                <h3 className="mb-2 text-base font-semibold theme-text">Email Us</h3>
                <p className="mb-3 text-sm leading-relaxed theme-muted">
                  Send us your enquiry and we&apos;ll get back to you as soon as
                  possible.
                </p>
                <a
                  href="mailto:h.nfinestcarvalet@gmail.com"
                  className="text-sm font-semibold theme-accent break-all"
                >
                  h.nfinestcarvalet@gmail.com
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-2 text-base font-semibold theme-text">Areas We Cover</h3>
                <p className="text-sm leading-relaxed theme-muted">
                  Mobile valeting and detailing services across Nottingham,
                  Leicester, Mansfield, Derby, and surrounding areas.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-2 text-base font-semibold theme-text">Call Us</h3>
                <p className="mb-3 text-sm leading-relaxed theme-muted">
                  Speak directly with us to discuss your vehicle requirements
                  or book an appointment.
                </p>
                <a href="tel:07515634636" className="text-sm font-semibold theme-accent">
                  07515 634636
                </a>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center">
            <div className="w-full">
              <h2 className="site-heading mb-6 text-center text-2xl font-bold md:text-3xl">
                Get in Touch
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-1 block text-sm font-semibold theme-text">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="input-premium"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold theme-text">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="input-premium"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold theme-text">Select a Service</label>
                  <div className="relative w-full">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="input-premium min-w-0 appearance-none pr-10 text-sm"
                      style={{
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                        boxSizing: "border-box",
                        maxWidth: "100%",
                      }}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>

                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center theme-muted">
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>

                  {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold theme-text">Message</label>
                  <textarea
                    rows="4"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    placeholder="Tell us about your vehicle and requirements..."
                    className="input-premium resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary mt-2 w-full rounded-xl py-4 font-bold shadow-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
