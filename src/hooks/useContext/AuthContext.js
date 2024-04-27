import React, { createContext, useState, useEffect, useContext } from 'react';
import UserService from '../../components/service/UserService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(UserService.isAuthenticated());
    }, []);

    const login = () => {
        setIsAuthenticated(UserService.isAuthenticated());
    };

    const logout = () => {
        setIsAuthenticated(UserService.isAuthenticated());
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
