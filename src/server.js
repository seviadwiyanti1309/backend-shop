require("dotenv").config();
const app = require("./app");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log("Koneksi ke database berhasil");

    await sequelize.sync({ alter: true });
    console.log("Semua tabel udah sinkron dengan database");

    app.listen(PORT, () => {
      console.log(`Server jalan di http://localhost:${PORT}`);
      console.log(`Swagger docs di http://localhost:${PORT}/api-docs`);
    });
  } catch (err) {
    console.error("Gagal konek ke database:", err.message);
  }
}

start();