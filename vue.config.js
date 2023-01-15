// vue.config.js

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({transpileDependencies: true});

module.exports = {
	//关闭eslint
	lintOnSave: false,
	publicPath: "/Knock-Ding-Yanxuan/"
	// publicPath: process.env.NODE_ENV === "production" ? "./" : "/",

	// //代理服务器
	// devServer: {
	// 	proxy: {
	// 		"/api": {
	// 			target      : process.env.VUE_APP_BASE_URL, //代理转发路径
	// 			pathRewrites: { "^/api": "" }, //匹配字符串
	// 			changeOrigin: true //跨域
	// 		}
	// 	}
	// }
};
