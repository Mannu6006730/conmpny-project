import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, CreditCard, User, Search, Menu } from "lucide-react";
import { AuthDialog } from "@/components/ui/auth-dialog";
import { SearchDialog } from "@/components/ui/search-dialog";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import smartPayflexLogo from "@/assets/smartpayflex-logo.webp";

export const Navigation = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleMyCards = () => {
    navigate('/orders');
  };

  const handleOrders = () => {
    navigate('/orders');
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
              <img 
                src={smartPayflexLogo} 
                alt="SmartPayflex" 
                className="h-16 w-auto"
              />
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Button
                  variant="ghost"
                  className="w-full justify-start bg-muted/50 border-0 text-muted-foreground hover:bg-muted"
                  onClick={() => setSearchOpen(true)}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search gift cards...
                </Button>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex" onClick={handleMyCards}>
                <CreditCard className="mr-2 h-4 w-4" />
                My Cards
              </Button>
              <Button variant="ghost" size="sm" className="hidden md:flex" onClick={handleOrders}>
                <ShoppingBag className="mr-2 h-4 w-4" />
                Orders
              </Button>
              <ThemeToggle />
              <SidebarTrigger className="h-8 w-8" />
              <Button variant="outline" size="sm" onClick={() => setAuthOpen(true)}>
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};