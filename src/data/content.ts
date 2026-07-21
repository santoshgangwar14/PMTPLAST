import {
  Factory,
  ShieldCheck,
  Truck,
  Users,
  Cog,
  FlaskConical,
  PackageCheck,
  Boxes,
  Building2,
  Zap,
  TrainFront,
  Sun,
  Warehouse,
  Landmark,
  Award,
  BadgeCheck,
  Microscope,
  Gauge,
  Flame,
  Ruler,
  Layers,
  Recycle,
  Clock,
  MapPin,
} from "lucide-react";
import type {
  StatItem,
  ProcessStep,
  Certification,
  Testimonial,
  FAQItem,
  ClientLogo,
  ApplicationSector,
  ValueProp,
  InfrastructureItem,
  QualityCheck,
} from "@/types";

export const stats: StatItem[] = [
  { id: "s1", value: 500, suffix: "+", label: "Crore Group Turnover", icon: Landmark },
  { id: "s2", value: 12, suffix: "", label: "Manufacturing Plants", icon: Factory },
  { id: "s3", value: 4500, suffix: "+", label: "Channel Partners", icon: Users },
  { id: "s4", value: 35, suffix: "+", label: "Years of Engineering Excellence", icon: Award },
];

export const valueProps: ValueProp[] = [
  {
    id: "v1",
    title: "Engineered Compound Formulation",
    description:
      "Proprietary PVC compounds developed in-house for superior impact strength, UV resistance and thermal stability across climatic zones.",
    icon: FlaskConical,
  },
  {
    id: "v2",
    title: "Precision Extrusion Technology",
    description:
      "German and Austrian extrusion lines maintaining wall-thickness tolerances tighter than IS specification requirements.",
    icon: Cog,
  },
  {
    id: "v3",
    title: "Nationwide Distribution Network",
    description:
      "Strategically located warehouses and 4,500+ authorized dealers ensuring on-time delivery across every state.",
    icon: Truck,
  },
  {
    id: "v4",
    title: "100% Quality Assurance",
    description:
      "Every production batch tested across dimensional, mechanical and electrical parameters before dispatch clearance.",
    icon: ShieldCheck,
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "pr1",
    step: "01",
    title: "Raw Material Sourcing",
    description:
      "Virgin PVC resin and specialty additives procured from certified global suppliers with full batch traceability.",
    icon: Boxes,
  },
  {
    id: "pr2",
    step: "02",
    title: "Compound Formulation",
    description:
      "In-house R&D formulates compounds calibrated for impact strength, flame retardance and long-term weatherability.",
    icon: FlaskConical,
  },
  {
    id: "pr3",
    step: "03",
    title: "Precision Extrusion",
    description:
      "High-tonnage extrusion lines shape conduits to exact dimensional tolerances under continuous process monitoring.",
    icon: Cog,
  },
  {
    id: "pr4",
    step: "04",
    title: "In-Line Quality Testing",
    description:
      "Automated sensors verify wall thickness, ovality and surface finish in real time during production.",
    icon: Gauge,
  },
  {
    id: "pr5",
    step: "05",
    title: "Batch Laboratory Testing",
    description:
      "Samples from every batch undergo mechanical, thermal and electrical testing in our NABL-oriented QC laboratory.",
    icon: Microscope,
  },
  {
    id: "pr6",
    step: "06",
    title: "Packaging & Dispatch",
    description:
      "Bundled, labelled and palletized for damage-free transit through our pan-India logistics network.",
    icon: PackageCheck,
  },
];

