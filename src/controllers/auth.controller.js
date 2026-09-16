const jwt = require("jsonwebtoken");

const dummyUsers = [
  { id: "u1", email: "admin@shop.com", password: "admin123", role: "admin" },
  { id: "u2", email: "user@shop.com", password: "user123", role: "user" },
];

function login(req, res) {
  const { email, password } = req.body;
  const user = dummyUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Email atau password salah" });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET || "secret",
    { expiresIn: "1d" }
  );

  res.json({ token, role: user.role });
}

module.exports = { login };
