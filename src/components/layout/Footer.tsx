import { Globe, Mail, MapPin, MessageSquare, Phone, Share2 } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";
import { products } from "@/data/products";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-noise-dark border-t border-white/5 pt-20 text-slate-300">
      <Container>
        <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              PMT Plast is a leading Indian manufacturer of premium PVC electrical conduit systems, engineered
              for infrastructure, industrial and commercial installations across the country.
            </p>
            <div className="mt-6 flex gap-3">
              {[Globe, Share2, MessageSquare].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 hover:border-accent hover:bg-accent"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-accent-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Products</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {products.slice(0, 6).map((product) => (
                <li key={product.id}>
                  <a href="#products" className="transition-colors hover:text-accent-light">
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Head Office</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-light" />
                <span>RIICO Industrial Area, Phase-I, Bhiwadi, Rajasthan 301019, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent-light" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent-light" />
                <a href="mailto:sales@pmtpipes.in">sales@pmtpipes.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-slate-500 md:flex-row">
          <p>&copy; {year} PMT Plast Industries Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent-light">Privacy Policy</a>
            <a href="#" className="hover:text-accent-light">Terms of Use</a>
            <a href="#" className="hover:text-accent-light">Sitemap</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
