var path = require("path");

module.exports = {
  mode: "production",
  entry: "./lib/index.js",
  output: {
    path: path.resolve("lib"),
    // path: "./",
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  }
};
