import { motion } from "framer-motion";
import founderPhoto from "@/assets/images/team/pradeep-singh.jpg";
import {
  Building2,
  ShieldCheck,
  BadgeCheck,
  Layers,
  Users,
  Quote,
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
    <div className="bg-[linear-gradient(135deg,#FDF9F4_0%,#F8F2EA_45%,#F4ECE2_100%)]">

      {/* ========================================================= */}
      {/* ABOUT US */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8F1E8] via-[#F4E8DA] to-[#EFDCC8] py-20 lg:py-28">

        {/* Decorative Dot Pattern */}
        <div
          className="absolute left-8 top-10 hidden h-24 w-24 opacity-40 lg:block"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,244,194,0.22) 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
        />

        {/* Premium Glow */}
        <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#FFF4C2]/15 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#F4C430]/15 blur-[140px]" />

        {/* Decorative Pipes */}
        <img
          src={pipesDecor}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-[300px] select-none object-cover opacity-35 lg:block [mask-image:linear-gradient(to_left,black_30%,transparent_100%)]"
        />

        <Container className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 xl:px-16">

          <div className="grid items-center gap-20 lg:grid-cols-[430px_minmax(0,1fr)]">

            {/* ================================================= */}
            {/* LEFT */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto lg:ml-8 w-full max-w-[440px]"
            >
              <div className="overflow-hidden rounded-[28px] border border-[#FFD700]/35 bg-white/80 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">

                {/* Image */}
                <div className="relative overflow-hidden bg-transparent flex items-center justify-center p-6">
  <img
    src={founderPhoto}
    alt="Pradeep Singh"
    className="w-full h-auto max-h-[560px] object-contain object-center"
  />
</div>

                {/* Footer */}
                <div className="-mt-px bg-gradient-to-r from-[#3B0000] via-[#650000] to-[#3B0000] py-6 px-8 text-center border-t border-[#D4AF37]/30">

  <h3
    className="text-[42px] font-black leading-none tracking-wide"
    style={{
      color: "#FFFFFF",
      textShadow:
        "0 1px 0 #ffffff, 0 0 10px rgba(255,255,255,0.45), 0 0 22px rgba(255,255,255,0.25)",
    }}
  >
    PRADEEP SINGH
  </h3>

  <p
    className="mt-3 text-xl font-semibold uppercase tracking-[0.35em]"
    style={{
      color: "#F8F8F8",
      textShadow: "0 0 10px rgba(255,255,255,0.35)",
    }}
  >
    Founder
  </p>

</div>

              </div>
            </motion.div>

            {/* ================================================= */}
            {/* RIGHT CONTENT */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
              className="flex flex-col justify-center gap-7"
            >

              {/* Eyebrow */}

             <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#C69214]/40 bg-[#2A2A2A]/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#FFD700] shadow-[0_0_25px_rgba(255,215,0,.15)] backdrop-blur-xl">
  <Building2 className="h-4 w-4 text-[#FFD700]" />
  ABOUT PMT PLAST
</span>

              {/* Heading */}

         <h1 className="max-w-[760px] text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold uppercase leading-[1.12] tracking-tight">
  <span
    style={{
      color: "#0B4F9E",
      textShadow: "0 0 15px rgba(11,79,158,.25)",
    }}
  >
    BUILDING TRUST THROUGH
  </span>

  <span
    className="block mt-2"
    style={{
      color: "#1565D8",
      textShadow: "0 0 18px rgba(21,101,216,.25)",
    }}
  >
    QUALITY & EXPERIENCE
  </span>
</h1>

              {/* Accent Line */}

              <div className="flex items-center gap-4">

                <div className="h-[4px] w-20 rounded-full bg-[linear-gradient(90deg,#FFF4C2_0%,#FFD700_45%,#C69214_100%)]" />

                <span
  className="text-sm font-bold uppercase tracking-[0.35em]"
  style={{
    color: "#8B0000",
  }}
>
  SINCE 2000
</span>

              </div>

              {/* Paragraphs */}

              <div className="max-w-[760px] space-y-6 text-lg leading-8 text-white opacity-95">

                <p>

                  PMT Plast was founded with a clear vision to manufacture
                  dependable PVC conduit systems engineered for long-term
                  performance, electrical safety and reliability.

                </p>

                <p>

                  With over <strong
  className="font-extrabold"
  style={{
    color: "#0B4F9E",
    textShadow: "0 0 8px rgba(11,79,158,.15)",
  }}
>
  25 Years
</strong>
                  {" "}of industry expertise, Mr. Pradeep Singh has built a
                  trusted manufacturing organization focused on innovation,
                  product quality and customer satisfaction.

                </p>

                <p>

                  Today PMT Plast proudly serves dealers, distributors,
                  contractors and infrastructure projects with premium PVC
                  conduit solutions manufactured using modern production
                  technology and strict quality standards.

                </p>

              </div>

              {/* Premium Quote */}

              <div className="rounded-[24px] border border-[#FFD700]/30 bg-white/85 backdrop-blur-xl p-7 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#FFD700]/35 bg-[#4A0000]/50 text-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.12)]">

                    <Quote className="h-6 w-6"/>

                  </div>

                 <p className="text-lg lg:text-xl font-bold leading-8 text-white">
  <span
    style={{
      color: "#0B4F9E",
      textShadow: "0 0 10px rgba(11,79,158,.20)",
    }}
  >
    Quality is not just our standard —
  </span>

  <span
    className="ml-2"
    style={{
      color: "#B22222",
      textShadow: "0 0 10px rgba(178,34,34,.20)",
    }}
  >
    it's the foundation of everything we manufacture.
  </span>
</p>

                </div>

              </div>

            </motion.div>

          </div>

        </Container>

      </section>

      {/* ========================================================= */}
      {/* HIGHLIGHT STATS */}
      {/* ========================================================= */}

      <section className="relative py-20 bg-gradient-to-b from-[#FAF6F0] to-[#F4ECE2]">

        <Container>

          <div className="overflow-hidden rounded-[30px] border border-[#D4AF37]/40 bg-white shadow-[0_25px_80px_rgba(212,175,55,.25)]">

            <div className="grid grid-cols-1 divide-y divide-[#FFF4C2]/30 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">

              {highlightStats.map((item, idx) => (

                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: .5, delay: idx * .08 }}
                  whileHover={{ y: -6 }}
                  className="group flex flex-col items-center p-10 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.12)]"
                >

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#FFD700]/35 bg-[linear-gradient(135deg,#4A0000_0%,#650000_60%,#2B0000_100%)] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_22px_rgba(255,215,0,0.16)]">

                    <item.icon className="h-7 w-7 text-[#FFD700]" />

                  </div>

                  <h3 className="text-3xl font-extrabold text-[#FFD700]">

                    {item.value}

                  </h3>

                  <p className="mt-3 text-base font-bold text-[#FFF4C2]">

                    {item.label}

                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#F8F6F2]/80">

                    {item.description}

                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </Container>

      </section>


    </div>
  );
}
