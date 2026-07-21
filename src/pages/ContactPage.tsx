import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from "lucide-react";
import Container from "@/components/ui/Container";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    state: "",
    enquiryType: "dealer",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting B2B Enquiry Form:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      state: "",
      enquiryType: "dealer",
      message: "",
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  const handleWhatsApp = () => {
    window.location.href = "https://wa.me/919876543210?text=Hello%20PMT%20Plast,%20I%20am%20interested%20in%20becoming%20a%20dealer.";
  };

  const handleDirections = () => {
    window.open("https://maps.google.com/?q=PMT+Plast+Electricals+India", "_blank");
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* 1. Header Banner */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100 py-16 lg:py-24">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(11,79,158,0.03),transparent_50%)]" />
        <Container className="relative z-10">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0B4F9E]">
              Connect With Us
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              B2B Partner & Dealer Portal
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Have bulk project demands or wish to join our authorized distributor network? Submit an enquiry or contact our sales office directly.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Main Grid: Info vs Form */}
      <section className="py-20 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Coordinates & Quick Call Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F9E]">Sales Headquarters</span>
              <h2 className="text-2xl font-extrabold text-slate-950 mt-1">Get in Touch Directly</h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Our support team responds within 24 business hours to catalog requests and dealer approvals.
              </p>
            </div>

            {/* Coordinates Cards */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0B4F9E]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Registered Office & Unit</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    Plot No. 42-45, Industrial Sector 5,<br />
                    Bhiwadi, NCR-Rajasthan, 301019, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0B4F9E]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Phone Hotline</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    +91 98765 43210 / +91 1493 252 420
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0B4F9E]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Corporate Mail</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    sales@pmtpipes.in / partner@pmtpipes.in
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0B4F9E]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Business Hours</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    Monday – Saturday: 09:30 AM – 06:30 PM (IST)
                  </p>
                </div>
              </div>
            </div>

            {/* Quick action buttons block */}
            <div className="flex flex-col sm:flex-row gap-3.5 mt-2">
              <button
                onClick={handleCall}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B4F9E] hover:bg-[#093e7c] text-white font-bold py-3 px-5 text-xs transition shadow-sm cursor-pointer"
              >
                <Phone size={14} />
                Call Now
              </button>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 text-xs transition shadow-sm cursor-pointer"
              >
                <MessageSquare size={14} />
                WhatsApp
              </button>

              <button
                onClick={handleDirections}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-3 px-5 text-xs transition shadow-sm cursor-pointer"
              >
                Get Directions
              </button>
            </div>
          </div>

          {/* Right Column: Interactive B2B Dealer / Contact Enquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-xs relative">
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-[#0B4F9E]/95 rounded-3xl z-20 flex flex-col items-center justify-center text-center p-8 text-white"
              >
                <CheckCircle2 size={56} className="text-blue-100 mb-4 animate-bounce" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Enquiry Registered!</h3>
                <p className="text-sm text-blue-100 max-w-sm leading-relaxed">
                  Thank you. Your dealer partnership coordinates have been logged. A regional channel manager will reach you within 24 business hours.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase">Contact Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-[#0B4F9E] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="partner@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-[#0B4F9E] transition-all"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-[#0B4F9E] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase">Company / Firm Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Electricals"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-[#0B4F9E] transition-all"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase">Target State / Union Territory</label>
                  <input
                    type="text"
                    placeholder="e.g. Rajasthan, Maharashtra"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-[#0B4F9E] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase">Nature of Enquiry</label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-[#0B4F9E] transition-all"
                  >
                    <option value="dealer">Become an Authorized Dealer</option>
                    <option value="contractor">Bulk Project Supply / EPC Enquiry</option>
                    <option value="sample">Request Physical Product Samples</option>
                    <option value="general">Other General Enquiry</option>
                  </select>
                </div>

              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-600 uppercase">Additional Requirements</label>
                <textarea
                  rows={4}
                  placeholder="Specify sizes, quantities, FRLS preferences, or background of your distribution network..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-[#0B4F9E] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B4F9E] hover:bg-[#093e7c] text-white font-bold py-4 px-6 text-sm transition-all duration-300 shadow-md cursor-pointer mt-2"
              >
                <Send size={16} />
                Submit Partner Application
              </button>
            </form>
          </div>

        </Container>
      </section>

      {/* 3. Google Map */}
      <section className="py-8 bg-white border-t border-slate-100">
        <Container className="max-w-5xl">
          <div className="text-center flex flex-col gap-2 mb-8">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Find Us</span>
            <h3 className="text-2xl font-bold text-slate-900">Geographical Plant Location</h3>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 shadow-lg h-[320px] sm:h-[440px]">
            <iframe
              title="PMT Plast Manufacturing Unit Location"
              src="https://www.google.com/maps?q=RIICO+Industrial+Area+Phase-I+Bhiwadi+Rajasthan+301019&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating address card, glossy premium finish */}
            <div className="absolute left-4 bottom-4 right-4 sm:right-auto sm:max-w-sm rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl p-4 sm:p-5 flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B4F9E] text-white shadow-lg shadow-blue-500/10">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-bold text-slate-900">PMT Plast Manufacturing Unit</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  RIICO Industrial Area, Phase-I, Bhiwadi, Rajasthan - 301019
                </p>
                <button
                  onClick={handleDirections}
                  className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4F9E] hover:underline cursor-pointer w-fit"
                >
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
