const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/customers');

router.get('/', CustomerController.getAll);
router.get('/count', CustomerController.count);
router.get('/name/:name', CustomerController.getByName);
router.get('/:id', CustomerController.getById);
router.post('/', CustomerController.create);
router.put('/:id', CustomerController.update);
router.delete('/:id', CustomerController.remove);

module.exports = router;