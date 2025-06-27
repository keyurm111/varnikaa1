import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingCart, Heart, Menu, X, ChevronDown, Home } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state: cartState } = useCart();
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  const categories = [
    'Banarasi',
    'Kanjeevaram',
    'Cotton',
    'Silk',
    'Partywear',
    'Bridal',
    'Casual',
    'Designer'
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-xs sm:text-sm">
        <span className="hidden sm:inline">Free shipping on orders above ₹2999 | </span>
        Call us: +91 9876543210
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img src="/varnikaa.png" alt="Varnikaa Logo" className="h-20 mt-1 w-32 object-contain" />
          </Link>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <div className="hidden xl:flex items-center space-x-6">
            <Link to="/" className="font-['Playfair_Display']  hover:text-blue-800 transition-colors font-medium">
              Home
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent font-medium font-bold font-['Playfair_Display'] hover:bg-primary hover:text-white data-[state=open]:!bg-primary data-[state=open]:!text-white">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid font-['Playfair_Display'] gap-2 p-4 w-[300px] sm:w-[400px] grid-cols-2">
                      {categories.map((category) => (
                        <NavigationMenuLink key={category} asChild>
                          <Link
                            to={`/products/${category.toLowerCase()}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                          >
                            <div className="text-sm font-medium leading-none">{category}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/products" className="font-['Playfair_Display'] hover:text-blue-800 transition-colors font-medium">
              All Sarees
            </Link>
          </div>

          {/* Search Bar - Hidden on small screens */}
          <div className="hidden md:flex items-center flex-1 max-w-sm mx-4 lg:mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search sarees..."
                className="w-full pl-10 pr-4 py-2 text-sm border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Mobile Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 text-foreground hover:text-blue-800 hover:bg-secondary/50 rounded-lg transition-colors"
              aria-label="Toggle search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* User Account - Desktop dropdown, mobile simplified */}
            <div className="relative group hidden sm:block">
              <button className="p-2 text-foreground hover:hover:bg-primary hover:text-white rounded-lg transition-colors">
                <User className="h-5 w-5" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {auth.isAuthenticated ? (
                    <>
                      <Link
                        to="/account"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-white transition-colors"
                      >
                        My Account
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-white transition-colors"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-white transition-colors"
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="block px-4 py-2 text-sm text- hover:bg-primary hover:text-white transition-colors"
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Wishlist */}
            <Link 
              to="/wishlist" 
              className="p-2 text-foreground hover:text-blue-800 hover:bg-primary hover:text-white rounded-lg transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Link>

            {/* Cart */}
            <Link 
              to="/cart" 
              className="p-2 text-foreground hover:text-blue-800 hover:bg-primary hover:text-white rounded-lg transition-colors relative"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartState.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartState.itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-foreground hover:text-blue-800 hover:bg-secondary/50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-3 border-t border-border/50 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for sarees..."
                className="w-full pl-10 pr-4 py-2 text-sm border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                autoFocus
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        )}

        {/* Mobile Menu Overlay & Slide-in */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-40 xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Slide-in Menu */}
            <div className="fixed top-0 left-0 bottom-0 w-4/5 max-w-xs bg-white z-50 shadow-lg flex flex-col animate-slide-in xl:hidden">
              {/* Header with Logo and Close */}
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <Link to="/" className="text-xl font-bold font-['Playfair_Display'] text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                  Varnikaa
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded hover:bg-gray-100">
                  <X className="h-6 w-6 text-foreground" />
                </button>
              </div>
              {/* Search Bar */}
              <div className="px-4 py-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search sarees..."
                    className="w-full pl-10 pr-4 py-2 text-sm border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    autoFocus
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              {/* Menu Items */}
              <nav className="flex-1 overflow-y-auto font-['Playfair_Display']">
                <Link
                  to="/"
                  className="flex items-center gap-3 px-6 py-3 text-foreground hover:bg-primary hover:text-white rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Home className="h-5 w-5" /> Home
                </Link>
                {/* Collapsible Categories */}
                <details className="px-2" open>
                  <summary className="flex items-center gap-3 px-4 py-3 font-medium text-foreground uppercase tracking-wide cursor-pointer hover:bg-primary/10 rounded">
                    <ChevronDown className="h-4 w-4" /> Categories
                  </summary>
                  <div className="grid grid-cols-2 gap-1 mt-2 px-2">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={`/products/${category.toLowerCase()}`}
                        className="block px-3 py-2 text-sm text-foreground hover:bg-primary hover:text-white rounded transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </details>
                <Link
                  to="/products"
                  className="flex items-center gap-3 px-6 py-3 text-foreground hover:bg-primary hover:text-white rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingCart className="h-5 w-5" /> All Sarees
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center gap-3 px-6 py-3 text-foreground hover:bg-primary hover:text-white rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Heart className="h-5 w-5" /> Wishlist
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center gap-3 px-6 py-3 text-foreground hover:bg-primary hover:text-white rounded transition-colors relative"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingCart className="h-5 w-5" /> Cart
                  {cartState.itemCount > 0 && (
                    <span className="ml-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                      {cartState.itemCount}
                    </span>
                  )}
                </Link>
                {/* User Section */}
                <div className="border-t border-border/50 mt-4 pt-4 px-4">
                  {auth.isAuthenticated ? (
                    <>
                      <Link
                        to="/account"
                        className="flex items-center gap-3 px-2 py-3 text-foreground hover:bg-primary hover:text-white rounded transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <User className="h-5 w-5" /> My Account
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 w-full text-left px-2 py-3 text-foreground hover:bg-primary hover:text-white rounded transition-colors"
                      >
                        <User className="h-5 w-5" /> Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="flex items-center gap-3 px-2 py-3 text-foreground hover:bg-primary hover:text-white rounded transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <User className="h-5 w-5" /> Login
                      </Link>
                      <Link
                        to="/register"
                        className="flex items-center gap-3 px-2 py-3 text-foreground hover:bg-primary hover:text-white rounded transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <User className="h-5 w-5" /> Register
                      </Link>
                    </>
                  )}
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
