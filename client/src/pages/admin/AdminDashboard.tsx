
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardCards from '@/components/admin/DashboardCards';
import SalesChart from '@/components/admin/SalesChart';
import CategoryPieChart from '@/components/admin/CategoryPieChart';
import { AlertTriangle } from 'lucide-react';

const AdminDashboard = () => {
  // Mock data - replace with real API calls
  const stats = {
    totalProducts: 156,
    ordersThisMonth: 42,
    lowStockItems: 8,
    totalRevenue: 285000,
    totalCustomers: 1250,
    pageViews: 12500
  };

  const recentOrders = [
    {
      id: 'ORD001',
      customer: 'Priya Sharma',
      product: 'Royal Blue Banarasi Silk Saree',
      amount: 8999,
      status: 'Processing',
      date: '2024-01-15'
    },
    {
      id: 'ORD002',
      customer: 'Anita Patel',
      product: 'Golden Kanjeevaram Saree',
      amount: 15999,
      status: 'Shipped',
      date: '2024-01-14'
    },
    {
      id: 'ORD003',
      customer: 'Meera Reddy',
      product: 'Designer Cotton Saree',
      amount: 2999,
      status: 'Delivered',
      date: '2024-01-13'
    }
  ];

  const lowStockProducts = [
    { name: 'Royal Blue Banarasi Silk Saree', stock: 2 },
    { name: 'Designer Cotton Saree', stock: 1 },
    { name: 'Elegant Red Silk Saree', stock: 3 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing': return 'text-yellow-600 bg-yellow-100';
      case 'Shipped': return 'text-blue-600 bg-blue-100';
      case 'Delivered': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold font-['Playfair_Display'] text-primary">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your store.
          </p>
        </div>

        {/* Enhanced Stats Cards */}
        <DashboardCards stats={stats} />

        {/* Charts Section */}
        <SalesChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Category Distribution */}
          <CategoryPieChart />

          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/20 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">#{order.id}</span>
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{order.customer}</p>
                      <p className="text-sm text-muted-foreground truncate">{order.product}</p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-semibold">₹{order.amount.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">{order.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Low Stock Alert */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-destructive mr-2" />
              Low Stock Alert
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {lowStockProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg border-destructive/20 bg-destructive/5">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">Only {product.stock} left in stock</p>
                  </div>
                  <div className="text-destructive font-bold">
                    {product.stock}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
