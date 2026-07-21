import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { qualityChecks } from "@/data/content";

const QualityControl = () => {
  return (
    <section id="quality" className="bg-surface py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Quality Control"
          title="Tested at Every Stage, Certified for Every Application"
          description="Our in-house quality laboratory validates dimensional, mechanical, thermal and electrical performance parameters before every batch clears for dispatch."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {qualityChecks.map((check, index) => (
            <motion.div
              key={check.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative flex flex-col gap-4 overflow-hidden rounded-[28px] border border-line bg-white p-8 shadow-industrial transition-shadow duration-500 hover:shadow-industrial-lg"
            >
              <span className="absolute -right-3 -top-3 font-display text-6xl font-bold text-primary/[0.04]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <check.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-primary">{check.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{check.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default QualityControl;
