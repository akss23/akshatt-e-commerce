import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// basic route to check deployment
app.get("/", (req, res) => {
  res.send("🚀 Akshat E-Commerce Server is running successfully!");
});

// start server
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
