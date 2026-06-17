import LegalPageLayout from "./LegalPageLayout";

export default function TermsAndConditions() {
  return (
    <LegalPageLayout title="Terms and Conditions" updatedOn="June 17, 2026">
      <div>
        <h2 className="text-2xl font-semibold text-white">
          Use of This Website
        </h2>
        <p className="mt-3">
          By using this website, you agree to use it lawfully and respectfully.
          The content is provided for general information about our valeting,
          detailing, paint correction, ceramic coating, and related services.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-white">
          Service Information
        </h2>
        <p className="mt-3">
          Any service descriptions, package details, timings, and aftercare
          guidance shared on this site are general in nature. Results may vary
          depending on the vehicle condition, materials, and previous wear.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-white">Bookings and Fees</h2>
        <p className="mt-3">
          Availability, pricing, and package details may change over time. Any
          final service scope, timescale, and payment terms will be confirmed
          directly at the time of booking.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-white">Intellectual Property</h2>
        <p className="mt-3">
          Website copy, branding, and original materials remain the property of
          H.N The Finest Car Valet unless otherwise stated. They may not be
          copied or reused without permission.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-white">Contact</h2>
        <p className="mt-3">
          If you need clarification on any of these terms, please get in touch
          before booking a service by emailing `h.nfinestcarvalet@gmail.com`
          or calling `07515 634636`.
        </p>
      </div>
    </LegalPageLayout>
  );
}
