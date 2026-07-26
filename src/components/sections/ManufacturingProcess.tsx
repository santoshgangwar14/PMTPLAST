import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Boxes,
  Cog,
  Factory,
  FlaskConical,
  Gauge,
  PackageCheck,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import Container from "@/components/ui/Container";
import factoryImage from "@/assets/images/hero/factory2.webp";

const capabilities = [
  { icon: Cog, title: "Automated Production", description: "Controlled extrusion and molding processes engineered for repeatable output." },
  { icon: Factory, title: "High Output Capacity", description: "Production capability structured to support project and dealer requirements." },
  { icon: ShieldCheck, title: "Quality Control", description: "Checks across key production stages before products move to dispatch." },
  { icon: Gauge, title: "Precision Engineering", description: "Attention to dimensional consistency, finish, and dependable fitment." },
  { icon: Truck, title: "Fast Dispatch", description: "Order-ready handling designed for dependable supply to our dealer network." },
  { icon: Boxes, title: "Premium Materials", description: "High-grade PVC compounds selected for durable electrical conduit systems." },
];

const journey = [
  { icon: Boxes, title: "Raw Material", description: "Controlled material intake" },
  { icon: FlaskConical, title: "Compound Mixing", description: "Consistent formulation" },
  { icon: Cog, title: "Extrusion", description: "Precision profile forming" },
  { icon: Gauge, title: "Cooling", description: "Stable dimensional setting" },
  { icon: ShieldCheck, title: "Quality Testing", description: "Batch verification" },
  { icon: PackageCheck, title: "Packing & Dispatch", description: "Protected order fulfilment" },
];

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const ManufacturingProcess = () => {
  return (
    <section id="process" className="relative isolate overflow-hidden border-y border-slate-100 bg-white py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_6%_30%,rgba(73,181,233,0.11),transparent_24%),radial-gradient(circle_at_94%_68%,rgba(11,79,158,0.09),transparent_25%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(11,79,158,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(11,79,158,0.6)_1px,transparent_1px)] [background-size:76px_76px]" />

      <Container className="relative flex flex-col gap-16 lg:gap-20">
        <motion.header {...reveal} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} className="mx-auto flex max-w-[700px] flex-col items-center text-center">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#0B4F9E]">
            <span className="h-px w-9 bg-[#0B4F9E]/30" />
            Manufacturing Excellence
            <span className="h-px w-9 bg-[#0B4F9E]/30" />
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
            Advanced Manufacturing Built for Performance &amp; Reliability
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            PMT Plast combines modern manufacturing, high-grade raw materials, advanced machinery, and rigorous quality control to deliver consistent conduit systems for demanding electrical applications.
          </p>
        </motion.header>

        <div className="grid items-center gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16">
          <motion.div {...reveal} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="relative pb-8 pr-3 sm:pb-10 sm:pr-6">
            <div className="absolute inset-x-10 bottom-0 h-14 rounded-full bg-[#0B4F9E]/13 blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/90 bg-[#EEF7FC] p-2 shadow-[0_22px_60px_rgba(11,79,158,0.13),inset_0_1px_0_rgba(255,255,255,1)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[26px]">
                <img src={factoryImage} alt="PMT Plast manufacturing facility" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.32),transparent_38%,rgba(11,79,158,0.12))]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[linear-gradient(110deg,rgba(255,255,255,0.55),transparent_65%)]" />
              </div>
            </div>

            <div className="absolute -bottom-1 left-3 grid grid-cols-2 gap-2 sm:left-7 sm:gap-3">
              {[{ icon: Award, label: "25+ Years" }, { icon: BadgeCheck, label: "ISO Certified" }, { icon: Cog, label: "Advanced Machinery" }, { icon: Users, label: "Trusted by Dealers" }].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 rounded-full border border-white/90 bg-white/92 px-3 py-2 text-[11px] font-bold text-slate-700 shadow-[0_8px_20px_rgba(11,79,158,0.10)] backdrop-blur-sm sm:px-3.5">
                  <badge.icon className="h-3.5 w-3.5 text-[#0B4F9E]" />
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...reveal} transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="divide-y divide-[#BDDCEF]/65 border-y border-[#BDDCEF]/65">
            {capabilities.map((capability, index) => (
              <div key={capability.title} className="flex gap-4 py-4 first:pt-4 last:pb-4 sm:gap-5 sm:py-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B8DDEF] bg-[#F2F9FD] text-[#0B4F9E]">
                  <capability.icon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.18em] text-[#7DA8C4]">0{index + 1}</span>
                  <h3 className="mt-0.5 font-display text-lg font-bold text-slate-900">{capability.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{capability.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div {...reveal} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <div className="mb-8 flex flex-col items-center text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0B4F9E]">Our Manufacturing Journey</span>
            <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Controlled at Every Stage</h3>
          </div>

          <div className="relative grid gap-x-0 gap-y-7 sm:grid-cols-2 lg:grid-cols-6 lg:gap-y-0">
            <div className="absolute left-[8.333%] right-[8.333%] top-5 hidden h-px bg-gradient-to-r from-[#B5DCEF] via-[#0B4F9E]/55 to-[#B5DCEF] lg:block" />
            {journey.map((stage, index) => (
              <div key={stage.title} className="relative flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#A7D5ED] bg-white text-[#0B4F9E] shadow-[0_4px_12px_rgba(11,79,158,0.10)]">
                  <stage.icon className="h-4 w-4" />
                </div>
                <div className="lg:mt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#76A3C0]">Step {String(index + 1).padStart(2, "0")}</span>
                  <h4 className="mt-1 font-display text-base font-bold text-slate-900">{stage.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...reveal} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0B4F9E]">Quality Promise</span>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Built with Care. Delivered with Confidence.</h3>
        </motion.div>
      </Container>
    </section>
  );
};

export default ManufacturingProcess;