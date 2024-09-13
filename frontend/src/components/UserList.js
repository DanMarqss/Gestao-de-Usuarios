import React, { useState, useEffect } from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { getUsers, deleteUser } from '../services/api';

const UserList = ({ onCreateUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
      try {
        await deleteUser(id);
        fetchUsers(); // Atualiza a lista após a exclusão
      } catch (error) {
        console.error('Erro ao excluir usuário:', error);
      }
    }
  };

  const handleView = (id) => {
    // Implementar a lógica para visualizar o usuário
    console.log('Visualizar usuário', id);
  };

  const handleEdit = (id) => {
    // Implementar a lógica para editar o usuário
    console.log('Editar usuário', id);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Usuários</h2>
        <div className="flex items-center">
          <input 
            type="text" 
            placeholder="Pesquisa" 
            className="border rounded-l px-2 py-1 w-40"
          />
          <button onClick={onCreateUser} className="bg-blue-500 text-white px-4 py-1 rounded-r">
            + Cadastrar Usuário
          </button>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2">Nome</th>
            <th className="text-right p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="p-2">{user.name}</td>
              <td className="text-right p-2">
                <button className="mr-2" onClick={() => handleView(user.id)}><Eye size={18} /></button>
                <button className="mr-2" onClick={() => handleEdit(user.id)}><Edit size={18} /></button>
                <button onClick={() => handleDelete(user.id)}><Trash2 size={18} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;