
import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 gradient-bg text-white">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Grow?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of others who've taken the first step toward a brighter future.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-career-purple hover:bg-white/90 rounded-full px-8 shadow-lg">
            Join Career Bloom Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
