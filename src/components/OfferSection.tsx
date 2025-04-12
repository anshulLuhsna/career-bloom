
import React from 'react';
import { Briefcase, Book, Users, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Briefcase,
    title: 'Career Pathways',
    description: 'Discover in-demand fields and the steps required to succeed, with detailed roadmaps tailored to your goals.'
  },
  {
    icon: Book,
    title: 'Skill Building',
    description: 'Access curated courses, certifications, and learning tracks that align with your career aspirations.'
  },
  {
    icon: Search,
    title: 'Job Matching',
    description: 'Our smart system connects you with opportunities that match your unique skills, experience, and interests.'
  },
  {
    icon: Users,
    title: 'Mentorship & Networking',
    description: 'Connect with industry experts and join career-focused communities to expand your professional circle.'
  }
];

const OfferSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Offer</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to build a successful career, all in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="glass-card border-transparent hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-career-purple/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-career-purple" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
