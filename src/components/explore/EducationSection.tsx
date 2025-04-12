
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import OptionCategory from './OptionCategory';

interface EducationSectionProps {
  sections: Array<{
    category: string;
    options: Array<{
      icon: React.ElementType;
      title: string;
      description: string;
      details?: Array<{
        name: string;
        description: string;
      }>;
    }>;
  }>;
}

const EducationSection: React.FC<EducationSectionProps> = ({ sections }) => {
  return (
    <div className="space-y-6">
      {sections.map((section, i) => (
        <Accordion key={i} type="single" collapsible className="bg-white rounded-lg shadow-sm">
          <AccordionItem value={`item-${i}`} className="border-b last:border-0">
            <AccordionTrigger className="px-6 hover:bg-muted/10">
              {section.category}
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-2 pb-4">
              <OptionCategory options={section.options} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default EducationSection;
