import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ruler, Info } from 'lucide-react';

const SizeGuide = () => {
  const sizeChart = [
    { size: 'XS', bust: '32-34', waist: '26-28', hip: '34-36', length: '44' },
    { size: 'S', bust: '34-36', waist: '28-30', hip: '36-38', length: '44' },
    { size: 'M', bust: '36-38', waist: '30-32', hip: '38-40', length: '44' },
    { size: 'L', bust: '38-40', waist: '32-34', hip: '40-42', length: '45' },
    { size: 'XL', bust: '40-42', waist: '34-36', hip: '42-44', length: '45' },
    { size: 'XXL', bust: '42-44', waist: '36-38', hip: '44-46', length: '46' },
  ];

  return (
    <div className="min-h-screen flex flex-col mt-20">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-primary mb-4">
              Size Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your perfect fit with our comprehensive sizing guide for sarees and blouses.
            </p>
          </div>

          <div className="space-y-12">
            {/* Blouse Size Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Ruler className="h-6 w-6 text-primary" />
                  Blouse Size Chart (in inches)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Size</th>
                        <th className="text-left py-3 px-4 font-semibold">Bust</th>
                        <th className="text-left py-3 px-4 font-semibold">Waist</th>
                        <th className="text-left py-3 px-4 font-semibold">Hip</th>
                        <th className="text-left py-3 px-4 font-semibold">Length</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeChart.map((row, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-medium">{row.size}</td>
                          <td className="py-3 px-4">{row.bust}</td>
                          <td className="py-3 px-4">{row.waist}</td>
                          <td className="py-3 px-4">{row.hip}</td>
                          <td className="py-3 px-4">{row.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* How to Measure */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Info className="h-6 w-6 text-primary" />
                  How to Measure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Bust</h3>
                    <p className="text-muted-foreground">Measure around the fullest part of your bust, keeping the tape measure parallel to the floor.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Waist</h3>
                    <p className="text-muted-foreground">Measure around your natural waistline, which is the narrowest part of your torso.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Hip</h3>
                    <p className="text-muted-foreground">Measure around the fullest part of your hips, approximately 7-9 inches below your waistline.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Length</h3>
                    <p className="text-muted-foreground">Measure from the top of your shoulder to where you want the blouse to end.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Saree Draping Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Saree Length Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Saree Length</h3>
                    <p className="text-muted-foreground">All our sarees come in a standard length of 5.5 meters (6 yards) with a 0.8-meter blouse piece, suitable for all heights and draping styles.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">For Petite (5'0" - 5'3")</h3>
                    <p className="text-muted-foreground">Standard length works perfectly. You may have some extra fabric for different draping styles.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">For Average Height (5'4" - 5'7")</h3>
                    <p className="text-muted-foreground">Standard length is ideal for all traditional and modern draping styles.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">For Tall (5'8" and above)</h3>
                    <p className="text-muted-foreground">Standard length works well. For very tall heights, consider draping with fewer pleats or contact us for custom lengths.</p>
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

export default SizeGuide;
