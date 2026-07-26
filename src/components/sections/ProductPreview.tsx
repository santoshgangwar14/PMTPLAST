import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";

// Import High-Quality Assets
import heavyGaugeConduit from "@/assets/images/products/PVC CONDUIT PIPE/pvc-pipe-hero.webp";
import bendsCouplers from "@/assets/images/products/PVC BEND/bends.webp";
import junctionBox from "@/assets/images/products/CONDUIT FITTING & ACCESSORIES/junction-box.webp";
import industrialCasing from "@/assets/images/products/PVC CASING & CAPPING/CASING&capping.webp";

const categories = [
  {
    id: "conduit-pipes",
    name: "PVC Conduit Pipes",
    image: heavyGaugeConduit,
    description: "High-impact rigid uPVC pipes engineered with flame retardant properties for concealed and surface installations in modern infrastructure.",
    features: ["Flame-retardant compound", "High-impact rigid uPVC", "Concealed installations", "Surface installations"],
  },
  {
    id: "bends",
    name: "PVC Bends",
    image: bendsCouplers,
    description: "Precision-molded uPVC bends featuring uniform wall thickness and incredibly smooth internal surfaces for effortless, hazard-free cable pulling.",
    features: ["Precision-molded uPVC", "Uniform wall thickness", "Smooth internal surface", "Effortless cable pulling"],
  },
  {
    id: "fittings",
    name: "Conduit Fittings & Accessories",
    image: junctionBox,
    description: "A complete ecosystem of robust junction boxes, couplers, tees, and elbows constructed to ensure fully integrated and dust-proof electrical runs.",
    features: ["Robust junction boxes", "Couplers, tees & elbows", "Integrated conduit system", "Dust-proof electrical runs"],
  },
  {
    id: "casing-capping",
    name: "PVC Casing & Capping",
    image: industrialCasing,
    description: "Premium snap-fit channels and profiles designed for clean, aesthetic, and secure surface-mounted wiring across residential and commercial spaces.",
    features: ["Premium snap-fit channels", "Secure surface mounting", "Clean cable routing", "Commercial & residential"],
  },
];

export default function ProductPreview() {
  return (
    <section
  id="products"
  className="relative isolate overflow-hidden border-y border-slate-100 bg-white pt-36 pb-28 lg:pt-40 lg:pb-32"
>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_18%,rgba(89,194,239,0.14),transparent_22%),radial-gradient(circle_at_95%_70%,rgba(11,79,158,0.10),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(11,79,158,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(11,79,158,0.5)_1px,transparent_1px)] [background-size:76px_76px]" />
      <div className="pointer-events-none absolute -left-28 top-[34%] h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

      <Container className="relative flex flex-col gap-12 lg:gap-14">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.26em] text-[#0B4F9E]">
            <span className="h-px w-9 bg-[#0B4F9E]/30" />
            PMT Plast Product Portfolio
            <span className="h-px w-9 bg-[#0B4F9E]/30" />
          </span>
          <h2
  className="mt-6
  text-4xl
  sm:text-5xl
  lg:text-6xl
  font-black
  leading-[1.08]
  tracking-tight
  text-[#0B4F9E]"
  style={{
    textShadow: "0 10px 25px rgba(11,79,158,.15)",
  }}
>
            Engineering That Protects Every Connection
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore our industrial-grade PVC conduit systems manufactured to the highest standards of safety, quality, and structural integrity.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:gap-10">
          {categories.map((cat, index) => (
            <motion.article
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
              className="group relative grid overflow-hidden rounded-[36px] border border-white/90 bg-[linear-gradient(120deg,rgba(255,255,255,0.94),rgba(234,246,253,0.82)_54%,rgba(255,255,255,0.96))] shadow-[0_18px_48px_rgba(11,79,158,0.075),inset_0_1px_0_rgba(255,255,255,1)] transition-[border-color,box-shadow] duration-500 hover:border-[#ADDDF5] hover:shadow-[0_24px_60px_rgba(11,79,158,0.13),inset_0_1px_0_rgba(255,255,255,1)] lg:grid-cols-2"
            >
              <div className="pointer-events-none absolute inset-x-10 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

              <div className={`product-media relative flex min-h-[255px] items-center justify-center overflow-hidden border-b border-[#B9DCF0]/45 bg-[radial-gradient(circle_at_50%_48%,rgba(172,224,248,0.62),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.88),rgba(230,245,253,0.9)_55%,rgba(246,251,254,0.95))] p-8 sm:min-h-[290px] lg:min-h-[350px] lg:border-b-0 ${index % 2 === 1 ? "lg:order-2 lg:border-l" : "lg:border-r"}`}>
                <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/45 blur-3xl" />
                <div className="absolute right-[14%] top-[16%] h-12 w-12 rounded-full border border-[#D6AF5C]/20 bg-[#F8EECF]/30 blur-lg" />
                <div className="absolute inset-x-[28%] bottom-10 h-5 rounded-full bg-[#0B4F9E]/14 blur-lg" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[linear-gradient(110deg,rgba(255,255,255,0.76),transparent_62%)]" />
                <div className="relative z-10 flex h-[175px] w-[78%] items-center justify-center rounded-[22px] border border-white/85 bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-[2px] sm:h-[195px] lg:h-[225px]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="h-[105px] w-[82%] object-contain drop-shadow-[0_18px_18px_rgba(15,23,42,0.18)] transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:h-[125px] lg:h-[135px]"
                  />
                </div>
              </div>

              <div className="relative flex flex-col justify-center px-7 py-9 sm:px-10 sm:py-10 lg:px-12">
                <div className="pointer-events-none absolute right-0 top-0 h-20 w-36 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.9),transparent_70%)]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0B4F9E]">
                  Product Category {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mt-4 h-px w-10 bg-[#0B4F9E]/30" />
                <h3 className="mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-4xl">
                  {cat.name}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  {cat.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {cat.features.map((feature) => (
                    <li key={feature} className="inline-flex items-center gap-2 rounded-full border border-[#B8D9EE] bg-white/60 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#0B4F9E]/20 bg-[#0B4F9E]/[0.06] text-[#0B4F9E]">
                        <Check className="h-3 w-3 stroke-[2.5]" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <a
                    href="#products"
                    className="group/button relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-br from-[#1C73C9] via-[#0B4F9E] to-[#07376D] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_22px_rgba(11,79,158,0.25),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(11,79,158,0.34),inset_0_1px_0_rgba(255,255,255,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B4F9E]"
                  >
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_28%,rgba(255,255,255,0.25)_48%,transparent_68%)] transition-transform duration-700 group-hover/button:translate-x-full" />
                    <span className="relative">Explore Range</span>
                    <ArrowRight size={16} className="relative transition-transform duration-300 group-hover/button:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
