
import React from 'react';
import ExploreOptions from '@/components/ExploreOptions';

const Explore: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Explore Career Paths
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Select your education level to discover tailored opportunities and next steps.
          </p>
          <p className="text-sm text-muted-foreground">
            We've organized comprehensive career information to help you make informed decisions
            about your future. Click on any option to expand and see detailed pathways.
          </p>
        </div>
        
        <ExploreOptions />
      </div>
    </div>
  );
};

export default Explore;
