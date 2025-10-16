const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EsbuildPlugin } = require('esbuild-loader');

module.exports = {
  entry: './src/index.tsx',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  
  module: {
    rules: [
      {
        // esbuild-loader로 TypeScript/JSX 처리
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',  // tsx, ts, jsx, js 중 선택
          target: 'es2015',
          jsx: 'automatic', // React 17+ 자동 JSX 변환
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    })
  ],
  
  mode: process.env.NODE_ENV || 'development',
  devtool: 'source-map', // esbuild는 'eval-source-map' 대신 'source-map' 권장

  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'es2015',
        css: true  // CSS도 minify
      })
    ]
  },
};