var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/Link.js",
  output: {
    path: path.resolve("lib"),
    filename: "link.js",
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
  },
  resolve: {
    extensions: [".ts", ".js", "*"],
    modules: [path.resolve(__dirname, "./src"), "node_modules"]
  }
};
