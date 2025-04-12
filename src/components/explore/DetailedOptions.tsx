
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";

interface DetailedOptionsProps {
  details: {
    name: string;
    description: string;
  }[];
}

const DetailedOptions: React.FC<DetailedOptionsProps> = ({ details }) => {
  return (
    <div className="space-y-3 pl-6 mt-2">
      {details.map((detail, i) => (
        <div key={i} className="flex items-start space-x-3">
          <Checkbox id={`detail-${i}`} className="mt-1" />
          <div>
            <label htmlFor={`detail-${i}`} className="font-medium cursor-pointer">{detail.name}</label>
            <p className="text-sm text-muted-foreground">{detail.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailedOptions;
