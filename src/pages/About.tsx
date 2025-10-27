import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Shield, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About SmartPayflex</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for digital gift cards and vouchers. We make gifting simple, secure, and instant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-0 bg-gradient-card shadow-card-hover">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-gift-primary" />
              <h3 className="font-semibold mb-2">10M+ Users</h3>
              <p className="text-sm text-muted-foreground">Trusted by millions worldwide</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gradient-card shadow-card-hover">
            <CardContent className="pt-6">
              <Award className="h-12 w-12 mx-auto mb-4 text-gift-primary" />
              <h3 className="font-semibold mb-2">Award Winning</h3>
              <p className="text-sm text-muted-foreground">Industry recognized platform</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gradient-card shadow-card-hover">
            <CardContent className="pt-6">
              <Shield className="h-12 w-12 mx-auto mb-4 text-gift-primary" />
              <h3 className="font-semibold mb-2">100% Secure</h3>
              <p className="text-sm text-muted-foreground">Bank-grade security</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gradient-card shadow-card-hover">
            <CardContent className="pt-6">
              <Clock className="h-12 w-12 mx-auto mb-4 text-gift-primary" />
              <h3 className="font-semibold mb-2">Instant Delivery</h3>
              <p className="text-sm text-muted-foreground">Delivered within seconds</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-0 bg-gradient-card shadow-card-hover">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                At SmartPayflex, we believe gifting should be effortless and meaningful. Our mission is to revolutionize 
                the way people give and receive gifts through innovative digital solutions.
              </p>
              <p className="text-muted-foreground">
                We partner with top brands to offer the widest selection of gift cards, ensuring there's always 
                the perfect gift for every occasion and recipient.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-card shadow-card-hover">
            <CardHeader>
              <CardTitle>Why Choose Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Badge variant="secondary" className="bg-gift-primary/10 text-gift-primary">✓</Badge>
                <span>Instant digital delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="secondary" className="bg-gift-primary/10 text-gift-primary">✓</Badge>
                <span>Wide selection of brands</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="secondary" className="bg-gift-primary/10 text-gift-primary">✓</Badge>
                <span>Secure payment processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="secondary" className="bg-gift-primary/10 text-gift-primary">✓</Badge>
                <span>24/7 customer support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="secondary" className="bg-gift-primary/10 text-gift-primary">✓</Badge>
                <span>Mobile-friendly platform</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;