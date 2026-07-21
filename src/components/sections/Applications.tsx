import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerGroup, { staggerItem } from "@/components/ui/StaggerGroup";
import { applications } from "@/data/content";

const Applications = () => {
  return (
    <section id="applications" className="bg-surface py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Applications"
          title="Specified Across Every Major Infrastructure Sector"
          description="From high-rise residential towers to metro rail networks, PMT Plast conduit systems are engineered to perform across diverse installation environments."
        />

        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((sector) => (
            <motion.div
              key={sector.id}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="flex flex-col gap-4 rounded-[28px] border border-line bg-white p-8 shadow-industrial transition-shadow duration-500 hover:shadow-industrial-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                <sector.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary">{sector.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{sector.description}</p>
              <ul className="mt-2 flex flex-col gap-2 border-t border-line pt-4">
                {sector.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
};

export default Applications;
