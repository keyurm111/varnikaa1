import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Clock, MapPin, Package, Shield, CreditCard } from 'lucide-react';

const ShippingInfo = () => {
  return (
    <div className="min-h-screen flex flex-col mt-20">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-primary mb-4">
              Shipping Information
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our shipping policies and delivery options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Shipping Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Truck className="h-6 w-6 text-primary" />
                  Shipping Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Free Standard Shipping</h3>
                  <p className="text-muted-foreground mb-2">On orders above ₹2999</p>
                  <p className="text-sm text-muted-foreground">Delivery in 5-7 business days</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Express Shipping</h3>
                  <p className="text-muted-foreground mb-2">₹199 for all orders</p>
                  <p className="text-sm text-muted-foreground">Delivery in 2-3 business days</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Next Day Delivery</h3>
                  <p className="text-muted-foreground mb-2">₹399 (available in select cities)</p>
                  <p className="text-sm text-muted-foreground">Delivery by next business day</p>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  Delivery Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <p className="font-medium">Order Processing</p>
                      <p className="text-sm text-muted-foreground">1-2 business days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <p className="font-medium">Quality Check & Packaging</p>
                      <p className="text-sm text-muted-foreground">1 business day</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <p className="font-medium">Shipping & Delivery</p>
                      <p className="text-sm text-muted-foreground">2-5 business days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coverage Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  Delivery Coverage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Domestic Shipping</h3>
                  <p className="text-muted-foreground">We deliver across all states and union territories in India, including remote areas.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">International Shipping</h3>
                  <p className="text-muted-foreground">Currently available to USA, UK, Canada, Australia, and UAE. Contact us for other countries.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Same Day Delivery</h3>
                  <p className="text-muted-foreground">Available in Mumbai, Delhi, Bangalore, Chennai, Kolkata, and Hyderabad for orders placed before 2 PM.</p>
                </div>
              </CardContent>
            </Card>

            {/* Packaging & Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Package className="h-6 w-6 text-primary" />
                  Packaging & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Premium Packaging</h3>
                  <p className="text-muted-foreground">Each saree is carefully folded and packed in our signature gift box with tissue paper and protective covering.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Secure Delivery</h3>
                  <p className="text-muted-foreground">All packages are insured and require signature confirmation for added security.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Eco-Friendly</h3>
                  <p className="text-muted-foreground">We use recyclable packaging materials and minimal plastic to protect the environment.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="mt-12 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Delivery times may vary during festival seasons and adverse weather conditions</li>
                  <li>• We'll send you tracking information via SMS and email once your order is shipped</li>
                  <li>• Please ensure someone is available to receive the package during delivery hours</li>
                  <li>• Delivery charges are calculated based on weight and destination pin code</li>
                  <li>• Cash on Delivery (COD) available for orders below ₹5000 with ₹50 handling charge</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                  Payment & Shipping
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Shipping charges are calculated at checkout based on your location and chosen delivery method. 
                  Free shipping is automatically applied for eligible orders. For international orders, 
                  customs duties and taxes may apply and are the responsibility of the recipient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingInfo;
