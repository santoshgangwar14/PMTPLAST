import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Factory,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { addEnquiry } from "@/admin/services/contactService";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    requirement: "PVC Conduit Pipes",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addEnquiry({
        name: formData.name,
        company: formData.company,
        phone: formData.phone,
        email: formData.email,
        requirement: formData.requirement,
        message: formData.message,
      });

      setIsSubmitted(true);

      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        requirement: "PVC Conduit Pipes",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      alert("Failed to submit enquiry.");
    }
  };

  const handleDirections = () => {
    window.open("https://maps.google.com/?q=PMT+Plast+Lucknow", "_blank");
  };

  // Reusable input styles with explicit padding-left so typing is always smooth
  const inputStyles = `h-[56px] w-full block rounded-xl border border-[#D7E7F5] 
                       bg-white/90 pl-6 pr-5 text-[15px] font-medium text-slate-950 placeholder:text-slate-400 
                       outline-none transition-all duration-200 
                       hover:border-[#3B82F6] hover:bg-white
                       focus:border-[#3B82F6] focus:shadow-[0_0_0_5px_rgba(59,130,246,0.12)]`;

  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-x-hidden">
      {/* Background Gradients & Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b4f9e0a_1px,transparent_1px),linear-gradient(to_bottom,#0b4f9e0a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-sky-400/20 blur-[120px]" />
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-red-500/10 blur-[140px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-b from-sky-200/30 to-blue-100/10 blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-12 pb-14 lg:pt-14 lg:pb-16">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center px-4"
            >
              <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-[4.2rem]">
                <span className="bg-gradient-to-r from-[#0B4F9E] via-[#2563EB] to-[#C62828] bg-clip-text text-transparent">
                  Let's Build Strong
                </span>
                <br />
                <span className="text-slate-900">Business Partnerships</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
                Connect with PMT Plast for dealership opportunities, bulk orders, project enquiries and technical assistance. Our team is ready to help you.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* MAIN SECTION: FORM + CARDS */}
        <section className="pb-20">
          <Container className="grid gap-10 lg:grid-cols-12 items-start px-4 sm:px-6 lg:px-8">
            
            {/* LEFT COLUMN: FORM */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 w-full"
            >
              <div className="relative w-full rounded-[32px] border border-[#D7E7F5] bg-white/80 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-lg">
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-30 flex items-center justify-center rounded-[32px] bg-slate-900/95 p-8 text-center text-white backdrop-blur-md"
                  >
                    <div className="space-y-4">
                      <CheckCircle size={56} className="mx-auto text-emerald-400" />
                      <h3 className="text-2xl font-bold">Enquiry Submitted!</h3>
                      <p className="text-sm text-slate-300">
                        Thank you for reaching out. Our business team will get back to you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                  <div className="grid gap-6 sm:grid-cols-2 w-full">
                    <div className="w-full">
                      <label className="mb-2 block pl-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputStyles}
                      />
                    </div>
                    <div className="w-full">
                      <label className="mb-2 block pl-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Company Pvt Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 w-full">
                    <div className="w-full">
                      <label className="mb-2 block pl-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-700">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputStyles}
                      />
                    </div>
                    <div className="w-full">
                      <label className="mb-2 block pl-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="mb-2 block pl-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-700">
                      Requirement
                    </label>
                    <div className="relative w-full">
                      <select
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className={`${inputStyles} appearance-none pr-10`}
                      >
                        <option value="PVC Conduit Pipes">PVC Conduit Pipes</option>
                        <option value="PVC Bends">PVC Bends</option>
                        <option value="PVC Junction Box">PVC Junction Box</option>
                        <option value="PVC Casing & Capping">PVC Casing & Capping</option>
                        <option value="Become Dealer">Become Dealer</option>
                        <option value="Bulk Order">Bulk Order</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  {/* Message Field (Fixed pl-6) */}
                  <div className="w-full">
                    <label className="mb-2 block pl-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-700">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Write your query or message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full block rounded-xl border border-[#D7E7F5] bg-white/90 pl-6 pr-5 py-4 text-[15px] font-medium text-slate-950 placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-[#3B82F6] hover:bg-white focus:border-[#3B82F6] focus:shadow-[0_0_0_5px_rgba(59,130,246,0.12)] resize-none"
                    />
                  </div>

                  <div className="pt-2 w-full">
                    <button
                      type="submit"
                      className="group relative flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl 
                                 bg-gradient-to-r from-[#0B4F9E] via-sky-600 to-red-600 px-8 
                                 font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 
                                 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(11,79,158,0.3)] hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                      <span>SEND ENQUIRY</span>
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              </div>

              {/* Technical CTA */}
              <div className="mt-14 lg:mt-16 rounded-[34px] border border-[#D7E7F5] bg-gradient-to-r from-[#0B4F9E] via-[#2563EB] to-[#C62828] px-8 sm:px-10 py-12 text-center shadow-[0_35px_80px_rgba(11,79,158,.35)]">
                <h3 className="text-2xl lg:text-3xl font-black text-white">
                  Need Technical Assistance?
                </h3>
                <p className="mt-2 text-blue-100">
                  Talk to Our Experts Today
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="tel:+917309684860"
                    className="group relative inline-flex h-14 min-w-[200px] sm:min-w-[210px] items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0A3D91] via-[#1454C7] to-[#0B4F9E] px-8 font-bold uppercase tracking-[0.08em] text-white shadow-[0_20px_45px_rgba(37,99,235,.35)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_28px_60px_rgba(37,99,235,.45)]"
                  >
                    <Phone className="h-5 w-5" />
                    <span>CALL NOW</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                  <a
                    href="https://wa.me/917309684860"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative inline-flex h-14 min-w-[200px] sm:min-w-[210px] items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0F9D58] via-[#16A34A] to-[#15803D] px-8 font-bold uppercase tracking-[0.08em] text-white shadow-[0_20px_45px_rgba(16,185,129,.35)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_28px_60px_rgba(16,185,129,.45)]"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>WHATSAPP</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 space-y-8 w-full"
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 w-full">
                <div className="group rounded-3xl border border-[#D7E7F5] bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#60A5FA] hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-[#0B4F9E]">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Head Office</h4>
                      <p className="mt-1 text-sm font-semibold text-slate-900">Shree Balaji Plastic Industries</p>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        Mati, Khasra No.505<br />
                        Sisendi Road<br />
                        Lucknow - 226002
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-3xl border border-[#D7E7F5] bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#60A5FA] hover:shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-[#0B4F9E]">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Call Us</h4>
                      <a href="tel:+917309684860" className="mt-1 block text-sm font-bold text-slate-900 hover:text-[#0B4F9E]">
                        +91 73096 84860
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group rounded-3xl border border-[#D7E7F5] bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#60A5FA] hover:shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-[#0B4F9E]">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Email</h4>
                      <a href="mailto:sales@pmtplast.com" className="mt-1 block text-sm font-bold text-slate-900 hover:text-[#0B4F9E]">
                        sales@pmtplast.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group rounded-3xl border border-[#D7E7F5] bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#60A5FA] hover:shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-[#0B4F9E]">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Business Hours</h4>
                      <p className="mt-2 text-sm font-bold text-slate-900">Open 24 Hours</p>
                      <p className="text-xs text-slate-500 mt-1">Monday - Sunday</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-[#D7E7F5] bg-white shadow-xl w-full">
                <iframe
                  title="PMT Plast Location"
                  src="https://www.google.com/maps?q=Shree+Balaji+Plastic+Industries+Lucknow&output=embed"
                  className="h-[360px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/40 bg-white/80 p-3 shadow-lg backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <MapPin className="h-4 w-4 text-[#0B4F9E]" />
                    <span>Lucknow Plant</span>
                  </div>
                  <button
                    onClick={handleDirections}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#0B4F9E] px-4 py-1.5 text-xs font-semibold text-white shadow hover:bg-sky-700 transition"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="rounded-[24px] border border-[#D7E7F5] bg-gradient-to-br from-sky-50/80 to-white p-6 shadow-sm w-full">
                <div className="flex items-center gap-3">
                  <Factory className="h-6 w-6 text-[#0B4F9E]" />
                  <h3 className="text-lg font-extrabold uppercase tracking-wide text-slate-900">
                    WHY PMT PLAST ?
                  </h3>
                </div>
                <div className="mt-4 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle className="h-4 w-4 shrink-0 text-[#0B4F9E]" />
                    <span>25+ Years Exp.</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle className="h-4 w-4 shrink-0 text-[#0B4F9E]" />
                    <span>Premium Quality</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle className="h-4 w-4 shrink-0 text-[#0B4F9E]" />
                    <span>Fast Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle className="h-4 w-4 shrink-0 text-[#0B4F9E]" />
                    <span>Trusted Network</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      </div>
    </div>
  );
}