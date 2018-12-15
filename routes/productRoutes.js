const express = require("express");
const router = express.Router();

// importing Product model
const Product = require("../models/Product");

// Add a product
router.post("/", async function(req, res) {
  try {
    const productDetails = {
      name: req.body.product.name,
      category: req.body.product.category,
      price: parseInt(req.body.product.price),
      image: req.body.product.image
    };
    const newProduct = new Product(productDetails);
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
