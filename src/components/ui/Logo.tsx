import logoDark from "@/assets/brand/logo-dark.png";
import logoLight from "@/assets/brand/logo-light.png";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
  const logo = variant === "light" ? logoLight : logoDark;

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative group">
        <img
          src={logo}
          alt="PMT Plast Logo"
          className="h-12 w-auto object-contain transition-all duration-300"
          style={{
            filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
          }}
        />
        
        {/* Glossy Red Overlay Effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
        />
      </div>
    </div>
  );
};

export default Logo;