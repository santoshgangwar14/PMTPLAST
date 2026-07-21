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
    <section id="cta" className="relative py-32 lg:py-44 bg-slate-50 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red-100/30 blur-[120px]" />
      </div>

      <Container className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <div className="flex flex-col items-center gap-6">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-4 py-1.5 text-xs font-bold text-red-600 uppercase tracking-widest"
          >
            <Award size={14} />
            B2B Partner Network
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl"
          >
            Need Reliable PVC Electrical Solutions?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed mt-1"
          >
            Partner with PMT Plast for high-capacity manufacturing, nationwide dealer supply, and industry-certified quality electrical conduits.
          </motion.p>

          {/* Buttons: WhatsApp and Become Dealer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
          >
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-sm w-full sm:w-auto shadow-lg shadow-red-500/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </button>

            <button
              onClick={handleDealerClick}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold px-8 py-4 text-sm w-full sm:w-auto hover:-translate-y-0.5 shadow-sm transition-all duration-300"
            >
              Become Dealer
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}