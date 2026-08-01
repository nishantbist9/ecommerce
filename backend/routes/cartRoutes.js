const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/cartController");

const authMiddleware = require("../middleware/authMiddleware");

// Add product to cart
router.post("/", authMiddleware, addToCart);

// Get logged-in user's cart
router.get("/", authMiddleware, getCart);

// Remove cart item
router.delete("/:id", authMiddleware, removeFromCart);

module.exports = router;