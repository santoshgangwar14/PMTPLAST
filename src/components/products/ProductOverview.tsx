// src/components/products/ProductOverview.tsx

import Container from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

interface ProductOverviewProps {
  product: {
    overview: string;
    heroImage: string;
    features: string[];
  };
}

export default function ProductOverview({
  product,
}: ProductOverviewProps) {
  return (
    <section className="bg-white py-24">
      <Container className="max-w-7xl">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-[#F8FAFC] p-10">
              <img
                src={product.heroImage}
                alt=""
                className="mx-auto w-full max-w-[480px] object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4F9E]">
              Product Overview
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Designed for Reliable Electrical Installations
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              {product.overview}
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {product.features.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 p-5"
                >
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 text-[#0B4F9E]"
                  />

                  <span className="text-base font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}