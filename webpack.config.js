const path = require('path')

module.exports = {
    mode: 'development',
    entry: './static/script.js',
    output: {
        filename: './build.js',
        path: path.resolve(__dirname, 'dist')
    }
}