export const applications: ApplicationSector[] = [
  {
    id: "a1",
    title: "Residential & Commercial Construction",
    description:
      "Concealed and surface conduit systems specified by architects and MEP consultants for durability and code compliance.",
    icon: Building2,
    points: ["RCC slab concealment", "Modular switchboard wiring", "Township electrification"],
  },
  {
    id: "a2",
    title: "Industrial & Power Infrastructure",
    description:
      "Rugged conduit and ducting systems built to withstand demanding industrial and power-plant environments.",
    icon: Zap,
    points: ["Cable tray transitions", "Switchyard wiring", "Process plant electrification"],
  },
  {
    id: "a3",
    title: "Railways & Metro Infrastructure",
    description:
      "Fire-safe and impact-resistant systems engineered for signalling and station electrification projects.",
    icon: TrainFront,
    points: ["Signal cable protection", "Station electrification", "Platform lighting circuits"],
  },
  {
    id: "a4",
    title: "Renewable Energy Projects",
    description:
      "UV-stable flexible conduits for outdoor solar farm cable management with decades-long durability.",
    icon: Sun,
    points: ["Solar array cable ducting", "Inverter room wiring", "Ground-mounted installations"],
  },
  {
    id: "a5",
    title: "Warehousing & Logistics Parks",
    description:
      "High-volume surface wiring systems for large-format industrial sheds and distribution centers.",
    icon: Warehouse,
    points: ["Overhead lighting circuits", "Rack-area power distribution", "Fire-safe wiring"],
  },
  {
    id: "a6",
    title: "Institutional & Public Infrastructure",
    description:
      "Fire-retardant systems specified for hospitals, airports and other high-occupancy public buildings.",
    icon: Landmark,
    points: ["Hospital-grade FRLS wiring", "Airport terminal electrification", "Public safety compliance"],
  },
];

export const infrastructure: InfrastructureItem[] = [
  {
    id: "i1",
    title: "Manufacturing Floor Area",
    value: "4,80,000+ sq.ft.",
    description: "Spread across multiple production units with dedicated extrusion, molding and QC zones.",
    icon: Factory,
  },
  {
    id: "i2",
    title: "Extrusion Lines",
    value: "42 High-Tonnage Lines",
    description: "Precision German and Austrian machinery running continuous multi-shift operations.",
    icon: Cog,
  },
  {
    id: "i3",
    title: "Injection Molding Units",
    value: "60+ Molding Presses",
    description: "Dedicated capacity for junction boxes, fittings and accessory components.",
    icon: Layers,
  },
  {
    id: "i4",
    title: "Annual Production Capacity",
    value: "85,000+ MT",
    description: "Scalable output capacity supporting large infrastructure and EPC project timelines.",
    icon: Ruler,
  },
  {
    id: "i5",
    title: "Material Recovery",
    value: "98% Process Efficiency",
    description: "Closed-loop regrind systems minimizing material wastage across the production cycle.",
    icon: Recycle,
  },
  {
    id: "i6",
    title: "Operational Uptime",
    value: "24x7 Multi-Shift",
    description: "Continuous manufacturing operations ensuring consistent supply against order commitments.",
    icon: Clock,
  },
];

export const qualityChecks: QualityCheck[] = [
  {
    id: "q1",
    title: "Dimensional Accuracy Testing",
    description: "Laser-based measurement of outer diameter, wall thickness and ovality on every production batch.",
    icon: Ruler,
  },
  {
    id: "q2",
    title: "Impact & Compression Testing",
    description: "Falling-weight impact and crush resistance tests conducted per IS 9537 methodology.",
    icon: Gauge,
  },
  {
    id: "q3",
    title: "Flammability & Smoke Density",
    description: "Oxygen index and smoke density testing performed on all FRLS product lines.",
    icon: Flame,
  },
  {
    id: "q4",
    title: "Material Composition Verification",
    description: "Spectroscopic analysis confirms compound consistency against approved formulations.",
    icon: FlaskConical,
  },
];

