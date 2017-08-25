module.exports = {
    entry: "./scss/main.scss",
    output: {
        filename: "./css/main.css"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader', 'sass']
            }
        ]
    }
}