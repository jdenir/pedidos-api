const CustomerService = require("../services/customers");

exports.getAll = async (req, res) => {
  try {
    const customers = await CustomerService.getAll();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const customer = await CustomerService.getById(req.params.id);
    if (!customer)
      return res.status(404).json({ error: "Customer not found." });
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getByName = async (req, res) => {
  try {
    const customer = await CustomerService.getByName(req.params.name);
    if (!customer)
      return res.status(404).json({ error: "Customer not found." });
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.count = async (req, res) => {
  try {
    const count = await CustomerService.count();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const customer = await CustomerService.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const message = await CustomerService.update(req.params.id, req.body);
    res.status(200).json({ message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const message = await CustomerService.remove(req.params.id);
    res.status(200).json({ message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
