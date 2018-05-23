const DotEnv = require("dotenv-webpack");
//Create and export a config object
//  Entry
// Output
//  Mode (definded that in package.json scripts)
//  Module Rules (Loaders)

console.log(process.env);

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
  plugins: [new DotEnv()],
  devServer: {
    contentBase: "./dist"
  }
};

module.exports = config;
