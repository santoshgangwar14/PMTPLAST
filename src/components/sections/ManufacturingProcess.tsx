import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/content";

const ManufacturingProcess = () => {
  return (
    <section id="process" className="relative overflow-hidden bg-primary py-28 lg:py-40">
      <div className="absolute inset-0 bg-blueprint opacity-[0.05]" />
      <Container className="relative flex flex-col gap-16">
        <SectionHeading
          eyebrow="Manufacturing Process"
          light
          align="center"
          title="From Raw Resin to Infrastructure-Grade Conduit"
          description="A six-stage engineered process governed by continuous quality checkpoints, ensuring every meter of conduit meets specification before it leaves our plants."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm"
            >
              <span className="font-display text-4xl font-bold text-white/10">{step.step}</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ManufacturingProcess;
