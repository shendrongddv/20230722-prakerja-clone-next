import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Data
import { dataFAQs } from "@/data";

const FAQCard = () => {
  const items = dataFAQs;

  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={`${item.id}`}
          className="border-0 bg-slate-100 rounded-2xl py-1 px-4"
        >
          <AccordionTrigger className="text-base font-medium text-primary-foreground">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-slate-800">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQCard;
