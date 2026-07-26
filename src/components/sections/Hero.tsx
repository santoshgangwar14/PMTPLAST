import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Container from "@/components/ui/Container";

// Hero composition assets
import factoryBackdrop from "@/assets/images/hero/factory2.webp";
import pvcPipeHero from "@/assets/images/hero/pvc-pipe-triple.webp";
import junctionBoxImg from "@/assets/images/hero/junction-box.webp";
import fanBoxImg from "@/assets/images/hero/FANBOXPVC.webp";
import eightWayBoxImg from "@/assets/images/hero/hero-8-way-box.webp";
import bendImg from "@/assets/images/hero/bends.webp";

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(mvY, { stiffness: 60, damping: 20, mass: 0.6 });

  const bgX = useTransform(springX, (v) => v * -8);
  const bgY = useTransform(springY, (v) => v * -8);
  const pipeX = useTransform(springX, (v) => v * 10);
  const pipeY = useTransform(springY, (v) => v * 10);
  const cardNearX = useTransform(springX, (v) => v * 18);
  const cardNearY = useTransform(springY, (v) => v * 18);
  const cardFarX = useTransform(springX, (v) => v * 12);
  const cardFarY = useTransform(springY, (v) => v * 12);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mvX.set((event.clientX - rect.left) / rect.width - 0.5);
    mvY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  return (
    <section
      id="home"
      className="relative isolate flex ... overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#EEF4FB] to-[#E6EEF9] ..."
    >
      {/* Premium Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-full bg-[radial-gradient(circle_at_70%_45%,rgba(220,38,38,0.05),transparent_65%)] lg:w-3/5" />
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-slate-200/50 blur-[100px]" />
      </div>

      <Container className="relative z-10 px-6 lg:px-10 xl:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          {/* ============ LEFT: Brand & Core Pitch ============ */}
          <div className="flex max-w-[700px] flex-col justify-center pl-6 sm:pl-8 lg:pl-10 xl:pl-12">
            {/* Glossy ISO Trust Badge */}
            <div className="w-fit">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md px-4 py-1.5 text-sm font-bold tracking-wide text-slate-800 shadow-sm">
                <span className="flex h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                ISO 9001:2015 Certified Manufacturer
              </span>
            </div>

            {/* Professional Headline */}
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">

  <span
    className="block bg-gradient-to-r from-[#0B4F9E] via-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent"
    style={{
      textShadow: "0 0 22px rgba(37,99,235,.30)",
    }}
  >
    PRECISION ENGINEERED
  </span>

  <span
    className="mt-2 block bg-gradient-to-r from-[#8B0000] via-[#C62828] to-[#EF5350] bg-clip-text text-transparent"
    style={{
      textShadow: "0 0 22px rgba(198,40,40,.30)",
    }}
  >
    ELECTRICAL PROTECTION
  </span>

  <span
    className="mt-2 block text-3xl font-black uppercase tracking-wide text-[#0B4F9E] sm:text-4xl lg:text-5xl"
    style={{
      textShadow: "0 0 18px rgba(11,79,158,.25)",
    }}
  >
    FOR SAFE INFRASTRUCTURE
  </span>

</h1>
            {/* Subtext */}
            <p className="mt-6 max-w-xl text-lg font-medium leading-[1.75] text-[#F8F6F2] opacity-[0.94] sm:text-xl">
             
              From raw material selection to final dispatch certification, PMT Plast delivers robust, compliant conduit systems with a focus on precision, repeatability and premium industrial performance.
            </p>

            {/* Big Red Buttons Row */}
           <div className="mt-10 flex flex-wrap items-center gap-5">

  {/* Primary CTA */}
  <a
    href="#products"
    className="
      group relative inline-flex items-center gap-3 overflow-hidden
      rounded-2xl
      bg-gradient-to-r
      from-[#8B0000]
      via-[#B71C1C]
      to-[#D32F2F]
      px-9 py-4
      text-lg font-bold text-white
      shadow-[0_15px_40px_rgba(183,28,28,.45)]
      transition-all duration-500
      hover:-translate-y-1.5
      hover:scale-[1.03]
      hover:shadow-[0_20px_50px_rgba(183,28,28,.60)]
    "
  >
    <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />

    <span className="relative flex items-center gap-3">
      Explore Products
      <ArrowRight
        size={22}
        className="transition-transform duration-300 group-hover:translate-x-2"
      />
    </span>
  </a>

  {/* Secondary CTA */}
  <a
    href="#cta"
    className="
      group inline-flex items-center gap-3
      rounded-2xl
      border-2 border-[#0B4F9E]
      bg-white/70
      backdrop-blur-xl
      px-9 py-4
      text-lg font-bold
      text-[#0B4F9E]
      shadow-[0_12px_35px_rgba(11,79,158,.18)]
      transition-all duration-500
      hover:-translate-y-1.5
      hover:scale-[1.03]
      hover:bg-gradient-to-r
      hover:from-[#0B4F9E]
      hover:to-[#2563EB]
      hover:text-white
      hover:border-[#2563EB]
      hover:shadow-[0_20px_45px_rgba(37,99,235,.40)]
    "
  >
    <Users
      size={22}
      className="transition-transform duration-300 group-hover:scale-110"
    />

    Become a Dealer
  </a>

</div>

            {/* 2 Clean & Big Stats */}
            <div className="mt-12 ml-4 max-w-[620px] rounded-3xl border border-white/60 bg-white/60 p-8 shadow-[0_20px_60px_rgba(0,0,0,.08)] backdrop-blur-xl sm:ml-0">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
                
                {/* Stat 1 */}
                <div className="flex min-w-0 flex-col items-center justify-center gap-2 border-b border-slate-200 pb-6 text-center sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6">
                  <span className="font-display text-5xl font-extrabold leading-none text-slate-900">
                    <AnimatedCounter value={100} suffix="+" />
                  </span>
                  <span className="text-sm font-bold tracking-wider text-slate-500 uppercase mt-1">
                    Channel Partners
                  </span>
                </div>

                {/* Stat 2 */}
<div className="flex min-w-0 flex-col items-center justify-center gap-2 text-center">

  <span className="font-display text-5xl font-black leading-none text-[#8B0000]">
    <AnimatedCounter value={25} suffix="+" />
  </span>

  <span className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-[#0B4F9E]">
    Years of Engineering
    <br />
    Excellence
  </span>

                </div>

              </div>
            </div>
          </div>

          {/* ============ RIGHT: Industrial Product Stage ============ */}
          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden sm:min-h-[500px] lg:min-h-[560px] xl:min-h-[660px]"
          >
            {/* Blueprint factory backdrop */}
            <motion.div
              style={{ x: bgX, y: bgY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0 overflow-hidden rounded-[32px] border border-white/20 shadow-[0_30px_80px_-15px_rgba(15,23,42,0.15)] sm:inset-2 lg:inset-2 lg:rounded-[40px]"
            >
              <img
                src={factoryBackdrop}
                alt="PMT Plast manufacturing facility"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-red-900/40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-blueprint opacity-[0.25]" />
            </motion.div>

            {/* Centerpiece: PVC conduit pipe */}
            <motion.div
              style={{ x: pipeX, y: pipeY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-[74%] sm:w-[70%] lg:w-[68%] xl:w-[66%]"
            >
              <img
                src={pvcPipeHero}
                alt="PMT Plast premium PVC conduit pipes"
                className="h-auto w-full object-contain drop-shadow-[0_45px_55px_rgba(0,0,0,0.5)]"
              />
            </motion.div>

            {/* Premium Glossy Floating Card: Junction Box */}
            <motion.div
              style={{ x: cardNearX, y: cardNearY }}
              initial={{ opacity: 0, x: -30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.7, delay: 0.3 },
                x: { duration: 0.7, delay: 0.3 },
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
              className="absolute left-1 top-3 z-20 w-[34%] max-w-[190px] rounded-2xl border border-white/60 bg-white/20 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-lg sm:left-3 sm:top-6 sm:max-w-[220px] sm:p-4"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none" />
              <img
                src={junctionBoxImg}
                alt="Modular Junction Box"
                className="relative z-10 h-auto w-full object-contain drop-shadow-xl"
              />
              <div className="relative z-10 mt-3 rounded-lg bg-white/80 py-1.5 text-center shadow-inner backdrop-blur-md">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-800 sm:text-[11px]">
                  Junction Boxes
                </span>
              </div>
            </motion.div>

            {/* Premium Glossy Floating Card: Fan Box */}
            <motion.div
              style={{ x: cardFarX, y: cardFarY }}
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.7, delay: 0.45 },
                x: { duration: 0.7, delay: 0.45 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              }}
              className="absolute right-1 top-1 z-20 w-[30%] max-w-[170px] rounded-2xl border border-white/60 bg-white/20 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-lg sm:right-3 sm:top-2 sm:max-w-[210px] sm:p-4"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none" />
              <img
                src={fanBoxImg}
                alt="PVC Fan Box"
                className="relative z-10 h-auto w-full object-contain drop-shadow-xl"
              />
              <div className="relative z-10 mt-3 rounded-lg bg-white/80 py-1.5 text-center shadow-inner backdrop-blur-md">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-800 sm:text-[11px]">
                 Casing & Capping
                </span>
              </div>
            </motion.div>

            {/* Premium Glossy Floating Card: 8-Way Box */}
            <motion.div
              style={{ x: cardNearX, y: cardNearY }}
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: [0, -9, 0] }}
              transition={{
                opacity: { duration: 0.7, delay: 0.6 },
                x: { duration: 0.7, delay: 0.6 },
                y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
              }}
              className="absolute bottom-3 right-1 z-20 w-[32%] max-w-[180px] rounded-2xl border border-white/60 bg-white/20 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-lg sm:bottom-5 sm:right-3 sm:max-w-[220px] sm:p-4"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none" />
              <img
                src={eightWayBoxImg}
                alt="8-Way Concealed Box"
                className="relative z-10 h-auto w-full object-contain drop-shadow-xl"
              />
              <div className="relative z-10 mt-3 rounded-lg bg-white/80 py-1.5 text-center shadow-inner backdrop-blur-md">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-800 sm:text-[11px]">
                  Concealed
                </span>
              </div>
            </motion.div>

            {/* Floating: Bend accent badge */}
            <motion.div
              style={{ x: cardFarX, y: cardFarY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.7, delay: 0.75 },
                scale: { duration: 0.7, delay: 0.75 },
                y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
              }}
              className="absolute bottom-2 left-2 z-20 w-[22%] max-w-[125px] rounded-2xl border border-white/60 bg-white/40 p-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-md sm:bottom-4 sm:left-4 sm:max-w-[145px] sm:p-3"
            >
              <img
                src={bendImg}
                alt="Precision PVC Bend"
                className="h-auto w-full object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}