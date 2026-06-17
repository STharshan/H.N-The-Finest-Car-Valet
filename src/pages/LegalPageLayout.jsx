import { Link } from "react-router-dom";

export default function LegalPageLayout({ title, updatedOn, children }) {
  return (
    <main className="theme-surface min-h-screen px-4 pb-16 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl theme-surface-muted p-6 shadow-sm md:p-10">
        <div className="mb-10 border-b border-[rgba(201,206,214,0.14)] pb-6">
          <Link
            to="/"
            className="theme-accent text-sm font-semibold uppercase tracking-[0.24em]"
          >
            Back to Home
          </Link>
          <h1 className="site-heading mt-4 text-4xl md:text-5xl">{title}</h1>
          <p className="mt-3 text-sm theme-muted">Last updated: {updatedOn}</p>
        </div>

        <div className="space-y-8 text-base leading-8 theme-text">{children}</div>
      </div>
    </main>
  );
}
