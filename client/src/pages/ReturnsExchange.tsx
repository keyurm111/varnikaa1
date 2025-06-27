import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw, CheckCircle, XCircle, Clock, Package } from 'lucide-react';

const ReturnsExchange = () => {
  return (
    <div className="min-h-screen flex flex-col mt-20">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-primary mb-4">
              Returns & Exchange
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We want you to love your purchase. If you're not completely satisfied, we're here to help.
            </p>
          </div>

          <div className="space-y-8">
            {/* Return Policy Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <RotateCcw className="h-6 w-6 text-primary" />
                  Our Return Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">7-Day Return Window</h3>
                    <p className="text-muted-foreground">Return or exchange within 7 days of delivery</p>
                  </div>
                  <div className="text-center">
                    <Package className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Original Packaging</h3>
                    <p className="text-muted-foreground">Items must be in original condition with tags</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Free Returns</h3>
                    <p className="text-muted-foreground">No return shipping charges on eligible items</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* What Can Be Returned */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    What Can Be Returned
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Sarees in original condition with all tags attached</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Items that don't fit as expected</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Defective or damaged items</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Items that don't match product description</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Unworn and unwashed blouses</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* What Cannot Be Returned */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <XCircle className="h-6 w-6 text-red-600" />
                    What Cannot Be Returned
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Custom or personalized items</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Items worn, washed, or altered</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Items without original tags or packaging</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Sale items (unless defective)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Items damaged due to normal wear</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Return Process */}
            <Card>
              <CardHeader>
                <CardTitle>How to Return or Exchange</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                    <h3 className="font-semibold mb-2">Contact Us</h3>
                    <p className="text-muted-foreground text-sm">Email us at returns@varnikaa.com or call our support team</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                    <h3 className="font-semibold mb-2">Get Return Label</h3>
                    <p className="text-muted-foreground text-sm">We'll send you a prepaid return shipping label</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                    <h3 className="font-semibold mb-2">Pack & Ship</h3>
                    <p className="text-muted-foreground text-sm">Package the item securely and send it back to us</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                    <h3 className="font-semibold mb-2">Get Refund</h3>
                    <p className="text-muted-foreground text-sm">Receive your refund within 5-7 business days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exchange vs Return */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Exchange Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Need a different size or color? We offer free exchanges within 7 days of delivery.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Free size exchanges (subject to availability)</li>
                    <li>• Color exchanges allowed for identical products</li>
                    <li>• Exchange processing takes 3-5 business days</li>
                    <li>• New item ships once we receive the returned item</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Refund Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Refunds are processed to your original payment method once we receive and inspect the returned item.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Credit/Debit card refunds: 5-7 business days</li>
                    <li>• UPI/Wallet refunds: 1-3 business days</li>
                    <li>• COD orders: Bank transfer within 7 days</li>
                    <li>• Store credit option for faster processing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-muted-foreground">returns@varnikaa.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone Support</h3>
                    <p className="text-muted-foreground">+91 9876543210</p>
                    <p className="text-sm text-muted-foreground">Mon-Sat: 10 AM - 8 PM</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground">+91 9876543210</p>
                    <p className="text-sm text-muted-foreground">Quick support available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReturnsExchange;
