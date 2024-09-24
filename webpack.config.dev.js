module.exports = {
    mode: 'development',
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        host: '0.0.0.0',        // Allows external access
        port: 8080,             // Port for the dev server
        contentBase: './',      // Serves files from the root directory
        historyApiFallback: true // Fallback to index.html for Single Page Applications
    }
};
