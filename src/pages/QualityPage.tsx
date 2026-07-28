import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Microscope, FlaskConical } from "lucide-react";
import Container from "@/components/ui/Container";
import QualityVideos from "@/components/sections/QualityVideos";
import heroFactory from "@/assets/images/hero/hero-factory.webp";

const TIMELINE_STEPS = [
  {
    step: "01",
    title: "Raw Material Sourcing",
    description:
      "Procurement of high-purity virgin PVC resins. Additives and compounds are strictly scrutinized before release into production lines.",
    icon: FlaskConical,
  },
  {
    step: "02",
    title: "Continuous In-Process Sensor Controls",
    description:
      "Automated ultrasonic wall monitors and high-precision laser gauges keep diameter tolerances tighter than strict IS 9537 requirements.",
    icon: Cpu,
  },
  {
    step: "03",
    title: "Laboratory Impact & Stress Testing",
    description:
      "Representative samples from every single batch are subjected to extreme falling-weight test rigs, pressure tests, and oven temperature thresholds.",
    icon: Microscope,
  },
  {
    step: "04",
    title: "Final Inspection & Dispatch Certification",
    description:
      "All products undergo physical checking for surface uniformity, locking mechanism strength (for casing), and matching accessories count.",
    icon: ShieldCheck,
  },
];

export default function QualityPage() {
  return (
    <div className="bg-slate-50 text-slate-900 pb-[120px]">
  <section className="relative overflow-hidden bg-gradient-to-r from-[#237FD3] via-[#347FD4] to-[#CF6868] text-white py-20 lg:py-28">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_72%)]" />
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.10),transparent_60%)]" />
    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#347FD4]/45 to-transparent" />

        <Container className="relative z-10 max-w-7xl mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-[0.55fr_0.45fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-[#D9A520]/35 bg-white/12 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-[#FFD54A] shadow-[0_10px_30px_rgba(255,215,0,0.18)]">
                QUALITY ASSURANCE
              </div>
              <div className="space-y-4 max-w-2xl">
                <h1
  className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight"
  style={{
    background:
      "linear-gradient(180deg,#FFFBEA 0%,#FFE69A 18%,#FFD13A 38%,#DFA61D 60%,#C1870F 82%,#8F6200 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    filter: "drop-shadow(0 4px 20px rgba(201,146,18,.35))",
  }}
>
  Premium manufacturing quality engineered for every project.
</h1>
                <p
  className="text-lg leading-9 max-w-2xl"
  style={{
    color: "#FFF8E8",
    opacity: 0.96,
  }}
>
  From raw material selection to final dispatch certification,
  PMT Plast delivers robust, compliant conduit systems with a focus
  on precision, repeatability and premium industrial performance.
</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "ISO Certified", accent: "text-[#FFD54A]" },
                  { label: "BIS Compliant", accent: "text-[#FFD54A]" },
                  { label: "100% Batch Tested", accent: "text-[#FFD54A]" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className={`rounded-3xl border border-[#D9A520]/35 bg-white/12 px-5 py-4 text-center text-sm font-semibold tracking-[0.02em] shadow-[0_25px_70px_-35px_rgba(255,215,0,0.18)] backdrop-blur-xl ${badge.accent}`}
                  >
                    {badge.label}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-[32px] border border-[#D9A520]/35 bg-white/12 shadow-[0_40px_120px_-60px_rgba(255,215,0,0.18)]"
            >
              <img
                src={heroFactory}
                alt="Factory quality inspection"
                className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[620px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,55,110,0.18),transparent_45%)]" />
              <div className="pointer-events-none absolute left-6 top-6 grid h-24 w-24 rounded-3xl border border-[#D9A520]/35 bg-white/12 p-4 text-sm text-[#FFD54A] shadow-[0_25px_60px_-35px_rgba(255,215,0,0.22)]">
                <span className="font-semibold tracking-[0.18em] uppercase text-[#FFD54A]">Blueprint</span>
                <span className="mt-1 text-xs text-[#F8F6F2]">Overview</span>
              </div>
              <div className="pointer-events-none absolute right-6 bottom-6 grid gap-2 rounded-3xl border border-[#D9A520]/35 bg-white/12 px-5 py-4 text-[#F8F6F2] shadow-[0_25px_60px_-35px_rgba(255,215,0,0.22)]">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#FFD54A]">Engineering Grid</span>
                <span className="text-sm font-semibold text-[#F8F6F2]">Precision. Control. Repeatability.</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-28 bg-white">
        <Container className="max-w-7xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] xl:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0B4F9E]">Testing Timeline</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Premium process controls from raw resin to dispatch.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Every quality milestone is managed through a monitored, certified workflow designed for industrial scale and engineering-grade consistency.
              </p>
            </motion.div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-y-0 left-1/2 top-0 w-px bg-gradient-to-b from-[#0B4F9E]/0 via-[#0B4F9E]/40 to-[#0B4F9E]/0" />
              <div className="absolute top-12 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-[#0B4F9E]/20 ring-2 ring-white/90" />
            </div>
          </div>

          <div className="grid gap-8 mt-12 lg:grid-cols-2">
            {TIMELINE_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.article
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  className="group rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_40px_130px_-55px_rgba(15,23,42,0.14)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#0B4F9E]/10 text-[#0B4F9E] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                      <StepIcon className="h-7 w-7" />
                    </div>
                    <div className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-500">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-950 tracking-tight">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      <QualityVideos />
    </div>
  );
}