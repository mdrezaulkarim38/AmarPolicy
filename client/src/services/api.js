import axios from "axios";

const API_URL = "http://localhost:5096/api/auth";

const api = axios.create({
   baseURL: API_URL,
   headers: {"Content-Type": "application/json"}
});

export const register = async (name, phone, email, password) => {
    return await api.post("/register", { name, phone, email, password });
};

export const login = async(email, password) => {
    return await api.post("/login", {email, password});
}

export const logout = () => {
    localStorage.removeItem("token");
}

export const getToken = () => {
    localStorage.getItem("token");
}

export default api;