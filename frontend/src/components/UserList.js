import React, { useState, useEffect } from 'react';
import { Table, Input, Button } from 'antd';
import { getUserList } from '../services/api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUserList();
    setUsers(data);
  };

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Ações',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button onClick={() => handleEdit(record.id)}>Editar</Button>
          <Button onClick={() => handleDelete(record.id)}>Deletar</Button>
        </>
      ),
    },
  ];

  const handleEdit = (id) => {
    // Implementar lógica de edição
  };

  const handleDelete = (id) => {
    // Implementar lógica de deleção
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Input.Search
        placeholder="Pesquisar usuários"
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <Table columns={columns} dataSource={filteredUsers} />
    </div>
  );
};

export default UserList;