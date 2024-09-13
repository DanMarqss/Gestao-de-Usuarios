import React from 'react';
import { Form, Input, Button, Modal } from 'antd';

const UserForm = ({ visible, onCancel, onSubmit, initialValues }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      visible={visible}
      title={initialValues ? "Editar Usuário" : "Cadastrar Usuário"}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancelar
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Salvar
        </Button>,
      ]}
    >
      <Form form={form} initialValues={initialValues} layout="vertical">
        <Form.Item
          name="name"
          label="Nome"
          rules={[{ required: true, message: 'Por favor, insira o nome' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            { required: true, message: 'Por favor, insira o e-mail' },
            { type: 'email', message: 'E-mail inválido' },
          ]}
        >
          <Input />
        </Form.Item>
        {/* Adicione mais campos conforme necessário */}
      </Form>
    </Modal>
  );
};

export default UserForm;