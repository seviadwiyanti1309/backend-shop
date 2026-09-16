const { products } = require("../data/products.data");

function getAllProducts(req, res) {
  const { category } = req.query;
  let result = products;
  if (category) {
    result = result.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }
  res.json(result);
}

function getProductById(req, res) {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: "Produk tidak ditemukan" });
  res.json(product);
}

function createProduct(req, res) {
  const newProduct = { id: "p" + (products.length + 1), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
}

function updateProduct(req, res) {
  const index = products.findIndex((p) => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Produk tidak ditemukan" });
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
}

function deleteProduct(req, res) {
  const index = products.findIndex((p) => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Produk tidak ditemukan" });
  products.splice(index, 1);
  res.status(204).send();
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
