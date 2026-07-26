import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import plantOverview from "@/assets/images/posters/plant-overview.jpg";
import shopFloor from "@/assets/images/posters/factory-clip-3.jpg";
import extrusionLine from "@/assets/images/posters/factory-clip-4.jpg";
import batchTesting from "@/assets/images/posters/factory-clip-5.jpg";
import finishedGoods from "@/assets/images/posters/factory-clip-6.jpg";
import allProducts from "@/assets/images/gallery/All_product.webp";
import pipeStack from "@/assets/images/gallery/pmt-pipes-stack.jpg";
import factoryWide from "@/assets/images/hero/hero-factory.webp";

interface GalleryImage {
  id: string;
  src: string;
  caption: string;
  span?: string;
}

const galleryImages: GalleryImage[] = [
  { id: "g1", src: factoryWide, caption: "Manufacturing Plant Overview", span: "sm:col-span-2 sm:row-span-2" },
  { id: "g2", src: plantOverview, caption: "Production Facility" },
  { id: "g3", src: extrusionLine, caption: "Extrusion Line" },
  { id: "g4", src: shopFloor, caption: "Shop Floor Operations" },
  { id: "g5", src: batchTesting, caption: "Batch Quality Testing" },
  { id: "g6", src: finishedGoods, caption: "Finished Goods Handling" },
  { id: "g7", src: pipeStack, caption: "Conduit Pipe Stacking" },
  { id: "g8", src: allProducts, caption: "Complete Product Range" },
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <section className="relative isolate overflow-hidden border-y border-slate-100 bg-[radial-gradient(circle_at_8%_14%,rgba(124,198,240,0.13),transparent_24%),radial-gradient(circle_at_92%_82%,rgba(11,79,158,0.08),transparent_26%),#FFFFFF] py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(11,79,158,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(11,79,158,0.55)_1px,transparent_1px)] [background-size:76px_76px]" />
      <Container className="relative flex flex-col gap-14 [&_h2]:text-slate-950">
        <SectionHeading
          eyebrow="Inside PMT Plast"
          title="A Look Inside Our Manufacturing Facility"
          description="From resin extrusion to final dispatch, take a visual tour of the plants, processes, and people behind every PMT Plast conduit."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5 auto-rows-[160px] sm:auto-rows-[180px] lg:auto-rows-[200px]">
          {galleryImages.map((img, index) => (
            <motion.button
              key={img.id}
              type="button"
              onClick={() => setActiveImage(img)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-[32px] border border-white/90 bg-white shadow-[0_12px_32px_rgba(11,79,158,0.10),inset_0_1px_0_rgba(255,255,255,1)] transition-shadow duration-500 hover:shadow-[0_20px_48px_rgba(11,79,158,0.18)] cursor-pointer ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-[#0B4F9E]/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs sm:text-sm font-semibold text-white leading-tight">
                  {img.caption}
                </span>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                  <Expand className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-6"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage.src}
                alt={activeImage.caption}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-white">{activeImage.caption}</span>
                <button
                  onClick={() => setActiveImage(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
