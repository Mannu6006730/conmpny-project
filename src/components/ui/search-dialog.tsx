import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";
import { Product } from "@/types/api";
import { useApi } from "@/hooks/useApi";
import { useNavigate } from "react-router-dom";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getProducts } = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    const searchProducts = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const products = await getProducts(121, 0, 50);
        const filtered = products.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.sku.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchProducts, 300);
    return () => clearTimeout(debounceTimer);
  }, [query, getProducts]);

  const handleProductClick = (sku: string) => {
    navigate(`/product/${sku}`);
    onOpenChange(false);
    setQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] p-0">
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Input
            placeholder="Search gift cards..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 focus:ring-0 focus:ring-offset-0"
            autoFocus
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onOpenChange(false)}
            className="shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="max-h-[400px] overflow-y-auto p-4">
          {isLoading ? (
            <div className="text-center py-6 text-muted-foreground">
              Searching...
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              {results.map((product) => (
                <div
                  key={product.sku}
                  className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent cursor-pointer transition-colors"
                  onClick={() => handleProductClick(product.sku)}
                >
                  <img
                    src={product.image.thumbnail}
                    alt={product.name}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{product.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {/* {product.currency.symbol}{product.minPrice}
                        {product.minPrice !== product.maxPrice && ` - ${product.currency.symbol}${product.maxPrice}`} */}
                      </Badge>
                      <span className="text-xs text-muted-foreground">#{product.sku}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : query.length >= 2 ? (
            <div className="text-center py-6 text-muted-foreground">
              No products found for "{query}"
            </div>
          ) : (
            <div className="text-center py-6 text-muted-foreground">
              Start typing to search for gift cards...
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};