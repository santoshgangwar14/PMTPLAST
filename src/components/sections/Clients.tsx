import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerGroup, { staggerItem } from "@/components/ui/StaggerGroup";
import { clients } from "@/data/content";

const Clients = () => {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Our Clients"
          title="Partnering With India's Leading Developers & Contractors"
          description="Our conduit systems are specified across residential, industrial and public infrastructure projects executed by respected names in construction and engineering."
        />

        <StaggerGroup className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="flex h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-white px-4 text-center shadow-industrial transition-shadow duration-300 hover:shadow-industrial-lg"
            >
              <Building2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold leading-tight text-primary">{client.name}</span>
            </motion.div>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
};

export default Clients;
