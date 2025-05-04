
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from '@/components/ui/motion';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-pet-accent1/30 py-16 md:py-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pet-primary to-pet-secondary bg-clip-text text-transparent">
                Smart Pet Management
              </span> 
              <br />
              <span className="text-foreground">For Your Furry Friends</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Create digital profiles for your pets, track health records, set reminders, 
              and connect with the pet community - all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started">
                <Button className="bg-pet-primary hover:bg-pet-secondary text-white px-8 py-6 text-lg">
                  Get Started
                </Button>
              </Link>
              <Link to="/learn-more">
                <Button variant="outline" className="border-pet-primary text-pet-primary hover:bg-pet-accent1 px-8 py-6 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] transform lg:rotate-2 hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                alt="Happy pet with owner" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl overflow-hidden shadow-lg w-32 h-32 bg-white p-2 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
                alt="Cute kitten" 
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-24 right-4 w-64 h-64 rounded-full bg-pet-accent3/30 filter blur-3xl"></div>
      <div className="absolute bottom-12 left-8 w-48 h-48 rounded-full bg-pet-accent2/20 filter blur-2xl"></div>
    </div>
  );
};

export default Hero;
