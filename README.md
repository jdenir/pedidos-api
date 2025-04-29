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
│   ├── config/ # Configurações do projeto 
│   │   └── database.js # Configuração do banco de dados 
│   ├── controllers/ # Controladores das rotas 
│   │   ├── customers.js # Controlador de clientes 
│   │   ├── orders.js # Controlador de pedidos 
│   │   └── products.js # Controlador de produtos 
│   ├── models/ # Modelos do banco de dados 
│   │   ├── customer.js # Modelo de clientes 
│   │   ├── order.js # Modelo de pedidos 
│   │   └── product.js # Modelo de produtos 
│   ├── routes/ # Definição das rotas 
│   │   ├── customers.js # Rotas de clientes 
│   │   ├── orders.js # Rotas de pedidos 
│   │   └── products.js # Rotas de produtos 
│   ├── services/ # Lógica de negócios 
│   │   ├── customers.js # Serviço de clientes 
│   │   ├── orders.js # Serviço de pedidos 
│   │   └── products.js # Serviço de produtos 
│   ├── app.js # Arquivo principal da aplicação 
│   └── swagger.json # Documentação da API no formato OpenAPI 
├── database.sqlite # Arquivo do banco de dados SQLite 
├── package.json # Dependências e scripts do projeto
└── README.md # Documentação do projeto
```

---

## **Módulos**

### **1. Config**

#### **Arquivo**: `config/database.js`
- **Descrição**: Configura a conexão com o banco de dados utilizando o Sequelize.
- **Funções**:
  - Inicializa o Sequelize com o banco de dados.
  - Exporta a instância do Sequelize para ser utilizada nos modelos.

---

### **2. Models**

#### **Customer**
- **Arquivo**: `models/customer.js`
- **Descrição**: Define o modelo `Customer` para representar os clientes.
- **Campos**:
  - `name`: Tipo `STRING`, obrigatório.
  - `email`: Tipo `STRING`, obrigatório e único.

#### **Order**
- **Arquivo**: `models/order.js`
- **Descrição**: Define o modelo `Order` para representar os pedidos.
- **Campos**:
  - `customerId`: Tipo `INTEGER`, chave estrangeira para `Customer`.
  - `productId`: Tipo `INTEGER`, chave estrangeira para `Product`.
  - `quantity`: Tipo `INTEGER`, obrigatório.
  - `name`: Tipo `STRING`, obrigatório.

#### **Product**
- **Arquivo**: `models/product.js`
- **Descrição**: Define o modelo `Product` para representar os produtos.
- **Campos**:
  - `name`: Tipo `STRING`, obrigatório.
  - `price`: Tipo `FLOAT`, obrigatório.
  - `description`: Tipo `STRING`, opcional.

---

### **3. Controllers**

#### **CustomerController**
- **Arquivo**: `controllers/customers.js`
- **Descrição**: Controlador para gerenciar as requisições relacionadas a clientes.
- **Funções**:
  - `getAll`: Retorna todos os clientes.
  - `getById`: Retorna um cliente pelo ID.
  - `getByName`: Retorna um cliente pelo nome.
  - `count`: Retorna a contagem total de clientes.
  - `create`: Cria um novo cliente.
  - `update`: Atualiza um cliente existente.
  - `remove`: Remove um cliente.

#### **OrderController**
- **Arquivo**: `controllers/orders.js`
- **Descrição**: Controlador para gerenciar as requisições relacionadas a pedidos.
- **Funções**:
  - `getAll`: Retorna todos os pedidos.
  - `getById`: Retorna um pedido pelo ID.
  - `getByName`: Retorna um pedido pelo nome.
  - `count`: Retorna a contagem total de pedidos.
  - `create`: Cria um novo pedido.
  - `update`: Atualiza um pedido existente.
  - `remove`: Remove um pedido.

#### **ProductController**
- **Arquivo**: `controllers/products.js`
- **Descrição**: Controlador para gerenciar as requisições relacionadas a produtos.
- **Funções**:
  - `getAll`: Retorna todos os produtos.
  - `getById`: Retorna um produto pelo ID.
  - `getByName`: Retorna um produto pelo nome.
  - `count`: Retorna a contagem total de produtos.
  - `create`: Cria um novo produto.
  - `update`: Atualiza um produto existente.
  - `remove`: Remove um produto.

---

### **4. Routes**

#### **CustomerRoutes**
- **Arquivo**: `routes/customers.js`
- **Descrição**: Define as rotas para o recurso `Customer`.
- **Rotas**:
  - `GET /customers`: Lista todos os clientes.
  - `GET /customers/:id`: Retorna um cliente pelo ID.
  - `GET /customers/name/:name`: Retorna um cliente pelo nome.
  - `GET /customers/count`: Retorna a contagem total de clientes.
  - `POST /customers`: Cria um novo cliente.
  - `PUT /customers/:id`: Atualiza um cliente pelo ID.
  - `DELETE /customers/:id`: Remove um cliente pelo ID.

#### **OrderRoutes**
- **Arquivo**: `routes/orders.js`
- **Descrição**: Define as rotas para o recurso `Order`.
- **Rotas**:
  - `GET /orders`: Lista todos os pedidos.
  - `GET /orders/:id`: Retorna um pedido pelo ID.
  - `GET /orders/name/:name`: Retorna um pedido pelo nome.
  - `GET /orders/count`: Retorna a contagem total de pedidos.
  - `POST /orders`: Cria um novo pedido.
  - `PUT /orders/:id`: Atualiza um pedido pelo ID.
  - `DELETE /orders/:id`: Remove um pedido pelo ID.

#### **ProductRoutes**
- **Arquivo**: `routes/products.js`
- **Descrição**: Define as rotas para o recurso `Product`.
- **Rotas**:
  - `GET /products`: Lista todos os produtos.
  - `GET /products/:id`: Retorna um produto pelo ID.
  - `GET /products/name/:name`: Retorna um produto pelo nome.
  - `GET /products/count`: Retorna a contagem total de produtos.
  - `POST /products`: Cria um novo produto.
  - `PUT /products/:id`: Atualiza um produto pelo ID.
  - `DELETE /products/:id`: Remove um produto pelo ID.

---

### **5. Services**

#### **CustomerService**
- **Arquivo**: `services/customers.js`
- **Descrição**: Contém a lógica de negócios para o recurso `Customer`.
- **Funções**:
  - `getAll`, `getById`, `getByName`, `count`, `create`, `update`, `remove`.

#### **OrderService**
- **Arquivo**: `services/orders.js`
- **Descrição**: Contém a lógica de negócios para o recurso `Order`.
- **Funções**:
  - `getAll`, `getById`, `getByName`, `count`, `create`, `update`, `remove`.

#### **ProductService**
- **Arquivo**: `services/products.js`
- **Descrição**: Contém a lógica de negócios para o recurso `Product`.
- **Funções**:
  - `getAll`, `getById`, `getByName`, `count`, `create`, `update`, `remove`.

---

### **6. App**

#### **Arquivo**: `app.js`
- **Descrição**: Arquivo principal da aplicação.
- **Funções**:
  - Configura o servidor Express.
  - Registra as rotas para `Customers`, `Orders` e `Products`.
  - Configura a documentação Swagger.
  - Sincroniza o banco de dados com o Sequelize.
  - Inicia o servidor na porta `3000`.

---

### **7. Swagger**

#### **Arquivo**: `swagger.json`
- **Descrição**: Documentação da API no formato OpenAPI.
- **Endpoints Documentados**:
  - `/customers`
  - `/orders`
  - `/products`

---

## 📝 Notas

- A documentação interativa da API está disponível em: [http://localhost:3000/docs](http://localhost:3000/docs).
- Certifique-se de que a porta `3000` está disponível no seu sistema antes de iniciar a aplicação.
