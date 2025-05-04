import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { PlusCircle, AlertCircle, ArrowUpRight, User, Clock, CreditCard, Layers } from 'lucide-react';
import { useDashboard } from '@/features/dashboard/useDashboard';

const Dashboard = () => {
  const { user, loading, stats } = useDashboard();

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading dashboard...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.email?.split('@')[0]}</h1>
            <p className="text-gray-600">Here's what's happening with your pets today.</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-pet-primary hover:bg-pet-secondary">
            + Add New Pet
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Total Pets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold">{stats.totalPets}</span>
                <Layers className="h-8 w-8 text-pet-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Recent Scans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold">{stats.recentScans}</span>
                <Clock className="h-8 w-8 text-pet-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold">{stats.currentPlan}</span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Pet Limit</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold">{stats.petLimit}</span>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <div className="bg-white shadow rounded-lg p-4">
          {stats.recentActivity?.length ? (
            stats.recentActivity.map((activity, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <span>{activity.description}</span>
                <span className="text-gray-500 text-sm">{activity.date}</span>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No recent activity to display.</p>
              <p className="mt-2">Register your first pet to start tracking activities.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
