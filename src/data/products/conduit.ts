// src/data/products/conduit.ts



// src/data/products/conduit.ts

// Hero
import heroImage from "@/assets/images/products/PVC CONDUIT PIPE/pvc-pipe-hero.webp";

// Feature Images (Gallery)
import feature1 from "@/assets/images/gallery/PVC CONDUIT PIPE/pvc-pipe-hero.webp";
import feature2 from "@/assets/images/gallery/PVC CONDUIT PIPE/pvc-pipe-colored-front.webp";
import feature3 from "@/assets/images/gallery/PVC CONDUIT PIPE/pvc-pipe-colored-stack.webp";
import feature4 from "@/assets/images/gallery/PVC CONDUIT PIPE/pvc-pipe-real.webp";

// Gallery Images
import gallery1 from "@/assets/images/gallery/PVC CONDUIT PIPE/pvc-pipe-hero.webp";
import gallery2 from "@/assets/images/gallery/PVC CONDUIT PIPE/pvc-pipe-colored-front.webp";
import gallery3 from "@/assets/images/gallery/PVC CONDUIT PIPE/pvc-pipe-colored-stack.webp";
import gallery4 from "@/assets/images/gallery/PVC CONDUIT PIPE/pvc-pipe-real.webp";
import gallery5 from "@/assets/images/gallery/PVC CONDUIT PIPE/pvc-pipe-triple.webp";
import gallery6 from "@/assets/images/gallery/PVC CONDUIT PIPE/pvc-pipe-colored-front.webp";

export const conduitProduct = {
  slug: "pvc-conduit-pipe",

  name: "PVC Conduit Pipe",

  shortDescription:
    "Premium heavy-duty PVC conduit pipe engineered for safe and reliable electrical installations.",

  heroImage,

  overview:
    "PMT Plast PVC Conduit Pipes are manufactured using high-quality virgin PVC compound and designed for concealed as well as surface electrical wiring systems. These pipes offer excellent mechanical strength, dimensional accuracy, corrosion resistance and long service life.",

  badges: [
    "ISI Certified",
    "Virgin PVC",
    "Heavy Duty",
    "Made in India",
  ],

  highlights: [
    "High Impact Strength",
    "Flame Retardant",
    "UV Resistant",
    "Long Service Life",
  ],

  series: [
    {
      name: "LMS",
      title: "Light Mechanical Stress",
    },
    {
      name: "MMS",
      title: "Medium Mechanical Stress",
    },
    {
      name: "HMS",
      title: "Heavy Mechanical Stress",
    },
    {
      name: "SUPER HMS",
      title: "Extra Heavy Duty",
    },
  ],

  sizes: [
    "20 mm",
    "25 mm",
    "32 mm",
    "40 mm",
    "50 mm",
  ],

  features: [
    {
      title: "Smooth Internal Surface",
      description:
        "Smooth inner walls reduce cable friction and allow easy wire pulling during installation while protecting cable insulation.",

      image: feature1,
    },

    {
      title: "Virgin PVC Compound",
      description:
        "Manufactured using premium quality virgin PVC compound for superior strength, dimensional accuracy and long service life.",

      image: feature2,
    },

    {
      title: "High Impact Strength",
      description:
        "Designed to withstand heavy mechanical stress, impact and site handling without deformation.",

      image: feature3,
    },

    {
      title: "Fire Retardant",
      description:
        "Special flame-retardant formulation improves electrical safety and minimizes flame propagation.",

      image: feature4,
    },
  ],

  applications: [
    "Residential Buildings",
    "Commercial Buildings",
    "Industrial Projects",
    "Hospitals",
    "Educational Institutes",
    "Infrastructure Projects",
  ],

  specifications: [
    {
      property: "Material",
      value: "Virgin PVC Compound",
    },
    {
      property: "Standard",
      value: "ISI Certified",
    },
    {
      property: "Colour",
      value: "Grey",
    },
    {
      property: "Length",
      value: "3 Meter",
    },
    {
      property: "Available Sizes",
      value: "20 mm, 25 mm, 32 mm, 40 mm & 50 mm",
    },
    {
      property: "Application",
      value: "Surface & Concealed Electrical Wiring",
    },
    {
      property: "Mechanical Grades",
      value: "LMS, MMS, HMS & SUPER HMS",
    },
  ],

  gallery: [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ],
}