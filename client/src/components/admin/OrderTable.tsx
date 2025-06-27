
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
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Search, Eye, Download, Truck } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const OrderTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

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
      paymentStatus: 'Paid',
      items: [
        {
          name: 'Royal Blue Banarasi Silk Saree',
          price: 8999,
          quantity: 1
        }
      ],
      address: '123, Fashion Street, Mumbai, Maharashtra - 400001'
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
      paymentStatus: 'Paid',
      items: [
        {
          name: 'Golden Kanjeevaram Saree',
          price: 15999,
          quantity: 1
        }
      ],
      address: '456, Business Park, Ahmedabad, Gujarat - 380001'
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
      paymentStatus: 'Paid',
      items: [
        {
          name: 'Designer Cotton Saree',
          price: 2999,
          quantity: 1
        }
      ],
      address: '789, Tech City, Hyderabad, Telangana - 500001'
    }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'Processing': { variant: 'secondary' as const, className: 'bg-yellow-100 text-yellow-800' },
      'Shipped': { variant: 'default' as const, className: 'bg-blue-100 text-blue-800' },
      'Delivered': { variant: 'default' as const, className: 'bg-green-100 text-green-800' },
      'Cancelled': { variant: 'destructive' as const, className: '' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.Processing;
    return <Badge variant={config.variant} className={config.className}>{status}</Badge>;
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    toast({
      title: "Order status updated",
      description: `Order ${orderId} status changed to ${newStatus}.`
    });
  };

  const downloadInvoice = (orderId: string) => {
    toast({
      title: "Invoice downloaded",
      description: `Invoice for order ${orderId} has been downloaded.`
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders Management</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search orders by ID or customer..."
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

        {/* Orders Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Payment</TableHead>
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
                    <SelectTrigger className="w-32">
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
                <TableCell className="font-medium">₹{order.total.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    {order.paymentStatus}
                  </Badge>
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
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold">Customer Information</h4>
                                <p>{selectedOrder.customer.name}</p>
                                <p className="text-sm text-muted-foreground">{selectedOrder.customer.email}</p>
                                <p className="text-sm text-muted-foreground">{selectedOrder.customer.phone}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold">Order Information</h4>
                                <p>Order ID: {selectedOrder.id}</p>
                                <p>Date: {new Date(selectedOrder.date).toLocaleDateString()}</p>
                                <p>Status: {getStatusBadge(selectedOrder.status)}</p>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Shipping Address</h4>
                              <p className="text-sm">{selectedOrder.address}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Order Items</h4>
                              {selectedOrder.items.map((item: any, index: number) => (
                                <div key={index} className="flex justify-between py-2 border-b">
                                  <span>{item.name} x {item.quantity}</span>
                                  <span>₹{item.price.toLocaleString()}</span>
                                </div>
                              ))}
                              <div className="flex justify-between font-semibold pt-2">
                                <span>Total:</span>
                                <span>₹{selectedOrder.total.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => downloadInvoice(order.id)}
                    >
                      <Download className="h-4 w-4" />
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

        {filteredOrders.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No orders found matching your criteria.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OrderTable;
