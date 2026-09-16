# Backend Shop API

REST API untuk `shop-app-native` (mobile) dan admin dashboard (web, React).

## Struktur folder

```
backend-shop/
  src/
    config/swagger.js       # setup swagger-jsdoc
    controllers/            # logic tiap modul
    data/                   # dummy data (ganti dengan DB nanti)
    middleware/auth.middleware.js  # verifyToken & isAdmin
    routes/                 # endpoint + komentar swagger
    app.js                  # setup express & mount routes
    server.js               # entry point
  .env.example
  package.json
```

## Cara jalanin

```bash
npm install
cp .env.example .env
npm run dev
```

- API: http://localhost:5000/api
- Dokumentasi Swagger: **http://localhost:5000/api-docs**

## Akun dummy buat login

| Role  | Email          | Password |
|-------|----------------|----------|
| Admin | admin@shop.com | admin123 |
| User  | user@shop.com  | user123  |

Setelah login, copy `token` yang dikembalikan, lalu klik tombol **Authorize** di Swagger UI dan masukkan token itu supaya bisa akses endpoint yang butuh login (create/update/delete produk, dashboard, dll).

## Endpoint yang sudah ada

- `POST /api/auth/login`
- `GET /api/products` (+ filter `?category=`)
- `GET /api/products/:id`
- `POST /api/products` (admin)
- `PUT /api/products/:id` (admin)
- `DELETE /api/products/:id` (admin)
- `GET /api/categories`
- `POST /api/categories` (admin)
- `GET /api/dashboard/summary` (admin)

## Selanjutnya

- Ganti dummy data di `src/data/` dengan database beneran (PostgreSQL/MongoDB pakai Prisma/Mongoose)
- Tambah modul: cart, wishlist/like, orders, banners/promo
- Hash password pakai `bcryptjs` (sudah terpasang, tinggal dipakai di auth.controller.js)
