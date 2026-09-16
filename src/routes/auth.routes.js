const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/auth.controller");

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

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Daftar user baru
 *     tags: [Auth]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Sevia
 *               email:
 *                 type: string
 *                 example: admin@shop.com
 *               password:
 *                 type: string
 *                 example: admin123
 *               role:
 *                 type: string
 *                 example: admin
 *     responses:
 *       201:
 *         description: Registrasi berhasil
 */
router.post("/register", register);

module.exports = router;
