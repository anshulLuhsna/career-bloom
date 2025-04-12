
import React from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import OfferSection from '@/components/OfferSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <OfferSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default Index;
