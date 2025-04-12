
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EducationSection from './explore/EducationSection';
import { afterTenthOptions, afterTwelfthOptions } from './explore/EducationOptions';

const ExploreOptions: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container px-4 md:px-6">
        <Tabs defaultValue="after-10th-12th" className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="after-10th-12th" className="text-sm sm:text-base">After 10th / 12th</TabsTrigger>
              <TabsTrigger value="after-graduation" className="text-sm sm:text-base">After Graduation</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="after-10th-12th" className="mt-4 animate-fade-in">
            <EducationSection sections={afterTenthOptions} />
          </TabsContent>

          <TabsContent value="after-graduation" className="mt-4 animate-fade-in">
            <EducationSection sections={afterTwelfthOptions} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExploreOptions;
