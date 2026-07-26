// src/components/products/ProductCTA.tsx

import { ArrowRight, Download, Phone } from "lucide-react";
import Container from "@/components/ui/Container";

const ProductCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B4F9E] pt-24 pb-40">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

      <Container className="relative z-10 max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left Side */}

          <div>
            <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
              PMT Plast
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Need Premium Electrical Conduit Solutions?
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-blue-100">
              Contact our product specialists for dealer enquiries, bulk
              requirements, project support and technical assistance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-xl bg-white/10 px-5 py-4 text-white backdrop-blur">
                ✔ ISI Certified Products
              </div>

              <div className="rounded-xl bg-white/10 px-5 py-4 text-white backdrop-blur">
                ✔ Bulk Supply Available
              </div>

              <div className="rounded-xl bg-white/10 px-5 py-4 text-white backdrop-blur">
                ✔ Dealer Network
              </div>

              <div className="rounded-xl bg-white/10 px-5 py-4 text-white backdrop-blur">
                ✔ Fast Delivery
              </div>
            </div>
          </div>

          {/* Right Card */}

          <div className="rounded-[32px] bg-[#FFF8DC] p-10 shadow-2xl">
            <h3 className="pt-1 text-2xl font-bold leading-normal text-[#B22222]">
              Get Started
            </h3>

            <p className="mt-4 leading-8 text-[#8B1E1E]">
              Download our latest product catalogue or connect with our sales
              team for pricing and dealer support.
            </p>

            <div className="mt-10 space-y-4">

              {/* Download */}

              <button
                onClick={() => {
                  window.location.hash = "#downloads";
                }}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#B22222] px-6 py-4 font-semibold text-white transition duration-300 hover:bg-[#8B1E1E]"
              >
                <Download size={20} />
                Download Catalogue
              </button>

              {/* Contact */}

              <button
                onClick={() => {
                  window.location.hash = "#contact";
                }}
                className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-[#B22222] px-6 py-4 font-semibold text-[#B22222] transition duration-300 hover:bg-[#B22222] hover:text-white"
              >
                <ArrowRight size={20} />
                Request Quote
              </button>

              {/* WhatsApp */}

              <button
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send/?phone=917309684860&text&type=phone_number&app_absent=0",
                    "_blank"
                  )
                }
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-semibold text-white transition duration-300 hover:bg-[#1FA855]"
              >
                <Phone size={20} />
                Contact Sales
              </button>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductCTA;