
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 px-6 bg-pet-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Simplify Your Pet Care Journey?
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Join thousands of pet owners who trust PetTouch to manage their pets' health, safety, and wellbeing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/get-started">
            <Button size="lg" variant="secondary" className="bg-white text-pet-primary hover:bg-pet-accent1 px-8">
              Sign Up Now
            </Button>
          </Link>
          <Link to="/learn-more">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 px-8">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
