// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '2021台灣大未來-全球重啟 奪勢造局'
        return args
      })
  },
  publicPath: process.env.NODE_ENV === 'production' ?
    // '/lazyweb/project/economic_report/' : './' // 正式
    // '/edm/dinoTest/economic_report/' : './' // 測試
    './' : './' // localhost
}