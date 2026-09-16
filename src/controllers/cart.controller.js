const { CartItem, Product } = require("../models");

async function getMyCart(req, res) {
  try {
    const cart = await CartItem.findAll({
      where: { userId: req.user.id },
      include: Product,
    });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function addToCart(req, res) {
  try {
    const { productId, quantity } = req.body;
    const existing = await CartItem.findOne({
      where: { userId: req.user.id, productId },
    });

    if (existing) {
      existing.quantity += quantity || 1;
      await existing.save();
      return res.json(existing);
    }

    const item = await CartItem.create({
      userId: req.user.id,
      productId,
      quantity: quantity || 1,
    });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function updateCartItem(req, res) {
  try {
    const item = await CartItem.findOne({
      where: { userId: req.user.id, productId: req.params.productId },
    });
    if (!item) return res.status(404).json({ message: "Item tidak ditemukan di cart" });

    item.quantity = req.body.quantity;
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function removeFromCart(req, res) {
  try {
    const item = await CartItem.findOne({
      where: { userId: req.user.id, productId: req.params.productId },
    });
    if (!item) return res.status(404).json({ message: "Item tidak ditemukan di cart" });

    await item.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getMyCart, addToCart, updateCartItem, removeFromCart };