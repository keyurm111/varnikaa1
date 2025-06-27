
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
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Eye, Package, Truck } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AdminOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  // Mock orders data
  const orders = [
    {
      id: 'ORD001',
      customer: {
        name: 'Priya Sharma',
        email: 'priya@example.com',
        phone: '+91 9876543210'
      },
      date: '2024-01-15',
      status: 'Processing',
      total: 8999,
      items: [
        {
          name: 'Royal Blue Banarasi Silk Saree',
          price: 8999,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e8?w=100'
        }
      ],
      address: {
        street: '123, Fashion Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001'
      },
      paymentMethod: 'COD'
    },
    {
      id: 'ORD002',
      customer: {
        name: 'Anita Patel',
        email: 'anita@example.com',
        phone: '+91 9876543211'
      },
      date: '2024-01-14',
      status: 'Shipped',
      total: 15999,
      items: [
        {
          name: 'Golden Kanjeevaram Saree',
          price: 15999,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=100'
        }
      ],
      address: {
        street: '456, Business Park',
        city: 'Ahmedabad',
        state: 'Gujarat',
        pincode: '380001'
      },
      paymentMethod: 'Online'
    },
    {
      id: 'ORD003',
      customer: {
        name: 'Meera Reddy',
        email: 'meera@example.com',
        phone: '+91 9876543212'
      },
      date: '2024-01-13',
      status: 'Delivered',
      total: 2999,
      items: [
        {
          name: 'Designer Cotton Saree',
          price: 2999,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100'
        }
      ],
      address: {
        street: '789, Tech City',
        city: 'Hyderabad',
        state: 'Telangana',
        pincode: '500001'
      },
      paymentMethod: 'COD'
    }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    toast({
      title: "Order status updated",
      description: `Order ${orderId} status changed to ${newStatus}.`
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold font-['Playfair_Display'] text-primary">
            Orders
          </h1>
          <p className="text-muted-foreground">
            Manage and track customer orders
          </p>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search orders by ID or customer name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Orders</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Orders ({filteredOrders.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{order.customer.name}</p>
                        <p className="text-sm text-muted-foreground">{order.customer.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Select 
                        value={order.status.toLowerCase()} 
                        onValueChange={(value) => updateOrderStatus(order.id, value)}
                      >
                        <SelectTrigger className={`w-32 ${getStatusColor(order.status)}`}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="processing">Processing</SelectItem>
                          <SelectItem value="shipped">Shipped</SelectItem>
                          <SelectItem value="delivered">Delivered</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="font-medium">
                      ₹{order.total.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => setSelectedOrder(order)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Order Details - {order.id}</DialogTitle>
                            </DialogHeader>
                            {selectedOrder && (
                              <div className="space-y-6">
                                {/* Customer Info */}
                                <div>
                                  <h3 className="font-semibold mb-2">Customer Information</h3>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <span className="font-medium">Name:</span> {selectedOrder.customer.name}
                                    </div>
                                    <div>
                                      <span className="font-medium">Email:</span> {selectedOrder.customer.email}
                                    </div>
                                    <div>
                                      <span className="font-medium">Phone:</span> {selectedOrder.customer.phone}
                                    </div>
                                    <div>
                                      <span className="font-medium">Payment:</span> {selectedOrder.paymentMethod}
                                    </div>
                                  </div>
                                </div>

                                {/* Shipping Address */}
                                <div>
                                  <h3 className="font-semibold mb-2">Shipping Address</h3>
                                  <p className="text-sm text-muted-foreground">
                                    {selectedOrder.address.street}<br />
                                    {selectedOrder.address.city}, {selectedOrder.address.state} {selectedOrder.address.pincode}
                                  </p>
                                </div>

                                {/* Order Items */}
                                <div>
                                  <h3 className="font-semibold mb-2">Order Items</h3>
                                  <div className="space-y-3">
                                    {selectedOrder.items.map((item: any, index: number) => (
                                      <div key={index} className="flex items-center space-x-3 p-3 border rounded">
                                        <img
                                          src={item.image}
                                          alt={item.name}
                                          className="w-16 h-16 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                          <p className="font-medium">{item.name}</p>
                                          <p className="text-sm text-muted-foreground">
                                            Quantity: {item.quantity}
                                          </p>
                                        </div>
                                        <span className="font-semibold">
                                          ₹{item.price.toLocaleString()}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Total */}
                                <div className="border-t pt-4">
                                  <div className="flex justify-between text-lg font-semibold">
                                    <span>Total Amount:</span>
                                    <span>₹{selectedOrder.total.toLocaleString()}</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        
                        <Button variant="ghost" size="sm">
                          <Package className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Truck className="h-4 w-4" />
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

export default AdminOrders;
