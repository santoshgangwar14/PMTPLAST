// src/components/products/ProductApplications.tsx

import Container from "@/components/ui/Container";
import {
  Building2,
  Factory,
  Home,
  Hospital,
  School,
 Warehouse,
} from "lucide-react";

interface ProductApplicationsProps {
  applications: string[];
}

const icons = [
  Home,
  Building2,
  Factory,
  Hospital,
  School,
  Warehouse,
];

const ProductApplications = ({
  applications,
}: ProductApplicationsProps) => {
  return (
    <section id="applications" className="bg-white py-24">
      <Container className="max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4F9E]">
            Applications
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Designed For Every Electrical Installation
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            PMT Plast PVC Conduit Pipes are trusted across residential,
            commercial and industrial projects for safe, reliable and durable
            electrical wiring systems.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {applications.map((application, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={application}
                className="group rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#0B4F9E] hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B4F9E]/10 transition-all duration-300 group-hover:bg-[#0B4F9E]">
                  <Icon
                    size={30}
                    className="text-[#0B4F9E] group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {application}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Recommended for modern electrical conduit installations where
                  durability, safety and long-term performance are essential.
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ProductApplications;