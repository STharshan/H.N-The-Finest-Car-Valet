import { useState } from "react";

const Contact = () => {
  const services = [
    "Window Tinting",
    "Headlight Restoration",
    "Headlight Crack Repair",
    "Headlight Condensation Repair",
    "Headlight Lens Replacement",
    "Exterior Enhancement Services",
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

    window.open(`https://wa.me/447851823807?text=${message}`, "_blank");

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
            Have questions about our detailing, tinting, or restoration services? Reach out for
            a fast quote and professional support tailored to your vehicle.
          </p>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed theme-muted">
            Whether it&apos;s a quick enquiry or a full service booking, we&apos;re here to help
            with care, clarity, and premium workmanship.
          </p>
        </div>

        <div className="grid items-center gap-10 overflow-hidden rounded-3xl theme-surface-muted p-6 shadow-sm lg:grid-cols-2 md:p-10">
          <div className="w-full">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2142.899561301126!2d-2.286031!3d53.59379889999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba55ab7c86bb1%3A0x2d01d70333586c78!2sTomas%20Exteriors%20professional%20window%20tinting!5e1!3m2!1sen!2slk!4v1769176161599!5m2!1sen!2slk"
              width="100%"
              height="400"
              className="h-[400px] rounded-2xl border-0 shadow-md md:h-[500px]"
              loading="lazy"
            />
          </div>

          <div className="w-full">
            <h2 className="site-heading mb-6 text-2xl font-bold md:text-3xl">Book a Service</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="mb-1 block text-sm font-semibold theme-text">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="input-premium"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold theme-text">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="input-premium"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold theme-text">Select A Service</label>
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
                <label className="mb-1 block text-sm font-semibold theme-text">Short Note</label>
                <textarea
                  rows="4"
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  placeholder="Type here..."
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
    </section>
  );
};

export default Contact;
