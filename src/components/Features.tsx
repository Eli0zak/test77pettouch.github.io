
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Calendar, File, Image, MapPin, MessageSquare } from 'lucide-react';

const featuresData = [
  {
    icon: <File className="h-8 w-8 text-pet-primary" />,
    title: "Pet Profiles",
    description: "Create detailed profiles with health records, dietary needs, and emergency contacts."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-pet-primary" />,
    title: "Lost & Found Community",
    description: "Connect with other pet owners to help locate missing pets in your area."
  },
  {
    icon: <Bell className="h-8 w-8 text-pet-primary" />,
    title: "Vaccination Reminders",
    description: "Never miss important vaccinations with customizable alerts and notifications."
  },
  {
    icon: <Image className="h-8 w-8 text-pet-primary" />,
    title: "QR Code Integration",
    description: "Generate unique QR codes for your pets that link to their digital profiles."
  },
  {
    icon: <Calendar className="h-8 w-8 text-pet-primary" />,
    title: "Health Logs",
    description: "Track vet visits, medications, and other important health-related activities."
  },
  {
    icon: <MapPin className="h-8 w-8 text-pet-primary" />,
    title: "Scan History",
    description: "Monitor when and where your pet's QR code has been scanned for security."
  }
];

const Features = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-pet-dark mb-4">
            Smart Features for <span className="text-pet-primary">Smart Pet Owners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive set of tools helps you manage every aspect of your pet's life
            from health records to community connections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="border border-border hover:shadow-md transition-all hover-scale">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold text-pet-secondary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
