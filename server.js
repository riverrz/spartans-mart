// Importing modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Importing routes
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

// Setting express
const app = express();
const PORT = process.env.PORT || 5000;

// Setting middlewares to use
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/auth", authRoutes);

// Invoking routes
userRoutes(app);

//Listening on port
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
