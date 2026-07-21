import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Search, Info, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";

// Approved product catalog images
import heavyGaugeConduit from "@/assets/images/products/PVC CONDUIT PIPE/pvc-pipe-hero.webp";
import bendsCouplers from "@/assets/images/products/PVC BEND/bends.webp";
import junctionBox from "@/assets/images/products/CONDUIT FITTING & ACCESSORIES/junction-box.webp";
import industrialCasing from "@/assets/images/products/PVC CASING & CAPPING/CASING&capping.webp";

// Structured specifications designed for CRUD / Admin panel migration
interface ProductSpec {
  size: string;
  grades: string[];
}

interface CategoryData {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  specs?: ProductSpec[];
  fittingsList?: string[];
}

const CATEGORIES_DATA: CategoryData[] = [
  {
    id: "conduit-pipe",
    name: "PVC Conduit Pipe",
    image: heavyGaugeConduit,
    description: "Premium heavy-gauge flame-retardant uPVC conduit pipes with high mechanical compression strength for modern architecture and hidden circuitry.",
    features: ["FR (Flame Retardant) & FRLS options", "High impact & crush resistance", "Thermal & dielectric stability"],
    specs: [
      { size: "20MM", grades: ["LMS (Light Mechanical Stress)", "MMS (Medium Mechanical Stress)", "HMS (Heavy Mechanical Stress)"] },
      { size: "25MM", grades: ["LMS (Light Mechanical Stress)", "MMS (Medium Mechanical Stress)", "HMS (Heavy Mechanical Stress)", "SUPER HMS (Extra Heavy Strength)"] },
      { size: "32MM", grades: ["LMS (Light)", "MMS (Medium)", "HMS (Heavy)"] },
      { size: "40MM", grades: ["LMS (Light)", "MMS (Medium)", "HMS (Heavy)"] },
      { size: "50MM", grades: ["LMS (Light)", "MMS (Medium)", "HMS (Heavy)"] },
    ]
  },
  {
    id: "pvc-bend",
    name: "PVC Bend",
    image: bendsCouplers,
    description: "Precision-molded smooth-angle electrical bends designed for easy, low-resistance pull-through of power and communication cables.",
    features: ["Tension-free bend angle", "Uniform wall distribution", "Quick push-fit design"],
    specs: [
      { size: "20MM", grades: ["MMS (Medium Mechanical Stress)"] },
      { size: "25MM", grades: ["LMS (Light)", "MMS (Medium)", "HMS (Heavy)", "SECURE POWER (Heavy-Duty Grade)"] },
      { size: "32MM", grades: ["MMS (Medium)", "HMS (Heavy)"] },
      { size: "40MM", grades: ["MMS (Medium)", "HMS (Heavy)"] },
      { size: "50MM", grades: ["MMS (Medium)", "HMS (Heavy)"] },
    ]
  },
  {
    id: "fittings",
    name: "Conduit Fittings & Accessories",
    image: junctionBox,
    description: "Highly robust junction, concealed and fan boxes paired with elbows and tees to offer a complete wiring routing solution.",
    features: ["Standard modular alignment", "Clean knockouts", "Serrated brass inserts for screws"],
    fittingsList: [
      "Junction Box",
      "Deep Junction Box",
      "PVC Concealed Box",
      "Elbow",
      "Tee",
      "Fan Box",
      "Round Sheet",
      "Fan Sheet",
    ]
  },
  {
    id: "casing-capping",
    name: "PVC Casing & Capping",
    image: industrialCasing,
    description: "Dual-locking surface-mounted trunking channels to enable sleek, clean, and secure routing across walls and ceilings.",
    features: ["Unique dual-lock security", "Sleek and flat-back profile", "Lead-free & UV stabilized compound"],
    specs: [
      { size: "20×12", grades: ["Standard Grade Profile"] },
      { size: "25×16", grades: ["Standard Grade Profile"] },
      { size: "30×15", grades: ["LMS (Light Profile)", "MMS (Medium Profile)", "HMS (Heavy Profile)"] },
      { size: "32×12", grades: ["Standard Profile"] },
    ],
    fittingsList: [
      "Square Box",
      "Coupler",
      "Tee",
      "Elbow",
      "Internal Bend",
      "External Bend"
    ]
  }
];

