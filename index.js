import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// basic route to check deployment
app.get("/", (req, res) => {
  res.send("🚀 Akshat E-Commerce Server is running successfully!");
});

// start server
import express from "express";
const app = express();

app.use(express.json());

// Temporary route for testing
app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "T-shirt", price: 499 },
    { id: 2, name: "Jeans", price: 999 },
    { id: 3, name: "Sneakers", price: 1499 },
  ]);
});

app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
