const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orders');

router.get('/', OrderController.getAll);
router.get('/count', OrderController.count);
router.get('/name/:name', OrderController.getByName);
router.get('/:id', OrderController.getById);
router.post('/', OrderController.create);
router.put('/:id', OrderController.update);
router.delete('/:id', OrderController.remove);

module.exports = router;