import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Copy, 
  Download,
  Mail,
  CreditCard
} from "lucide-react";
import { OrderStatus, Card as GiftCard } from "@/types/api";
import { useApi } from "@/hooks/useApi";
import { useToast } from "@/hooks/use-toast";

const Orders = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { getOrderStatus, getOrderCards, loading } = useApi();
  
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);
  const [orderCards, setOrderCards] = useState<GiftCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!orderId) return;

      try {
        const [status, cards] = await Promise.all([
          getOrderStatus(orderId),
          getOrderCards(orderId)
        ]);
        
        setOrderStatus(status);
        setOrderCards(cards);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load order details",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId, getOrderStatus, getOrderCards, toast]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "complete":
        return <CheckCircle className="h-5 w-5 text-gift-success" />;
      case "processing":
        return <Clock className="h-5 w-5 text-gift-warning" />;
      default:
        return <AlertCircle className="h-5 w-5 text-destructive" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "complete":
        return "bg-gift-success/10 text-gift-success border-gift-success/20";
      case "processing":
        return "bg-gift-warning/10 text-gift-warning border-gift-warning/20";
      default:
        return "bg-destructive/10 text-destructive border-destructive/20";
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-32"></div>
            <div className="space-y-4">
              <div className="h-32 bg-muted rounded"></div>
              <div className="h-64 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!orderStatus) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
            <Button onClick={() => navigate("/")} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        <div className="space-y-6 max-w-4xl">
          {/* Order Status Header */}
          <Card className="border-0 bg-gradient-card shadow-card-hover">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Order Details</CardTitle>
                  <p className="text-muted-foreground">Order ID: {orderStatus.orderId}</p>
                </div>
                <Badge className={getStatusColor(orderStatus.status)}>
                  {getStatusIcon(orderStatus.status)}
                  <span className="ml-2">{orderStatus.statusLabel}</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Reference Number</p>
                  <p className="font-medium">{orderStatus.refno}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-medium">{orderStatus.statusLabel}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Cancellation</p>
                  <p className="font-medium">
                    {orderStatus.cancel.allowed ? "Allowed" : "Not Allowed"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Status Alert */}
          {orderStatus.status.toLowerCase() === "complete" && (
            <Alert className="border-gift-success/20 bg-gift-success/10">
              <CheckCircle className="h-4 w-4 text-gift-success" />
              <AlertDescription className="text-gift-success">
                Your order has been completed successfully! Gift cards have been generated and sent.
              </AlertDescription>
            </Alert>
          )}

          {orderStatus.status.toLowerCase() === "processing" && (
            <Alert className="border-gift-warning/20 bg-gift-warning/10">
              <Clock className="h-4 w-4 text-gift-warning" />
              <AlertDescription className="text-gift-warning">
                Your order is being processed. This usually takes a few minutes.
              </AlertDescription>
            </Alert>
          )}

          {/* Gift Cards */}
          {orderCards.length > 0 && (
            <Card className="border-0 bg-gradient-card shadow-card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Your Gift Cards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {orderCards.map((card, index) => (
                  <div key={card.cardId} className="space-y-4">
                    {index > 0 && <Separator />}
                    
                    {/* Card Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{card.productName}</h3>
                        <p className="text-muted-foreground">Amount: ₹{card.amount}</p>
                      </div>
                      <Badge variant="outline">#{card.sku}</Badge>
                    </div>

                    {/* Card Details */}
                    <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-lg bg-muted/50">
                      <div className="space-y-3">
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">
                            {card.labels.cardNumber}
                          </Label>
                          <div className="flex items-center space-x-2 mt-1">
                            <code className="flex-1 p-2 bg-background rounded border font-mono text-sm">
                              {card.cardNumber}
                            </code>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => copyToClipboard(card.cardNumber, "Card Number")}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">
                            {card.labels.cardPin}
                          </Label>
                          <div className="flex items-center space-x-2 mt-1">
                            <code className="flex-1 p-2 bg-background rounded border font-mono text-sm">
                              {card.cardPin}
                            </code>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => copyToClipboard(card.cardPin, "Card PIN")}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">
                            {card.labels.validity}
                          </Label>
                          <p className="text-sm mt-1">
                            {new Date(card.validity).toLocaleDateString()}
                          </p>
                        </div>

                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">
                            Recipient
                          </Label>
                          <p className="text-sm mt-1">{card.recipientDetails.name}</p>
                          <p className="text-xs text-muted-foreground">{card.recipientDetails.email}</p>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mail className="mr-2 h-4 w-4" />
                        Resend Email
                      </Button>
                      {card.redemptionUrl.url && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={card.redemptionUrl.url} target="_blank" rel="noopener noreferrer">
                            Redeem Online
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Order Actions */}
          <Card className="border-0 bg-gradient-card shadow-card-hover">
            <CardHeader>
              <CardTitle>Order Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Invoice
                </Button>
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Receipt
                </Button>
                {orderStatus.cancel.allowed && (
                  <Button variant="destructive" disabled={loading}>
                    Cancel Order
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

// Helper component for labels
const Label = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <label className={className}>{children}</label>
);

export default Orders;