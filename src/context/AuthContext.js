import React, { createContext, useContext, useEffect, useState } from "react";
import { verifyToken } from "../API";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('')

    const decodeToken = () => {
        const token = localStorage.getItem('token')
        const decoded = jwtDecode(token);
        console.log('decoded token',decoded);
        setUsername(decoded.name)
    }

    useEffect(() => {
        const checkToken = async () => {
        const tokenValid = await verifyToken();
        if (!tokenValid) {
            setIsLoggedIn(false);
            localStorage.removeItem('token');
        } 
        if (tokenValid){
                decodeToken()
                setIsLoggedIn(true)
                
            }
        };
        
        checkToken();
    }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
