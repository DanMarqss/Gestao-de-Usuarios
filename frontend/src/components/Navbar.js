import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">WenLock</div>
      <nav>
        <Link to="/" className="nav-item">
          <FaHome /> Home
        </Link>
        <div className="nav-item dropdown">
          <span><FaUsers /> Controle de Acesso</span>
          <div className="dropdown-content">
            <Link to="/users">Usuários</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;