import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  eyebrowColorClass?: string;
  descriptionColorClass?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  eyebrowColorClass,
  descriptionColorClass,
}: SectionHeadingProps) => {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 max-w-2xl ${alignment}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-3"
      >
        <span className="h-px w-8 bg-accent" />
        <span
          className={`text-xs font-semibold tracking-[0.2em] uppercase ${
            eyebrowColorClass ?? (light ? "text-accent-light" : "text-accent")
          }`}
        >
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-accent" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] text-balance ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className={`text-base md:text-lg leading-relaxed ${
            descriptionColorClass ?? (light ? "text-slate-300" : "text-slate-600")
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
