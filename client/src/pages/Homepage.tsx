import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Truck, Shield, RotateCcw, Award, Users, Heart } from 'lucide-react';

const Homepage = () => {
  // Hero section background images
  const heroImages = [
    'https://media.istockphoto.com/id/1036622394/vector/sari-indian-seamless-pattern.jpg?s=612x612&w=0&k=20&c=Q9Cz352TyxGmm8Sme9XAO81UqugSqX0WFVhw17Q_L04=',
    'https://st5.depositphotos.com/43709112/65870/i/450/depositphotos_658709748-stock-photo-seamless-raster-pano-wallpaper-vintage.jpg',
    'https://img.freepik.com/free-vector/mandala-illustration_53876-75291.jpg',
    'https://www.singhanias.in/cdn/shop/collections/1bc496069b789b8c48a09ed954a98111.jpg?v=1688999281'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const categories = [{
    name: 'Banarasi',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e8?w=500',
    description: 'Traditional silk sarees with intricate gold patterns',
    count: '120+ Designs'
  }, {
    name: 'Kanjeevaram',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500',
    description: 'South Indian silk sarees with rich borders',
    count: '85+ Designs'
  }, {
    name: 'Cotton',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500',
    description: 'Comfortable daily wear sarees',
    count: '200+ Designs'
  }, {
    name: 'Partywear',
    image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=500',
    description: 'Elegant sarees for special occasions',
    count: '95+ Designs'
  }];
  const featuredProducts = [{
    id: '1',
    name: 'Royal Blue Banarasi Silk Saree',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e8?w=500',
    badge: 'Best Seller',
    rating: 4.8,
    reviews: 124
  }, {
    id: '2',
    name: 'Golden Kanjeevaram Saree',
    price: 15999,
    originalPrice: 19999,
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500',
    badge: 'Premium',
    rating: 4.9,
    reviews: 89
  }, {
    id: '3',
    name: 'Elegant Red Silk Saree',
    price: 6999,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=500',
    badge: 'Sale',
    rating: 4.7,
    reviews: 156
  }, {
    id: '4',
    name: 'Designer Cotton Saree',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500',
    badge: 'New',
    rating: 4.6,
    reviews: 67
  }];
  const testimonials = [{
    name: 'Priya Sharma',
    text: 'Absolutely stunning collection! The quality is exceptional and the delivery was prompt. Highly recommend Varnikaa for authentic sarees.',
    rating: 5,
    location: 'Mumbai, Maharashtra',
    verified: true
  }, {
    name: 'Anita Patel',
    text: 'I love shopping at Varnikaa. Their sarees are beautiful and authentic. The customer service is outstanding.',
    rating: 5,
    location: 'Ahmedabad, Gujarat',
    verified: true
  }, {
    name: 'Meera Reddy',
    text: 'Great customer service and amazing variety of sarees. The packaging was excellent and delivery was on time.',
    rating: 5,
    location: 'Hyderabad, Telangana',
    verified: true
  }];
  const whyChooseUs = [{
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Authentic Quality',
    description: '100% genuine handloom sarees directly from artisans'
  }, {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Free Shipping',
    description: 'Free delivery across India on orders above ₹2999'
  }, {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Secure Shopping',
    description: 'Safe and secure payment with buyer protection'
  }, {
    icon: <RotateCcw className="h-8 w-8 text-primary" />,
    title: 'Easy Returns',
    description: '7-day hassle-free return and exchange policy'
  }, {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: '50K+ Happy Customers',
    description: 'Trusted by thousands of satisfied customers'
  }, {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Made with Love',
    description: 'Each saree crafted with care and attention to detail'
  }];

  return <div className="min-h-screen flex flex-col">
      {/* SEO Header */}
      <header>
        <Navbar />
      </header>
      
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-to-br from-primary/95 to-primary/80 flex items-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out" 
          style={{
            backgroundImage: `url(${heroImages[currentImageIndex]})`,
            backgroundBlendMode: 'overlay'
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-['Playfair_Display'] mb-2 leading-tight">
              Discover Exquisite
              <span className="block text-secondary bg-gradient-gold bg-clip-text text-transparent">
                Sarees
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Embrace tradition with our curated collection of premium handloom sarees from master artisans across India
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12">
              <Link to="/products">
                <Button size="lg" className="btn-secondary text-lg px-8 sm:px-10 py-4 hover:scale-105 transition-transform">
                  Shop Collection
                </Button>
              </Link>
              <Link to="/products/banarasi">
                <Button variant="outline" size="lg" className="text-lg px-8 sm:px-10 py-4  hover:bg-primary transition-all text-primary ">
                  View Banarasi
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Authentic Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="h-5 w-5" />
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-primary mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse collection of sarees for every occasion and style
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map(category => <Link key={category.name} to={`/products/${category.name.toLowerCase()}`}>
                <Card className="group cursor-pointer card-hover overflow-hidden border-0 shadow-xl">
                  <div className="relative h-80">
                    <img src={category.image} alt={`${category.name} Sarees - ${category.description}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90 mb-2">{category.description}</p>
                      <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground">
                        {category.count}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </Link>)}
          </div>
        </div>
      </section>
{/* Why Choose Us Section */}
<section className="py-20 bg-warm-beige/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-primary mb-4">
              Why Choose Varnikaa?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our commitment to quality and authenticity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => <Card key={index} className="group cursor-pointer card-hover text-center p-6 border-0 shadow-lg">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-20 bg-warm-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-primary mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked sarees that showcase the finest craftsmanship and timeless elegance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => <Card key={product.id} className="group cursor-pointer card-hover overflow-hidden border-0 shadow-lg">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground shadow-lg">
                    {product.badge}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                    <Heart className="h-4 w-4 text-muted-foreground hover:text-accent transition-colors cursor-pointer" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</h3>
                  
                  <div className="flex items-center space-x-1 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-secondary fill-current' : 'text-gray-300'}`} />)}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                    <Badge variant="destructive" className="text-xs">
                      {Math.round((product.originalPrice - product.price) / product.originalPrice * 100)}% OFF
                    </Badge>
                  </div>
                  
                  <Link to={`/product/${product.id}`}>
                    <Button className="w-full btn-primary group-hover:bg-primary/90 transition-colors">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real reviews from our delighted customers across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="p-6 text-center border-0 shadow-xl card-hover">
                <CardContent>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-secondary fill-current" />)}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-primary text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    {testimonial.verified && <Badge variant="secondary" className="mt-2 text-xs">
                        Verified Purchase
                      </Badge>}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 gradient-royal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full" style={{
          backgroundImage: `url("https://pg-media.ksmobile.com/production/material/background/aos_418/banner.jpg")`
        }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-4">
            Stay Updated with Varnikaa
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter for exclusive offers, new arrivals, styling tips, and traditional fashion insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email address" className="flex-1 px-6 py-4 rounded-lg text-foreground border-0 focus:ring-2 focus:ring-secondary focus:outline-none shadow-lg" aria-label="Email address for newsletter" />
            <Button className="btn-secondary px-8 py-4 shadow-lg hover:scale-105 transition-transform">
              Subscribe Now
            </Button>
          </div>
          <p className="text-sm opacity-70 mt-4">
            Join 10,000+ fashion enthusiasts. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Homepage;
