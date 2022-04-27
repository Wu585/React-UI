const path = require('path');

module.exports = {
  entry: {
    index: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'W-UI',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader"
      },
      {
        test: /\.s([ac])ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
          /*{
            loader: "sass-loader",
            options: {
              includePaths: [path.resolve(__dirname, 'stylesheets', 'include')]
            }
          }*/
        ]
      }
    ]
  },
};
