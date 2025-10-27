import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, CreditCard, Send, Gift } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Choose Your Gift Card",
      description: "Browse our extensive collection of gift cards from top brands and select the perfect one.",
      step: "01"
    },
    {
      icon: CreditCard,
      title: "Select Amount & Pay",
      description: "Choose the amount you want to gift and complete the secure payment process.",
      step: "02"
    },
    {
      icon: Send,
      title: "Send to Recipient",
      description: "Enter the recipient's email and add a personal message to make it special.",
      step: "03"
    },
    {
      icon: Gift,
      title: "Instant Delivery",
      description: "The gift card is delivered instantly to the recipient's email inbox.",
      step: "04"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sending digital gift cards has never been easier. Follow these simple steps to give the perfect gift.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-0 bg-gradient-card shadow-card-hover">
              <CardHeader className="text-center">
                <Badge 
                  variant="secondary" 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gift-primary text-white w-8 h-8 rounded-full flex items-center justify-center"
                >
                  {step.step}
                </Badge>
                <step.icon className="h-12 w-12 mx-auto mt-4 text-gift-primary" />
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 bg-gradient-card shadow-card-hover max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle>Additional Features</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">For Gift Givers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Schedule delivery for future dates</li>
                <li>• Add custom messages and themes</li>
                <li>• Track delivery status</li>
                <li>• Bulk purchasing for corporate gifts</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">For Recipients</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Instant email notifications</li>
                <li>• Easy redemption process</li>
                <li>• Mobile-friendly gift cards</li>
                <li>• Balance checking features</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default HowItWorks;