import React, { createContext, useState, useEffect, useContext } from 'react';
import UserService from '../components/service/UserService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(UserService.isAuthenticated());
  }, []);

  const contextLogin = () => {
    setIsAuthenticated(true);
  };

  const contextLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, contextLogin, contextLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
