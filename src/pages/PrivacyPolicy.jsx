import LegalPageLayout from "./LegalPageLayout";

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" updatedOn="June 17, 2026">
      <div>
        <h2 className="text-2xl font-semibold text-white">Overview</h2>
        <p className="mt-3">
          H.N The Finest Car Valet respects your privacy and is committed to
          protecting your personal information. This policy explains what data
          may be collected when you use this website, request a quote, book a
          service, or contact us through our forms and communication channels.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-white">
          Information We May Collect
        </h2>
        <p className="mt-3">
          This may include your name, email address, phone number, vehicle
          details, requested service information, and any additional
          information you choose to provide when contacting the business.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-white">
          How Your Data Is Used
        </h2>
        <p className="mt-3">
          Your information may be used to respond to enquiries, arrange
          bookings, provide service updates, improve customer support, and
          communicate important information related to your valet or detailing
          appointment.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-white">Cookies</h2>
        <p className="mt-3">
          This website may use cookies or similar technologies to improve
          performance, remember preferences, and understand general site usage.
          You can manage cookie preferences through your browser settings.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-white">Your Rights</h2>
        <p className="mt-3">
          You may request access to, correction of, or deletion of your personal
          data where applicable. If you have questions about how your data is
          handled, you can contact us at `h.nfinestcarvalet@gmail.com` or on
          `07515 634636`.
        </p>
      </div>
    </LegalPageLayout>
  );
}
