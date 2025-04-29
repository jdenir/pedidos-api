const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const sequelize = require('./config/database');

const ProductRoutes = require('./routes/products');
const CustomerRoutes = require('./routes/customers');
const OrderRoutes = require('./routes/orders');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/products', ProductRoutes);
app.use('/customers', CustomerRoutes);
app.use('/orders', OrderRoutes);

sequelize.sync().then(() => console.log('Banco sincronizado!'));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));