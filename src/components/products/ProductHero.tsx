// src/components/products/ProductHero.tsx

import { Download, ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";

interface ProductHeroProps {
  product: {
    name: string;
    shortDescription: string;
    heroImage: string;
    badges: string[];
  };
}

export default function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F9FF] via-white to-white" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-[350px] w-[350px] rounded-full bg-slate-100 blur-3xl" />

      <Container className="relative z-10 max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 text-sm text-slate-500">
          <span>Home</span>
          <span>/</span>
          <span>Products</span>
          <span>/</span>
          <span className="font-medium text-[#0B4F9E]">{product.name}</span>
        </div>

        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="inline-flex rounded-full bg-[#0B4F9E]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#0B4F9E]">
              PMT Plast
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
              {product.name}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
              {product.shortDescription}
            </p>

            {/* Badges */}
            <div className="mt-10 flex flex-wrap gap-4">
              {product.badges.map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#0B4F9E]"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5">
              <button className="inline-flex items-center gap-3 rounded-full bg-[#0B4F9E] px-8 py-4 text-white transition hover:bg-[#083D7A]">
                <Download size={18} />
                Download Catalogue
              </button>

              <button className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-8 py-4 text-slate-800 transition hover:border-[#0B4F9E] hover:text-[#0B4F9E]">
                Get Quote
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-[40px] bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={product.heroImage}
                alt={product.name}
                className="mx-auto w-full max-w-[520px] object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}