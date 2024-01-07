const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        /** same as --open (start script) in package.json */
        //open: true
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name':  JSON.stringify('Naveen Kairamkonda dev env')
        }),
        new ReactRefreshWebpackPlugin()
    ]
}