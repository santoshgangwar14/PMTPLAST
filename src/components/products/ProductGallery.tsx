// src/components/products/ProductGallery.tsx

import Container from "@/components/ui/Container";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({
  images,
}: ProductGalleryProps) {
  return (
    <section className="bg-white py-24">
      <Container className="max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4F9E]">
            Product Gallery
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Product Showcase
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explore our premium PVC conduit products designed for modern
            electrical installations.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white"
            >
              <img
                src={image}
                alt=""
                className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}