import React, { createContext, useState, useContext } from 'react';
import { ADMIN_PASSWORD, ADMIN_USERNAME } from '../constants';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  const login = (username, password) => {
   //return promise
    return new Promise(resolve => {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', true);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
