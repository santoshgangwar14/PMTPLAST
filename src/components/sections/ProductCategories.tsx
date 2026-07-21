import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import StaggerGroup from "@/components/ui/StaggerGroup";
import { products } from "@/data/products";
import type { Product } from "@/types";

const ProductCategories = () => {
  const handleEnquire = (product: Product) => {
    window.location.href = `#cta`;
    console.info("Enquiry requested for", product.name);
  };

  return (
    <section id="products" className="bg-surface py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Product Range"
          title="A Complete Ecosystem of Conduit Systems"
          description="From heavy-duty rigid conduits to fire-safe FRLS systems and precision accessories, every product is engineered to IS specifications for infrastructure-grade reliability."
        />

        <StaggerGroup className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onEnquire={handleEnquire} />
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
};

export default ProductCategories;
