// src/components/products/ProductSizes.tsx

import Container from "@/components/ui/Container";
import { Ruler } from "lucide-react";

interface ProductSizesProps {
  sizes: string[];
}

export default function ProductSizes({
  sizes,
}: ProductSizesProps) {
  return (
    <section className="bg-white py-24">
      <Container className="max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4F9E]">
            Available Sizes
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Standard Manufacturing Sizes
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            PMT Plast conduit pipes are available in multiple standard sizes
            suitable for residential, commercial and industrial electrical
            installations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-5">
          {sizes.map((size) => (
            <div
              key={size}
              className="group rounded-[28px] border border-slate-200 bg-white p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#0B4F9E] hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0B4F9E]/10 transition group-hover:bg-[#0B4F9E]">
                <Ruler
                  size={28}
                  className="text-[#0B4F9E] group-hover:text-white"
                />
              </div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                {size}
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                Standard Size
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}