const express = require("express");
const router = express.Router();
const { Category } = require("../models");
const { verifyToken, isAdmin } = require("../middleware/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Kelola kategori produk
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Ambil daftar kategori
 *     tags: [Categories]
 *     security: []
 *     responses:
 *       200:
 *         description: Daftar kategori
 */
router.get("/", async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Tambah kategori baru (admin only)
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Bags
 *     responses:
 *       201:
 *         description: Kategori berhasil ditambahkan
 */
router.post("/", verifyToken, isAdmin, async (req, res) => {
  const category = await Category.create({ name: req.body.name });
  res.status(201).json(category);
});

module.exports = router;
