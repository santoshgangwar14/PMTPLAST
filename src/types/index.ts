import type { LucideIcon } from "lucide-react";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
  applications: string[];
  specifications: { label: string; value: string }[];
  keyFeatures: string[];
  standards: string[];
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Certification {
  id: string;
  code: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ClientLogo {
  id: string;
  name: string;
}

export interface ApplicationSector {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface InfrastructureItem {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export interface QualityCheck {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavLink {
  label: string;
  href: string;
}
