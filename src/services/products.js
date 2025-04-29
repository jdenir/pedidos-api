const Product = require("../models/product");

exports.getAll = async () => {
  try {
    return await Product.findAll();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products.");
  }
};

exports.getById = async (id) => {
  try {
    return await Product.findByPk(id);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw new Error("Failed to fetch product.");
  }
};

exports.getByName = async (name) => {
  try {
    return await Product.findOne({ where: { name } });
  } catch (error) {
    console.error("Error fetching product by name:", error);
    throw new Error("Failed to fetch product.");
  }
};

exports.count = async () => {
  try {
    return await Product.count();
  } catch (error) {
    console.error("Error counting products:", error);
    throw new Error("Failed to count products.");
  }
};

exports.create = async (data) => {
  try {
    return await Product.create(data);
  } catch (error) {
    console.error("Error creating product:", error);
    throw new Error("Failed to create product.");
  }
};

exports.update = async (id, data) => {
  try {
    const [updated] = await Product.update(data, { where: { id } });
    if (!updated) throw new Error("Product not found.");
    return "Product updated successfully.";
  } catch (error) {
    console.error("Error updating product:", error);
    throw new Error("Failed to update product.");
  }
};

exports.remove = async (id) => {
  try {
    const deleted = await Product.destroy({ where: { id } });
    if (!deleted) throw new Error("Product not found.");
    return "Product deleted successfully.";
  } catch (error) {
    console.error("Error deleting product:", error);
    throw new Error("Failed to delete product.");
  }
};
