// vue.config.js file to be placed in the root of your repository
const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vinchantle.github.io/'
    : '/'
}
