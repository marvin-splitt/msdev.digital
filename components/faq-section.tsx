import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export const FaqSection: React.FC = () => {
  return (
    <div className="container">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">FAQ</h2>
      <Accordion type="single" collapsible className="mt-10">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-semibold font-sans hover:no-underline">
            I don&apos;t have a startup or scale-up, can we still work together?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Absolutely! I also work with established companies and agencies. If
            you have a project in mind, feel free to reach out to me.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-semibold font-sans hover:no-underline">
            What is a product audit?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            A product audit is a 20min call where I introduce myself and we
            discuss your product (idea). I will give you feedback on how you can
            improve your product, what could be the next steps or we tackle a
            specific problem you have. Whatever helps you the most.
          </AccordionContent>
        </AccordionItem>
        {/* <AccordionItem value="item-3">
          <AccordionTrigger>What is a product prototype?</AccordionTrigger>
          <AccordionContent>
            A product prototype is a clickable version of your product idea. It
            can be used to validate your idea with real users, pitch it to
            investors or to get early feedback from your team.
          </AccordionContent>
        </AccordionItem> */}
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl font-semibold font-sans hover:no-underline">
            What is the tech stack you work with?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            I prefer working with cutting-edge technologies like React, Next.js,
            TailwindCSS, GraphQL, Prisma, PostgreSQL, TypeScript, Vercel, Figma
            etc. as they give me the ability to build a solid foundation for
            your product while providing the ability of real-time collaboration
            and fast feedback loops. <br /> However more importantly I choose
            the tools that empower you to build and scale your product as fast
            as possible.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl font-semibold font-sans hover:no-underline">
            How long does it take to build a prototype?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            It depends on the scope of your project. However, I can usually
            build a prototype within 2-8 weeks.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-xl font-semibold font-sans hover:no-underline">
            I also need a designer for my product, can you help me with that?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            I am not a designer myself, however I already worked with a lot of
            them and therefore I have a strong network of talented designers who
            would love to help you with your product.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
