import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState(""); 
  const [userAmount,setUserAmount] =useState();
  
  const login = (name,amount) => {
    setIsLogin(true);
    setUserName(name);
    setUserAmount(amount);  
  };
  const logout = () => {
    setIsLogin(false);
    setUserName("");
    setUserAmount();
  };

  return (
    <AuthContext.Provider value={{ isLogin, userName, login, logout,userAmount }}>
      {children}
    </AuthContext.Provider>
  );
}