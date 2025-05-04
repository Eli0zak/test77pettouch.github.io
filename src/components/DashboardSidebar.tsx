import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Search, Activity, Bell, BookOpen, 
  CreditCard, Settings, LogOut, MenuIcon, X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

interface SidebarItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const DashboardSidebar = ({ isMobile, isOpen, setIsOpen }: { 
  isMobile: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  
  const sidebarItems: SidebarItem[] = [
    { name: 'Overview', path: '/dashboard', icon: <Home className="h-5 w-5" /> },
    { name: 'My Pets', path: '/dashboard/pets', icon: <BookOpen className="h-5 w-5" /> },
    { name: 'Lost & Found', path: '/dashboard/lost-found', icon: <Search className="h-5 w-5" /> },
    { name: 'Scan Activity', path: '/dashboard/scans', icon: <Activity className="h-5 w-5" /> },
    { name: 'Notifications', path: '/dashboard/notifications', icon: <Bell className="h-5 w-5" /> },
    { name: 'Pet Care Tips', path: '/dashboard/tips', icon: <BookOpen className="h-5 w-5" /> },
    { name: 'Subscription', path: '/dashboard/subscription', icon: <CreditCard className="h-5 w-5" /> },
    { name: 'Settings', path: '/dashboard/settings', icon: <Settings className="h-5 w-5" /> },
  ];
  
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Success",
        description: "You've been logged out successfully.",
      });
      navigate('/');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred during logout.",
        variant: "destructive",
      });
    }
  };
  
  const mobileSidebarClass = isOpen 
    ? "fixed inset-y-0 left-0 w-64 transform translate-x-0 transition-transform duration-200 ease-in-out z-10" 
    : "fixed inset-y-0 left-0 w-64 transform -translate-x-full transition-transform duration-200 ease-in-out z-10";
  
  const content = (
    <div className="h-full flex flex-col bg-white border-r shadow-sm">
      {isMobile && (
        <div className="p-4 flex justify-between items-center border-b">
          <span className="text-xl font-bold bg-gradient-to-r from-pet-primary to-pet-secondary bg-clip-text text-transparent">
            PetTouch
          </span>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
      )}
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center p-2 rounded-lg group ${
                    isActive 
                      ? 'bg-pet-accent1/30 text-pet-primary' 
                      : 'hover:bg-pet-accent1/10 text-gray-700 hover:text-pet-primary'
                  }`}
                  onClick={() => isMobile && setIsOpen(false)}
                >
                  <span className={`${isActive ? 'text-pet-primary' : 'text-gray-500 group-hover:text-pet-primary'}`}>
                    {item.icon}
                  </span>
                  <span className="ml-3">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full flex items-center justify-center text-gray-700 hover:text-pet-primary"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
  
  return (
    <>
      {isMobile ? (
        <>
          <div className={mobileSidebarClass}>
            {content}
          </div>
          {isOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-0"
              onClick={() => setIsOpen(false)}
            />
          )}
        </>
      ) : (
        <div className="w-64 h-full">{content}</div>
      )}
    </>
  );
};

export default DashboardSidebar;
