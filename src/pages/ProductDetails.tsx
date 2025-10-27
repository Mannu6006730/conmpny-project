import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Gift, ShoppingCart, CreditCard, Star, Shield, Clock } from "lucide-react";
import { Product, Theme } from "@/types/api";
import { useApi } from "@/hooks/useApi";
import { useToast } from "@/hooks/use-toast";

const ProductDetails = () => {
  const { sku } = useParams<{ sku: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { getProducts, createOrder, loading } = useApi();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedTheme, setSelectedTheme] = useState<string>("");
  const [recipientEmail, setRecipientEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts(121, 0, 50);
        const foundProduct = products.find(p => p.sku === sku);
        if (foundProduct) {
          setProduct(foundProduct);
          // if (foundProduct.price.cpg[""].denominations.length > 0) {
          //   setSelectedAmount(foundProduct.price.cpg[""].denominations[0]);
          // }
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load product details",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    if (sku) {
      fetchProduct();
    }
  }, [sku, getProducts, toast]);

  const handlePurchase = async () => {
    if (!product) return;

    const amount = customAmount || selectedAmount;
    if (!amount || !recipientEmail) {
      toast({
        title: "Missing Information",
        description: "Please select an amount and enter recipient email",
        variant: "destructive",
      });
      return;
    }

    try {
      const orderData = {
        address: {
          firstname: "Customer",
          lastname: "Name",
          email: recipientEmail,
          telephone: "+919999999999",
          line1: "123 Street",
          line2: "Area",
          city: "City",
          region: "State",
          country: "IN",
          postcode: "123456",
          company: "Company",
          billToThis: true
        },
        billing: {
          firstname: "Customer",
          lastname: "Name",
          email: recipientEmail,
          telephone: "+919999999999",
          line1: "123 Street",
          line2: "Area",
          city: "City",
          region: "State",
          country: "IN",
          postcode: "123456",
          company: "Company"
        },
        payments: [{ code: "svc", amount: parseFloat(amount) }],
        refno: `order_${Date.now()}`,
        syncOnly: true,
        deliveryMode: "API",
        products: [{
          sku: product.sku,
          price: parseFloat(amount),
          qty: 1,
          currency: 'INR',
          theme: selectedTheme || "best_wishes"
        }]
      };

      const order = await createOrder(orderData);
      
      toast({
        title: "Order Successful!",
        description: `Order ${order.orderId} has been created successfully`,
      });

      navigate(`/orders/${order.orderId}`);
    } catch (error) {
      toast({
        title: "Order Failed",
        description: "Failed to create order. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-32"></div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="h-96 bg-muted rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-8 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-32 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button onClick={() => navigate("/")} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // const availableDenominations = product.price.cpg[""].denominations;
  // const isRangePrice = product.price.cpg[""].type === "RANGE";
  const isRangePrice = true;

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

        <div className="grid lg:grid-cols-2 gap-12">
  {/* Product Image & Info */}
  <div className="space-y-6">
    <Card className="overflow-hidden border-0 bg-gradient-card shadow-card-hover">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] flex items-center justify-center bg-white">
          <img
            src={product.image.base}
            alt={product.name}
            className="max-w-full max-h-full object-contain"
          />
          {product.image.small && (
            <div className="absolute top-4 right-4 h-12 w-12 rounded-lg bg-white/90 p-2">
              <img
                src={product.image.small}
                alt="Brand"
                className="h-full w-full object-contain"
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="text-center p-4 border-0 bg-gradient-card">
                <Shield className="h-8 w-8 mx-auto mb-2 text-gift-primary" />
                <p className="text-sm font-medium">Secure</p>
              </Card>
              <Card className="text-center p-4 border-0 bg-gradient-card">
                <Clock className="h-8 w-8 mx-auto mb-2 text-gift-primary" />
                <p className="text-sm font-medium">Instant</p>
              </Card>
              <Card className="text-center p-4 border-0 bg-gradient-card">
                <Star className="h-8 w-8 mx-auto mb-2 text-gift-primary" />
                <p className="text-sm font-medium">Trusted</p>
              </Card>
            </div>
          </div>

          {/* Purchase Form */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="secondary" className="bg-gift-primary/10 text-gift-primary border-0">
                  {/* {product.currency.symbol}{product.minPrice} - {product.currency.symbol}{product.maxPrice} */} 100
                </Badge>
                <Badge variant="outline">#{product.sku}</Badge>
              </div>
              
              {product.description && (
                <p className="text-muted-foreground mb-6">{product.description}</p>
              )}
            </div>

            <Card className="border-0 bg-gradient-card shadow-card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Purchase Gift Card
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount Selection */}
                <div className="space-y-3">
                  <Label>Select Amount</Label>
                  {/* <div className="grid grid-cols-3 gap-3">
                    {availableDenominations.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={selectedAmount === amount ? "bg-gradient-primary hover:bg-gradient-primary hover:opacity-90" : ""}
                      >
                        {product.currency.symbol}{amount}
                      </Button>
                    ))}
                  </div> */}
                  
                  {isRangePrice && (
                    <div className="space-y-2">
                      <Label>Or Enter Custom Amount</Label>
                      <Input
                        type="number"
                        // placeholder={`${product.minPrice} - ${product.maxPrice}`}
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount("");
                        }}
                        // min={product.minPrice}
                        // max={product.maxPrice}
                      />
                    </div>
                  )}
                </div>

                <Separator />

                {/* Recipient Details */}
                <div className="space-y-4">
                  <Label>Recipient Email *</Label>
                  <Input
                    type="email"
                    placeholder="Enter recipient's email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Optional Message */}
                <div className="space-y-2">
                  <Label>Personal Message (Optional)</Label>
                  <Textarea
                    placeholder="Add a personal message for the recipient..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Theme Selection */}
                <div className="space-y-2">
                  <Label>Gift Card Theme</Label>
                  <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="best_wishes">Best Wishes</SelectItem>
                      <SelectItem value="congratulations">Congratulations</SelectItem>
                      <SelectItem value="thank_you">Thank You</SelectItem>
                      <SelectItem value="birthday">Birthday</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                {/* Purchase Summary */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span className="font-semibold">
                      {customAmount || selectedAmount || "0"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Processing Fee:</span>
                    <span>Free</span>
                  </div>
                </div>

                {/* Purchase Button */}
                <Button 
                  onClick={handlePurchase}
                  disabled={loading || (!customAmount && !selectedAmount) || !recipientEmail}
                  className="w-full bg-gradient-primary hover:bg-gradient-primary hover:opacity-90 shadow-gift"
                  size="lg"
                >
                  {loading ? (
                    "Processing..."
                  ) : (
                    <>
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Purchase Gift Card
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;