export default function ProductsPage() {
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = CATEGORIES_DATA.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleCategory = (id: string) => {
    setExpandedCat(prev => (prev === id ? null : id));
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* SECTION 1: Large Hero Banner */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100 py-16 lg:py-24">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(11,79,158,0.04),transparent_55%)]" />
        <Container className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl flex flex-col gap-4">
            <span className="inline-flex items-center gap-2.5 w-fit">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C9992E]" />
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#0B4F9E]">
                Specification Catalogue
              </span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
              B2B Electrical Solutions
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Explore professional industrial dimension matrices, grade configurations, and technical listings. All products undergo certified laboratory strain, heat, and impact evaluations.
            </p>
          </div>

          {/* Real-time search bar for quick spec navigation */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search category or profile..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-base text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-[#0B4F9E] transition-all"
            />
          </div>
        </Container>
      </section>

      {/* SECTION 2: Categories Cards Grid */}
      <section className="py-20">
        <Container className="flex flex-col gap-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCategories.map((cat) => {
              const isExpanded = expandedCat === cat.id;
              return (
                <div
                  key={cat.id}
                  className={`card flex flex-col h-full p-7 transition-all duration-300 ${
                    isExpanded ? "border-[#0B4F9E]/30 shadow-xl -translate-y-1" : ""
                  }`}
                >
                  <div className="aspect-square w-full rounded-xl bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-100 flex items-center justify-center p-6 mb-6 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="max-h-[150px] object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {cat.name}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6 flex-grow">
                    {cat.description}
                  </p>

                  <button
                    onClick={() => toggleCategory(cat.id)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0B4F9E] hover:text-blue-800 transition-colors w-fit uppercase tracking-wider"
                  >
                    {isExpanded ? "Close Specifications" : "View Specifications"}
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              );
            })}
          </div>

        </Container>
      </section>

      {/* SECTION 3: Expandable Product Details / Spec Sheets */}
      <section className="py-8 bg-white">
        <Container className="max-w-4xl">
          <AnimatePresence mode="wait">
            {expandedCat && (
              <motion.div
                key={expandedCat}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="card gloss-edge rounded-2xl border border-slate-100 bg-white p-7 sm:p-10 shadow-lg"
              >
                {(() => {
                  const currentCat = CATEGORIES_DATA.find(c => c.id === expandedCat);
                  if (!currentCat) return null;
                  return (
                    <div className="flex flex-col gap-8">
                      
                      {/* Sub-header inside details */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/60 pb-6 gap-4">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest text-[#0B4F9E]">Dynamic Spec Sheet</span>
                          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1.5">{currentCat.name}</h2>
                        </div>
                        <div className="badge-gold w-fit">
                          <Info size={15} />
                          NABL Compliant Batch Specs
                        </div>
                      </div>

                      {/* Highlighted Benefits */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {currentCat.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-100 p-4">
                            <CheckCircle2 size={20} className="text-green-600 shrink-0" />
                            <span className="text-sm font-medium text-slate-700 leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Dimensional Grid (Size + Grades) */}
                      {currentCat.specs && (
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Available Dimension Matrix</h4>
                          <div className="overflow-hidden rounded-xl border border-slate-200/70 bg-white">
                            <table className="min-w-full divide-y divide-slate-200">
                              <thead className="bg-slate-50">
                                <tr>
                                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-500 uppercase tracking-wider w-1/4">Nominal Size</th>
                                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-500 uppercase tracking-wider">Configured Stress Grades / Standards</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {currentCat.specs.map((spec, sidx) => (
                                  <tr key={sidx} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-base font-bold text-[#0B4F9E]">{spec.size}</td>
                                    <td className="px-6 py-4">
                                      <div className="flex flex-wrap gap-2">
                                        {spec.grades.map((grade, gidx) => (
                                          <span key={gidx} className="inline-flex items-center rounded-md bg-slate-100 border border-slate-200/50 px-3 py-1.5 text-sm font-medium text-slate-700">
                                            {grade}
                                          </span>
                                        ))}
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* Fittings & Accessories Listing */}
                      {currentCat.fittingsList && (
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Modular Profiles & Product Lines Included</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {currentCat.fittingsList.map((fit, fidx) => (
                              <div key={fidx} className="bg-slate-50 rounded-lg border border-slate-100 p-3.5 flex items-center justify-between">
                                <span className="text-sm font-semibold text-slate-800">{fit}</span>
                                <span className="h-1.5 w-1.5 rounded-full bg-[#C9992E]" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

    </div>
  );
}
