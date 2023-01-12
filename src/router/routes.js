export default [
	//重定向
	{
		path    : "/",
		redirect: ""
	}
	// //导入登录组件
	// {
	// 	path     : "/login",
	// 	component: () =>
	// 		import(/* webpackChunkName: "login_home_welcome" */ "@/components/Login"),
	// 	name: "login"
	// },
	// //导入主页组件
	// {
	// 	path     : "/home",
	// 	component: () =>
	// 		import(/* webpackChunkName: "login_home_welcome" */ "@/components/Home.vue"),
	// 	name    : "home",
	// 	redirect: "/welcome",
	// 	children: [
	// 		{
	// 			//导入欢迎组件
	// 			path     : "/welcome",
	// 			component: () =>
	// 				import(
	// 					/* webpackChunkName: "login_home_welcome" */ "@/components/Welcome"
	// 				),
	// 			name: "welcome"
	// 		},
	// }
];
