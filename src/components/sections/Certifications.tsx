import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerGroup, { staggerItem } from "@/components/ui/StaggerGroup";
import { certifications } from "@/data/content";

const Certifications = () => {
  return (
    <section id="certifications" className="bg-white py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Certifications & Standards"
          title="Compliance You Can Specify With Confidence"
          description="Every product line is manufactured and tested against recognized national and international standards, backed by full documentation for project submittals."
        />

        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="flex items-start gap-5 rounded-[24px] border border-line bg-surface p-7 shadow-industrial transition-shadow duration-500 hover:shadow-industrial-lg"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                <Award className="h-6 w-6 text-accent-light" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">{cert.code}</span>
                <h3 className="mt-1 text-base font-bold text-primary">{cert.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
};

export default Certifications;
