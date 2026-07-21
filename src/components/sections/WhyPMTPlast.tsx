import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerGroup, { staggerItem } from "@/components/ui/StaggerGroup";
import { valueProps } from "@/data/content";

const WhyPMTPlast = () => {
  return (
    <section id="why-us" className="bg-white py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Why PMT Plast"
          title="Engineering Standards That Set the Benchmark"
          description="Three and a half decades of manufacturing discipline, backed by in-house R&D and a nationwide distribution infrastructure built for scale."
        />

        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group flex flex-col gap-5 rounded-[28px] border border-line bg-surface p-8 shadow-industrial transition-shadow duration-500 hover:shadow-industrial-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white transition-colors duration-300 group-hover:bg-accent">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
};

export default WhyPMTPlast;
