import Container from "@/components/ui/Container";

interface ProductSeriesProps {
  series: {
    name: string;
    title: string;
  }[];
}

const ProductSeries = ({ series }: ProductSeriesProps) => {
  return (
    <section id="series" className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B4F9E]">
            Available Series
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Mechanical Stress Grades
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Choose the suitable conduit grade based on your installation
            requirements.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {series.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-white p-10 transition hover:-translate-y-2 hover:border-[#0B4F9E] hover:shadow-xl"
            >
              <h3 className="text-5xl font-bold text-[#0B4F9E]">
                {item.name}
              </h3>

              <div className="my-6 h-px bg-slate-200" />

              <p className="text-lg font-medium text-slate-700">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSeries;