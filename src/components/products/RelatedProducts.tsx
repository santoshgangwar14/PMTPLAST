// src/components/products/RelatedProducts.tsx

import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

interface RelatedProduct {
  title: string;
  image: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <section id="related" className="bg-white py-24">
      <Container className="max-w-7xl">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4F9E]">
            Related Products
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Explore Our Product Range
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Discover more premium electrical conduit solutions from PMT Plast,
            engineered for every type of electrical installation.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[#0B4F9E] hover:shadow-2xl"
            >
              {/* Image */}

              <div className="bg-slate-50 p-8">
                <img
                  src={product.image}
                  alt={product.title}
                  className="mx-auto h-56 object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {product.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Premium quality electrical products manufactured with
                  precision for reliable and long-lasting performance.
                </p>

                <button className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0B4F9E] transition-all duration-300 hover:gap-4">
                  View Product

                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] bg-slate-50 p-12 text-center">
          <h3 className="text-3xl font-bold text-slate-900">
            Looking for More Products?
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore our complete product catalogue including PVC Conduit Pipes,
            PVC Bends, Junction Boxes, Casing & Capping and Accessories.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#0B4F9E] px-8 py-4 font-semibold text-white transition hover:bg-[#083D7A]">
            View All Products

            <ArrowRight size={20} />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default RelatedProducts;