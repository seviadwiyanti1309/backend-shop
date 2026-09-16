const { Wishlist, Product } = require("../models");

async function getMyWishlist(req, res) {
  try {
    const wishlist = await Wishlist.findAll({
      where: { userId: req.user.id },
      include: Product,
    });
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function addToWishlist(req, res) {
  try {
    const { productId } = req.body;
    const existing = await Wishlist.findOne({
      where: { userId: req.user.id, productId },
    });
    if (existing) return res.status(400).json({ message: "Produk sudah ada di wishlist" });

    const item = await Wishlist.create({ userId: req.user.id, productId });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function removeFromWishlist(req, res) {
  try {
    const item = await Wishlist.findOne({
      where: { userId: req.user.id, productId: req.params.productId },
    });
    if (!item) return res.status(404).json({ message: "Item tidak ditemukan di wishlist" });

    await item.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getMyWishlist, addToWishlist, removeFromWishlist };