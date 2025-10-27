import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Eye } from "lucide-react";

interface ProductCardProps {
  sku: string;
  name: string;
  minPrice: string;
  maxPrice: string;
  currency: { symbol: string };
  images: {
    thumbnail: string;
    base: string;
  };
  brandLogo?: string;
  className?: string;
}

export const ProductCard = ({
  sku,
  name,
  minPrice,
  maxPrice,
  currency,
  images,
  brandLogo,
  className,
}: ProductCardProps) => {
  const navigate = useNavigate();

  const priceRange =
    minPrice === maxPrice
      ? `${currency.symbol}${minPrice}`
      : `${currency.symbol}${minPrice} - ${currency.symbol}${maxPrice}`;

  const handleViewProduct = () => {
    navigate(`/product/${sku}`);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/product/${sku}`);
  };

  return (
    <Card
      className={cn(
        "group overflow-hidden border-0 bg-gradient-card shadow-card-hover transition-all duration-300 hover:shadow-gift-hover hover:-translate-y-1 cursor-pointer",
        className
      )}
      onClick={handleViewProduct}
    >
      <CardContent className="p-0">
        {/* ✅ Product Image Section */}
        <div className="relative w-full h-[220px] flex items-center justify-center bg-white overflow-hidden">
          <img
            src={images.base || images.thumbnail}
            alt={name}
            className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />

          {brandLogo && (
            <div className="absolute top-2 right-2 h-6 w-6 rounded bg-white/90 p-1">
              <img
                src={brandLogo}
                alt="Brand"
                className="h-full w-full object-contain"
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-sm text-foreground line-clamp-2 mb-2">
            {name}
          </h3>

          <div className="flex items-center justify-between mb-3">
            <Badge
              variant="secondary"
              className="bg-gift-primary/10 text-gift-primary border-0"
            >
              {priceRange}
            </Badge>
            <span className="text-xs text-muted-foreground">#{sku}</span>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={handleViewProduct}
            >
              <Eye className="mr-2 h-4 w-4" />
              View
            </Button>
            <Button
              size="sm"
              className="flex-1 bg-gradient-primary hover:bg-gradient-primary hover:opacity-90 transition-all duration-300"
              onClick={handleBuyNow}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Buy
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
