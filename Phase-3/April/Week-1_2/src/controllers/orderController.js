// controllers/orderController.js
import Order from "../models/Order.js";
import Product from "../models/Product.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
  try {

    const { products } = req.body;
    if (!products || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No products found",
      });
    }

    let orderProducts = [];
    let totalPrice = 0;

    // LOOP PRODUCTS
    for (const item of products) {

      // FIND PRODUCT
      const product = await Product.findById(
        item.productId
      );

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

      // ORDER PRODUCTS
      orderProducts.push({
        productId: product._id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: item.quantity,
      });

      // STOCK REDUCE
      product.stock -= item.quantity;
      await product.save();
    }

    // CREATE ORDER
    const order = await Order.create({
      user: req.user._id,
      products: orderProducts,
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


// GET MY ORDERS
export const getMyOrders = async (req, res) => {
  try {

    // Only login user order you see
    // const orders = await Order.find({
    //   user: req.user._id,
    // });


    // ALL ORDERS
    const orders = await Order.find();

    res.status(200).json({
      success: true,
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

    const order = await Order.findById(
      req.params.id
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
    // SECURITY CHECK
    if (
      order.user.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Not allowed",
      });
    }

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

// UPDATE ORDER
export const updateOrder = async (req, res) => {
  try {

    const order = await Order.findById(
      req.params.id
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // OWNER CHECK
    if (
      order.user.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Not allowed",
      });
    }
    order.status =
      req.body.status || order.status;

    await order.save();

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


// DELETE ORDER
export const deleteOrder = async (req, res) => {
  try {

    const order = await Order.findById(
      req.params.id
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // OWNER CHECK
    if (
      order.user.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Not allowed",
      });
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