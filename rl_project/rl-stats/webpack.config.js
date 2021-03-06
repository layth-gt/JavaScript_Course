//Create and export a config object
//  Entry
// Output
//  Mode (definded that in package.json scripts)
//  Module Rules (Loaders)

const config = {
  entry: ["./app/js/index.js"],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  }
};

module.exports = config;
