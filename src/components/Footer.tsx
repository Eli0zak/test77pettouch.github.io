
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-pet-accent1/30 py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo size={30} />
              <h3 className="text-xl font-bold bg-gradient-to-r from-pet-primary to-pet-secondary bg-clip-text text-transparent">
                PetTouch
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              A smart pet management platform that helps you keep track of your pets' needs and information.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-pet-secondary">Features</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-muted-foreground hover:text-pet-primary">Pet Profiles</Link></li>
              <li><Link to="/features" className="text-muted-foreground hover:text-pet-primary">QR Scan History</Link></li>
              <li><Link to="/features" className="text-muted-foreground hover:text-pet-primary">Reminders</Link></li>
              <li><Link to="/features" className="text-muted-foreground hover:text-pet-primary">Lost & Found</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-pet-secondary">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-pet-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-pet-primary">Contact</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-pet-primary">Careers</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-pet-primary">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-pet-secondary">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-muted-foreground hover:text-pet-primary">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-pet-primary">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground hover:text-pet-primary">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} PetTouch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
