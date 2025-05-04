
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { PlusCircle, Search } from 'lucide-react';

const LostFound = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Lost & Found</h1>
          <p className="text-gray-600">Community reports for lost and found pets</p>
        </div>
        <Button className="mt-4 md:mt-0 bg-pet-primary hover:bg-pet-secondary">
          <PlusCircle className="mr-2 h-4 w-4" /> Create Report
        </Button>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <Search className="mx-auto h-10 w-10 mb-4 text-gray-400" />
            <p>No lost or found pets have been reported in your area.</p>
            <Button className="mt-4 bg-pet-primary hover:bg-pet-secondary">
              Browse All Reports
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LostFound;
