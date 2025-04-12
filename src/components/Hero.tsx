
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 hero-pattern flex items-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1 animate-fade-in">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Bloom into Your <span className="gradient-text">Best Career</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
                Discover opportunities, sharpen your skills, and land your dream job — all in one place.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                asChild
                size="lg"
                className="bg-career-purple hover:bg-career-purple-dark text-white font-medium rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all group"
              >
                <Link to="/explore">
                  Explore Careers
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-career-teal text-career-teal hover:text-career-teal-dark hover:bg-career-teal/10 rounded-full px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full h-64 sm:h-80 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-career-purple-light to-career-teal-light opacity-20 rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop"
                alt="Diverse professionals collaborating"
                className="w-full h-full object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
