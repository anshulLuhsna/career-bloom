
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Option from './Option';
import DetailedOptions from './DetailedOptions';
import GovtExamsTable from './GovtExamsTable';

interface OptionCategoryProps {
  options: Array<{
    icon: React.ElementType;
    title: string;
    description: string;
    details?: Array<{
      name: string;
      description: string;
    }>;
  }>;
}

const OptionCategory: React.FC<OptionCategoryProps> = ({ options }) => {
  return (
    <div className="grid gap-4 mt-2">
      {options.map((option, j) => (
        <Collapsible key={j}>
          <div className="flex items-start">
            <CollapsibleTrigger className="flex-1 text-left">
              <Option
                icon={option.icon}
                title={option.title}
                description={option.description}
              />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            {option.details && option.details.length > 0 && (
              <DetailedOptions details={option.details} />
            )}
            {option.title === "Government Exams After 12th" && <GovtExamsTable />}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default OptionCategory;
