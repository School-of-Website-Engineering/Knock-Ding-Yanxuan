import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import router from "./router"

//全局样式表
import "./assets/scss/global.scss";

//拼图验证码
import SlideVerify from "vue-monoplasty-slide-verify";
Vue.use(SlideVerify);

//引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.prototype.imgUrl = "https://sc.wolfcode.cn";
Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount("#app")
