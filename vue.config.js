const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/record-for-money/'
    : '/',
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, "src/assets/icons");  //讲解

    config.module
      .rule("svg-sprite")  //添加规则
      .test(/\.svg$/)     //匹配正则
      .include.add(dir)
      .end()              //只包含dir中icons 这个目录
      .use("svg-sprite-loader")    //选择使用的loader
      .loader("svg-sprite-loader")  //确定使用这个loader
      .options({ extract: false })   // 添加选项
      .end();
    // .use("svgo-loader")
    // .loader("svgo-loader")
    // .tap(options => ({
    //   ...options,
    //   plugins: [{ removeAttrs: { attrs: "fill" } }]
    // }))
    // .end();
    config
      .plugin("svg-sprite")
      .use(require("svg-sprite-loader/plugin"), [{ plainSprite: true }]);
    config.module.rule("svg").exclude.add(dir); // 其他 svg loader 排除 icons 目录
  }
}
