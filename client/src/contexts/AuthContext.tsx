
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'admin';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

interface AuthContextType {
  auth: AuthState;
  login: (email: string, password: string, isAdmin?: boolean) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isAdmin: false,
  });

  const login = async (email: string, password: string, isAdmin = false): Promise<boolean> => {
    // Mock authentication - replace with real API call
    if (isAdmin && email === 'admin@varnikaa.com' && password === 'admin123') {
      setAuth({
        user: { id: '1', name: 'Admin', email, role: 'admin' },
        isAuthenticated: true,
        isAdmin: true,
      });
      return true;
    } else if (!isAdmin && email && password) {
      setAuth({
        user: { id: '2', name: 'Customer', email, role: 'customer' },
        isAuthenticated: true,
        isAdmin: false,
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuth({
      user: null,
      isAuthenticated: false,
      isAdmin: false,
    });
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Mock registration - replace with real API call
    if (name && email && password) {
      setAuth({
        user: { id: Date.now().toString(), name, email, role: 'customer' },
        isAuthenticated: true,
        isAdmin: false,
      });
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
