import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const Wishlist = () => {
  return (
    <div className="min-h-screen flex flex-col mt-20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 flex-1 text-center">
        <div className="max-w-md mx-auto">
          <Heart className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
          <h1 className="text-3xl font-bold font-['Playfair_Display'] text-primary mb-4">
            Your Wishlist is Empty
          </h1>
          <p className="text-muted-foreground mb-8">
            Save your favorite sarees here and shop them later!
          </p>
          <Link to="/products">
            <Button className="btn-primary">
              Explore Sarees
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
