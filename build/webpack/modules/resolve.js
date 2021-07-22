const path = require("path");

module.exports = {
  extensions: [".tsx", ".ts", ".js"],
  alias: {
    "@lib": path.resolve("./src/lib/")
  }
};
