
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Check, CreditCard } from 'lucide-react';

const Subscription = () => {
  const planFeatures = {
    free: ["1 pet profile", "Basic QR tag", "Community access"],
    premium: ["Up to 5 pet profiles", "Premium QR tag", "Scan notifications", "Lost & Found priority", "24/7 support"],
    business: ["Unlimited pet profiles", "Custom QR tags", "Advanced analytics", "API access", "Priority support"]
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Subscription</h1>
        <p className="text-gray-600">Manage your PetTouch subscription plan</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Free Plan */}
        <Card className="border-2 border-gray-200">
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>Basic pet protection</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {planFeatures.free.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" disabled>
              Current Plan
            </Button>
          </CardFooter>
        </Card>
        
        {/* Premium Plan */}
        <Card className="border-2 border-pet-primary">
          <CardHeader>
            <div className="bg-pet-accent1/30 text-pet-primary text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full w-fit">
              Popular
            </div>
            <CardTitle className="mt-2">Premium</CardTitle>
            <CardDescription>Enhanced protection</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">$4.99</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {planFeatures.premium.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-pet-primary hover:bg-pet-secondary">
              Upgrade Now
            </Button>
          </CardFooter>
        </Card>
        
        {/* Business Plan */}
        <Card className="border-2 border-gray-200">
          <CardHeader>
            <CardTitle>Business</CardTitle>
            <CardDescription>Professional solution</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">$12.99</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {planFeatures.business.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Contact Sales
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="h-5 w-5 mr-2" />
            Billing Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6 text-gray-500">
            <p>You are currently on the Free plan.</p>
            <p className="mt-2">Upgrade to access premium features and increase your pet limit.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Subscription;
