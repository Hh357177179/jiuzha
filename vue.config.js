module.exports = {
  devServer: {
    port: 9999,                                     // 配置端口
    proxy: {
      '/api': {
        target: 'http://jz-test.zhaodaka.vip',    // 目标 API 地址
        ws: true,                               // 是否代理 websockets
        changOrigin: true,                      // 跨域配置
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  lintOnSave: false                                   // 取消 eslint 验证
};