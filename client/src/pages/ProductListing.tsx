import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, X } from 'lucide-react';

const ProductListing = () => {
  const { category } = useParams();
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');

  // Mock product data
  const allProducts = [
    {
      id: '1',
      name: 'Royal Blue Banarasi Silk Saree',
      price: 8999,
      originalPrice: 12999,
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e8?w=500',
      category: 'banarasi',
      material: 'silk',
      color: 'blue',
      badge: 'Best Seller',
      isInStock: true
    },
    {
      id: '2',
      name: 'Golden Kanjeevaram Saree',
      price: 15999,
      originalPrice: 19999,
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500',
      category: 'kanjeevaram',
      material: 'silk',
      color: 'gold',
      badge: 'Premium',
      isInStock: true
    },
    {
      id: '3',
      name: 'Elegant Red Silk Saree',
      price: 6999,
      originalPrice: 8999,
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=500',
      category: 'silk',
      material: 'silk',
      color: 'red',
      badge: 'Sale',
      isInStock: true
    },
    {
      id: '4',
      name: 'Designer Cotton Saree',
      price: 2999,
      originalPrice: 3999,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500',
      category: 'cotton',
      material: 'cotton',
      color: 'multicolor',
      badge: 'New',
      isInStock: false
    },
    {
      id: '5',
      name: 'Traditional Partywear Saree',
      price: 12999,
      originalPrice: 15999,
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e8?w=500',
      category: 'partywear',
      material: 'georgette',
      color: 'purple',
      badge: 'Trending',
      isInStock: true
    },
    {
      id: '6',
      name: 'Bridal Saree Collection',
      price: 25999,
      originalPrice: 29999,
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500',
      category: 'bridal',
      material: 'silk',
      color: 'red',
      badge: 'Exclusive',
      isInStock: true
    }
  ];

  const categories = ['Banarasi', 'Kanjeevaram', 'Cotton', 'Silk', 'Partywear', 'Bridal', 'Casual', 'Designer'];
  const colors = ['Red', 'Blue', 'Gold', 'Green', 'Purple', 'Pink', 'Black', 'Multicolor'];
  const materials = ['Silk', 'Cotton', 'Georgette', 'Chiffon', 'Crepe', 'Net'];

  // Filter products based on selected filters
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = !category || product.category === category;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSelectedCategories = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesColor = selectedColors.length === 0 || selectedColors.some(color => product.color.toLowerCase().includes(color.toLowerCase()));
    const matchesMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
    
    return matchesCategory && matchesPrice && matchesSelectedCategories && matchesColor && matchesMaterial;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'popularity':
        return a.badge === 'Best Seller' ? -1 : 1;
      case 'newest':
      default:
        return a.badge === 'New' ? -1 : 1;
    }
  });

  const handleCategoryChange = (cat: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, cat.toLowerCase()]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== cat.toLowerCase()));
    }
  };

  const handleColorChange = (color: string, checked: boolean) => {
    if (checked) {
      setSelectedColors([...selectedColors, color]);
    } else {
      setSelectedColors(selectedColors.filter(c => c !== color));
    }
  };

  const handleMaterialChange = (material: string, checked: boolean) => {
    if (checked) {
      setSelectedMaterials([...selectedMaterials, material.toLowerCase()]);
    } else {
      setSelectedMaterials(selectedMaterials.filter(m => m !== material.toLowerCase()));
    }
  };

  const clearFilters = () => {
    setPriceRange([0, 50000]);
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedMaterials([]);
  };

  return (
    <div className="min-h-screen flex flex-col mt-20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-['Playfair_Display'] text-primary mb-2">
            {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Sarees` : 'All Sarees'}
          </h1>
          <p className="text-muted-foreground">
            Showing {sortedProducts.length} of {allProducts.length} products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="w-full hover:bg-primary hover:text-white"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Filters</h3>
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear All
                    </Button>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Price Range</h4>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={50000}
                      step={1000}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹{priceRange[0].toLocaleString()}</span>
                      <span>₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Category</h4>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <div key={cat} className="flex items-center space-x-2">
                          <Checkbox
                            id={cat}
                            checked={selectedCategories.includes(cat.toLowerCase())}
                            onCheckedChange={(checked) => handleCategoryChange(cat, checked as boolean)}
                          />
                          <label htmlFor={cat} className="text-sm cursor-pointer">
                            {cat}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Color</h4>
                    <div className="space-y-2">
                      {colors.map((color) => (
                        <div key={color} className="flex items-center space-x-2">
                          <Checkbox
                            id={color}
                            checked={selectedColors.includes(color)}
                            onCheckedChange={(checked) => handleColorChange(color, checked as boolean)}
                          />
                          <label htmlFor={color} className="text-sm cursor-pointer">
                            {color}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Materials */}
                  <div>
                    <h4 className="font-medium mb-3">Material</h4>
                    <div className="space-y-2">
                      {materials.map((material) => (
                        <div key={material} className="flex items-center space-x-2">
                          <Checkbox
                            id={material}
                            checked={selectedMaterials.includes(material.toLowerCase())}
                            onCheckedChange={(checked) => handleMaterialChange(material, checked as boolean)}
                          />
                          <label htmlFor={material} className="text-sm cursor-pointer">
                            {material}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                {(selectedCategories.length > 0 || selectedColors.length > 0 || selectedMaterials.length > 0) && (
                  <div className="flex flex-wrap gap-2">
                    {selectedCategories.map((cat) => (
                      <Badge key={cat} variant="secondary" className="flex items-center space-x-1">
                        <span>{cat}</span>
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => setSelectedCategories(selectedCategories.filter(c => c !== cat))}
                        />
                      </Badge>
                    ))}
                    {selectedColors.map((color) => (
                      <Badge key={color} variant="secondary" className="flex items-center space-x-1">
                        <span>{color}</span>
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => setSelectedColors(selectedColors.filter(c => c !== color))}
                        />
                      </Badge>
                    ))}
                    {selectedMaterials.map((material) => (
                      <Badge key={material} variant="secondary" className="flex items-center space-x-1">
                        <span>{material}</span>
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => setSelectedMaterials(selectedMaterials.filter(m => m !== material))}
                        />
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
                <Button onClick={clearFilters} className="mt-4">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductListing;
