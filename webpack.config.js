const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
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
  plugins: [
    new HtmlWebpackPlugin({
      title: "W-UI",
      template: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  }
};
