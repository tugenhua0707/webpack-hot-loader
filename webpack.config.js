var webpack = require('webpack');
var path = require('path');
var publicPath = 'http://127.0.0.1:3000/';
module.exports = {
  // ҳ����ڵ��ļ�
  //entry: "./src/main.js",
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000', 
    'webpack/hot/only-dev-server',
    './src/main.js' 
  ],
  // ����� ҳ��������ļ�Ŀ¼
  output: {
	path: path.join(__dirname, './build'),
    filename: "bundle.js",
	publicPath: publicPath
  },
  module: {
	// ������
    loaders: [
	  //.css �ļ�ʹ�� style-loader �� css-loader ������
      { test: /\.css$/, loader: 'style-loader!css-loader' },

	  //.js �ļ�ʹ�� jsx-loader �����봦��
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

