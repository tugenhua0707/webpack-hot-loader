var webpack = require('webpack');
var path = require('path');
var publicPath = 'http://127.0.0.1:3000/';
module.exports = {
  // 页面入口的文件
  //entry: "./src/main.js",
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000', 
    'webpack/hot/only-dev-server',
    './src/main.js' 
  ],
  // 打包后 页面输出的文件目录
  output: {
	path: path.join(__dirname, './build'),
    filename: "bundle.js",
	publicPath: publicPath
  },
  module: {
	// 加载器
    loaders: [
	  //.css 文件使用 style-loader 和 css-loader 来处理
      { test: /\.css$/, loader: 'style-loader!css-loader' },

	  //.js 文件使用 jsx-loader 来编译处理
	  { 
		test: [/\.js$/, /\.jsx$/], 
		loader: 'react-hot!jsx?harmony',
		exclude: '/node_modules/'
	  }
    ]
  },
  resolve: {
    extensions: ['', '.coffee', '.js', '.jsx']
  },
  plugins: [
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin()
  ]
}