export const certifications: Certification[] = [
  {
    id: "c1",
    code: "ISI",
    title: "ISI Mark Certified",
    description: "Products certified under Bureau of Indian Standards licensing for conduit systems.",
  },
  {
    id: "c2",
    code: "ISO 9001:2015",
    title: "Quality Management System",
    description: "Certified processes across design, manufacturing and quality control functions.",
  },
  {
    id: "c3",
    code: "ISO 14001:2015",
    title: "Environmental Management",
    description: "Certified environmental management practices across all manufacturing units.",
  },
  {
    id: "c4",
    code: "IS 9537",
    title: "Rigid Conduit Standard",
    description: "Full compliance with rigid PVC conduit specifications for electrical installations.",
  },
  {
    id: "c5",
    code: "IS 5133",
    title: "Accessories Standard",
    description: "Junction box and wiring accessory compliance for conduit system installations.",
  },
  {
    id: "c6",
    code: "RoHS",
    title: "Restriction of Hazardous Substances",
    description: "Compounds formulated in compliance with international hazardous substance restrictions.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rajeev Malhotra",
    designation: "Chief Procurement Officer",
    company: "Meridian Infra Developers Ltd.",
    quote:
      "PMT Plast's conduit systems have been specified across three of our residential townships. Consistent wall thickness and reliable batch documentation have made procurement audits significantly easier.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Anita Deshpande",
    designation: "Principal MEP Consultant",
    company: "Deshpande & Associates",
    quote:
      "We specify PMT Plast FRLS conduits on every hospital project. The smoke density performance and documentation support from their technical team gives us confidence at every design review.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Suresh Iyer",
    designation: "Head of Electrical Contracts",
    company: "Iyer Electricals Pvt. Ltd.",
    quote:
      "Site teams consistently report faster installation with PMT Plast's smooth-bore conduits. Dispatch reliability across our project sites has improved our overall execution timelines.",
    rating: 4,
  },
  {
    id: "t4",
    name: "Kavita Nair",
    designation: "Director of Operations",
    company: "Nair Buildcon Solutions",
    quote:
      "Their junction box tolerances and consistent knockout alignment have reduced rework on our commercial fit-out projects considerably. A dependable manufacturing partner.",
    rating: 5,
  },
];

export const faqs: FAQItem[] = [
  {
    id: "f1",
    question: "What certifications do PMT Plast conduit systems carry?",
    answer:
      "All rigid PVC conduits carry the ISI mark under IS 9537 (Part 3), while FRLS variants additionally comply with IS 10810 for flammability and smoke density. Our manufacturing units are ISO 9001:2015 and ISO 14001:2015 certified.",
  },
  {
    id: "f2",
    question: "What is the difference between standard and FRLS conduits?",
    answer:
      "FRLS (Flame Retardant Low Smoke) conduits use a specially formulated compound that self-extinguishes, emits significantly lower smoke density and reduced halogen content compared to standard PVC conduits, making them suitable for hospitals, data centers and high-occupancy buildings.",
  },
  {
    id: "f3",
    question: "What sizes and lengths are available for rigid conduits?",
    answer:
      "Rigid PVC conduits are available from 20 mm to 50 mm in diameter with wall thicknesses of 1.8 mm to 3.0 mm, supplied in standard 3-meter lengths. Custom lengths can be arranged for large infrastructure projects.",
  },
  {
    id: "f4",
    question: "Do you provide technical documentation for project submittals?",
    answer:
      "Yes. Our technical team provides test certificates, batch traceability documentation, material data sheets and compliance certificates required for MEP consultant approvals and project submittals.",
  },
  {
    id: "f5",
    question: "What is your typical order lead time for large infrastructure projects?",
    answer:
      "Standard catalog items are dispatched from regional warehouses within 3-5 working days. Bulk infrastructure and EPC project orders are scheduled against production planning, typically 2-4 weeks depending on volume and specification.",
  },
  {
    id: "f6",
    question: "How can I become an authorized PMT Plast dealer?",
    answer:
      "We welcome partnership enquiries from established electrical and building material distributors. Please reach out through our dealership enquiry channel and our regional sales team will initiate the onboarding process.",
  },
];

export const clients: ClientLogo[] = [
  { id: "cl1", name: "Meridian Infra Developers" },
  { id: "cl2", name: "Deshpande & Associates" },
  { id: "cl3", name: "Iyer Electricals" },
  { id: "cl4", name: "Nair Buildcon Solutions" },
  { id: "cl5", name: "Rashtriya Ispat Nigam" },
  { id: "cl6", name: "Konkan Railway Corp" },
  { id: "cl7", name: "Suvidha Logistics Parks" },
  { id: "cl8", name: "Vindhya Solar Energy" },
];

export const badges = { BadgeCheck, MapPin };
