
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  FolderOpen, 
  Users, 
  LogOut,
  Menu,
  X,
  Plus,
  AlertTriangle,
  BarChart3
} from 'lucide-react';
import { useState } from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { auth, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const menuItems = [
    { 
      icon: LayoutDashboard, 
      label: 'Dashboard', 
      path: '/admin/dashboard' 
    },
    { 
      icon: Package, 
      label: 'Products', 
      path: '/admin/products' 
    },
    { 
      icon: Plus, 
      label: 'Add Product', 
      path: '/admin/add-product' 
    },
    { 
      icon: ShoppingCart, 
      label: 'Orders', 
      path: '/admin/orders' 
    },
    { 
      icon: FolderOpen, 
      label: 'Categories', 
      path: '/admin/categories' 
    },
    { 
      icon: AlertTriangle, 
      label: 'Stock Alerts', 
      path: '/admin/stock-alerts' 
    },
    { 
      icon: BarChart3, 
      label: 'Analytics', 
      path: '/admin/analytics' 
    }
  ];

  // Redirect if not admin
  if (!auth.isAuthenticated || !auth.isAdmin) {
    navigate('/admin/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-primary transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-primary-foreground/10">
          <Link to="/admin/dashboard" className="text-2xl font-bold font-['Playfair_Display'] text-primary-foreground">
            Varnikaa
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-primary-foreground hover:text-primary-foreground/80"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center px-6 py-3 text-primary-foreground hover:bg-primary-foreground/10 transition-colors
                  ${isActive ? 'bg-primary-foreground/20 border-r-4 border-secondary' : ''}
                `}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-primary-foreground/10">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-3">
              <Users className="h-4 w-4 text-secondary-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary-foreground">{auth.user?.name}</p>
              <p className="text-xs text-primary-foreground/60">Administrator</p>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-600 hover:text-gray-900"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-sm text-primary hover:underline">
              View Store
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
