const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/* ---------------------- GET ROUTES ---------------------- */

// Home Route
app.get("/", (req, res) => {
  res.send("Backend working! 🚀");
});

// Simple Hello
app.get("/hello", (req, res) => {
  res.json({ message: "Hello from Express API!" });
});

// Get user by ID
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.json({ id, name: "Test User", role: "Student" });
});

// Query params example: /search?item=laptop&price=50000
app.get("/search", (req, res) => {
  const { item, price } = req.query;
  res.json({
    message: "Search result",
    item: item || "none",
    maxPrice: price || "not specified",
  });
});

// List of products
app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "Phone", price: 20000 },
    { id: 2, name: "Laptop", price: 50000 },
    { id: 3, name: "Tablet", price: 15000 },
  ];
  res.json(products);
});

/* ---------------------- POST ROUTES ---------------------- */

// Create a new user
app.post("/user", (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: "User created successfully",
    data: { name, email },
  });
});

// Submit a form
app.post("/submit", (req, res) => {
  res.json({
    message: "Form submitted!",
    receivedData: req.body,
  });
});

// Add a product
app.post("/product", (req, res) => {
  const { name, price } = req.body;
  res.json({
    message: "Product added",
    product: { name, price },
  });
});

/* ---------------------- START SERVER ---------------------- */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
