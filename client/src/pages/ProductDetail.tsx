import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, ShoppingCart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in real app, fetch from API
  const product = {
    id: '1',
    name: 'Royal Blue Banarasi Silk Saree',
    price: 8999,
    originalPrice: 12999,
    images: [
      'https://images.unsplash.com/photo-1583391733956-6c78276477e8?w=600',
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600',
      'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600'
    ],
    description: 'Exquisite Royal Blue Banarasi Silk Saree featuring intricate gold zari work. This traditional masterpiece is perfect for weddings, festivals, and special occasions. Crafted by skilled artisans in Varanasi, this saree represents the pinnacle of Indian textile craftsmanship.',
    material: 'Pure Silk',
    work: 'Gold Zari Work',
    occasion: 'Wedding, Festival, Party',
    color: 'Royal Blue',
    length: '6.3 meters',
    blousePiece: 'Included (0.8 meters)',
    careInstructions: 'Dry Clean Only',
    badge: 'Best Seller',
    isInStock: true,
    stockCount: 15,
    features: [
      'Handwoven Banarasi Silk',
      'Intricate Gold Zari Border',
      'Traditional Motifs',
      'Luxurious Feel',
      'Authentic Varanasi Craft'
    ]
  };

  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Absolutely beautiful saree! The quality is exceptional and the color is exactly as shown.',
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Anita Patel',
      rating: 5,
      comment: 'Perfect for my daughter\'s wedding. Everyone complimented the beautiful work.',
      date: '2024-01-10'
    },
    {
      id: 3,
      name: 'Meera Reddy',
      rating: 4,
      comment: 'Good quality saree, fast delivery. Would recommend!',
      date: '2024-01-05'
    }
  ];

  const relatedProducts = [
    {
      id: '2',
      name: 'Golden Kanjeevaram Saree',
      price: 15999,
      originalPrice: 19999,
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500',
      badge: 'Premium',
      isInStock: true
    },
    {
      id: '3',
      name: 'Elegant Red Silk Saree',
      price: 6999,
      originalPrice: 8999,
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=500',
      badge: 'Sale',
      isInStock: true
    },
    {
      id: '4',
      name: 'Designer Cotton Saree',
      price: 2999,
      originalPrice: 3999,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500',
      badge: 'New',
      isInStock: true
    }
  ];

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: quantity,
      },
    });

    toast({
      title: "Added to Cart",
      description: `${quantity} x ${product.name} added to your cart`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} has been added to your wishlist`,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Navigate to checkout - implement this based on your routing
  };

  return (
    <div className="min-h-screen flex flex-col mt-20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-primary">Sarees</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 lg:h-[600px] object-cover rounded-lg"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {product.badge}
                </Badge>
              )}
              {discountPercentage > 0 && (
                <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                  {discountPercentage}% OFF
                </Badge>
              )}
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold font-['Playfair_Display'] text-primary mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-primary">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
                <Badge variant="destructive">
                  {discountPercentage}% OFF
                </Badge>
              </div>
              <p className="text-green-600 font-medium">
                You save ₹{(product.originalPrice - product.price).toLocaleString()}
              </p>
            </div>

            <div className="border-t pt-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                {product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="font-medium">Material:</span> {product.material}</div>
                <div><span className="font-medium">Work:</span> {product.work}</div>
                <div><span className="font-medium">Color:</span> {product.color}</div>
                <div><span className="font-medium">Length:</span> {product.length}</div>
                <div><span className="font-medium">Occasion:</span> {product.occasion}</div>
                <div><span className="font-medium">Blouse:</span> {product.blousePiece}</div>
              </div>
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Actions */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 hover:bg-secondary"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 hover:bg-secondary"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.stockCount} available)
                </span>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button onClick={handleAddToCart} className="btn-primary flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button onClick={handleBuyNow} className="btn-secondary flex-1">
                  Buy Now
                </Button>
                <Button onClick={handleAddToWishlist} variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Service Features */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Truck className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-medium">Free Shipping</div>
                    <div className="text-sm text-muted-foreground">On orders above ₹2999</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-medium">Easy Returns</div>
                    <div className="text-sm text-muted-foreground">7 days return policy</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-medium">Authentic</div>
                    <div className="text-sm text-muted-foreground">100% genuine products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
              <TabsTrigger value="reviews">Reviews (3)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Product Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Fabric Details</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>Material: {product.material}</li>
                        <li>Work: {product.work}</li>
                        <li>Weave: Handloom</li>
                        <li>Transparency: Opaque</li>
                        <li>Weight: Medium</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Dimensions</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>Saree Length: {product.length}</li>
                        <li>Blouse Piece: {product.blousePiece}</li>
                        <li>Border Width: 4 inches</li>
                        <li>Pallu Length: 1.2 meters</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="care" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Care Instructions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Washing</h4>
                      <p className="text-sm text-muted-foreground">
                        {product.careInstructions}. Do not machine wash or hand wash as it may damage the delicate zari work.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Storage</h4>
                      <p className="text-sm text-muted-foreground">
                        Store in a cool, dry place. Wrap in muslin cloth and avoid plastic bags for long-term storage.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Ironing</h4>
                      <p className="text-sm text-muted-foreground">
                        Iron on low heat with a cloth covering the saree to protect the zari work.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium">{review.name}</h4>
                          <div className="flex items-center space-x-1 mt-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="text-secondary">⭐</span>
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold font-['Playfair_Display'] text-primary mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
