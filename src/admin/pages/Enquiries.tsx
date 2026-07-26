import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  Building2,
  Calendar,
  Search,
  Trash2,
  Loader2,
} from "lucide-react";

import {
  getEnquiries,
  deleteEnquiry,
} from "../services/contactService";

interface Enquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  state: string;
  enquiryType: string;
  message: string;
  createdAt?: any;
}

export default function Enquiries() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    loadEnquiries();
  }, []);

  async function loadEnquiries() {
    try {
      setLoading(true);
      const data = await getEnquiries();
      setEnquiries(data as Enquiry[]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Delete this enquiry?")) return;

    try {
      await deleteEnquiry(id);
      setEnquiries((prev) => prev.filter((e) => e.id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  const filtered = enquiries.filter((item) =>
    (
      item.name +
      item.company +
      item.email +
      item.phone
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex h-80 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Customer Enquiries
        </h1>

        <p className="mt-2 text-gray-500">
          Manage all contact enquiries.
        </p>
      </div>

      <div className="relative">
        <Search
          className="absolute left-4 top-3.5 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border pl-11 pr-4 py-3 outline-none focus:border-blue-600"
        />
      </div>

      <div className="overflow-x-auto rounded-2xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-5 py-4 text-left">
                Customer
              </th>

              <th className="px-5 py-4 text-left">
                Contact
              </th>

              <th className="px-5 py-4 text-left">
                Message
              </th>

              <th className="px-5 py-4 text-left">
                Date
              </th>

              <th className="px-5 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-8 text-center text-gray-500"
                >
                  No enquiries found.
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-5">
                    <div className="font-semibold">
                      {item.name}
                    </div>

                    <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                      <Building2 size={15} />
                      {item.company}
                    </div>
                  </td>

                  <td className="p-5">
                    <div className="flex items-center gap-2">
                      <Mail size={15} />
                      {item.email}
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <Phone size={15} />
                      {item.phone}
                    </div>
                  </td>

                  <td className="p-5 max-w-sm">
                    {item.message}
                  </td>

                  <td className="p-5">
                    <div className="flex items-center gap-2">
                      <Calendar size={15} />
                      {item.createdAt?.toDate
                        ? item.createdAt
                            .toDate()
                            .toLocaleDateString("en-IN")
                        : "-"}
                    </div>
                  </td>

                  <td className="p-5 text-center">
                    <button
                      onClick={() =>
                        handleDelete(item.id)
                      }
                      className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}