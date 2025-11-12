import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import smartPayflexLogo from "@/assets/smartpayflex-logo.webp";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={smartPayflexLogo} 
                alt="SmartPayflex" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for digital gift cards and vouchers. Making gifting simple, secure, and instant.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-muted-foreground hover:text-gift-primary transition-colors">
                About Us
              </Link>
              <Link to="/how-it-works" className="block text-muted-foreground hover:text-gift-primary transition-colors">
                How It Works
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-gift-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/bogo" className="block text-muted-foreground hover:text-gift-primary transition-colors">
                Buy One Get One
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <div className="space-y-2 text-sm">
              <Link to="/faq" className="block text-muted-foreground hover:text-gift-primary transition-colors">
                FAQ
              </Link>
              <a href="mailto:info@payflex.in" className="block text-muted-foreground hover:text-gift-primary transition-colors">
                Email Support
              </a>
              <a href="tel:+91- 999-0-737475" className="block text-muted-foreground hover:text-gift-primary transition-colors">
                Call Support
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <div className="space-y-2 text-sm">
              <Link to="/privacy-policy" className="block text-muted-foreground hover:text-gift-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="block text-muted-foreground hover:text-gift-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/refund-policy" className="block text-muted-foreground hover:text-gift-primary transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 SmartPayflex. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <span>Secure payments powered by industry leaders</span>
          </div>
        </div>
      </div>
    </footer>
  );
};