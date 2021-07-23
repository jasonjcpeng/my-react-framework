const entry = require("./modules/entry");
const output = require("./modules/output");
const loader = require("./modules/loader");
const resolve = require("./modules/resolve");
const plugins = require("./modules/plugin");
const optimization = require("./modules/optimization");

module.exports = (payload) => {
  return {
    entry,
    output,
    module: loader,
    resolve,
    plugins: plugins({ config: payload.config }),
    optimization
  };
};
