// src/components/products/ProductSpecifications.tsx

import Container from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

interface Specification {
  property: string;
  value: string;
}

interface ProductSpecificationsProps {
  specifications: Specification[];
}

const ProductSpecifications = ({
  specifications,
}: ProductSpecificationsProps) => {
  return (
    <section
      id="specifications"
      className="bg-slate-50 py-24"
    >
      <Container className="max-w-7xl">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4F9E]">
            Technical Specifications
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Product Information
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every PMT Plast conduit pipe is manufactured under strict quality
            control standards to ensure consistent performance and durability.
          </p>
        </div>

        {/* Table */}

        <div className="mt-20 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg">

          {/* Header */}

          <div className="grid grid-cols-2 bg-[#0B4F9E] px-8 py-5">

            <h3 className="text-lg font-semibold text-white">
              Specification
            </h3>

            <h3 className="text-lg font-semibold text-white">
              Details
            </h3>

          </div>

          {/* Body */}

          {specifications.map((item, index) => (
            <div
              key={item.property}
              className={`grid grid-cols-2 items-center px-8 py-6 transition hover:bg-slate-50 ${
                index !== specifications.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={18}
                  className="text-[#0B4F9E]"
                />

                <span className="font-semibold text-slate-900">
                  {item.property}
                </span>

              </div>

              <span className="text-slate-600">
                {item.value}
              </span>
            </div>
          ))}

        </div>

        {/* Bottom Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-[28px] bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold text-slate-900">
              Premium Quality
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Manufactured using high-grade virgin PVC compound for consistent
              quality and superior strength.
            </p>
          </div>

          <div className="rounded-[28px] bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold text-slate-900">
              Quality Tested
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Every production batch undergoes strict dimensional and mechanical
              testing before dispatch.
            </p>
          </div>

          <div className="rounded-[28px] bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold text-slate-900">
              Long Service Life
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Excellent resistance against corrosion, moisture and impact makes
              PMT Plast products ideal for long-term installations.
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default ProductSpecifications;