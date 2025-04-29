const OrderService = require("../services/orders");

exports.getAll = async (req, res) => {
  try {
    const orders = await OrderService.getAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const order = await OrderService.getById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found." });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getByName = async (req, res) => {
  try {
    const order = await OrderService.getByName(req.params.name);
    if (!order) return res.status(404).json({ error: "Order not found." });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.count = async (req, res) => {
  try {
    const count = await OrderService.count();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const order = await OrderService.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const message = await OrderService.update(req.params.id, req.body);
    res.status(200).json({ message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const message = await OrderService.remove(req.params.id);
    res.status(200).json({ message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
