import { Globe, Mail, MapPin, MessageSquare, Phone, Share2 } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";
import { products } from "@/data/products";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative mt-32 overflow-hidden border-t border-[#1E3A5F] bg-gradient-to-b from-[#08131F] via-[#0D1D33] to-[#07111D] pt-24 pb-16 text-slate-300"
    >
      {/* Top Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" />
      <div className="absolute -top-48 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[170px]" />

      <Container className="relative z-10">

        {/* Divider */}
        <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-[#60A5FA]/60 to-transparent" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">

          {/* ================= Logo ================= */}
          <div className="lg:col-span-4">

            <Logo />

            <p className="mt-6 max-w-sm text-[15px] leading-8 text-slate-300/90">
              PMT Plast is a leading Indian manufacturer of premium PVC
              electrical conduit systems engineered for infrastructure,
              industrial and commercial installations across the country.
            </p>

            <div className="mt-8 flex gap-4">

              {[Globe, Share2, MessageSquare].map((Icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    border border-[#1E3A5F]
                    bg-white/5
                    backdrop-blur-xl
                    text-white
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#60A5FA]
                    hover:bg-[#2563EB]
                    hover:shadow-[0_0_30px_rgba(37,99,235,.40)]
                  "
                >
                  <Icon className="h-5 w-5" />
                </a>

              ))}

            </div>

          </div>

          {/* ================= Company ================= */}

          <div className="lg:col-span-2">

           <h4
  className="mb-6 text-2xl font-extrabold uppercase tracking-[0.12em] text-white"
  style={{
    textShadow:
      "0 0 10px rgba(255,255,255,.8), 0 0 22px rgba(147,197,253,.9), 0 0 40px rgba(59,130,246,.8)",
  }}
>
  Company
</h4>

            <ul className="mt-6 space-y-4 text-sm">

              {navLinks.map((link) => (

                <li key={link.href}>

                  <a
                    href={link.href}
                    className="inline-block text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-[#60A5FA]"
                  >
                    {link.label}
                  </a>

                </li>

              ))}

            </ul>

          </div>
                    {/* ================= Products ================= */}

          <div className="lg:col-span-2">
<h4
  className="mb-6 text-2xl font-extrabold uppercase tracking-[0.12em] text-white"
  style={{
    textShadow:
      "0 0 10px rgba(255,255,255,.8), 0 0 22px rgba(147,197,253,.9), 0 0 40px rgba(59,130,246,.8)",
  }}
>
  Products
</h4>

            <ul className="mt-6 space-y-4 text-sm">

              {products.slice(0, 6).map((product) => (

                <li key={product.id}>

                  <a
                    href="#products"
                    className="inline-block text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-[#60A5FA]"
                  >
                    {product.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* ================= Head Office ================= */}

          <div className="lg:col-span-4">

           <h4
  className="mb-6 text-2xl font-extrabold uppercase tracking-[0.12em] text-[#F8FCFF]"
  style={{
    textShadow:
      "0 0 8px rgba(255,255,255,.6), 0 0 18px rgba(96,165,250,.9), 0 0 35px rgba(37,99,235,.7)",
  }}
>
  Head Office
</h4>

            <ul className="mt-6 space-y-5 text-sm">

              <li className="flex items-start gap-3">

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#2563EB]/30 bg-[#1E3A5F]/40 text-white">

                  <MapPin className="h-5 w-5" />

                </span>

                <span className="leading-7 text-slate-300">

                  Mati, Khasra No. 505,
                  Opposite Rudrima Enclave,
                  Sisendi Road, Bijnore,
                  Lucknow – 226002,
                  Uttar Pradesh, India

                </span>

              </li>

              <li className="flex items-center gap-3">

                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#2563EB]/30 bg-[#1E3A5F]/40 text-white">

                  <Phone className="h-5 w-5" />

                </span>

                <a
                  href="tel:+917309684860"
                  className="text-slate-300 transition-all duration-300 hover:text-[#60A5FA]"
                >
                  +91 73096 84860
                </a>

              </li>

              <li className="flex items-center gap-3">

                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#2563EB]/30 bg-[#1E3A5F]/40 text-white">

                  <Mail className="h-5 w-5" />

                </span>

                <a
                  href="mailto:sales@pmtpipes.in"
                  className="text-slate-300 transition-all duration-300 hover:text-[#60A5FA]"
                >
                  sales@pmtpipes.in
                </a>

              </li>

            </ul>

          </div>

        </div>

        {/* ================= Bottom ================= */}

        <div className="mt-14 border-t border-[#1E3A5F] pt-8">

          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

            <p className="text-sm text-slate-400">

              © {year} <span className="font-semibold text-white">
                Shree Balaji Plastic Industries
              </span>. All Rights Reserved.

            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm">

              <a
                href="#"
                className="text-slate-400 transition-all duration-300 hover:text-[#60A5FA]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-slate-400 transition-all duration-300 hover:text-[#60A5FA]"
              >
                Terms & Conditions
              </a>

              <a
                href="#"
                className="text-slate-400 transition-all duration-300 hover:text-[#60A5FA]"
              >
                Sitemap
              </a>

            </div>

          </div>

        </div>

      </Container>

    </footer>

  );
};

export default Footer;