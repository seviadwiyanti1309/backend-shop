const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const authRoutes = require("./routes/auth.routes");
const productsRoutes = require("./routes/products.routes");
const categoriesRoutes = require("./routes/categories.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const wishlistRoutes = require("./routes/wishlist.routes");
const cartRoutes = require("./routes/cart.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Shop API is running. Lihat dokumentasi di /api-docs" });
});

module.exports = app;
