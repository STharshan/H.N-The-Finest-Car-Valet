import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function NotFound() {
  return (
    <main className="theme-surface min-h-screen px-4 pb-16 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl theme-surface-muted p-6 shadow-sm md:p-10">
        <div className="rounded-3xl theme-panel p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7fb1ff]">
            Error 404
          </p>
          <h1 className="site-heading mt-4 text-4xl font-bold md:text-5xl">
            The page you&apos;re looking for isn&apos;t here.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[rgba(201,206,214,0.82)]">
            The link may be outdated, the page may have moved, or the address may
            have been typed incorrectly. You can head back home, browse our
            services, or contact us for help.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white"
            >
              Back to Home
            </Link>
            <HashLink
              smooth
              to="/#service"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#2e6fd6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2e6fd6]"
            >
              View Services
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(201,206,214,0.24)] px-6 py-3 text-sm font-semibold text-[rgba(255,255,255,0.88)] transition hover:border-[#2e6fd6] hover:text-white"
            >
              Contact Us
            </HashLink>
          </div>
        </div>
      </div>
    </main>
  );
}
