"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

interface AuthContextType {
    token: string | null;
    setToken: (token: string | null) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setTokenState] = useState<string | null>(null);

    // Load token from localStorage when the app starts
    useEffect(() => {
        const storedToken = localStorage.getItem("idToken");
        if (storedToken) {
            setTokenState(storedToken);
        }
    }, []);

    // Save token to localStorage
    const setToken = (newToken: string | null) => {
        setTokenState(newToken);
        if (newToken) {
            localStorage.setItem("idToken", newToken);
        } else {
            localStorage.removeItem("idToken");
        }
    };

    // Logout function
    const logout = () => {
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, setToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
