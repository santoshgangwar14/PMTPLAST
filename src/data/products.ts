import type { Product } from "@/types";
import heavyGaugeConduit from "@/assets/images/products/PVC CONDUIT PIPE/pvc-pipe-hero.webp";
import frlsConduit from "@/assets/images/products/PVC CONDUIT PIPE/pvc-pipe-colored-front.webp";
import corrugatedPipe from "@/assets/images/gallery/pmt-pipes-stack.jpg";
import junctionBox from "@/assets/images/products/CONDUIT FITTING & ACCESSORIES/junction-box.webp";
import bendsCouplers from "@/assets/images/products/PVC BEND/bends.webp";
import industrialCasing from "@/assets/images/products/PVC CASING & CAPPING/CASING&capping.webp";

export const products: Product[] = [
  {
    id: "p1",
    slug: "heavy-gauge-pvc-conduit",
    name: "Heavy Gauge PVC Conduit",
    category: "Rigid Conduit Systems",
    image: heavyGaugeConduit,
    shortDescription:
      "High-impact rigid PVC conduit engineered for concealed and surface wiring in commercial and industrial installations.",
    applications: [
      "Concealed wiring in RCC structures",
      "Industrial plant electrification",
      "Commercial high-rise buildings",
      "Metro rail and infrastructure projects",
    ],
    specifications: [
      { label: "Size Range", value: "20 mm to 50 mm" },
      { label: "Wall Thickness", value: "1.8 mm - 3.0 mm" },
      { label: "Standard Length", value: "3 meters" },
      { label: "Compression Strength", value: "1250 N" },
      { label: "Operating Temperature", value: "-5°C to 60°C" },
    ],
    keyFeatures: [
      "Heavy wall construction for superior crush resistance",
      "Smooth bore interior for effortless cable pulling",
      "UV-stabilized compound for long service life",
      "Threaded and plain end variants available",
    ],
    standards: ["IS 9537 (Part 3)", "ISI Certified"],
  },
  {
    id: "p2",
    slug: "frls-conduit",
    name: "FRLS Conduit Pipes",
    category: "Fire Retardant Systems",
    image: frlsConduit,
    shortDescription:
      "Flame Retardant Low Smoke conduits formulated to restrict fire propagation and limit toxic smoke emission.",
    applications: [
      "Hospitals and healthcare facilities",
      "Data centers and server rooms",
      "Airports and public transit hubs",
      "High-occupancy commercial complexes",
    ],
    specifications: [
      { label: "Size Range", value: "20 mm to 50 mm" },
      { label: "Oxygen Index", value: "≥ 29 (LOI)" },
      { label: "Smoke Density", value: "Low (as per IS 10810)" },
      { label: "Halogen Content", value: "< 2%" },
      { label: "Standard Length", value: "3 meters" },
    ],
    keyFeatures: [
      "Self-extinguishing compound formulation",
      "Low smoke density for safe evacuation",
      "Reduced halogen and corrosive gas emission",
      "Ideal for life-safety critical infrastructure",
    ],
    standards: ["IS 9537 (Part 3)", "IS 10810", "ISI Certified"],
  },
  {
    id: "p3",
    slug: "corrugated-pipe",
    name: "Corrugated HDPE Pipes",
    category: "Flexible Conduit Systems",
    image: corrugatedPipe,
    shortDescription:
      "Double-wall corrugated flexible conduits designed for underground cable protection and duct banks.",
    applications: [
      "Underground power cable ducting",
      "Telecom and fiber-optic cable routing",
      "Solar power plant cable management",
      "Railway signalling cable protection",
    ],
    specifications: [
      { label: "Size Range", value: "40 mm to 160 mm" },
      { label: "Construction", value: "Double-wall corrugated" },
      { label: "Crush Strength", value: "≥ 750 N (SN8 rating)" },
      { label: "Coil Length", value: "50 / 100 meters" },
      { label: "Color", value: "Orange / Black striped" },
    ],
    keyFeatures: [
      "High ring stiffness for underground load-bearing",
      "Corrosion-resistant, non-conductive material",
      "Flexible coiled form for faster installation",
      "Integrated pull-cord option available",
    ],
    standards: ["IS 14930 (Part 2)", "EN 61386-24"],
  },
  {
    id: "p4",
    slug: "junction-box",
    name: "Modular Junction Boxes",
    category: "Wiring Accessories",
    image: junctionBox,
    shortDescription:
      "Precision-molded junction and switch boxes providing secure, dust-resistant termination points.",
    applications: [
      "Concealed conduit wiring systems",
      "Industrial control panel wiring",
      "Commercial office fit-outs",
      "Residential electrification",
    ],
    specifications: [
      { label: "Sizes", value: "1M, 2M, 3M, 4M, 8M" },
      { label: "Depth Options", value: "40 mm / 60 mm" },
      { label: "Knockouts", value: "Pre-marked, multi-directional" },
      { label: "IP Rating", value: "IP 42 (indoor)" },
    ],
    keyFeatures: [
      "Reinforced screw bosses for secure mounting",
      "Flame-retardant PVC construction",
      "Precision-aligned knockouts for clean entry",
      "Compatible with modular switch plates",
    ],
    standards: ["IS 5133 (Part 3)"],
  },
  {
    id: "p5",
    slug: "bends-couplers",
    name: "Bends & Couplers",
    category: "Fittings & Accessories",
    image: bendsCouplers,
    shortDescription:
      "Precision-engineered bends, couplers and adaptors ensuring leak-tight, continuous conduit runs.",
    applications: [
      "Directional changes in conduit runs",
      "Joining conduit lengths in long installations",
      "Panel and enclosure entries",
      "Industrial cable management systems",
    ],
    specifications: [
      { label: "Size Range", value: "20 mm to 50 mm" },
      { label: "Bend Angles", value: "45° / 90° / Inspection type" },
      { label: "Fit Type", value: "Solvent cement / Push-fit" },
      { label: "Material", value: "Rigid uPVC" },
    ],
    keyFeatures: [
      "Consistent wall thickness for uniform strength",
      "Smooth internal radius to prevent cable damage",
      "Tight tolerance fittings for secure jointing",
      "Wide compatibility with standard conduit sizes",
    ],
    standards: ["IS 9537 (Part 3)"],
  },
  {
    id: "p6",
    slug: "industrial-casing",
    name: "Casing & Capping / Accessories",
    category: "Surface Wiring Systems",
    image: industrialCasing,
    shortDescription:
      "PVC casing-capping channels and conduit accessories for organized surface-mounted electrical wiring.",
    applications: [
      "Retrofit and renovation wiring",
      "Industrial shop-floor cable routing",
      "Warehouse and godown electrification",
      "Commercial retail fit-outs",
    ],
    specifications: [
      { label: "Sizes", value: "12x10 mm to 50x25 mm" },
      { label: "Length", value: "2 meters" },
      { label: "Material", value: "Virgin PVC compound" },
      { label: "Finish", value: "Matte / Textured" },
    ],
    keyFeatures: [
      "Snap-fit cover for tool-free access",
      "Impact and weather-resistant compound",
      "Clean, low-profile industrial aesthetic",
      "Complete range of end accessories available",
    ],
    standards: ["IS 14927"],
  },
];
