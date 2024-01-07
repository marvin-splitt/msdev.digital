import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { SectionWrapper } from "./section-wrapper";

const faqEntries = [
  {
    question: "I don't have a startup or scale-up, can we still work together?",
    answer:
      "Absolutely! I also work with established companies and agencies. If you have a project in mind, feel free to reach out to me.",
  },
  {
    question: "What is a product audit?",
    answer:
      "A product audit is a 20min call where I introduce myself and we discuss your product (idea). I will give you feedback on how you can improve your product, what could be the next steps or we tackle a specific problem you have. Whatever helps you the most.",
  },
  {
    question: "What is a product prototype?",
    answer:
      "A product prototype is a clickable version of your product idea. It can be used to validate your idea with real users, pitch it to investors or to get early feedback from your team.",
  },
  {
    question: "What is the tech stack you work with?",
    answer:
      "I prefer working with cutting-edge technologies like React, Next.js, TailwindCSS, GraphQL, Prisma, PostgreSQL, TypeScript, Vercel, Figma etc. as they give me the ability to build a solid foundation for your product while providing the ability of real-time collaboration and fast feedback loops. However more importantly I choose the tools that empower you to build and scale your product as fast as possible.",
  },
  {
    question: "How long does it take to build a prototype?",
    answer:
      "It depends on the scope of your project. However, I can usually build a prototype within 2-8 weeks.",
  },
  {
    question:
      "I also need a designer for my product, can you help me with that?",
    answer:
      "I am not a designer myself, however I already worked with a lot of them and therefore I have a strong network of talented designers who would love to help you with your product.",
  },
];

export const FaqSection: React.FC = () => {
  return (
    <SectionWrapper title="FAQ">
      <Accordion type="single" collapsible className="mt-10 w-full">
        {faqEntries.map(({ question, answer }, index) => {
          return (
            <AccordionItem value={`item-${index}`} key={`item-${index}`}>
              <AccordionTrigger className="text-xl font-semibold font-sans hover:no-underline text-left">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-lg">{answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </SectionWrapper>
  );
};
