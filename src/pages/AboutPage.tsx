import { motion } from "framer-motion";
import founderPhoto from "@/assets/images/team/pradeep-singh.jpg";
import {
  Building2,
  ShieldCheck,
  BadgeCheck,
  Layers,
  Users,
  Quote,
  FileText,
  Download,
  ArrowRight,
  UserRound,
} from "lucide-react";
import Container from "@/components/ui/Container";
import pipesDecor from "@/assets/images/hero/pvc-pipe-real.webp";

const highlightStats = [
  {
    id: "h1",
    icon: ShieldCheck,
    value: "25+",
    label: "Years Experience",
    description: "Deep knowledge in PVC conduit manufacturing",
  },
  {
    id: "h2",
    icon: BadgeCheck,
    value: "100%",
    label: "Quality Commitment",
    description: "Strict quality control at every stage of production",
  },
  {
    id: "h3",
    icon: Layers,
    value: "Premium",
    label: "PVC Solutions",
    description: "Wide range of durable & reliable conduit systems",
  },
  {
    id: "h4",
    icon: Users,
    value: "Customer",
    label: "First Approach",
    description: "Building long-term relationships through trust & satisfaction",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-0">

      {/* 1. Founder / Company Story Hero */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100 py-16 lg:py-24">
        {/* Decorative dot grid, top-left */}
        <div
          className="absolute top-10 left-6 h-24 w-24 opacity-40 pointer-events-none hidden lg:block"
          style={{
            backgroundImage: "radial-gradient(rgba(11,79,158,0.35) 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
        />

        {/* Decorative pipe image, top-right */}
        <img
          src={pipesDecor}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-16 top-0 h-full w-[420px] object-cover opacity-90 hidden lg:block [mask-image:linear-gradient(to_left,black_40%,transparent_95%)]"
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: Founder card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-5"
            >
              <div className="rounded-2xl overflow-hidden border-2 border-[#0B4F9E]/20 shadow-xl shadow-blue-950/5 bg-white">
                {/* FOUNDER PHOTO SLOT */}
                <div className="aspect-[4/5] w-full bg-slate-100 overflow-hidden">
                  <img
                    src={founderPhoto}
                    alt="Pradeep Singh, Founder, PMT Plast"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="bg-[#0B4F9E] px-6 py-4 text-center">
                  <p className="text-white font-bold text-lg leading-tight">Pradeep Singh</p>
                  <p className="text-blue-100 text-xs font-medium mt-0.5">Founder, PMT Plast</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0B4F9E]">
                  <UserRound className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-slate-900 leading-none">25+ Years</p>
                  <p className="text-xs text-slate-500 mt-1">of Industry Experience</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 flex flex-col gap-6 pt-16 lg:pt-20"
            >
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0B4F9E] px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                <Building2 className="h-3.5 w-3.5" />
                About PMT Plast
              </span>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Building Trust Through Quality &{" "}
                <span className="text-[#0B4F9E]">Experience</span>
              </h1>

              <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold text-slate-700">
                  Driven by Experience. Committed to Quality.
                </p>
                <div className="h-[3px] w-14 bg-[#0B4F9E]" />
              </div>

              <div className="flex flex-col gap-4 text-slate-600 leading-relaxed">
                <p>
                  PMT Plast was founded with a clear vision: to manufacture{" "}
                  <span className="font-semibold text-slate-900">
                    dependable PVC conduit systems
                  </span>{" "}
                  built for long-term performance and safety. Every product that leaves our
                  facility reflects a consistent commitment to quality and customer satisfaction.
                </p>
                <p>
                  With over <span className="font-semibold text-[#0B4F9E]">25 years</span> of
                  hands-on industry experience,{" "}
                  <span className="font-semibold text-slate-900">Mr. Pradeep Singh</span> has
                  built deep technical expertise across PVC conduit manufacturing, process
                  engineering, product quality, and market requirements.
                </p>
                <p>
                  Under his leadership, PMT Plast focuses on modern manufacturing practices,
                  rigorous quality control, and dependable products trusted by distributors,
                  electricians, contractors, and infrastructure projects nationwide.
                </p>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0B4F9E]">
                  <Quote className="h-5 w-5" />
                </div>
                <p className="text-base sm:text-lg font-bold leading-snug text-slate-900">
                  Quality is not just our standard —{" "}
                  <span className="text-[#0B4F9E]">
                    it's the foundation of everything we manufacture.
                  </span>
                </p>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 2. Highlight Stats Bar */}
      <section className="py-10 bg-white">
        <Container>
          <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
              {highlightStats.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-start gap-4 p-6 sm:p-7"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0B4F9E]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-slate-900 leading-none">
                      {item.value}
                    </p>
                    <p className="text-sm font-bold text-slate-800 mt-1.5">{item.label}</p>
                    <p className="text-xs text-[#0B4F9E] mt-1 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Bottom CTA Bar */}
      <section className="bg-[#0B4F9E]">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="hidden sm:flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                <FileText className="h-5 w-5" />
              </div>
              <p className="text-white/90 text-sm sm:text-base font-medium">
                Explore our wide range of quality PVC conduit products.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href="#products"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0B4F9E] hover:bg-blue-50 transition-colors duration-300"
              >
                View Our Products
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#downloads"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors duration-300"
              >
                <Download className="h-4 w-4" />
                Download Catalogue
              </a>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}