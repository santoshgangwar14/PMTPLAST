import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, FileSpreadsheet, Layers, ShieldCheck, ArrowDownCircle, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";

interface DownloadItem {
  id: string;
  category: "catalogue" | "price-list" | "technical" | "profile";
  title: string;
  description: string;
  fileSize: string;
  icon: any;
}

const DOWNLOADS_DATA: DownloadItem[] = [
  {
    id: "dl1",
    category: "catalogue",
    title: "Complete Product Catalogue (2026 Edition)",
    description: "Detailed specification guide featuring full size indexes, extrusion tolerances, bends, junction fittings, and locking casing structures.",
    fileSize: "14.2 MB",
    icon: FileText
  },
  {
    id: "dl2",
    category: "price-list",
    title: "Commercial & B2B Price Matrix",
    description: "Standard master price list structured by nominal conduits, LMS, MMS, HMS gauges, accessories, and dealer pack packaging counts.",
    fileSize: "2.8 MB",
    icon: FileSpreadsheet
  },
  {
    id: "dl3",
    category: "technical",
    title: "Technical Datasheets (IS 9537 & IS 14927)",
    description: "Complete laboratory testing datasheets for heavy impact test thresholds, chemical/corrosion defense indicators, and FRLS oxygen indexes.",
    fileSize: "4.5 MB",
    icon: Layers
  },
  {
    id: "dl4",
    category: "profile",
    title: "PMT Plast Corporate Profile",
    description: "Overview of our nationwide group capabilities, plant specifications, quality certificates, and supply capabilities for massive infrastructural works.",
    fileSize: "5.1 MB",
    icon: ShieldCheck
  }
];

export default function DownloadsPage() {
  const [requestedId, setRequestedId] = useState<string | null>(null);

  const handleDownload = (item: DownloadItem) => {
    // NOTE: No source PDF binaries exist in the repository yet. Once the
    // actual catalogue/price-list/datasheet files are added (e.g. under
    // /public/docs/), point href at the real file path here instead of "#".
    console.info(`Download requested: ${item.title}`);
    setRequestedId(item.id);
    window.setTimeout(() => setRequestedId((prev) => (prev === item.id ? null : prev)), 2500);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Page Header */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100 py-16 lg:py-24">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(11,79,158,0.03),transparent_50%)]" />
        <Container className="relative z-10">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0B4F9E]">
              Resource Center
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Downloads & Datasheets
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Access the complete range of product catalogs, B2B price guides, certified test reports, and compliance blueprints in ready-to-print formats.
            </p>
          </div>
        </Container>
      </section>

      {/* Downloads Grid Section */}
      <section className="py-20">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DOWNLOADS_DATA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300"
              >
                <div>
                  {/* Decorative Icon Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0B4F9E]">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-bold bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                      PDF • {item.fileSize}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Download Action Trigger */}
                <button
                  onClick={() => handleDownload(item)}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0B4F9E] hover:bg-[#093e7c] text-white font-bold py-3.5 px-6 text-xs sm:text-sm transition-all duration-300 cursor-pointer shadow-sm disabled:opacity-80"
                  disabled={requestedId === item.id}
                >
                  {requestedId === item.id ? (
                    <>
                      <CheckCircle2 size={16} />
                      Request Received
                    </>
                  ) : (
                    <>
                      <Download size={16} />
                      Download Document
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Quick Support Badge */}
          <div className="mt-16 bg-blue-50/50 border border-blue-200/40 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto flex flex-col gap-3">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center justify-center gap-2">
              <ArrowDownCircle size={18} className="text-[#0B4F9E]" />
              Need custom technical drawings or legacy price lists?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              If your major project requires specialized layout files, DWG drawings, or archived dealer catalogs, please submit a direct request via email.
            </p>
            <a
              href="mailto:sales@pmtpipes.in"
              className="text-xs font-semibold text-[#0B4F9E] hover:underline block mt-1"
            >
              sales@pmtpipes.in
            </a>
          </div>

        </Container>
      </section>

    </div>
  );
}
