
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  isInStock: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!product.isInStock) {
      toast({
        title: "Out of Stock",
        description: "This product is currently out of stock",
        variant: "destructive",
      });
      return;
    }

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      },
    });

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to Wishlist",
      description: `${product.name} has been added to your wishlist`,
    });
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group cursor-pointer card-hover overflow-hidden relative">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.badge && (
              <Badge className="bg-accent text-accent-foreground">
                {product.badge}
              </Badge>
            )}
            {discountPercentage > 0 && (
              <Badge className="bg-destructive text-destructive-foreground">
                {discountPercentage}% OFF
              </Badge>
            )}
            {!product.isInStock && (
              <Badge variant="secondary">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleAddToWishlist}
            className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full transition-colors duration-200 opacity-0 group-hover:opacity-100"
          >
            <Heart className="h-4 w-4 text-primary" />
          </button>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              onClick={handleAddToCart}
              disabled={!product.isInStock}
              className="w-full btn-primary"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {product.isInStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl font-bold text-primary">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {discountPercentage > 0 && (
            <p className="text-sm text-green-600 font-medium">
              You save ₹{(product.originalPrice! - product.price).toLocaleString()}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
