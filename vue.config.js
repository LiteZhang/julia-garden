const path = require("path");

// eslint-disable-next-line no-unused-vars
function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  lintOnSave: false,
  publicPath: "./",
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end()      
      .include.add(path.join(__dirname, "src/icons"))
      .end();

  },
  css: {
    loaderOptions: {
        sass: {
            prependData: `@import "~@/assets/scss/style.scss";`
        }
    }
  },
};
