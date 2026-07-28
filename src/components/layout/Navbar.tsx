import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";
import {
  NAVBAR_HEIGHT,
  NAVBAR_HEIGHT_CSS_VAR,
} from "@/lib/layout";

const productLinks = [
  {
    label: "PVC Conduit Pipe",
    href: "#products/conduit",
  },
  {
    label: "PVC Bend",
    href: "#products/bend",
  },
  {
    label: "Conduit Fittings & Accessories",
    href: "#products/fittings",
  },
  {
    label: "PVC Casing & Capping",
    href: "#products/casing",
  },
];

const Navbar = () => {
  const headerRef = useRef<HTMLElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] =
    useState(false);

  const [activeHash, setActiveHash] = useState(
    window.location.hash || "#home"
  );

  useLayoutEffect(() => {
    const syncHeight = () => {
      const height =
        headerRef.current?.offsetHeight ??
        NAVBAR_HEIGHT;

      document.documentElement.style.setProperty(
        NAVBAR_HEIGHT_CSS_VAR,
        `${height}px`
      );
    };

    syncHeight();

    const resizeObserver =
      new ResizeObserver(syncHeight);

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    window.addEventListener(
      "resize",
      syncHeight
    );

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener(
        "resize",
        syncHeight
      );
    };
  }, []);

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > 10);

    const handleHash = () => {
      setActiveHash(
        window.location.hash || "#home"
      );

      setMobileOpen(false);
      setProductOpen(false);
      setMobileProductOpen(false);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    window.addEventListener(
      "hashchange",
      handleHash
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "hashchange",
        handleHash
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>

<header
  ref={headerRef}
  className={`fixed inset-x-0 z-50 transition-all duration-500 ${
  scrolled
  ? "bg-gradient-to-r from-[#6BB9F0]/95 via-[#3E8EDB]/95 to-[#D85C5C]/95 border-b border-white/15 shadow-[0_12px_30px_rgba(0,0,0,.12)] backdrop-blur-xl"
  : "bg-gradient-to-r from-[#8CCCF5]/95 via-[#58A7E8]/95 to-[#E97878]/95 border-b border-white/10 shadow-[0_8px_24px_rgba(0,0,0,.08)] backdrop-blur-xl"
}`}
  style={{ height: NAVBAR_HEIGHT }}
>
  <Container className="h-full">
    <div
      className="
        flex
        h-full
        items-center
        justify-between
        px-6
  lg:px-8
  xl:px-10
      "
    >
      {/* Logo */}

      <a
        href="#home"
        className="flex shrink-0 items-center"
        aria-label="PMT Plast"
      >
        <Logo />
      </a>

      {/* Desktop Navigation */}

      <nav className="hidden items-center gap-8 lg:flex">
        {navLinks.map((item) => {
          const active =
            activeHash === item.href ||
            (item.href === "#products" &&
              activeHash.startsWith("#products"));

          if (item.href === "#products") {
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setProductOpen(true)}

                onMouseLeave={() => setProductOpen(false)}
              >
                <div className="flex items-center gap-2">

  <a
    href="#products"
    className={`group relative text-[15px] font-semibold transition-all duration-300 ${
      active
        ? "text-[#FFD700]"
        : "text-[#F4D35E] hover:text-[#FFD700]"
    }`}
  >
    Products
  </a>

  <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      setProductOpen(!productOpen);
    }}
    className="text-[#F4D35E] hover:text-[#FFD700]"
  >
    <ChevronDown
      size={16}
      className={`transition-transform duration-300 ${
        productOpen ? "rotate-180" : ""
      }`}
    />
  </button>

</div>

                <span
                  className={`absolute inset-x-0 -bottom-2 mx-auto h-[3px] w-full rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] transition-all duration-300 ${
                    active
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                />

                <AnimatePresence>
                  {productOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-14 w-[360px] overflow-hidden rounded-3xl border border-red-600/20 bg-gradient-to-br from-white via-[#FFFDF8] to-[#FFF4D6] shadow-[0_25px_60px_rgba(0,0,0,.18)]"
                    >
                      {productLinks.map((product) => (
                        <a
                          key={product.href}
                          href={product.href}
                          className="group flex items-center justify-between border-b border-amber-100 px-6 py-5 transition duration-300 hover:bg-gradient-to-r hover:from-[#0B4F9E] hover:to-[#1565C0] hover:text-white last:border-none"
                        >
                          <div className="flex items-center gap-4">
  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FF9800] group-hover:bg-white" />

  <span className="font-semibold">
    {product.label}
  </span>
</div>

                          <ChevronRight
  size={18}
  className="transition duration-300 group-hover:translate-x-1"
/>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          return (
            <a
              key={item.href}
              href={item.href}
              className={`group relative text-[15px] font-semibold transition-all duration-300 ${
                active
                  ? "text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                  : "text-[#F4D35E] hover:text-[#FFD700] hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]"
              }`}
            >
              {item.label}

              <span
                className={`absolute inset-x-0 -bottom-2 mx-auto h-[3px] w-full rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] transition-all duration-300 ${
                  active
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                }`}
              />
            </a>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}

      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100/70 bg-white/70 text-slate-700 shadow-sm backdrop-blur-xl transition hover:bg-blue-50"
        aria-label="Open Menu"
      >
        <Menu className="h-6 w-6" />
      </button>
    </div>
  </Container>
</header>

{/* Mobile Drawer */}

<AnimatePresence>
  {mobileOpen && (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[999] bg-white"
    >
      <Container>
        <div
          className="flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-xl"
          style={{ height: NAVBAR_HEIGHT }}
        >
          <Logo />

          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8 flex flex-col">
          {navLinks
            .filter((item) => item.href !== "#contact")
            .map((item) => {
              const active =
                activeHash === item.href ||
                (item.href === "#products" &&
                  activeHash.startsWith("#products"));

             if (item.href === "#products") {
  return (
    <div
      key={item.href}
      className="border-b border-slate-100"
    >
      <div className="flex items-center justify-between">

        <a
          href="#products"
          onClick={() => {
            setMobileOpen(false);
            setMobileProductOpen(false);
          }}
          className={`flex-1 px-4 py-5 text-lg font-semibold transition ${
            active
              ? "bg-blue-100/15 text-[#FFD700]"
              : "text-[#FFD700] hover:bg-blue-50"
          }`}
        >
          Products
        </a>

        <button
          type="button"
          onClick={() =>
            setMobileProductOpen(!mobileProductOpen)
          }
          className="px-5 py-5 text-[#FFD700]"
        >
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              mobileProductOpen ? "rotate-180" : ""
            }`}
          />
        </button>

      </div>

      <AnimatePresence>
        {mobileProductOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-slate-50"
          >
            {productLinks.map((product) => (
              <a
                key={product.href}
                href={product.href}
                onClick={() => {
                  setMobileOpen(false);
                  setMobileProductOpen(false);
                }}
                className="block border-t border-slate-200 px-10 py-4 text-base text-slate-700 transition hover:bg-[#0B4F9E] hover:text-white"
              >
                {product.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className={`border-b border-slate-100 px-4 py-5 text-lg font-semibold transition ${
                    active
                      ? "bg-blue-100/15 text-[#FFD700]"
                      : "text-[#FFD700] hover:bg-blue-50"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="border-b border-slate-100 px-4 py-5 text-lg font-semibold text-[#FFD700] transition hover:bg-blue-50"
          >
            Contact Us
          </a>
        </nav>
      </Container>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
};

export default Navbar;