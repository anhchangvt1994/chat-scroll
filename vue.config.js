const path = require('path');
const fs = require('fs');

module.exports = {
  // Disable generate split multi js file
  // Issue: https://forum.vuejs.org/t/disable-code-splitting-in-vue-cli-3/36295/2
  chainWebpack: config => {
    config.optimization.delete('splitChunks');
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/styles/*.scss'),
      ]
    }
  },

  css: {
    // disable generate .css file
    // Doc: https://cli.vuejs.org/config/#css-extract
    extract: false,
  },

  configureWebpack: {
    output: {
      filename: 'chat-scroll.js',
      chunkFilename: 'chat-scroll.js'
    }
  }
}
