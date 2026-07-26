import { Mail } from "lucide-react";
export default function Dashboard() {
  return (
    <div className="w-full min-h-full space-y-8 p-6 lg:p-8">

{/* ================= DASHBOARD HEADER ================= */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

    {/* Left */}

    <div className="flex-1">

      <h1 className="text-3xl font-bold text-slate-900">
        Dashboard
      </h1>

      <p className="mt-2 text-slate-600">
        Welcome back! Manage PMT Plast website, enquiries, certificates and catalogues from one place.
      </p>

    </div>

    {/* Right */}

    <div className="flex flex-wrap gap-3">

      <button
        className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700"
      >
        Visit Website
      </button>

      <button
        className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-100"
      >
        View Reports
      </button>

    </div>

  </div>

  <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">

    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-center text-slate-500">Status</p>
      <h3 className="mt-1 text-base font-semibold text-center text-green-600">
        Online
      </h3>
    </div>

    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-center text-slate-500">Admin</p>
      <h3 className="mt-1 text-base font-semibold text-center text-slate-900">
        PMT Plast
      </h3>
    </div>

    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-center text-slate-500">Today's Date</p>
      <h3 className="mt-1 text-base font-semibold text-center text-slate-900">
        {new Date().toLocaleDateString()}
      </h3>
    </div>

    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-center text-slate-500">Version</p>
      <h3 className="mt-1 text-base font-semibold text-center text-slate-900">
        v1.0
      </h3>
    </div>

  </div>

</div>

     <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

  <button className="rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:shadow-md">
    <h3 className="text-lg font-semibold text-slate-900">
      📄 Manage Certificates
    </h3>
    <p className="mt-2 text-sm text-slate-500">
      Upload and manage product certificates.
    </p>
  </button>

  <button className="rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:shadow-md">
    <h3 className="text-lg font-semibold text-slate-900">
      📋 Manage Price List
    </h3>
    <p className="mt-2 text-sm text-slate-500">
      Upload the latest price list.
    </p>
  </button>

  <button className="rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:shadow-md">
    <h3 className="text-lg font-semibold text-slate-900">
      📚 Manage Catalogue
    </h3>
    <p className="mt-2 text-sm text-slate-500">
      Upload and update product catalogues.
    </p>
  </button>

</div>

      {/* ================= RECENT ENQUIRIES ================= */}

      <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.08)]">

        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-8 py-6">

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              Recent Enquiries
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Latest enquiries received from the website
            </p>

          </div>

          <button className="rounded-xl bg-gradient-to-b from-red-600 to-red-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-200 transition-all hover:-translate-y-1">
            View All
          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider text-slate-600">
                  Name
                </th>

                <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider text-slate-600">
                  Phone
                </th>

                <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider text-slate-600">
                  Company
                </th>

                <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider text-slate-600">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="transition hover:bg-slate-50">

                <td
                  colSpan={4}
                  className="px-8 py-24 text-center"
                >

                  <div className="mx-auto flex max-w-md flex-col items-center">

                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-50 shadow-inner">

                      <Mail
                        size={42}
                        className="text-red-600"
                      />

                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      No Enquiries Yet
                    </h3>

                    <p className="mt-3 max-w-sm leading-7 text-slate-500">
                      When customers submit enquiries from your
                      website, they will automatically appear here
                      for quick review by the admin team.
                    </p>

                    <button className="mt-8 rounded-2xl bg-gradient-to-b from-red-600 to-red-700 px-6 py-3 font-semibold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      Visit Website
                    </button>

                  </div>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* ================= QUICK ACTIONS ================= */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_15px_45px_rgba(15,23,42,.06)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,.10)]">

          <h3 className="text-lg font-bold text-slate-900">
            Website Status
          </h3>

          <p className="mt-2 text-slate-500">
            PMT Plast website is running normally.
          </p>

          <div className="mt-6 flex items-center gap-3">

            <span className="h-3 w-3 rounded-full bg-green-500"></span>

            <span className="font-semibold text-green-600">
              Online
            </span>

          </div>

        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_15px_45px_rgba(15,23,42,.06)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,.10)]">

          <h3 className="text-lg font-bold text-slate-900">
            Total Downloads
          </h3>

          <h2 className="mt-5 text-3xl font-black text-red-600">
            0
          </h2>

          <p className="mt-2 text-slate-500">
            Catalogues & price list downloads
          </p>

        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_15px_45px_rgba(15,23,42,.06)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,.10)]">

          <h3 className="text-lg font-bold text-slate-900">
            Administration
          </h3>

          <p className="mt-2 text-slate-500">
            Manage certificates, products and enquiries
            from one dashboard.
          </p>

          <button className="mt-6 rounded-xl bg-gradient-to-b from-red-600 to-red-700 px-5 py-3 font-semibold text-white shadow-lg shadow-red-200 transition hover:-translate-y-1">
            Open Management
          </button>

        </div>

      </div>

    </div>
  );
}