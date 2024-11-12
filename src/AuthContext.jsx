import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState("박선영"); 
  const [userAmount,setUserAmount] =useState(1112);
  
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