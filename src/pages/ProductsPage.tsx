// src/pages/ProductsPage.tsx

import { ArrowRight, Download } from "lucide-react";

import Container from "@/components/ui/Container";

import allProducts from "@/assets/images/gallery/All_product.webp";

import conduitImg from "@/assets/images/gallery/PVC CONDUIT PIPE/pvc-pipe-hero.webp";
import bendImg from "@/assets/images/gallery/PVC BEND/bends.webp";
import accessoriesImg from "@/assets/images/gallery/CONDUIT FITTING & ACCESSORIES/junction-box.webp";
import casingImg from "@/assets/images/gallery/PVC CASING & CAPPING/CASING&capping.webp";

import makeIndia from "@/assets/images/branding/MAKE IN INDIA.png";
import isiLogo from "@/assets/images/branding/Isi_mark.svg.webp";
import isoLogo from "@/assets/images/branding/iso-9001.png";

const products = [
  {
    title: "PVC Conduit Pipe",
    description:
      "Premium heavy-duty electrical conduit pipes manufactured using virgin PVC compound for superior protection and durability.",
    image: conduitImg,
    link: "#products/conduit",
  },

  {
    title: "PVC Bend",
    description:
      "Precision moulded bends designed for smooth cable routing and reliable electrical conduit installations.",
    image: bendImg,
    link: "#products/bend",
  },

  {
    title: "Conduit Fittings & Accessories",
    description:
      "Complete range of electrical conduit accessories including junction boxes, elbows, fan boxes and connectors.",
    image: accessoriesImg,
    link: "#products/fittings",
  },

  {
    title: "PVC Casing & Capping",
    description:
      "Elegant surface wiring solution offering superior protection, clean appearance and long service life.",
    image: casingImg,
    link: "#products/casing",
  },
];

