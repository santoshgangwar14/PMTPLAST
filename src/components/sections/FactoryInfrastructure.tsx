import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerGroup, { staggerItem } from "@/components/ui/StaggerGroup";
import { infrastructure } from "@/data/content";
import factoryImage from "@/assets/images/hero/factory2.webp";

const FactoryInfrastructure = () => {
  return (
    <section className="bg-white py-28 lg:py-40">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Factory Infrastructure"
            align="left"
            title="Manufacturing Capability Built for Scale"
            description="State-of-the-art production facilities equipped with automated extrusion, molding and material handling systems, engineered for consistent, high-volume output."
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="overflow-hidden rounded-[28px] border border-line shadow-industrial"
          >
            <img src={factoryImage} alt="PMT Plast manufacturing facility" className="w-full object-cover" />
          </motion.div>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {infrastructure.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="flex flex-col gap-3 rounded-[24px] border border-line bg-surface p-7 shadow-industrial transition-shadow duration-500 hover:shadow-industrial-lg"
            >
              <item.icon className="h-6 w-6 text-accent" />
              <span className="font-display text-2xl font-bold text-primary">{item.value}</span>
              <span className="text-sm font-semibold text-slate-700">{item.title}</span>
              <p className="text-xs leading-relaxed text-slate-500">{item.description}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
};

export default FactoryInfrastructure;
