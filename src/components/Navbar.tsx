
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Menu, LogOut, LayoutDashboard } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import Logo from './Logo';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check initial auth state
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
    };
    
    checkAuth();
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });
    
    return () => subscription.unsubscribe();
  }, []);

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

  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size={40} />
          <span className="text-2xl font-bold bg-gradient-to-r from-pet-primary to-pet-secondary bg-clip-text text-transparent">
            PetTouch
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-pet-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-foreground hover:text-pet-primary transition-colors">
            About
          </Link>
          <Link to="/features" className="text-foreground hover:text-pet-primary transition-colors">
            Features
          </Link>
          <Link to="/learn-more" className="text-foreground hover:text-pet-primary transition-colors">
            Learn More
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard">
                <Button className="bg-pet-primary hover:bg-pet-secondary text-white">
                  <LayoutDashboard className="h-4 w-4 mr-2" /> Dashboard
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-pet-primary text-pet-primary hover:bg-pet-accent1"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" /> Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/auth">
                <Button variant="outline" className="border-pet-primary text-pet-primary hover:bg-pet-accent1">
                  Login
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-pet-primary hover:bg-pet-secondary text-white">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
