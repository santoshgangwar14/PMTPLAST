import { clients } from "@/data/content";
import Container from "@/components/ui/Container";

const TrustBar = () => {
  const looped = [...clients, ...clients];

  return (
    <section className="border-y border-line bg-white py-10">
      <Container>
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Trusted by Leading Developers, Contractors & EPC Consultants
        </p>
      </Container>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee gap-16 px-8">
          {looped.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex flex-shrink-0 items-center whitespace-nowrap text-lg font-bold tracking-tight text-slate-300"
            >
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
