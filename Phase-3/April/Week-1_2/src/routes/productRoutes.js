// routes/productRoutes.js

import express from "express";
import {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { protect,  authorize} from "../middlewares/authMiddleware.js";

const router = express.Router();


// PUBLIC ROUTES
router.get("/", getProducts);
router.get("/:id", getSingleProduct);

// ADMIN ROUTES
router.post("/", protect,  authorize("admin"),createProduct);
router.put("/:id", protect, authorize("admin"), updateProduct);
router.delete("/:id", protect, authorize("admin"), deleteProduct);

export default router;