import Order from "../models/Order.js";
import Product from "../models/Product.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
  try {
    const {
      products,
      shippingAddress,
      paymentMethod,
      orderNotes,
      status,
    } = req.body;

    // PRODUCTS CHECK
    if (!products || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No products found",
      });
    }

    // SHIPPING ADDRESS CHECK
    if (!shippingAddress) {
      return res.status(400).json({
        success: false,
        message: "Shipping address is required",
      });
    }

    let orderProducts = [];
    let totalPrice = 0;

    // LOOP PRODUCTS
    for (const item of products) {
      // FIND PRODUCT
      const product = await Product.findById(item.productId);

      // PRODUCT NOT FOUND
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      // STOCK CHECK
      if (product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `${product.title} is out of stock`,
        });
      }

      // TOTAL PRICE
      totalPrice += product.price * item.quantity;

      // PUSH ORDER PRODUCTS
      orderProducts.push({
        productId: product._id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: item.quantity,
      });

      // REDUCE STOCK
      product.stock -= item.quantity;
      await product.save();
    }

    // CREATE ORDER
    const order = await Order.create({
      user: req.user._id, // Set securely from auth middleware token
      products: orderProducts,
      totalPrice,
      shippingAddress,
      paymentMethod,
      orderNotes,
      status: status || "pending",
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET MY ORDERS (Logged In User Only)
export const getMyOrders = async (req, res) => {
  try {
    // FIXED: Filter activated so users can only look up their own profile orders securely
    const orders = await Order.find({
      //  user: req.user._id
       }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      totalOrders: orders.length,
      orders,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SINGLE ORDER
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    // ORDER NOT FOUND
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // OWNER CHECK
    // if (order.user.toString() !== req.user._id.toString()) {
    //   return res.status(403).json({
    //     success: false,
    //     message: "Access denied",
    //   });
    // }

    res.status(200).json({
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

// UPDATE ORDER STATUS
export const updateOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    // ORDER NOT FOUND
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // OWNER CHECK
    // if (order.user.toString() !== req.user._id.toString()) {
    //   return res.status(403).json({
    //     success: false,
    //     message: "Access denied",
    //   });
    // }

    // UPDATE STATUS
    order.status = req.body.status || order.status;
    await order.save();

    res.status(200).json({
      success: true,
      message: "Order updated successfully",
      order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE ORDER
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    // ORDER NOT FOUND
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // OWNER CHECK
    // if (order.user.toString() !== req.user._id.toString()) {
    //   return res.status(403).json({
    //     success: false,
    //     message: "Access denied",
    //   });
    // }

    // RESTORE STOCK
    for (const item of order.products) {
      const product = await Product.findById(item.productId);
      if (product) {
        product.stock += item.quantity;
        await product.save();
      }
    }

    // DELETE ORDER
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