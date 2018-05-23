//Webpack
// Build tool - Automates task for us
// Bundler - Collates files (joins them together)
//
//Entry Point - Where does your app start?
//Output - Where does the transformed end up?
//rules - What transformations need to take place?

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
        exclude: /node_modules/,
        test: /\.js$/,
        loaders: ["babel-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  }
};

module.exports = config;
