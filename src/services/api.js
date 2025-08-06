import axios from "axios";
console.log("env:", process.env.BACKEND_URL);
const API_URL = process.env.BACKEND_URL || "http://localhost:5000/api";
console.log("env-type:", process.env); // Debugging line to check the API URL


export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Auth
export const authMe = () => api.get("/auth/me");

export const authLogout = () => api.post("/auth/logout");

export const authLogin = (data) => api.post("/auth/login", data);

export const authRegister = (data) => api.post("/auth/signup", data);

// Cards
export const fetchCards = () => api.get("/cards");

//Home
export const fetchPosts = () => api.get("/post");

export const createCard = (data) => api.post(`/cards`, data);


