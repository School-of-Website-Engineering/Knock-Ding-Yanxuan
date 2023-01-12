//导入nprogress进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";

//封装axios
import axios from "axios";
//创建axios实例
const instance = axios.create({
	baseURL: "http://kumanxuan1.f3322.net:8881/cms",
	headers: { "Content-Type": "application/json;charset=UTF-8" },
	timeout: 7000 // 请求超时时间
});
//请求拦截器
instance.interceptors.request.use(
	(config) => {
		//请求拦截器中，展示进度条
		NProgress.start();
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
//响应拦截器
instance.interceptors.response.use(
	(response) => {
		//响应拦截器中，隐藏进度条
		NProgress.done();
		return response.data;
	},
	(error) => {
		return Promise.reject(error);
	}
);
export default instance;
