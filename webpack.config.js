const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 진입점
  entry: './src/index.js',
  
  // 출력 설정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // 빌드 시 dist 폴더 정리
  },
  
  // 개발 서버 설정
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true, // 브라우저 자동 열기
    hot: true,  // Hot Module Replacement
    historyApiFallback: true, // SPA 라우팅 지원
  },
  
  // 모듈 처리 규칙
  module: {
    rules: [
      {
        // JavaScript/JSX 파일 처리
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',    // ES6+ 변환
              '@babel/preset-react'   // JSX 변환
            ]
          }
        }
      },
      {
        // CSS 파일 처리
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  
  // 파일 확장자 생략 설정
  resolve: {
    extensions: ['.js', '.jsx']
  },
  
  // 플러그인 설정
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML 템플릿
      filename: 'index.html'
    })
  ],
  
  // 개발/프로덕션 모드별 설정
  mode: process.env.NODE_ENV || 'development',
  
  // 소스맵 설정 (개발 시 디버깅용)
  devtool: 'eval-source-map'
};