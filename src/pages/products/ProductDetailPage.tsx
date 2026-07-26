// src/pages/products/ProductDetailPage.tsx

import ProductHero from "@/components/products/ProductHero";
import ProductStickyNav from "@/components/products/ProductStickyNav";
import ProductOverview from "@/components/products/ProductOverview";
import ProductSeries from "@/components/products/ProductSeries";
import ProductSizes from "@/components/products/ProductSizes";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductApplications from "@/components/products/ProductApplications";
import ProductSpecifications from "@/components/products/ProductSpecifications";
import ProductGallery from "@/components/products/ProductGallery";
import ProductCTA from "@/components/products/ProductCTA";

export interface ProductData {
  name: string;
  shortDescription: string;
  heroImage: string;
  overview: string;

  badges: string[];

  highlights: string[];

  series: {
    name: string;
    title: string;
  }[];

  sizes: string[];

  features: {
    title: string;
    description: string;
    image: string;
  }[];

  applications: string[];

  specifications: {
    property: string;
    value: string;
  }[];

  gallery: string[];
}

interface ProductDetailPageProps {
  product: ProductData;
}

export default function ProductDetailPage({
  product,
}: ProductDetailPageProps) {
  return (
    <main className="bg-white">
      {/* Hero */}
      <ProductHero
        product={{
          name: product.name,
          shortDescription: product.shortDescription,
          heroImage: product.heroImage,
          badges: product.badges,
        }}
      />

      {/* Sticky Navigation */}
      <ProductStickyNav />

      {/* Overview */}
      <ProductOverview
        product={{
          overview: product.overview,
          heroImage: product.heroImage,
          features: product.highlights,
        }}
      />

      {/* Series */}
      <ProductSeries series={product.series} />

      {/* Sizes */}
      <ProductSizes sizes={product.sizes} />

      {/* Features */}
      <ProductFeatures features={product.features} />

      {/* Applications */}
      <ProductApplications applications={product.applications} />

      {/* Specifications */}
      <ProductSpecifications
        specifications={product.specifications}
      />

      {/* Gallery */}
      <ProductGallery images={product.gallery} />

      {/* CTA */}
      <div className="pb-20">
        <ProductCTA />
      </div>
    </main>
  );
}