import React, { createContext, useState, useContext, ReactNode } from 'react';

// The master password. In a real app, this should be handled securely, not hardcoded.
const MASTER_PASSWORD = '39344323';

interface AdminPanelContextType {
  openPanel: () => void;
  closePanel: () => void;
  isOpen: boolean;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AdminPanelContext = createContext<AdminPanelContextType | undefined>(undefined);

export const AdminPanelProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const openPanel = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const logout = () => {
    setIsAuthenticated(false);
  };

  const closePanel = () => {
    setIsOpen(false);
    logout(); // Also log out when closing
    document.body.style.overflow = 'auto';
  };

  const login = (password: string): boolean => {
    if (password === MASTER_PASSWORD) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };


  return (
    <AdminPanelContext.Provider value={{ isOpen, openPanel, closePanel, isAuthenticated, login, logout }}>
      {children}
    </AdminPanelContext.Provider>
  );
};

export const useAdminPanel = (): AdminPanelContextType => {
  const context = useContext(AdminPanelContext);
  if (context === undefined) {
    throw new Error('useAdminPanel must be used within a AdminPanelProvider');
  }
  return context;
};
