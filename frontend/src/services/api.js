import axios from 'axios';

const API_BASE_URL = 'http://179.191.232.25:8080'; 

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // 5 segundos de timeout
});

api.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na requisição:', error);
    return Promise.reject(error);
  }
);

export const getUsers = (page = 1, limit = 10) => api.get('/users', { params: { page, limit } });
export const getUserById = (id) => api.get(`/users/${id}`);
export const createUser = (userData) => api.post('/users', userData);
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
export const deleteUser = (id) => api.delete(`/users/${id}`);

export default api;