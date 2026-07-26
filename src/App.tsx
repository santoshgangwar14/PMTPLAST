import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Layout from "@/components/layout/Layout";
import Footer from "@/components/layout/Footer";

import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProductsPage from "@/pages/ProductsPage";
import QualityPage from "@/pages/QualityPage";
import DownloadsPage from "@/pages/DownloadsPage";
import ContactPage from "@/pages/ContactPage";
import PVCConduitPage from "@/pages/products/PVCConduitPage";
import PVCBendPage from "@/pages/products/PVCBendPage";
import JunctionBoxPage from "@/pages/products/JunctionBoxPage";
import CasingPage from "@/pages/products/CasingPage";

function App() {
  const [currentHash, setCurrentHash] = useState(
    window.location.hash || "#home"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "#home");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () =>
      window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderContent = () => {
  switch (currentHash) {
    case "#about":
      return <AboutPage />;

    case "#products":
      return <ProductsPage />;

    case "#products/conduit":
      return <PVCConduitPage />;

    case "#products/bend":
      return <PVCBendPage />;

    case "#products/fittings":
      return <JunctionBoxPage />;

    case "#products/casing":
      return <CasingPage />;

    case "#quality":
      return <QualityPage />;

    case "#downloads":
      return <DownloadsPage />;

    case "#contact":
    case "#cta":
      return <ContactPage />;

    default:
      return <HomePage />;
  }
};

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">

      <Navbar />

      <Layout>
        {renderContent()}
      </Layout>

      <Footer />

    </div>
  );
}

export default App;