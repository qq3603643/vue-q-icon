const { resolve } = require("path");
let build_mode = process.env.BUILD_MODE;
build_mode = build_mode ? build_mode.trim() : build_mode;

const isDev = ["", "undefined", undefined, "null", null].includes(build_mode);

console.log(`isDev -> ${isDev}`);

if (!isDev) {
  console.log(`build_mode -> ${build_mode}`);
}

const config = {};
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
    },

    chainWebpack: (config) => {
    },

    productionSourceMap: false,
  });
}

module.exports = config;