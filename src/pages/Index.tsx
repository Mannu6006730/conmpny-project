import { useState, useEffect } from "react";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { CategoryFilter } from "@/components/ui/category-filter";
import { ProductCard } from "@/components/ui/product-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TrendingUp, Clock, Zap } from "lucide-react";
import { Product, Category } from "@/types/api";
import { useApi } from "@/hooks/useApi";
import smartPayflexLogo from "@/assets/smartpayflex-logo.webp";

const mockCategories: Category[] = [
  { id: "entertainment", name: "Entertainment", count: 15 },
  { id: "shopping", name: "Shopping", count: 32 },
  { id: "food", name: "Food & Dining", count: 28 },
  { id: "travel", name: "Travel", count: 12 },
  { id: "gaming", name: "Gaming", count: 18 }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const { getProducts } = useApi();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts(121, 0, 50);
        setProducts(fetchedProducts);
        setHasMore(fetchedProducts.length === 50);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [getProducts]);

  const loadMoreProducts = async () => {
    if (isLoading || !hasMore) return;
    
    try {
      setIsLoading(true);
      const moreProducts = await getProducts(121, products.length, 20);
      setProducts(prev => [...prev, ...moreProducts]);
      setHasMore(moreProducts.length === 20);
    } catch (error) {
      console.error('Failed to load more products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => {
        const categoryMap: { [key: string]: string[] } = {
          entertainment: ['netflix', 'spotify', 'youtube', 'gaming'],
          shopping: ['amazon', 'flipkart', 'myntra', 'shopper'],
          food: ['zomato', 'swiggy', 'domino', 'kfc'],
          travel: ['make', 'booking', 'uber', 'ola'],
          gaming: ['steam', 'google', 'xbox', 'playstation']
        };
        
        if (categoryMap[selectedCategory]) {
          return categoryMap[selectedCategory].some(keyword => 
            product.name.toLowerCase().includes(keyword)
          );
        }
        return true;
      });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />

        <section id="features-section" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose SmartPayflex?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the easiest way to send perfect gifts with our comprehensive platform
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 bg-gradient-card shadow-card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Instant Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Get your gift cards delivered instantly via email or SMS
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-gradient-card shadow-card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Best Prices</h3>
                  <p className="text-sm text-muted-foreground">
                    Competitive pricing with exclusive deals and discounts
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-gradient-card shadow-card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Round-the-clock customer support for all your needs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="products-section" className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Popular Gift Cards</h2>
                <p className="text-muted-foreground">
                  Choose from our most loved brands and categories
                </p>
              </div>
              <Badge variant="secondary" className="bg-gift-accent/10 text-gift-accent border-0">
                {filteredProducts.length} Products
              </Badge>
            </div>

            <div className="mb-8">
              <CategoryFilter
                categories={mockCategories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            {isLoading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Card key={i} className="border-0 bg-gradient-card">
                    <CardContent className="p-0">
                      <Skeleton className="aspect-[4/3] w-full" />
                      <div className="p-4 space-y-3">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-8 w-full" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.sku ?? index}
                    sku={product.sku}
                    name={product.name}
                    minPrice={'10'}
                    maxPrice={'100'}
                    images={product.image}
                    currency={{symbol:'INR'}}
                    brandLogo={product.image?.small}
                  />
                ))}
              </div>
            )}

            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={loadMoreProducts}
                disabled={isLoading || !hasMore}
              >
                {isLoading ? "Loading..." : hasMore ? "Load More Products" : "No More Products"}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img 
                src={smartPayflexLogo} 
                alt="SmartPayflex" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Making gifting simple, instant, and memorable.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
