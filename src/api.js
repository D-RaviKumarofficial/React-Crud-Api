import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/user", // Adjust based on your backend port
});

export const getAllUsers = () => api.get("/all");
export const getUserById = (id) => api.get(`/${id}`);
export const createUser = (userData) => api.post("/create", userData);
export const updateUser = (id, userData) => api.put(`/update/${id}`, userData);
export const deleteUser = (id) => api.put(`/delete/${id}`);

export default api;
