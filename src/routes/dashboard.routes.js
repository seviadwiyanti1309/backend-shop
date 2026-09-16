const express = require("express");
const router = express.Router();
const { products } = require("../data/products.data");
const { verifyToken, isAdmin } = require("../middleware/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Ringkasan data untuk admin dashboard
 */

/**
 * @swagger
 * /dashboard/summary:
 *   get:
 *     summary: Ringkasan statistik (total produk, dll) — admin only
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Ringkasan berhasil diambil
 *       403:
 *         description: Akses khusus admin
 */
router.get("/summary", verifyToken, isAdmin, (req, res) => {
  res.json({
    totalProducts: products.length,
    totalFlashSale: products.filter((p) => p.isFlashSale).length,
  });
});

module.exports = router;
