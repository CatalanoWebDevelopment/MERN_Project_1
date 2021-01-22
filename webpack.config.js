const path = require('path');

module.exports = {
    entry: './server.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'client', 'public', 'index.html')
    }
};