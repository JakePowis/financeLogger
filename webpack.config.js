const path = require('path')

module.exports = {
    devtool: 'eval-source-map',
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: 'public',
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

}