import ProductDetailPage from "./ProductDetailPage";
import { conduitProduct } from "@/data/products/conduit";

export default function PVCConduitPage() {
  return <ProductDetailPage product={conduitProduct} />;
}