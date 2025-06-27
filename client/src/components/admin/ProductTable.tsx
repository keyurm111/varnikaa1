
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Search, Edit, Trash2, Eye, Filter } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ProductTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [stockFilter, setStockFilter] = useState('all');

  const products = [
    {
      id: '1',
      name: 'Royal Blue Banarasi Silk Saree',
      price: 8999,
      category: 'Banarasi',
      stock: 15,
      status: 'In Stock',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e8?w=60'
    },
    {
      id: '2',
      name: 'Golden Kanjeevaram Saree',
      price: 15999,
      category: 'Kanjeevaram',
      stock: 8,
      status: 'In Stock',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=60'
    },
    {
      id: '3',
      name: 'Designer Cotton Saree',
      price: 2999,
      category: 'Cotton',
      stock: 0,
      status: 'Out of Stock',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=60'
    },
    {
      id: '4',
      name: 'Elegant Red Silk Saree',
      price: 12999,
      category: 'Silk',
      stock: 3,
      status: 'Low Stock',
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=60'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesStock = stockFilter === 'all' || 
      (stockFilter === 'instock' && product.stock > 5) ||
      (stockFilter === 'lowstock' && product.stock > 0 && product.stock <= 5) ||
      (stockFilter === 'outofstock' && product.stock === 0);
    
    return matchesSearch && matchesCategory && matchesStock;
  });

  const getStockBadge = (stock: number) => {
    if (stock === 0) return <Badge variant="destructive">Out of Stock</Badge>;
    if (stock <= 5) return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Low Stock</Badge>;
    return <Badge variant="default" className="bg-green-100 text-green-800">In Stock</Badge>;
  };

  const handleDelete = (id: string, name: string) => {
    toast({
      title: "Product deleted",
      description: `${name} has been removed from inventory.`
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Products Management
          <Button className="btn-primary">Add New Product</Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Banarasi">Banarasi</SelectItem>
              <SelectItem value="Kanjeevaram">Kanjeevaram</SelectItem>
              <SelectItem value="Cotton">Cotton</SelectItem>
              <SelectItem value="Silk">Silk</SelectItem>
            </SelectContent>
          </Select>
          <Select value={stockFilter} onValueChange={setStockFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by stock" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stock</SelectItem>
              <SelectItem value="instock">In Stock</SelectItem>
              <SelectItem value="lowstock">Low Stock</SelectItem>
              <SelectItem value="outofstock">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span className="font-medium">{product.name}</span>
                  </div>
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="font-medium">₹{product.price.toLocaleString()}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{getStockBadge(product.stock)}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDelete(product.id, product.name)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {filteredProducts.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No products found matching your criteria.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductTable;
