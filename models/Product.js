const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Product", ProductSchema);
