import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import type { Product } from "@/types";
import { staggerItem } from "@/components/ui/StaggerGroup";

interface ProductCardProps {
  product: Product;
  onEnquire?: (product: Product) => void;
}

const ProductCard = ({ product, onEnquire }: ProductCardProps) => {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-white shadow-industrial transition-shadow duration-500 hover:shadow-industrial-lg"
    >
      <div className="relative overflow-hidden bg-slate-100">
        <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary shadow-sm">
          <Layers className="h-3 w-3 text-accent" />
          {product.category}
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-7">
        <div>
          <h3 className="text-xl font-bold leading-snug text-primary">{product.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.shortDescription}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Applications</p>
          <ul className="mt-2.5 flex flex-wrap gap-2">
            {product.applications.slice(0, 3).map((app) => (
              <li
                key={app}
                className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-slate-600"
              >
                {app}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 rounded-2xl bg-surface p-4">
          {product.specifications.slice(0, 4).map((spec) => (
            <div key={spec.label} className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wide text-slate-400">{spec.label}</span>
              <span className="text-sm font-semibold text-primary">{spec.value}</span>
            </div>
          ))}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Key Features</p>
          <ul className="mt-2.5 space-y-2">
            {product.keyFeatures.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-line pt-5">
          <div className="flex flex-wrap gap-1.5">
            {product.standards.map((standard) => (
              <span
                key={standard}
                className="rounded-md bg-primary/5 px-2 py-1 text-[10px] font-semibold tracking-wide text-primary"
              >
                {standard}
              </span>
            ))}
          </div>
          <button
            onClick={() => onEnquire?.(product)}
            className="group/btn inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-accent transition-colors hover:text-accent-light"
          >
            Request Specs
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
