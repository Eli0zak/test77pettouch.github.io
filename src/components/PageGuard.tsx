
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

interface PageGuardProps {
  children: ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}

const PageGuard = ({ 
  children, 
  requireAuth = false, 
  redirectTo = '/auth' 
}: PageGuardProps) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      const { data } = await supabase.auth.getSession();
      const authenticated = !!data.session;
      setIsAuthenticated(authenticated);
      
      if (requireAuth && !authenticated) {
        navigate(redirectTo);
      } else if (authenticated && !requireAuth && redirectTo === '/auth') {
        // If user is authenticated and trying to access a non-auth page like the landing page
        // Redirect to dashboard
        navigate('/dashboard');
      }
      
      setLoading(false);
    };
    
    checkAuthStatus();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const authenticated = !!session;
      setIsAuthenticated(authenticated);
      
      if (requireAuth && !authenticated) {
        navigate(redirectTo);
      } else if (authenticated && !requireAuth && redirectTo === '/auth') {
        // Redirect authenticated users accessing public pages to dashboard
        navigate('/dashboard');
      }
    });
    
    return () => subscription.unsubscribe();
  }, [navigate, requireAuth, redirectTo]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return <>{children}</>;
};

export default PageGuard;
