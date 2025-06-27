import React, { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { Plus, Edit, Trash2, Search, Eye } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const AdminProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Mock product data
  const products = [
    {
      id: '1',
      name: 'Royal Blue Banarasi Silk Saree',
      price: 8999,
      originalPrice: 12999,
      category: 'banarasi',
      material: 'silk',
      color: 'blue',
      stock: 15,
      status: 'In Stock',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e8?w=100'
    },
    {
      id: '2',
      name: 'Golden Kanjeevaram Saree',
      price: 15999,
      originalPrice: 19999,
      category: 'kanjeevaram',
      material: 'silk',
      color: 'gold',
      stock: 8,
      status: 'In Stock',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=100'
    },
    {
      id: '3',
      name: 'Designer Cotton Saree',
      price: 2999,
      originalPrice: 3999,
      category: 'cotton',
      material: 'cotton',
      color: 'multicolor',
      stock: 0,
      status: 'Out of Stock',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100'
    }
  ];

  const categories = ['banarasi', 'kanjeevaram', 'cotton', 'silk', 'partywear', 'bridal'];
  const materials = ['silk', 'cotton', 'georgette', 'chiffon', 'crepe'];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteProduct = (productId: string, productName: string) => {
    toast({
      title: "Product deleted",
      description: `${productName} has been removed from your inventory.`
    });
  };

  const toggleStock = (productId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'In Stock' ? 'Out of Stock' : 'In Stock';
    toast({
      title: "Stock status updated",
      description: `Product status changed to ${newStatus}.`
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-['Playfair_Display'] text-primary">
              Products
            </h1>
            <p className="text-muted-foreground">
              Manage your product inventory
            </p>
          </div>
          
          <Button 
            className="btn-primary"
            onClick={() => navigate('/admin/add-product')}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Products ({filteredProducts.length})</CardTitle>
          </CardHeader>
          <CardContent>
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
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {product.material} • {product.color}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="capitalize">{product.category}</TableCell>
                    <TableCell>
                      <div>
                        <span className="font-medium">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through ml-2">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={product.status === 'In Stock' ? 'default' : 'destructive'}
                        className="cursor-pointer"
                        onClick={() => toggleStock(product.id, product.status)}
                      >
                        {product.status}
                      </Badge>
                    </TableCell>
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
                          onClick={() => handleDeleteProduct(product.id, product.name)}
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
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminProducts;
