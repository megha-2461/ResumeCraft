// src/context/AuthContext.js
import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem('resumecraft-user'))
  );
  const [token, setToken] = useState(() =>
    localStorage.getItem('resumecraft-token')
  );

  const login = (userData, token) => {
    setUser(userData);
    setToken(token);
    localStorage.setItem('resumecraft-user', JSON.stringify(userData));
    localStorage.setItem('resumecraft-token', token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('resumecraft-user');
    localStorage.removeItem('resumecraft-token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
