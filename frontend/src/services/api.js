import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',  // URL do seu back-end NestJS
});

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const createUser = async (userData) => {
  const response = await api.post('/users', userData);
  return response.data;
};

// Adicionando funções para atualizar e deletar usuários

export const updateUser = async (id, userData) => {
  const response = await api.put(`/users/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};
export const getUserList = async () => {
  const response = await api.get('/users');
  return response.data;
};