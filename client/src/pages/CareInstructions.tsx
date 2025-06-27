import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, Wind, Sun, Shield, AlertTriangle, Sparkles } from 'lucide-react';

const CareInstructions = () => {
  return (
    <div className="min-h-screen flex flex-col mt-20">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-primary mb-4">
              Care Instructions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Keep your sarees looking beautiful for years with our comprehensive care guide.
            </p>
          </div>

          <div className="space-y-8">
            {/* General Care Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  General Care Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Droplets className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Gentle Washing</h3>
                    <p className="text-muted-foreground text-sm">Use cold water and mild detergent for best results</p>
                  </div>
                  <div className="text-center">
                    <Wind className="h-12 w-12 text-green-500 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Air Dry</h3>
                    <p className="text-muted-foreground text-sm">Hang in shade to prevent color fading</p>
                  </div>
                  <div className="text-center">
                    <Sun className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Avoid Direct Sunlight</h3>
                    <p className="text-muted-foreground text-sm">Protect from harsh UV rays during drying</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fabric-Specific Care */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Silk Sarees Care</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Dry Clean Recommended</h4>
                        <p className="text-sm text-muted-foreground">Professional cleaning preserves silk's natural luster</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Droplets className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Hand Wash Alternative</h4>
                        <p className="text-sm text-muted-foreground">Use lukewarm water with silk-specific detergent</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Avoid Bleach</h4>
                        <p className="text-sm text-muted-foreground">Never use bleach or harsh chemicals on silk</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cotton Sarees Care</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Droplets className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Machine Washable</h4>
                        <p className="text-sm text-muted-foreground">Use gentle cycle with cold water</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Wind className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Easy to Maintain</h4>
                        <p className="text-sm text-muted-foreground">Air dry and iron while slightly damp</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Colorfast Treatment</h4>
                        <p className="text-sm text-muted-foreground">Wash dark colors separately for first few washes</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step-by-Step Washing Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Washing Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">1</div>
                    <h3 className="font-semibold">Pre-Treatment</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Check care label</li>
                      <li>• Test color fastness</li>
                      <li>• Remove jewelry</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">2</div>
                    <h3 className="font-semibold">Washing</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Use cold water</li>
                      <li>• Gentle detergent</li>
                      <li>• Avoid wringing</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">3</div>
                    <h3 className="font-semibold">Drying</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Hang in shade</li>
                      <li>• Avoid direct sun</li>
                      <li>• Ensure air circulation</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">4</div>
                    <h3 className="font-semibold">Ironing</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Use appropriate heat</li>
                      <li>• Iron on reverse</li>
                      <li>• Use press cloth</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Storage Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Storage & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Short-term Storage</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Hang in breathable garment bags</li>
                      <li>• Use padded hangers for heavy sarees</li>
                      <li>• Ensure adequate spacing between garments</li>
                      <li>• Keep in cool, dry place</li>
                      <li>• Avoid plastic covers for extended periods</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Long-term Storage</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Clean before storing</li>
                      <li>• Fold with acid-free tissue paper</li>
                      <li>• Store in cotton saree bags</li>
                      <li>• Add neem leaves or lavender sachets</li>
                      <li>• Check and refold every 6 months</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stain Removal */}
            <Card>
              <CardHeader>
                <CardTitle>Stain Removal Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Oil Stains</h3>
                      <p className="text-sm text-muted-foreground">Apply cornstarch or talcum powder immediately. Let it absorb for 30 minutes, then gently brush off and wash.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Food Stains</h3>
                      <p className="text-sm text-muted-foreground">Rinse with cold water immediately. Pre-treat with gentle detergent before washing.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Makeup Stains</h3>
                      <p className="text-sm text-muted-foreground">Use makeup remover or micellar water on a cotton pad. Dab gently, don't rub.</p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-yellow-800">Important Note</h4>
                        <p className="text-sm text-yellow-700">For valuable or delicate sarees, always consult a professional dry cleaner for stain removal.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Services */}
            <Card>
              <CardHeader>
                <CardTitle>Professional Care Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">When to Seek Professional Help</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Vintage or heirloom sarees</li>
                      <li>• Heavy embellishments or embroidery</li>
                      <li>• Stubborn stains</li>
                      <li>• Delicate fabrics like Banarasi silk</li>
                      <li>• Restoration services needed</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Finding the Right Service</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Look for specialists in Indian garments</li>
                      <li>• Check reviews and recommendations</li>
                      <li>• Inquire about their cleaning methods</li>
                      <li>• Ask about insurance for valuable items</li>
                      <li>• Get cost estimates upfront</li>
                    </ul>
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

export default CareInstructions;
