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
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  return (
    <div className={`flex flex-col gap-6 max-w-4xl mb-16 ${alignment}`}>
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4"
      >
        <span className="h-[3px] w-14 rounded-full bg-gradient-to-r from-[#8B0000] via-[#C62828] to-[#0B4F9E]" />

        <span
          className={`text-sm font-black uppercase tracking-[0.32em] ${
            eyebrowColorClass ??
            (light ? "text-[#FFD166]" : "text-[#8B0000]")
          }`}
        >
          {eyebrow}
        </span>

        <span className="h-[3px] w-14 rounded-full bg-gradient-to-r from-[#0B4F9E] via-[#2563EB] to-[#8B0000]" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className={`text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight ${
          light ? "text-white" : "text-[#0B4F9E]"
        }`}
        style={{
          textShadow: light
            ? "0 8px 30px rgba(255,255,255,.10)"
            : "0 8px 30px rgba(11,79,158,.15)",
        }}
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className={`max-w-3xl text-lg leading-9 ${
            descriptionColorClass ??
            (light ? "text-slate-300" : "text-slate-600")
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;