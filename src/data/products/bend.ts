// Hero
import heroImage from "@/assets/images/products/PVC BEND/bends.webp";

// Feature Images
import feature1 from "@/assets/images/gallery/PVC BEND/bends.webp";
import feature2 from "@/assets/images/gallery/PVC BEND/bends.webp";
import feature3 from "@/assets/images/gallery/PVC BEND/bends.webp";
import feature4 from "@/assets/images/gallery/PVC BEND/bends.webp";

// Gallery Images
import gallery1 from "@/assets/images/gallery/PVC BEND/bends.webp";
import gallery2 from "@/assets/images/gallery/PVC BEND/bends.webp";
import gallery3 from "@/assets/images/gallery/PVC BEND/bends.webp";
import gallery4 from "@/assets/images/gallery/PVC BEND/bends.webp";
import gallery5 from "@/assets/images/gallery/PVC BEND/bends.webp";
import gallery6 from "@/assets/images/gallery/PVC BEND/bends.webp";

// Related Products
import conduitImage from "@/assets/images/gallery/PVC CONDUIT PIPE/pvc-pipe-hero.webp";
import junctionImage from "@/assets/images/gallery/CONDUIT FITTING & ACCESSORIES/junction-box.webp";
import casingImage from "@/assets/images/gallery/PVC CASING & CAPPING/CASING&capping.webp";
import accessoriesImage from "@/assets/images/gallery/CONDUIT FITTING & ACCESSORIES/hero-8-way-box.webp";

export const bendProduct = {
  slug: "pvc-bend",

  name: "PVC Bend",

  shortDescription:
    "Premium precision-moulded PVC bends designed for smooth cable routing and reliable electrical conduit installations.",

  heroImage,

  overview:
    "PMT Plast PVC Bends are manufactured using premium quality virgin PVC compound to ensure smooth cable pulling, precise alignment and excellent durability. They provide secure conduit connections while maintaining cable protection in residential, commercial and industrial electrical installations.",

  badges: [
    "ISI Quality",
    "Virgin PVC",
    "Heavy Duty",
    "Made in India",
  ],

  highlights: [
    "Smooth Cable Routing",
    "High Strength",
    "Perfect Angle",
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
      name: "SECURE",
      title: "Heavy Duty Grade",
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
      title: "Smooth Cable Entry",
      description:
        "Designed with a smooth internal profile to minimize cable friction and simplify wire pulling.",

      image: feature1,
    },

    {
      title: "Precision Moulding",
      description:
        "Manufactured using high precision moulds for accurate dimensions and perfect conduit fitting.",

      image: feature2,
    },

    {
      title: "High Mechanical Strength",
      description:
        "Excellent impact resistance ensures long-lasting performance even under demanding site conditions.",

      image: feature3,
    },

    {
      title: "Premium Virgin PVC",
      description:
        "Made using high-quality virgin PVC compound for superior durability and dimensional stability.",

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
      value: "ISI Quality",
    },
    {
      property: "Colour",
      value: "Grey",
    },
    {
      property: "Available Sizes",
      value: "20 mm, 25 mm, 32 mm, 40 mm & 50 mm",
    },
    {
      property: "Mechanical Grades",
      value: "LMS, MMS, HMS & SECURE",
    },
    {
      property: "Application",
      value: "Electrical Conduit Systems",
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

  relatedProducts: [
    {
      title: "PVC Conduit Pipe",
      image: conduitImage,
    },
    {
      title: "Junction Box",
      image: junctionImage,
    },
    {
      title: "PVC Casing & Capping",
      image: casingImage,
    },
    {
      title: "Conduit Accessories",
      image: accessoriesImage,
    },
  ],
};