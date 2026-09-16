const express = require("express");
const router = express.Router();
const {
  getMyCart,
  addToCart,
  updateCartItem,
  removeFromCart,
} = require("../controllers/cart.controller");
const { verifyToken } = require("../middleware/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Keranjang belanja milik user yang login
 */

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Ambil isi cart user yang sedang login
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: Isi cart berhasil diambil
 */
router.get("/", verifyToken, getMyCart);

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Tambah produk ke cart (atau tambah quantity kalau sudah ada)
 *     tags: [Cart]
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
 *               quantity:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Berhasil ditambahkan ke cart
 */
router.post("/", verifyToken, addToCart);

/**
 * @swagger
 * /cart/{productId}:
 *   put:
 *     summary: Update quantity item di cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Quantity berhasil diupdate
 *       404:
 *         description: Item tidak ditemukan
 */
router.put("/:productId", verifyToken, updateCartItem);

/**
 * @swagger
 * /cart/{productId}:
 *   delete:
 *     summary: Hapus produk dari cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Berhasil dihapus dari cart
 *       404:
 *         description: Item tidak ditemukan
 */
router.delete("/:productId", verifyToken, removeFromCart);

module.exports = router;