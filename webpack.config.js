module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3003,
    contentBase: __dirname + '/build',
    inline: true
  }
}