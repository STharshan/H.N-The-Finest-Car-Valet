import { Link, Navigate, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ServiceBanner from "../Common/ServiceBanner";
import ServiceDetail from "../Common/ServiceDetail";
import Package from "../Common/Package";
import { servicePagesBySlug } from "../data/serviceData";

export default function ServicePage() {
  const { slug } = useParams();
  const service = slug ? servicePagesBySlug[slug] : null;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <section className="theme-surface pt-32 pb-6 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 pt-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400"
          >
            <Link to="/" className="transition-colors hover:text-[#13AFFE]">
              Home
            </Link>
            <span>/</span>
            <HashLink smooth to="/#service" className="transition-colors hover:text-[#13AFFE]">
              Services
            </HashLink>
            <span>/</span>
            <span className="text-[#13AFFE]">{service.banner.title}</span>
          </nav>
        </div>
      </section>
      <ServiceBanner data={service.banner} />
      <ServiceDetail data={service.detail} />
      <Package data={service.packageSection} />
    </div>
  );
}
