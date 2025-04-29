const Order = require("../models/order");

exports.getAll = async () => {
  try {
    return await Order.findAll();
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Failed to fetch orders.");
  }
};

exports.getById = async (id) => {
  try {
    return await Order.findByPk(id);
  } catch (error) {
    console.error("Error fetching order by ID:", error);
    throw new Error("Failed to fetch order.");
  }
};

exports.getByName = async (name) => {
  try {
    return await Order.findOne({ where: { name } });
  } catch (error) {
    console.error("Error fetching order by name:", error);
    throw new Error("Failed to fetch order.");
  }
};

exports.count = async () => {
  try {
    return await Order.count();
  } catch (error) {
    console.error("Error counting orders:", error);
    throw new Error("Failed to count orders.");
  }
};

exports.create = async (data) => {
  try {
    return await Order.create(data);
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Failed to create order.");
  }
};

exports.update = async (id, data) => {
  try {
    const [updated] = await Order.update(data, { where: { id } });
    if (!updated) throw new Error("Order not found.");
    return "Order updated successfully.";
  } catch (error) {
    console.error("Error updating order:", error);
    throw new Error("Failed to update order.");
  }
};

exports.remove = async (id) => {
  try {
    const deleted = await Order.destroy({ where: { id } });
    if (!deleted) throw new Error("Order not found.");
    return "Order deleted successfully.";
  } catch (error) {
    console.error("Error deleting order:", error);
    throw new Error("Failed to delete order.");
  }
};
