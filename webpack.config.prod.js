const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
     plugins: [ 
        new HtmlWebpackPlugin({ 
            template: './index.html', 
            filename: 'index.html' 
        })
    ],
devServer: {
        historyApiFallback: true,
        contentBase: './dist'
    }
};
