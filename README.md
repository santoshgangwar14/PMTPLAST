# PMT Plast — Corporate Manufacturing Website

React 19 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion 12 + Lucide React.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build (outputs to /dist)
npm run preview   # preview production build
```

## Structure

```
src/
  assets/images/products/   PNG product renders (locally generated placeholders — swap with real product photography)
  components/
    layout/                 Navbar, Footer
    sections/                Hero, TrustBar, ProductCategories, WhyPMTPlast,
                             ManufacturingProcess, Applications, FactoryInfrastructure,
                             QualityControl, Certifications, Statistics, Clients,
                             Testimonials, FAQ, CTA
    ui/                     Reusable primitives: Button, Container, SectionHeading,
                             ProductCard, Accordion, AnimatedCounter, Reveal, StaggerGroup, Logo
  data/                     Typed content: products.ts, content.ts, navigation.ts
  types/                    Shared TypeScript interfaces
```

## Notes

- All product imagery in `src/assets/images/products/` is generated locally as placeholder
  PNG renders (no external/stock imagery used anywhere). Replace these files with real
  product photography — filenames are already referenced correctly throughout the app.
- Color tokens, fonts and shadows are defined in `src/index.css` under Tailwind v4's `@theme`.
- Fully typed, component-driven architecture — no inline styles, no magic numbers.
