import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
  },
  {
    id: "bends",
    name: "PVC Bends",
    image: bendsCouplers,
    description: "Precision-molded uPVC bends featuring uniform wall thickness and incredibly smooth internal surfaces for effortless, hazard-free cable pulling.",
  },
  {
    id: "fittings",
    name: "Conduit Fittings & Accessories",
    image: junctionBox,
    description: "A complete ecosystem of robust junction boxes, couplers, tees, and elbows constructed to ensure fully integrated and dust-proof electrical runs.",
  },
  {
    id: "casing-capping",
    name: "PVC Casing & Capping",
    image: industrialCasing,
    description: "Premium snap-fit channels and profiles designed for clean, aesthetic, and secure surface-mounted wiring across residential and commercial spaces.",
  },
];

export default function ProductPreview() {
  return (
    <section id="products" className="bg-slate-50 py-28 lg:py-40 border-y border-slate-100">
      <Container className="flex flex-col gap-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0B4F9E]">
            Premium Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
            Our Core Product Range
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Explore our industrial-grade PVC conduit systems manufactured to the highest standards of safety, quality, and structural integrity.
          </p>
        </div>

        {/* 4 Premium Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="card flex flex-col h-full items-center text-center p-7"
            >
              {/* Image Container with high contrast and light background */}
              <div className="aspect-square w-full rounded-xl bg-slate-50 border border-slate-100/50 flex items-center justify-center p-6 overflow-hidden mb-6 group">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="max-h-[160px] max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-108"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col flex-grow items-center px-1">
                <h3 className="text-lg font-bold text-slate-950 leading-snug mb-3">
                  {cat.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                  {cat.description}
                </p>
              </div>

              {/* View Products button */}
              <a
                href="#cta"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B4F9E] hover:text-blue-800 transition-colors w-fit group"
              >
                View Products
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}
