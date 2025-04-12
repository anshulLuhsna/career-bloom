
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="about">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About <span className="gradient-text">Career Bloom</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-career-purple">Your Growth, Our Mission</p>
          <div className="mt-8 text-lg text-muted-foreground">
            <p>
              At Career Bloom, we believe that everyone deserves a fulfilling career journey. 
              Whether you're just starting out, looking to switch fields, or aiming to climb higher in your current path, 
              we provide the tools, guidance, and resources needed to help you flourish.
            </p>
            <p className="mt-4">
              Our platform is designed to meet you where you are and guide you to where you want to be. 
              With personalized pathways, expert advice, and a supportive community, 
              we're committed to helping you bloom into your professional best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
