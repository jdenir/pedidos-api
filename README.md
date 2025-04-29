# Pedidos API

API para gerenciar **Clientes (Customers)**, **Pedidos (Orders)** e **Produtos (Products)**. Esta API foi desenvolvida utilizando **Node.js**, **Express**, **Sequelize** e **SQLite** para simplificar o armazenamento de dados.

---

## 📋 Funcionalidades

- Gerenciamento de **Clientes**:
  - Listar todos os clientes.
  - Obter cliente por ID ou nome.
  - Criar, atualizar e excluir clientes.
  - Obter a contagem total de clientes.

- Gerenciamento de **Pedidos**:
  - Listar todos os pedidos.
  - Obter pedido por ID ou nome.
  - Criar, atualizar e excluir pedidos.
  - Obter a contagem total de pedidos.

- Gerenciamento de **Produtos**:
  - Listar todos os produtos.
  - Obter produto por ID ou nome.
  - Criar, atualizar e excluir produtos.
  - Obter a contagem total de produtos.

---

## 🚀 Como subir a aplicação

### Pré-requisitos

- **Node.js**

### Subir localmente

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Configure o banco de dados SQLite:
   - O banco será criado automaticamente no arquivo `database.sqlite` na raiz do projeto.

3. Inicie a aplicação:
   ```bash
   npm start
   ```

4. Acesse a aplicação:
   - A API estará disponível em: [http://localhost:3000](http://localhost:3000).

---

## 📚 Rotas da API

### **Clientes (Customers)**

| Método | Endpoint               | Descrição                          |
|--------|------------------------|------------------------------------|
| GET    | `/customers`           | Listar todos os clientes.         |
| GET    | `/customers/{id}`      | Obter um cliente pelo ID.          |
| GET    | `/customers/name/{name}` | Obter um cliente pelo nome.        |
| GET    | `/customers/count`     | Obter a contagem total de clientes.|
| POST   | `/customers`           | Criar um novo cliente.             |
| PUT    | `/customers/{id}`      | Atualizar um cliente pelo ID.      |
| DELETE | `/customers/{id}`      | Excluir um cliente pelo ID.        |

### **Pedidos (Orders)**

| Método | Endpoint               | Descrição                          |
|--------|------------------------|------------------------------------|
| GET    | `/orders`              | Listar todos os pedidos.           |
| GET    | `/orders/{id}`         | Obter um pedido pelo ID.           |
| GET    | `/orders/name/{name}`  | Obter um pedido pelo nome.         |
| GET    | `/orders/count`        | Obter a contagem total de pedidos. |
| POST   | `/orders`              | Criar um novo pedido.              |
| PUT    | `/orders/{id}`         | Atualizar um pedido pelo ID.       |
| DELETE | `/orders/{id}`         | Excluir um pedido pelo ID.         |

### **Produtos (Products)**

| Método | Endpoint               | Descrição                          |
|--------|------------------------|------------------------------------|
| GET    | `/products`            | Listar todos os produtos.          |
| GET    | `/products/{id}`       | Obter um produto pelo ID.          |
| GET    | `/products/name/{name}`| Obter um produto pelo nome.        |
| GET    | `/products/count`      | Obter a contagem total de produtos.|
| POST   | `/products`            | Criar um novo produto.             |
| PUT    | `/products/{id}`       | Atualizar um produto pelo ID.      |
| DELETE | `/products/{id}`       | Excluir um produto pelo ID.        |

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de JavaScript no servidor.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para manipulação do banco de dados.
- **SQLite**: Banco de dados leve e simples.
- **Swagger**: Documentação interativa da API.

---

## 📄 Estrutura do Projeto

```
pedidos-api/
├── src/
│   ├── config/          # Configurações (ex.: banco de dados)
│   ├── controllers/     # Controladores das rotas
│   ├── models/          # Modelos
│   ├── routes/          # Definição das rotas
│   ├── services/        # Lógica de negócios
│   ├── app.js           # Arquivo principal da aplicação
│   └── swagger.json     # Documentação da API
├── database.sqlite      # Arquivo do banco de dados SQLite
├── package.json         # Dependências e scripts
└── README.md            # Documentação do projeto
```

---

## 📝 Notas

- A documentação interativa da API está disponível em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs).
- Certifique-se de que a porta `3000` está disponível no seu sistema antes de iniciar a aplicação.