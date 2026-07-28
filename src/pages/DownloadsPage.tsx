import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  FileSpreadsheet,
  Layers,
  ShieldCheck,
  ArrowDownCircle,
  CheckCircle2,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { getLatestFile } from "@/admin/services/fileService";

interface DownloadItem {
  id: string;
  category:
    | "catalogue"
    | "price-list"
    | "technical-datasheet"
    | "corporate-profile"
    | "certificates";
  title: string;
  description: string;
  icon: any;
  url?: string;
}

const DEFAULT_ITEMS: DownloadItem[] = [
  {
    id: "catalogue",
    category: "catalogue",
    title: "Product Catalogue",
    description: "Latest Product Catalogue",
    icon: FileText,
  },
  {
    id: "price-list",
    category: "price-list",
    title: "Price List",
    description: "Latest Dealer Price List",
    icon: FileSpreadsheet,
  },
  {
    id: "technical",
    category: "technical-datasheet",
    title: "Technical Datasheet",
    description: "Latest Technical Documents",
    icon: Layers,
  },
  {
    id: "profile",
    category: "corporate-profile",
    title: "Corporate Profile",
    description: "Latest Company Profile",
    icon: ShieldCheck,
  },
  {
    id: "certificates",
    category: "certificates",
    title: "Certificates",
    description: "Latest Quality Certificates",
    icon: ShieldCheck,
  },
];

export default function DownloadsPage() {
  const [requestedId, setRequestedId] = useState<string | null>(null);

  const [downloads, setDownloads] =
    useState<DownloadItem[]>(DEFAULT_ITEMS);

  useEffect(() => {
    loadFiles();
  }, []);

  async function loadFiles() {
    const catalogue = await getLatestFile("catalogue");
    const price = await getLatestFile("price-list");
    const technical = await getLatestFile("technical-datasheet");
const profile = await getLatestFile("corporate-profile");
const certificate = await getLatestFile("certificates");

    setDownloads([
  {
    id: "catalogue",
    category: "catalogue",
    title: catalogue?.name || "Product Catalogue",
    description: "Latest Product Catalogue",
    icon: FileText,
    url: catalogue?.url,
  },
  {
    id: "price-list",
    category: "price-list",
    title: price?.name || "Price List",
    description: "Latest Dealer Price List",
    icon: FileSpreadsheet,
    url: price?.url,
  },
  {
    id: "technical",
    category: "technical-datasheet",
    title: technical?.name || "Technical Datasheet",
    description: "Latest Technical Documents",
    icon: Layers,
    url: technical?.url,
  },
  {
    id: "profile",
    category: "corporate-profile",
    title: profile?.name || "Corporate Profile",
    description: "Latest Company Profile",
    icon: ShieldCheck,
    url: profile?.url,
  },
  {
    id: "certificates",
    category: "certificates",
    title: certificate?.name || "Certificates",
    description: "Latest Quality Certificates",
    icon: ShieldCheck,
    url: certificate?.url,
  },
]);
  }

  const handleDownload = (item: DownloadItem) => {
    if (!item.url) {
      alert("Document not available.");
      return;
    }

    setRequestedId(item.id);

    window.open(item.url, "_blank");

    setTimeout(() => {
      setRequestedId(null);
    }, 1500);
  };

  return (
<div className="bg-white min-h-screen pb-20">

  {/* Header */}
  <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100 py-16 lg:py-24">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(11,79,158,0.03),transparent_50%)]" />

    <Container className="relative z-10">
      <div className="max-w-3xl flex flex-col gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0B4F9E]">
          Resource Center
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
          Downloads & Datasheets
        </h1>

        <p className="text-slate-600">
          Download the latest PMT Plast catalogues, price lists, technical
          datasheets and company profile.
        </p>
      </div>
    </Container>
  </section>

  {/* Cards */}
  <section className="py-20">
    <Container className="max-w-5xl">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {downloads.map((item, index) => (

          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
            className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all"
          >

            <div>

              <div className="flex justify-between items-center border-b pb-5 mb-5">

                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0B4F9E]">

                  <item.icon size={24} />

                </div>

                <span className="text-xs font-bold bg-slate-100 rounded-md px-3 py-1">

                  PDF

                </span>

              </div>

              <h3 className="text-lg font-bold text-slate-900">

                {item.title}

              </h3>

              <p className="text-sm text-slate-500 mt-3">

                {item.description}

              </p>

            </div>

            <button

              onClick={() => handleDownload(item)}

              disabled={requestedId === item.id}

              className="mt-8 w-full bg-[#0B4F9E] hover:bg-[#093e7c] text-white rounded-xl py-3 font-semibold transition"

            >

              {requestedId === item.id ? (

                <span className="flex items-center justify-center gap-2">

                  <CheckCircle2 size={18} />

                  Downloading...

                </span>

              ) : (

                <span className="flex items-center justify-center gap-2">

                  <Download size={18} />

                  Download PDF

                </span>

              )}

            </button>

          </motion.div>

        ))}

      </div>

      <div className="mt-16 bg-blue-50 rounded-2xl border border-blue-100 p-8 text-center">

        <h3 className="flex justify-center items-center gap-2 font-bold text-slate-900">

          <ArrowDownCircle
            size={20}
            className="text-[#0B4F9E]"
          />

          Need Custom Technical Documents?

        </h3>

        <p className="mt-3 text-sm text-slate-500">

          Contact our technical team for custom drawings,
          approvals, certifications and project documentation.

        </p>

        <a
          href="mailto:sales@pmtplast.com"
          className="text-[#0B4F9E] font-semibold mt-4 inline-block hover:underline"
        >
          sales@pmtplast.com
        </a>

      </div>

    </Container>

  </section>

</div>

  );
}

