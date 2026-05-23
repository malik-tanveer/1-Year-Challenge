import Order from "../models/Order.js";

// Create Order
export const createOrder = async (req, res) => {
  try {
    const { products, totalPrice } = req.body;

    const order = await Order.create({
      user: req.user._id, // Only Logged User maek a order
      products,
      totalPrice,
    });

    res.status(201).json({
      success: true,
      order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Order (Admin or User who created the order)
export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // optional: only owner can update
    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed" });
    }

    order.status = req.body.status || order.status;

    const updatedOrder = await order.save();

    res.status(200).json({
      success: true,
      order: updatedOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Order (Admin or User who created the order)

export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // optional security check
    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await order.deleteOne();

    res.status(200).json({
      success: true,
      message: "Order deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET a single order by ID (Admin or User who created the order)

export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ })
      .populate("products.productId");

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("products.productId")

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // security check
    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed" });
    }

    res.status(200).json({
      success: true,
      order,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};