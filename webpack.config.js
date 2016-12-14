module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath:"/",
    path: __dirname,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    compress: true,
    port: 8080,
    hot:true
  },
  module:{
    loaders:[
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
