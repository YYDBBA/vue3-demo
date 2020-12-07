const { resolve } = require('path')
module.exports = {
  base: './',
  alias: {
    // 键必须以斜线开始和结束
    '/@/': resolve(__dirname, './src')
    // '/@components/': path.resolve(__dirname, './src/components')
  }
}