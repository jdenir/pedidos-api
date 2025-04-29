const Customer = require("../models/customer");

exports.getAll = async () => {
  try {
    return await Customer.findAll();
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw new Error("Failed to fetch customers.");
  }
};

exports.getById = async (id) => {
  try {
    return await Customer.findByPk(id);
  } catch (error) {
    console.error("Error fetching customer by ID:", error);
    throw new Error("Failed to fetch customer.");
  }
};

exports.getByName = async (name) => {
  try {
    return await Customer.findOne({ where: { name } });
  } catch (error) {
    console.error("Error fetching customer by name:", error);
    throw new Error("Failed to fetch customer.");
  }
};

exports.count = async () => {
  try {
    return await Customer.count();
  } catch (error) {
    console.error("Error counting customers:", error);
    throw new Error("Failed to count customers.");
  }
};

exports.create = async (data) => {
  try {
    return await Customer.create(data);
  } catch (error) {
    console.error("Error creating customer:", error);
    throw new Error("Failed to create customer.");
  }
};

exports.update = async (id, data) => {
  try {
    const [updated] = await Customer.update(data, { where: { id } });
    if (!updated) throw new Error("Customer not found.");
    return "Customer updated successfully.";
  } catch (error) {
    console.error("Error updating customer:", error);
    throw new Error("Failed to update customer.");
  }
};

exports.remove = async (id) => {
  try {
    const deleted = await Customer.destroy({ where: { id } });
    if (!deleted) throw new Error("Customer not found.");
    return "Customer deleted successfully.";
  } catch (error) {
    console.error("Error deleting customer:", error);
    throw new Error("Failed to delete customer.");
  }
};
