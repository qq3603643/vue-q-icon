const {
  resolve
} = require("path");
let build_mode = process.env.BUILD_MODE;
build_mode = build_mode ? build_mode.trim() : build_mode;

const isDev = ["", "undefined", undefined, "null", null].includes(build_mode);

console.log(`isDev -> ${isDev}`);

if (!isDev) {
  console.log(`build_mode -> ${build_mode}`);
}

const config = {
  lintOnSave: false,
  parallel: false,
  productionSourceMap: false,
};

if (isDev) {
  // dev
  Object.assign(config, {
    pages: {
      index: {
        entry: "src/demos/main.ts",
        template: "public/index.html",
        filename: "index.html",
      }
    },

    devServer: {
      port: 1234,
    },
  });
}

if (build_mode === "production") {
  // production
}

if (build_mode === "lib") {
  // lib
  Object.assign(config, {
    configureWebpack: (config) => {
      config.externals = {
        vue: 'vue',
      };
    },

    chainWebpack: config => {
      config
        .entry("app")
        .clear()
        .add("./src/packages/index.ts");

      // config.module
      //   .rule("js")
      //   .exclude.add(resolve("src/lib/jsdifflib/jsdifflib.js"))
      //   .add(resolve("src/lib/qunee/Q.js"));

      config.module
        .rule("ts")
        .use("ts-loader")
        .loader("ts-loader")
        .tap(options => {
          options.transpileOnly = false;
          return options;
        });

      config.module
        .rule("tsx")
        .use("ts-loader")
        .loader("ts-loader")
        .tap(options => {
          options.transpileOnly = false;
          return options;
        });

      /* 移除 cache-loader，使之生成类型定义文件 */
      config.module.rule("ts").uses.delete("cache-loader");
      config.module.rule("tsx").uses.delete("cache-loader");
    },
  });
}

module.exports = config;
