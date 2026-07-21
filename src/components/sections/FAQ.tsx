import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/data/content";

const FAQ = () => {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <Container className="mx-auto flex max-w-3xl flex-col gap-14">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Answers for Specifiers & Procurement Teams"
          description="Common questions from architects, MEP consultants and contractors evaluating PMT Plast conduit systems."
        />
        <Accordion items={faqs} />
      </Container>
    </section>
  );
};

export default FAQ;
