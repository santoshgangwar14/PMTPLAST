import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/content";

const Statistics = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      <div className="absolute inset-0 bg-blueprint opacity-[0.05]" />
      <Container className="relative grid grid-cols-2 gap-10 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left"
          >
            <stat.icon className="h-7 w-7 text-accent-light" />
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              className="font-display text-4xl font-bold text-white lg:text-5xl"
            />
            <span className="text-sm font-medium text-slate-300">{stat.label}</span>
          </motion.div>
        ))}
      </Container>
    </section>
  );
};

export default Statistics;
