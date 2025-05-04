
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from 'lucide-react';

const ScanActivity = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Scan Activity</h1>
        <p className="text-gray-600">Track when and where your pets' QR tags have been scanned</p>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recent Scans</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <Activity className="mx-auto h-10 w-10 mb-4 text-gray-400" />
            <p>No scan activity detected yet.</p>
            <p className="mt-2">When someone scans your pet's QR tag, the activity will appear here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScanActivity;
