import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { products } from "@/data/products";

const CategoryTiles = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Browse By Category
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Every Category. One Trusted Name.
            </h2>
          </div>
          <a
            href="#products"
            className="hidden items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent sm:flex"
          >
            View Full Catalogue
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {products.map((product, index) => (
            <motion.a
              key={product.id}
              href="#products"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl bg-primary shadow-industrial transition-shadow duration-500 hover:shadow-industrial-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="relative z-10 flex items-center justify-between gap-2 p-4">
                <span className="text-sm font-bold leading-tight text-white">{product.name}</span>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryTiles;
