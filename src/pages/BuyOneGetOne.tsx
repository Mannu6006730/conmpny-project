import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Star, Clock, Shield } from "lucide-react";

const BuyOneGetOne = () => {
  const bogoOffers = [
    {
      brand: "Amazon",
      offer: "Buy ₹1000, Get ₹200 Free",
      validity: "Valid till Dec 31, 2024",
      terms: "Minimum purchase of ₹1000 required"
    },
    {
      brand: "Flipkart",
      offer: "Buy ₹2000, Get ₹500 Free",
      validity: "Valid till Dec 31, 2024",
      terms: "Applicable on select categories"
    },
    {
      brand: "BookMyShow",
      offer: "Buy 2 Get 1 Free",
      validity: "Valid till Dec 31, 2024",
      terms: "Valid for movie tickets only"
    },
    {
      brand: "Uber",
      offer: "Buy ₹500, Get ₹100 Free",
      validity: "Valid till Dec 31, 2024",
      terms: "First time users only"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-gift-primary/10 text-gift-primary mb-4">
            Limited Time Offers
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Buy One Get One Offers</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Double your gifting power with our exclusive BOGO deals. Get more value on your favorite brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-0 bg-gradient-card shadow-card-hover">
            <CardContent className="pt-6">
              <Gift className="h-12 w-12 mx-auto mb-4 text-gift-primary" />
              <h3 className="font-semibold mb-2">Double Value</h3>
              <p className="text-sm text-muted-foreground">Get extra gift cards for free</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gradient-card shadow-card-hover">
            <CardContent className="pt-6">
              <Star className="h-12 w-12 mx-auto mb-4 text-gift-primary" />
              <h3 className="font-semibold mb-2">Premium Brands</h3>
              <p className="text-sm text-muted-foreground">Top brands participating</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gradient-card shadow-card-hover">
            <CardContent className="pt-6">
              <Clock className="h-12 w-12 mx-auto mb-4 text-gift-primary" />
              <h3 className="font-semibold mb-2">Limited Time</h3>
              <p className="text-sm text-muted-foreground">Grab before it's gone</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gradient-card shadow-card-hover">
            <CardContent className="pt-6">
              <Shield className="h-12 w-12 mx-auto mb-4 text-gift-primary" />
              <h3 className="font-semibold mb-2">No Catch</h3>
              <p className="text-sm text-muted-foreground">Genuine offers, no hidden terms</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {bogoOffers.map((offer, index) => (
            <Card key={index} className="border-0 bg-gradient-card shadow-card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{offer.brand}</CardTitle>
                  <Badge variant="secondary" className="bg-gift-primary/10 text-gift-primary">
                    BOGO
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gift-primary mb-2">{offer.offer}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{offer.validity}</p>
                  <p className="text-xs text-muted-foreground">{offer.terms}</p>
                </div>
                <Button className="w-full bg-gradient-primary hover:bg-gradient-primary hover:opacity-90 shadow-gift">
                  Claim Offer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 bg-gradient-card shadow-card-hover mt-12">
          <CardHeader className="text-center">
            <CardTitle>How BOGO Offers Work</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-gift-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gift-primary font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Select BOGO Offer</h3>
              <p className="text-muted-foreground text-sm">Choose from available buy one get one offers</p>
            </div>
            <div>
              <div className="bg-gift-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gift-primary font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Meet Requirements</h3>
              <p className="text-muted-foreground text-sm">Purchase the minimum required amount</p>
            </div>
            <div>
              <div className="bg-gift-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gift-primary font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Get Free Gift Card</h3>
              <p className="text-muted-foreground text-sm">Receive your bonus gift card instantly</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default BuyOneGetOne;