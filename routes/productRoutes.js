const express = require("express");
const router = express.Router();

// importing Product model
const Product = require("../models/Product");

// Helper funtions
const { validateProduct } = require("../utility/functions");

// Add a product, ADD ADMIN PROTECTION
router.post("/", validateProduct, async function(req, res) {
  try {
    const newProduct = new Product(req.product);
    await newProduct.save();
    res.json({
      success: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all products
router.get("/", async function(req, res) {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
