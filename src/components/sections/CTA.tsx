import { motion } from "framer-motion";
import { MessageCircle, Award } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CTA() {
  // WhatsApp link - Number format: 91XXXXXXXXXX (Replace with your actual number)
  const whatsappNumber = "917309684860"; 
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hi PMT Plast, I am interested in your products.`, "_blank");
  };

  const handleDealerClick = () => {
    window.location.href = "mailto:sales@pmtpipes.in?subject=Dealer Network Enquiry - PMT Plast";
  };

  return (
    <section id="cta" className="relative isolate overflow-hidden border-y border-slate-100 bg-[radial-gradient(circle_at_50%_0%,rgba(143,207,239,0.20),transparent_34%),linear-gradient(135deg,#FFFFFF_0%,#F4FBFF_52%,#EEF7FF_100%)] py-24 lg:py-28">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/25 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(11,79,158,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(11,79,158,0.55)_1px,transparent_1px)] [background-size:76px_76px]" />
      </div>

      <Container className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <div className="flex flex-col items-center gap-6">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#B8DDEF] bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0B4F9E] shadow-[0_6px_16px_rgba(11,79,158,0.08)]"
          >
            <Award size={14} />
            B2B Partner Network
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Need Reliable PVC Electrical Solutions?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-1 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Partner with PMT Plast for high-capacity manufacturing, nationwide dealer supply, and industry-certified quality electrical conduits.
          </motion.p>

          {/* Buttons: WhatsApp and Become Dealer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
          >
            <button
              onClick={handleWhatsAppClick}
              className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full border border-white/30 bg-gradient-to-br from-[#1464B6] via-[#0B4F9E] to-[#083B74] px-8 py-4 text-sm font-bold text-white shadow-[0_12px_26px_rgba(11,79,158,0.28),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(11,79,158,0.36)] sm:w-auto"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </button>

            <button
              onClick={handleDealerClick}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#0B4F9E] bg-white/75 px-8 py-4 text-sm font-bold text-[#0B4F9E] shadow-[0_8px_20px_rgba(11,79,158,0.10)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B4F9E] hover:text-white hover:shadow-[0_14px_28px_rgba(11,79,158,0.22)] sm:w-auto"
            >
              Become Dealer
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
