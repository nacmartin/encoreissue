var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('build/')
    .setPublicPath('/')
    .addEntry('app', './app.js')

module.exports = Encore.getWebpackConfig()
