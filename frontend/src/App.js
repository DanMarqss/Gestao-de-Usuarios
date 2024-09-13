import React, { useState } from 'react';
import { Home, Users } from 'lucide-react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

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

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'users' && (
          <UserList
            onCreateUser={() => setShowUserModal(true)}
          />
        )}
      </div>
      {showUserModal && (
        <UserForm
          onClose={() => setShowUserModal(false)}
          onUserCreated={() => {
            setShowUserModal(false);
            // Atualizar a lista de usuários se necessário
          }}
        />
      )}
    </div>
  );
};

export default App;