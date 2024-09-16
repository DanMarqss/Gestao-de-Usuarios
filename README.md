<h4> Projeto de CRUD (Gestão de Usuários) </h4>

<hr>

<h3 align="center">
    Gestão de Usuários
    <br>
    Desenvolvendo um sistema CRUD completo para gerenciamento de usuários, abrangendo tanto o backend quanto o frontend.
    <br><br>
    <p align="center">
      <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-desenvolvedor">Desenvolvedor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;
</h3>

<hr>

## 🔖 Sobre

Criação de um sistema CRUD completo utilizando **NestJS** no backend e **React** no frontend. O projeto faz parte de um teste técnico para uma vaga na **Conecthus**.

---

## 👨‍💻 Desenvolvedor

* [Danilo Marques]

---

## 🚀 Tecnologias
- [NestJS](https://nestjs.com/)
- [React](https://reactjs.org/)
- [Swagger](https://swagger.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [GitHub](https://github.com/)

---

## ⚙️ Como rodar?

### Backend - NestJS

1. Certifique-se de ter o [Node.js](https://nodejs.org/en/) instalado.

2. Acesse a pasta do projeto backend:
   ```bash
   cd /caminho/para/seu/backend
   ```
3. Instale as dependências do projeto: 
   ```bash
   npm install
   ```
4. Configure o banco de dados PostgreSQL e as variáveis de ambiente, criando um arquivo .env com as configurações necessárias. 
5. Execute as migrações (caso utilize TypeORM ou outro ORM):
   ```bash
   npm run typeorm migration:run
   ```
6. Execute o servidor backend:
   ```bash
   npm run start
   ```
   O backend estará rodando no endereço http://localhost:3000 e você pode acessar a documentação da API em http://localhost:3000/api-docs.

   ## Frontend - React

   1. Acesse a pasta do projeto frontend:
     ```bash
     cd /caminho/para/seu/frontend
     ```

   2. Instale as dependências do projeto:
     ```bash
     npm install
     ```
   3. Execute a aplicação frontend:
     ```bash
     npm start
     ```

    A aplicação estará disponível em http://localhost:3001 - Aplicação FrontEnd
    APlicação BackEnd vai estar rodando na http://localhost:3000.

    Para acessar interface Web acessa somente com a porta 3001.

    