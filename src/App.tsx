
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import FeaturesPage from "./pages/FeaturesPage";
import Auth from "./pages/Auth";
import LearnMore from "./pages/LearnMore";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";
import PageGuard from "./components/PageGuard";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/DashboardLayout";

// Import placeholder pages for dashboard sections
import MyPets from "./pages/dashboard/MyPets";
import LostFound from "./pages/dashboard/LostFound";
import ScanActivity from "./pages/dashboard/ScanActivity";
import Notifications from "./pages/dashboard/Notifications";
import PetCareTips from "./pages/dashboard/PetCareTips";
import Subscription from "./pages/dashboard/Subscription";
import Settings from "./pages/dashboard/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes - not requiring authentication */}
          <Route path="/" element={<PageGuard><Index /></PageGuard>} />
          <Route path="/about" element={<PageGuard><About /></PageGuard>} />
          <Route path="/features" element={<PageGuard><FeaturesPage /></PageGuard>} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/learn-more" element={<PageGuard><LearnMore /></PageGuard>} />
          <Route path="/get-started" element={<PageGuard><GetStarted /></PageGuard>} />
          
          {/* Dashboard Routes - requiring authentication */}
          <Route path="/dashboard" element={
            <PageGuard requireAuth={true}>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </PageGuard>
          } />
          
          {/* Add other dashboard routes here */}
          <Route path="/dashboard/pets" element={
            <PageGuard requireAuth={true}>
              <DashboardLayout>
                <MyPets />
              </DashboardLayout>
            </PageGuard>
          } />
          <Route path="/dashboard/lost-found" element={
            <PageGuard requireAuth={true}>
              <DashboardLayout>
                <LostFound />
              </DashboardLayout>
            </PageGuard>
          } />
          <Route path="/dashboard/scans" element={
            <PageGuard requireAuth={true}>
              <DashboardLayout>
                <ScanActivity />
              </DashboardLayout>
            </PageGuard>
          } />
          <Route path="/dashboard/notifications" element={
            <PageGuard requireAuth={true}>
              <DashboardLayout>
                <Notifications />
              </DashboardLayout>
            </PageGuard>
          } />
          <Route path="/dashboard/tips" element={
            <PageGuard requireAuth={true}>
              <DashboardLayout>
                <PetCareTips />
              </DashboardLayout>
            </PageGuard>
          } />
          <Route path="/dashboard/subscription" element={
            <PageGuard requireAuth={true}>
              <DashboardLayout>
                <Subscription />
              </DashboardLayout>
            </PageGuard>
          } />
          <Route path="/dashboard/settings" element={
            <PageGuard requireAuth={true}>
              <DashboardLayout>
                <Settings />
              </DashboardLayout>
            </PageGuard>
          } />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
