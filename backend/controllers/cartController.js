const Cart = require("../models/Cart");

// Add product to cart
exports.addToCart = async (req, res) => {
  try {
    const { productId } = req.body;

    const userId = req.user.id;

    let cartItem = await Cart.findOne({
      user: userId,
      product: productId,
    });

    if (cartItem) {
      cartItem.quantity += 1;
      await cartItem.save();

      return res.json({
        message: "Cart updated successfully",
        cartItem,
      });
    }

    cartItem = await Cart.create({
      user: userId,
      product: productId,
      quantity: 1,
    });

    res.status(201).json({
      message: "Product added to cart",
      cartItem,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get logged-in user's cart
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find({
      user: req.user.id,
    }).populate("product");

    res.json(cart);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      message: "Item removed from cart",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};