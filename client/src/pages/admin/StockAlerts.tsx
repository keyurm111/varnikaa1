
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
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
import { AlertTriangle, Package, Edit } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const StockAlerts = () => {
  const lowStockProducts = [
    {
      id: '1',
      name: 'Royal Blue Banarasi Silk Saree',
      category: 'Banarasi',
      currentStock: 2,
      threshold: 5,
      status: 'Critical',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e8?w=60'
    },
    {
      id: '2',
      name: 'Designer Cotton Saree',
      category: 'Cotton',
      currentStock: 1,
      threshold: 3,
      status: 'Critical',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=60'
    },
    {
      id: '3',
      name: 'Elegant Red Silk Saree',
      category: 'Silk',
      currentStock: 3,
      threshold: 5,
      status: 'Low',
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=60'
    }
  ];

  const outOfStockProducts = [
    {
      id: '4',
      name: 'Premium Gold Kanjeevaram',
      category: 'Kanjeevaram',
      lastRestocked: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=60'
    }
  ];

  const updateStock = (productId: string, productName: string) => {
    toast({
      title: "Stock updated",
      description: `Stock quantity for ${productName} has been updated.`
    });
  };

  const getStatusBadge = (status: string) => {
    if (status === 'Critical') {
      return <Badge variant="destructive">Critical</Badge>;
    }
    return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Low Stock</Badge>;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold font-['Playfair_Display'] text-primary">
            Stock Alerts
          </h1>
          <p className="text-muted-foreground">
            Monitor and manage inventory levels
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Low Stock Items</p>
                  <p className="text-3xl font-bold text-yellow-600">{lowStockProducts.length}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Out of Stock</p>
                  <p className="text-3xl font-bold text-destructive">{outOfStockProducts.length}</p>
                </div>
                <Package className="h-8 w-8 text-destructive" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Alerts</p>
                  <p className="text-3xl font-bold text-primary">{lowStockProducts.length + outOfStockProducts.length}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Low Stock Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
              Low Stock Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Current Stock</TableHead>
                  <TableHead>Threshold</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lowStockProducts.map((product) => (
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
                    <TableCell className="font-medium">{product.currentStock}</TableCell>
                    <TableCell>{product.threshold}</TableCell>
                    <TableCell>{getStatusBadge(product.status)}</TableCell>
                    <TableCell>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateStock(product.id, product.name)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Update Stock
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Out of Stock Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="h-5 w-5 text-destructive mr-2" />
              Out of Stock Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Last Restocked</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {outOfStockProducts.map((product) => (
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
                    <TableCell>{new Date(product.lastRestocked).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateStock(product.id, product.name)}
                      >
                        <Package className="h-4 w-4 mr-2" />
                        Restock
                      </Button>
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

export default StockAlerts;
