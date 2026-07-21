import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_CSS_VAR } from "@/lib/layout";

const Navbar = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(
    window.location.hash || "#home"
  );

  // NAVBAR HEIGHT — SINGLE SOURCE OF TRUTH
  // ---------------------------------------------------------------------
  // The navbar is the only component that knows its own real, rendered
  // height. Instead of every page/section guessing that number in Tailwind
  // classes (pt-24, pt-28, pt-32, calc(100vh-72px) ...), we measure it here
  // and publish it once as the `--navbar-height` CSS variable on the
  // document root. Every consumer (App.tsx's layout, page heroes, etc.)
  // reads that same variable, so they can never drift out of sync with the
  // navbar again — even if its height changes later (responsive tweaks,
  // an announcement bar, font-size changes, etc.).
  useLayoutEffect(() => {
    const syncHeight = () => {
      const height = headerRef.current?.offsetHeight ?? NAVBAR_HEIGHT;
      document.documentElement.style.setProperty(
        NAVBAR_HEIGHT_CSS_VAR,
        `${height}px`
      );
    };

    syncHeight();

    const resizeObserver = new ResizeObserver(syncHeight);
    if (headerRef.current) resizeObserver.observe(headerRef.current);

    window.addEventListener("resize", syncHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    const handleHash = () => {
      setActiveHash(window.location.hash || "#home");
      setMobileOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b border-slate-200"
            : "bg-white border-b border-slate-100"
        }`}
        style={{ height: NAVBAR_HEIGHT }}
      >
        <Container className="h-full">
          <div className="flex h-full items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              className="flex items-center shrink-0"
              aria-label="PMT Plast"
            >
              <Logo />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => {
                const active = activeHash === item.href;
                const isContact = item.href === "#contact";

                if (isContact) {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="btn-primary inline-flex items-center rounded-full px-6 py-2.5 text-[15px] font-bold text-white"
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative text-[15px] font-semibold transition-all duration-200 ${
                      active
                        ? "text-[#0B4F9E]"
                        : "text-slate-700 hover:text-[#0B4F9E]"
                    }`}
                  >
                    {item.label}

                    {active && (
                      <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-gradient-to-r from-[#0B4F9E] to-[#C9992E] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden h-11 w-11 rounded-lg border border-slate-200 flex items-center justify-center"
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
            className="fixed inset-0 bg-white z-[999]"
          >
            <Container>

              <div
                className="flex items-center justify-between"
                style={{ height: NAVBAR_HEIGHT }}
              >

                <Logo />

                <button
                  onClick={() => setMobileOpen(false)}
                  className="h-11 w-11 rounded-lg border border-slate-200 flex items-center justify-center"
                >
                  <X className="h-6 w-6" />
                </button>

              </div>

              <nav className="mt-8 flex flex-col">

                {navLinks.filter((item) => item.href !== "#contact").map((item) => {

                  const active = activeHash === item.href;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`py-5 border-b border-slate-100 text-lg font-semibold ${
                        active
                          ? "text-[#0B4F9E]"
                          : "text-slate-800"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}

                <Button
                  className="btn-primary mt-8"
                  onClick={() => {
                    window.location.href = "#contact";
                    setMobileOpen(false);
                  }}
                >
                  Contact Us
                </Button>

              </nav>

            </Container>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;