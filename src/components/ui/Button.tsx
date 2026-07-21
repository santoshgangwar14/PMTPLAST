import { useState, type MouseEvent, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-light";
type ButtonSize = "md" | "lg";

interface RippleCircle {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: boolean;
  className?: string;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-light shadow-accent",
  secondary: "bg-primary text-white hover:bg-primary-light",
  ghost: "bg-transparent text-primary border border-line hover:border-primary",
  "outline-light": "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  onClick,
  ...rest
}: ButtonProps) => {
  const [ripples, setRipples] = useState<RippleCircle[]>([]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y, size }]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);

    onClick?.(event);
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={handleClick}
      className={`relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-wide transition-colors duration-300 ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`}
      {...rest}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute rounded-full bg-white/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            animation: "ripple-anim 650ms ease-out forwards",
          }}
        />
      ))}
      <style>{`
        @keyframes ripple-anim {
          from { transform: scale(0); opacity: 0.6; }
          to { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </motion.button>
  );
};

export default Button;
