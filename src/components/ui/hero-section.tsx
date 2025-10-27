import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Sparkles, Star, Heart } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gift-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gift-secondary/10 blur-3xl" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-gift-accent" />
                <span className="text-sm font-medium text-gift-primary">Perfect Gifts Await</span>
              </div>
              
              <h1 className="text-5xl font-bold leading-tight">
                Give the{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Perfect Gift
                </span>{" "}
                Every Time
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md">
                Discover thousands of digital gift cards from your favorite brands. 
                Instant delivery, flexible amounts, and memories that last forever.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-gradient-primary hover:opacity-90 shadow-gift"
                onClick={() => {
                  const element = document.getElementById('products-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Gift className="mr-2 h-5 w-5" />
                Browse Gift Cards
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const element = document.getElementById('features-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gift-primary">500+</div>
                <div className="text-sm text-muted-foreground">Brands</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gift-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gift-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Featured Cards */}
              {[
                { name: "Amazon", color: "from-orange-500 to-yellow-500", icon: Heart },
                { name: "Netflix", color: "from-red-500 to-red-600", icon: Star },
                { name: "Spotify", color: "from-green-500 to-green-600", icon: Sparkles },
                { name: "Apple", color: "from-gray-700 to-gray-900", icon: Gift },
              ].map((card, index) => (
                <Card
                  key={card.name}
                  className={`relative overflow-hidden border-0 shadow-gift transition-all duration-500 hover:shadow-gift-hover hover:-translate-y-2 ${
                    index % 2 === 0 ? "mt-8" : ""
                  }`}
                >
                  <div className={`h-32 bg-gradient-to-br ${card.color} p-4 flex items-end justify-between text-white`}>
                    <div>
                      <div className="text-lg font-bold">{card.name}</div>
                      <div className="text-sm opacity-90">Gift Card</div>
                    </div>
                    <card.icon className="h-6 w-6 opacity-75" />
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-gift-accent animate-bounce" />
            <div className="absolute bottom-4 -left-4 h-6 w-6 rounded-full bg-gift-secondary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};