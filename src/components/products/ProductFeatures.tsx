// src/components/products/ProductFeatures.tsx

import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface ProductFeaturesProps {
  features: Feature[];
}

const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <section id="features" className="bg-white py-24">
      <Container className="max-w-7xl">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4F9E]">
            Product Features
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Engineered For Performance
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every PMT Plast conduit pipe is manufactured using premium raw
            materials and modern production technology to ensure consistent
            quality and long service life.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}

              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-10">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="mx-auto w-full max-w-lg object-contain transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}

              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0B4F9E] text-lg font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-8 text-4xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-8 text-lg leading-9 text-slate-600">
                  {feature.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <div className="rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700">
                    Premium Quality
                  </div>

                  <div className="rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700">
                    Long Life
                  </div>

                  <div className="rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700">
                    Easy Installation
                  </div>
                </div>

                
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductFeatures;