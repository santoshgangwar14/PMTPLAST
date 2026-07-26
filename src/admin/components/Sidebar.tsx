import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Mail,
  FileCheck,
  FileSpreadsheet,
  BookOpen,
  LogOut,
  Factory,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    title: "Enquiries",
    icon: Mail,
    path: "/admin/enquiries",
  },
  {
    title: "Certificates",
    icon: FileCheck,
    path: "/admin/certificates",
  },
  {
    title: "Price List",
    icon: FileSpreadsheet,
    path: "/admin/price-list",
  },
  {
    title: "Catalogue",
    icon: BookOpen,
    path: "/admin/catalogue",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("pmt_admin");
    navigate("/admin/login");
  };

  return (
    <aside className="flex h-full w-64 flex-shrink-0 flex-col overflow-hidden border-r border-slate-200 bg-white shadow-[8px_0_35px_rgba(15,23,42,.06)]">

      {/* Premium Top Strip */}

      <div className="h-1 w-full bg-gradient-to-r from-red-700 via-red-500 to-red-700" />

      {/* Logo */}

      <div className="border-b border-slate-200 bg-white px-6 py-8">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg shadow-red-200">

            <Factory size={28} />

          </div>

          <div>

            <h1 className="text-2xl font-black tracking-wide text-slate-900">
              PMT
              <span className="text-red-600"> PLAST</span>
            </h1>

            <p className="mt-1 text-[11px] uppercase tracking-[3px] text-slate-500">
              Manufacturing ERP
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 overflow-y-auto p-4">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `group relative flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-200"
                    : "text-slate-700 hover:bg-red-50 hover:text-red-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-white" />
                  )}

                  <Icon
                    size={20}
                    className="transition-all duration-300 group-hover:scale-110"
                  />

                  <span className="font-semibold tracking-wide">
                    {item.title}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom User Card */}

      <div className="border-t border-slate-200 bg-slate-50 p-4">

        <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

          <p className="text-xs uppercase tracking-[2px] text-slate-500">
            Logged In As
          </p>

          <h3 className="mt-2 text-lg font-bold text-slate-900">
            PMT Admin
          </h3>

          <div className="mt-3 flex items-center gap-2">

            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

            <span className="text-sm font-medium text-green-600">
              Online
            </span>

          </div>

        </div>

        {/* Logout Button */}

        <button
          onClick={logout}
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-b from-red-600 to-red-700 px-4 py-3.5 font-semibold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(220,38,38,.35)]"
        >
          <LogOut
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />

          Logout

        </button>

        <p className="mt-5 text-center text-xs text-slate-400">
          PMT Plast Manufacturing ERP
        </p>

        <p className="mt-1 text-center text-[11px] text-slate-400">
          Version 1.0
        </p>

      </div>

    </aside>
  );
}