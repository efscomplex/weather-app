const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const rules = [
  {
    test: /.s[ca]ss$/i,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }
]

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module: { rules },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      src: path.resolve(__dirname, 'src')
    }
  }
}
