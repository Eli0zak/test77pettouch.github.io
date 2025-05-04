
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About <span className="text-pet-primary">PetTouch</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our mission is to simplify pet care and strengthen the bond between pets and their owners
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
              alt="Pet owner with their dog" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-pet-secondary">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              PetTouch was founded in 2023 by a group of passionate pet owners who recognized the need for a better way to manage pet information and care. After experiencing the stress of lost pets and forgetting important vaccination dates, we set out to create a solution that would make pet ownership simpler and more organized.
            </p>
            <p className="mb-4 text-muted-foreground">
              What started as a simple QR code idea has evolved into a comprehensive platform for pet management, community building, and lost pet recovery. Today, PetTouch serves thousands of pet owners across the country, helping them keep their furry friends healthy, safe, and happy.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-pet-secondary">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-pet-primary">Pet Welfare</h3>
                <p className="text-muted-foreground">
                  We believe in putting the health and happiness of pets first in everything we do.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-pet-primary">Community</h3>
                <p className="text-muted-foreground">
                  We foster connections between pet owners to create a supportive network.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-pet-primary">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly seek better ways to solve pet care challenges through technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-pet-secondary">Join Our Mission</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you're a pet owner, veterinarian, or animal welfare advocate, we invite you to be part of our growing community dedicated to improving the lives of pets everywhere.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
