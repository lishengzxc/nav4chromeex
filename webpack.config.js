module.exports = {
  entry: './app/main.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js)$/,
      loader: 'jsx-loader?harmony'
    },{
      test: /\.(css)$/,
      loader: 'style-loader!css-loader'
    },{
      test: /\.(png|jpg)$/,
      loader: 'url-loader?size=8192'
    }]
  }
};
