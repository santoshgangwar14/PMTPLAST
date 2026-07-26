// src/components/products/ProductStickyNav.tsx

import { useEffect, useState } from "react";

const navItems = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "series",
    label: "Series",
  },
  {
    id: "sizes",
    label: "Sizes",
  },
  {
    id: "features",
    label: "Features",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "specifications",
    label: "Specifications",
  },
  {
    id: "gallery",
    label: "Gallery",
  },
  {
    id: "related",
    label: "Related",
  },
];

export default function ProductStickyNav() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section className="sticky top-20 z-40 border-y border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-center overflow-x-auto px-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative whitespace-nowrap px-6 py-5 text-sm font-semibold transition-all duration-300

            ${
              active === item.id
                ? "text-[#0B4F9E]"
                : "text-slate-500 hover:text-[#0B4F9E]"
            }`}
          >
            {item.label}

            {active === item.id && (
              <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#0B4F9E]" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}