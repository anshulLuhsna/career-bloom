
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface OptionProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Option: React.FC<OptionProps> = ({ icon: Icon, title, description }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex items-start space-x-4">
        <div className="mt-1 bg-career-purple/10 p-2 rounded-full">
          <Icon className="h-5 w-5 text-career-purple" />
        </div>
        <div>
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Option;
