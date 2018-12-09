if (process.env.process === "production") {
  module.exports = require("./prod-keys");
} else {
  module.exports = require("./dev-keys");
}
