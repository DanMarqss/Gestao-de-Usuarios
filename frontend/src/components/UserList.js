import React, { useState, useEffect } from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { getUsers, deleteUser } from '../services/api';
import UserForm from './UserForm';

const UserList = ({ onCreateUser }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page) => {
    try {
      const response = await getUsers(page);
      setUsers(response.data.users);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
      try {
        await deleteUser(id);
        fetchUsers(currentPage);
      } catch (error) {
        console.error('Erro ao excluir usuário:', error);
      }
    }
  };

  const handleView = (user) => {
    setSelectedUser(user);
    setIsEditing(false);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsEditing(false);
  };

  const handleUserUpdated = () => {
    fetchUsers(currentPage);
    handleCloseModal();
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
                <button className="mr-2" onClick={() => handleView(user)}><Eye size={18} /></button>
                <button className="mr-2" onClick={() => handleEdit(user)}><Edit size={18} /></button>
                <button onClick={() => handleDelete(user.id)}><Trash2 size={18} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
          disabled={currentPage === 1}
          className="mx-2 px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="mx-2">Página {currentPage} de {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
          disabled={currentPage === totalPages}
          className="mx-2 px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-1/2">
            {isEditing ? (
              <UserForm user={selectedUser} onClose={handleCloseModal} onUserCreated={handleUserUpdated} />
            ) : (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Detalhes do Usuário</h2>
                <p><strong>Nome:</strong> {selectedUser.name}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Matrícula:</strong> {selectedUser.registration}</p>
                <button onClick={handleCloseModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                  Fechar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;