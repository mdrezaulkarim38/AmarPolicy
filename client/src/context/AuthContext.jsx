import { createContext, useContext, useState } from "react";
import { login as loginUser, register as registerUser, logout as logoutUser } from "../services/api";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));

    const login = async (email, password) => {
        const response = await loginUser(email, password);
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
    };

    const register = async (name, phone, email, password) => {
        const response = await registerUser(name, phone, email, password);
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
    };

    const logout = () => {
        logoutUser();
        localStorage.removeItem("token");
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};