import React, { useState } from 'react';
import { createUser } from '../services/api';

const UserForm = ({ onClose, onUserCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    registration: '',
    password: '',
    repeatPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    
    if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      newErrors.name = 'Nome deve conter apenas letras';
      isValid = false;
    }

    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
      isValid = false;
    }

    
    if (!/^\d+$/.test(formData.registration)) {
      newErrors.registration = 'Matrícula deve conter apenas números';
      isValid = false;
    }

    
    if (!/^[a-zA-Z0-9@$!%*?&]{6,}$/.test(formData.password)) {
      newErrors.password = 'Senha deve conter 6 caracteres alfanuméricos';
      isValid = false;
    }

    
    if (formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = 'As senhas não coincidem';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await createUser(formData);
        onUserCreated();
        onClose();
      } catch (error) {
        console.error('Error creating user:', error);
      }
    }
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value !== '') && Object.keys(errors).length === 0;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-1/2">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Cadastro de Usuário</h2>
          <button onClick={onClose}>X</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Nome completo</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="mb-4">
  <label className="block mb-2">Nº da matrícula</label>
  <input
    type="text"
    name="registration"
    value={formData.registration}
    onChange={handleChange}
    className="w-full border rounded px-2 py-1"
  />
  {errors.registration && <p className="text-red-500">{errors.registration}</p>} {/* Alterado */}
</div>
          <div className="mb-4">
            <label className="block mb-2">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Senha</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Repita Senha</label>
            <input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
            />
            {errors.repeatPassword && <p className="text-red-500">{errors.repeatPassword}</p>}
          </div>
          <div className="flex justify-end">
            <button onClick={onClose} className="mr-2 px-4 py-2 border rounded">
              Cancelar
            </button>
            <button
              type="submit"
              className={`px-4 py-2 bg-blue-500 text-white rounded ${!isFormValid() && 'opacity-50 cursor-not-allowed'}`}
              disabled={!isFormValid()}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;