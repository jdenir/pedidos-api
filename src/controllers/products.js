const ProductService = require("../services/products");

exports.getAll = async (req, res) => {
  try {
    const products = await ProductService.getAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const product = await ProductService.getById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found." });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getByName = async (req, res) => {
  try {
    const product = await ProductService.getByName(req.params.name);
    if (!product) return res.status(404).json({ error: "Product not found." });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.count = async (req, res) => {
  try {
    const count = await ProductService.count();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const product = await ProductService.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const message = await ProductService.update(req.params.id, req.body);
    res.status(200).json({ message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const message = await ProductService.remove(req.params.id);
    res.status(200).json({ message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
