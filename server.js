// Importing modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

// Importing keys.js
const keys = require("./config/keys");

// Importing routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

// Setting express
const app = express();
const PORT = process.env.PORT || 5000;

// Setting db
mongoose.connect(keys.DB_URI);
mongoose.set("useCreateIndex", true);

// Setting middlewares to use
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);

//Listening on port
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
