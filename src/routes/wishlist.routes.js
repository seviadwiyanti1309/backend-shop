const express = require("express");
const router = express.Router();
const {
  getMyWishlist,
  addToWishlist,
  removeFromWishlist,
} = require("../controllers/wishlist.controller");
const { verifyToken } = require("../middleware/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Wishlist
 *   description: Wishlist/like produk milik user yang login
 */

/**
 * @swagger
 * /wishlist:
 *   get:
 *     summary: Ambil wishlist user yang sedang login
 *     tags: [Wishlist]
 *     responses:
 *       200:
 *         description: Daftar wishlist berhasil diambil
 */
router.get("/", verifyToken, getMyWishlist);

/**
 * @swagger
 * /wishlist:
 *   post:
 *     summary: Tambah produk ke wishlist
 *     tags: [Wishlist]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 example: 3fa85f64-5717-4562-b3fc-2c963f66afa6
 *     responses:
 *       201:
 *         description: Berhasil ditambahkan ke wishlist
 *       400:
 *         description: Produk sudah ada di wishlist
 */
router.post("/", verifyToken, addToWishlist);

/**
 * @swagger
 * /wishlist/{productId}:
 *   delete:
 *     summary: Hapus produk dari wishlist
 *     tags: [Wishlist]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Berhasil dihapus dari wishlist
 *       404:
 *         description: Item tidak ditemukan
 */
router.delete("/:productId", verifyToken, removeFromWishlist);

module.exports = router;