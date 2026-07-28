import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="w-full min-h-full space-y-8 p-6 lg:p-8">

      {/* Dashboard Header */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-900">
              Dashboard
            </h1>

            <p className="mt-2 text-slate-600">
              Welcome back! Manage PMT Plast website, certificates,
              catalogues, price lists and enquiries from one place.
            </p>
          </div>

          <div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Visit Website
            </a>
          </div>

        </div>
      </div>

      {/* Quick Access */}

      <div>
        <h2 className="mb-4 text-xl font-semibold text-slate-900">
          Quick Access
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          <Link
            to="/admin/certificates"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-red-500 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              Certificates
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Upload and manage product certificates.
            </p>
          </Link>

          <Link
            to="/admin/catalogue"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-red-500 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              Catalogue
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Upload and manage product catalogues.
            </p>
          </Link>

          <Link
            to="/admin/price-list"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-red-500 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              Price List
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Upload the latest price list.
            </p>
          </Link>

          <Link
            to="/admin/technical-datasheet"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-red-500 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              Technical Datasheet
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Upload technical datasheets.
            </p>
          </Link>

          <Link
            to="/admin/corporate-profile"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-red-500 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              Corporate Profile
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Upload company profile PDF.
            </p>
          </Link>

          <Link
            to="/admin/enquiries"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-red-500 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              Enquiries
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              View customer enquiries received from the website.
            </p>
          </Link>

        </div>
      </div>

    </div>
  );
}