const trustItems = [
  {
    title: "Make in India",
    subtitle: "Proudly Manufactured in India",
    image: makeIndia,
  },

  {
    title: "ISI Certified",
    subtitle: "Trusted Quality Standard",
    image: isiLogo,
  },

  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    image: isoLogo,
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-white">

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B4F9E] via-[#1565C0] to-[#0D47A1] py-24">

        <Container className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">

              PMT Plast Product Range

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">
  <span className="bg-gradient-to-r from-[#FFD700] to-[#FFF3B0] bg-clip-text text-transparent">
    Premium Electrical
  </span>

  <br />

  <span className="text-white">
    Conduit Solutions
  </span>
</h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-blue-100">

              Explore PMT Plast's complete range of premium electrical conduit
              pipes, bends, fittings and casing systems engineered for safe,
              reliable and long-lasting installations.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#downloads"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-[#0B4F9E] shadow-xl transition hover:scale-105"
              >
                <Download size={20} />

                Download Catalogue

              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0B4F9E]"
              >
                Contact Sales

                <ArrowRight size={18} />

              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <img
              src={allProducts}
              alt="PMT Plast Product Range"
              className="mx-auto w-full max-w-2xl drop-shadow-2xl"
            />

          </div>

        </Container>

      </section>

      {/* TRUST SECTION */}

      <section className="relative -mt-14 z-20 pb-24">

        <Container>

         <div className="grid gap-6 md:grid-cols-3">

  {trustItems.map((item, index) => {

    const colors = [
      "from-orange-50 to-amber-100 border-orange-200",
      "from-blue-50 to-cyan-100 border-blue-200",
      "from-green-50 to-emerald-100 border-green-200",
    ];

    return (

      <div
        key={item.title}
        className={`group rounded-2xl border bg-gradient-to-br ${colors[index]} p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
      >

        <div className="flex justify-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md transition duration-500 group-hover:scale-110">

            <img
              src={item.image}
              alt={item.title}
              className="max-h-14 object-contain"
            />

          </div>

        </div>

        <h3 className="mt-5 text-center text-xl font-bold text-slate-900">
          {item.title}
        </h3>

        <p className="mt-2 text-center text-sm leading-6 text-slate-600">
          {item.subtitle}
        </p>

        <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#0B4F9E] to-[#FFD700] transition-all duration-500 group-hover:w-24" />

      </div>

    );

  })}

</div>

        </Container>

      </section>

      {/* PRODUCT SHOWCASE */}

      <section className="py-24 bg-white">

        <Container>

          <div className="mx-auto mb-20 max-w-3xl text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#0B4F9E]">

              Product Range

            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">

              Explore Our Premium Products

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Engineered with precision, manufactured using premium virgin PVC
              compound and trusted for residential, commercial and industrial
              electrical installations across India.

            </p>

          </div>

          <div className="space-y-24">

            {products.map((product, index) => (

              <div
                key={product.title}
                className={`grid items-center gap-16 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* IMAGE */}

                <div className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#F8FAFC] to-[#EEF5FF] p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />

                  <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-yellow-100 blur-3xl" />

                  <img
                    src={product.image}
                    alt={product.title}
                    className="relative mx-auto h-[340px] object-contain transition duration-500 group-hover:scale-110"
                  />

                </div>

                {/* CONTENT */}

                <div>

                  <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#0B4F9E]">

                    PMT Plast

                  </span>

                  <h3 className="mt-6 text-4xl font-black text-slate-900">

                    {product.title}

                  </h3>

                  <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">

                    {product.description}

                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    <span className="rounded-full bg-slate-100 px-5 py-2 text-sm font-medium">

                      Virgin PVC

                    </span>

                    <span className="rounded-full bg-slate-100 px-5 py-2 text-sm font-medium">

                      Heavy Duty

                    </span>

                    <span className="rounded-full bg-slate-100 px-5 py-2 text-sm font-medium">

                      ISI Quality

                    </span>

                    <span className="rounded-full bg-slate-100 px-5 py-2 text-sm font-medium">

                      Long Life

                    </span>

                  </div>

                  <a
                    href={product.link}
                    className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-[#0B4F9E] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#083D7A] hover:shadow-2xl"
                  >

                    Explore Product

                    <ArrowRight
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />

                  </a>

                </div>

              </div>

            ))}

          </div>

        </Container>

      </section>

      {/* APPLICATIONS */}

      <section className="bg-slate-50 py-24">

        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-[#0B4F9E]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#0B4F9E]">

              Applications

            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">

              Trusted Across Every Industry

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              PMT Plast products are engineered for safe electrical installations
              across residential, commercial and industrial environments.

            </p>

          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "🏠 Residential Buildings",
              "🏢 Commercial Complexes",
              "🏭 Industrial Plants",
              "🏥 Hospitals",
              "🏫 Educational Institutions",
              "🏗 Infrastructure Projects",
            ].map((item) => (

              <div
                key={item}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#0B4F9E] hover:shadow-xl"
              >

                <div className="text-5xl">

                  {item.split(" ")[0]}

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">

                  {item.substring(item.indexOf(" ") + 1)}

                </h3>

              </div>

            ))}

          </div>

        </Container>

      </section>

      {/* FINAL CTA */}

      <section className="relative overflow-hidden bg-gradient-to-r from-[#0B4F9E] via-[#1565C0] to-[#0D47A1] py-24">

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">

              PMT Plast

            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-white">

              Looking for Premium
              <br />
              Electrical Conduit Solutions?

            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-blue-100">

              Download our latest product catalogue or connect with our team
              for dealer enquiries, bulk supply and technical assistance.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <a
                href="#downloads"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-[#0B4F9E] shadow-xl transition hover:scale-105"
              >
                <Download size={20} />

                Download Catalogue

              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0B4F9E]"
              >

                Contact Sales

                <ArrowRight size={18} />

              </a>

            </div>

          </div>

        </Container>

      </section>
    </main>
  );
}

