import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Microscope, FlaskConical, Award, Compass, BadgeCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import QualityVideos from "@/components/sections/QualityVideos";

const TIMELINE_STEPS = [
  {
    step: "01",
    title: "Raw Material Sourcing",
    description: "Procurement of high-purity virgin PVC resins. Additives and compounds are strictly scrutinized before release into production lines.",
    icon: FlaskConical
  },
  {
    step: "02",
    title: "Continuous In-Process Sensor Controls",
    description: "Automated ultrasonic wall monitors and high-precision laser gauges keep diameter tolerances tighter than strict IS 9537 requirements.",
    icon: Cpu
  },
  {
    step: "03",
    title: "Laboratory Impact & Stress Testing",
    description: "Representative samples from every single batch are subjected to extreme falling-weight test rigs, pressure tests, and oven temperature thresholds.",
    icon: Microscope
  },
  {
    step: "04",
    title: "Final Inspection & Dispatch Certification",
    description: "All products undergo physical checking for surface uniformity, locking mechanism strength (for casing), and matching accessories count.",
    icon: ShieldCheck
  }
];

export default function QualityPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* 1. Hero / Quality Policy */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100 py-16 lg:py-24">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(11,79,158,0.03),transparent_50%)]" />
        <Container className="relative z-10">
          <div className="max-w-3xl flex flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0B4F9E]">
              Zero-Defect Standards
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Quality Assurance & Compliance
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At PMT Plast, we maintain a comprehensive ISO 9001:2015 certified Quality Management System. Every meter of conduit manufactured reflects our commitment to life safety and infrastructural integrity.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Timeline: Testing Process */}
      <section className="py-20 bg-white">
        <Container className="max-w-4xl flex flex-col gap-12">
          
          <div className="text-center flex flex-col gap-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F9E]">Step-by-Step Excellence</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Our Four-Stage Testing Workflow</h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              We apply comprehensive, real-time testing methodologies across all phases of extrusion and packaging.
            </p>
          </div>

          <div className="relative border-l border-slate-200 ml-4 sm:ml-8 flex flex-col gap-12 mt-6">
            {TIMELINE_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 sm:pl-12 group"
              >
                {/* Timeline Circle with Number */}
                <div className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-[#0B4F9E] text-xs font-bold text-[#0B4F9E] shadow-sm transition-all group-hover:bg-[#0B4F9E] group-hover:text-white">
                  {step.step}
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <step.icon className="h-4 w-4 text-[#0B4F9E]" />
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </Container>
      </section>

      {/* 3. Quality Videos: real footage from the QC lab */}
      <QualityVideos />

      {/* 4. BIS & ISI Compliance Panel */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex flex-col gap-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B4F9E]">Regulatory Sourcing</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
              National BIS & ISI Standards Compliance
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Every production sample is certified strictly under the Bureau of Indian Standards guidelines. We form our compounds to comply with critical fire standards, zero-lead, and environmental health demands.
            </p>
            <div className="flex items-center gap-3 mt-2 bg-white border border-slate-100 rounded-xl p-4 shadow-xs">
              <Award className="text-[#0B4F9E] shrink-0" size={24} />
              <div>
                <span className="text-xs font-bold text-slate-900 block">IS 9537 (Part 3) Certification</span>
                <span className="text-[11px] text-slate-500">Official license code stamped on all uPVC rigid conduits.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col gap-4">
              <Compass className="h-8 w-8 text-blue-600" />
              <h4 className="text-sm sm:text-base font-bold text-slate-900">Virgin Raw Materials</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We strictly bypass hazardous or low-grade recycled fillers. Virgin suspension grade polymers maintain exceptional structural flex, allowing effortless bends without micro-fracturing.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col gap-4">
              <BadgeCheck className="h-8 w-8 text-blue-600" />
              <h4 className="text-sm sm:text-base font-bold text-slate-900">100% Impact Commitment</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We test batch runs in custom low-temperature testing chambers (-5°C) to assure that conduits specified for cold climates or buried RCC slabs do not suffer brittle fracture.
              </p>
            </div>
          </div>

        </Container>
      </section>

      {/* 5. Quality Policy Card / Commitment */}
      <section className="py-20 bg-white">
        <Container className="max-w-3xl">
          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">PMT PLAST PLEDGE</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Our Unwavering Quality Commitment</h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                "We pledge that every product bearing the PMT Plast name is built with complete transparency, verified composition, and strict alignment to safety regulations, delivering maximum value to contractors, developers, and partners."
              </p>
              <div className="h-[1px] w-24 bg-slate-800" />
              <div className="text-center">
                <span className="text-sm font-bold text-white block">Managing Director</span>
                <span className="text-[10px] text-slate-400">PMT Group of Industries</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
