import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white py-24 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Trusted by Engineers, Consultants & Developers"
          description="Feedback from the procurement and engineering teams who specify PMT Plast systems on their projects."
        />

        <div className="relative mx-auto w-full max-w-3xl">
          <div className="rounded-[32px] border border-line bg-surface p-10 shadow-industrial-lg lg:p-14">
            <Quote className="h-10 w-10 text-accent/30" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <p className="mt-6 text-lg leading-relaxed text-slate-700 md:text-xl">"{active.quote}"</p>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-primary">{active.name}</p>
                    <p className="text-sm text-slate-500">
                      {active.designation}, {active.company}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < active.rating ? "fill-accent text-accent" : "fill-slate-200 text-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white shadow-industrial transition-colors hover:border-accent hover:text-accent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-accent" : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white shadow-industrial transition-colors hover:border-accent hover:text-accent"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
