
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const MyPets = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Pets</h1>
          <p className="text-gray-600">Manage your registered pets</p>
        </div>
        <Button className="mt-4 md:mt-0 bg-pet-primary hover:bg-pet-secondary">
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Pet
        </Button>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Pets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <p>You haven't registered any pets yet.</p>
            <Button className="mt-4 bg-pet-primary hover:bg-pet-secondary">
              <PlusCircle className="mr-2 h-4 w-4" /> Register Your First Pet
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyPets;
