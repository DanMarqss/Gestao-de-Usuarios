import React, { useState } from 'react';
import { Home, Users, Eye, Edit, Trash2, X } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showUserModal, setShowUserModal] = useState(false);

  const Sidebar = () => (
    <div className="w-64 h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-10">Conecthus</h1>
      <nav>
        <button onClick={() => setCurrentPage('home')} className="flex items-center mb-4 hover:text-blue-400">
          <Home className="mr-2" /> Home
        </button>
        <button onClick={() => setCurrentPage('users')} className="flex items-center mb-4 hover:text-blue-400">
          <Users className="mr-2" /> Usuários
        </button>
      </nav>
    </div>
  );

  const HomePage = () => (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-5xl font-bold">Bem-vindo!</h1>
    </div>
  );

  const UsersPage = () => (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Usuários</h2>
        <div className="flex items-center">
          <input 
            type="text" 
            placeholder="Pesquisa" 
            className="border rounded-l px-2 py-1 w-40"
          />
          <button onClick={() => setShowUserModal(true)} className="bg-blue-500 text-white px-4 py-1 rounded-r">
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
          <tr>
            <td className="p-2">Raimundo Neto Abreu Teixeira</td>
            <td className="text-right p-2">
              <button className="mr-2"><Eye size={18} /></button>
              <button className="mr-2"><Edit size={18} /></button>
              <button><Trash2 size={18} /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const UserModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-1/2">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Cadastro de Usuário</h2>
          <button onClick={() => setShowUserModal(false)}><X /></button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Nome completo</label>
            <input type="text" className="w-full border rounded px-2 py-1" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Nº da matrícula</label>
            <input type="text" className="w-full border rounded px-2 py-1" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">E-mail</label>
            <input type="email" className="w-full border rounded px-2 py-1" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Senha</label>
            <input type="password" className="w-full border rounded px-2 py-1" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Repita Senha</label>
            <input type="password" className="w-full border rounded px-2 py-1" />
          </div>
          <div className="flex justify-end">
            <button onClick={() => setShowUserModal(false)} className="mr-2 px-4 py-2 border rounded">
              Cancelar
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'users' && <UsersPage />}
      </div>
      {showUserModal && <UserModal />}
    </div>
  );
};

export default App;