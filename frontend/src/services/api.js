import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Adjust this to your API's base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getUsers = () => api.get('/users');
export const getUserById = (id) => api.get(`/users/${id}`);
export const createUser = (userData) => api.post('/users', userData);
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
export const deleteUser = (id) => api.delete(`/users/${id}`);

export default api;