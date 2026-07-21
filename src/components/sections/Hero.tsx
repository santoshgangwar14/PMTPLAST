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
      className="relative isolate flex w-full justify-center min-h-[calc(100vh-var(--navbar-height,80px))] items-center overflow-hidden bg-slate-50 pb-12 pt-8 sm:pb-14 sm:pt-10 lg:pb-10 lg:pt-8"
    >
      {/* Premium Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-full bg-[radial-gradient(circle_at_70%_45%,rgba(220,38,38,0.05),transparent_65%)] lg:w-3/5" />
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-slate-200/50 blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          {/* ============ LEFT: Brand & Core Pitch ============ */}
          <div className="flex max-w-[650px] flex-col justify-center lg:pr-6 xl:pr-10">
            {/* Glossy ISO Trust Badge */}
            <div className="w-fit">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md px-4 py-1.5 text-sm font-bold tracking-wide text-slate-800 shadow-sm">
                <span className="flex h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                ISO 9001:2015 Certified Manufacturer
              </span>
            </div>

            {/* Professional Headline */}
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 text-balance sm:text-5xl lg:text-6xl">
              Precision Engineered
              <span className="mt-2 block text-red-600 drop-shadow-sm">
                Electrical Protection
              </span>
              <span className="mt-1 block text-3xl sm:text-4xl lg:text-5xl text-slate-700">
                For Safe Infrastructure
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-slate-600 sm:text-xl">
              PMT Plast manufactures high-grade PVC electrical conduits, casing-capping,
              bends, and premium accessories that define safety, durability, and impact
              resistance — trusted on infrastructure projects nationwide.
            </p>

            {/* Big Red Buttons Row */}
            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#products"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-[0_8px_20px_-6px_rgba(220,38,38,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_12px_25px_-6px_rgba(220,38,38,0.6)]"
              >
                <span className="relative flex items-center gap-2">
                  Explore Products
                  <ArrowRight size={22} className="transition-transform group-hover:translate-x-1.5" />
                </span>
              </a>

              <a
                href="#cta"
                className="group inline-flex items-center gap-3 rounded-xl border-2 border-red-600 bg-white/50 backdrop-blur-sm px-8 py-4 text-lg font-bold text-red-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:text-white hover:shadow-md"
              >
                <Users size={22} className="transition-colors group-hover:text-white" />
                Become a Dealer
              </a>
            </div>

            {/* 2 Clean & Big Stats */}
            <div className="mt-12 max-w-[580px] rounded-2xl border border-white/60 bg-white/50 p-6 shadow-sm backdrop-blur-md sm:p-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
                
                {/* Stat 1 */}
                <div className="flex flex-col gap-2 border-b border-slate-200 pb-6 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6">
                  <span className="font-display text-5xl font-extrabold leading-none text-slate-900">
                    <AnimatedCounter value={100} suffix="+" />
                  </span>
                  <span className="text-sm font-bold tracking-wider text-slate-500 uppercase mt-1">
                    Channel Partners
                  </span>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col gap-2">
                  <span className="font-display text-5xl font-extrabold leading-none text-slate-900">
                    <AnimatedCounter value={25} suffix="+" />
                  </span>
                  <span className="text-sm font-bold tracking-wider text-slate-500 uppercase mt-1">
                    Years of Engineering<br/>Excellence
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
                  Fan Boxes
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