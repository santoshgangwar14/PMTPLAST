import { Bell, CalendarDays, UserCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/enquiries": "Enquiries",
  "/admin/certificates": "Certificates",
  "/admin/price-list": "Price List",
  "/admin/catalogue": "Catalogue",
};

export default function Header() {
  const location = useLocation();

  const title = pageTitles[location.pathname] || "Admin Panel";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between shadow-sm">
      {/* Left */}

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          {title}
        </h1>

        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
          <CalendarDays size={15} />

          <span>{today}</span>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-6">
        {/* Notification */}

        <button className="relative rounded-full bg-gray-100 p-3 hover:bg-blue-100 transition">
          <Bell size={20} className="text-gray-700" />

          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            3
          </span>
        </button>

        {/* Admin */}

        <div className="flex items-center gap-3">
          <UserCircle
            size={42}
            className="text-blue-700"
          />

          <div>
            <h2 className="font-semibold text-gray-800">
              Admin
            </h2>

            <p className="text-sm text-gray-500">
              PMT Plast
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}