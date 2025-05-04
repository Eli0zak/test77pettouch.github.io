
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const GetStarted = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-pet-primary to-pet-secondary bg-clip-text text-transparent">
              Getting Started with PetTouch
            </span>
          </h1>
          
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Welcome to PetTouch! We're excited to help you provide the best care for your pets.
              Follow these simple steps to get started:
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pet-primary rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pet-primary">Create your account</h3>
                  <p className="text-gray-600 mt-1">
                    Sign up with your email address to create your personal PetTouch account.
                  </p>
                  <Link to="/auth" className="inline-block mt-2 text-pet-primary hover:text-pet-secondary font-medium">
                    Register now →
                  </Link>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pet-primary rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pet-primary">Set up your pet profiles</h3>
                  <p className="text-gray-600 mt-1">
                    Add your pets to the system with their details, photos, and medical information.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pet-primary rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pet-primary">Generate QR tags</h3>
                  <p className="text-gray-600 mt-1">
                    Create unique QR codes for your pets that can be attached to their collars.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pet-primary rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pet-primary">Set up reminders</h3>
                  <p className="text-gray-600 mt-1">
                    Configure reminders for vaccinations, medications, and other important pet care events.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/auth">
              <Button className="bg-pet-primary hover:bg-pet-secondary text-white px-8 py-6 text-lg">
                Create Your Account
              </Button>
            </Link>
            <p className="mt-4 text-gray-600">
              Already have an account?{" "}
              <Link to="/auth" className="text-pet-primary hover:text-pet-secondary font-medium">
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetStarted;
