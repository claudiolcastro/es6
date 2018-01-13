module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_madules/,
        query: { compact: false }
      }
    ]
  },
  devServer: {
    port: 3003,
    contentBase: __dirname + '/build/',
    inline: true
  }
}