const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth.controller");

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Autentikasi user & admin
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login (dipakai mobile app & admin dashboard)
 *     tags: [Auth]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@shop.com
 *               password:
 *                 type: string
 *                 example: admin123
 *     responses:
 *       200:
 *         description: Login berhasil, mengembalikan JWT token
 *       401:
 *         description: Email atau password salah
 */
router.post("/login", login);

module.exports = router;
