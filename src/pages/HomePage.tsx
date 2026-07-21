import Hero from "@/components/sections/Hero";
import ProductPreview from "@/components/sections/ProductPreview";
import ManufacturingProcess from "@/components/sections/ManufacturingProcess";
import FactoryInfrastructure from "@/components/sections/FactoryInfrastructure";
import QualityVideos from "@/components/sections/QualityVideos";
import Gallery from "@/components/sections/Gallery";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Premium Hero */}
      <Hero />

      {/* 2. Product Categories */}
      <ProductPreview />

      {/* 3. Manufacturing Excellence (process + scale/capability) */}
      <ManufacturingProcess />
      <FactoryInfrastructure />

      {/* 4. Quality Videos */}
      <QualityVideos />

      {/* 5. Gallery */}
      <Gallery />

      {/* 6. Dealer CTA */}
      <CTA />
    </>
  );
}
