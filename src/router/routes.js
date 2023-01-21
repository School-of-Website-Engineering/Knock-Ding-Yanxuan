export default [
	//重定向
	{
		path    : "/",
		redirect: "home"
	},
	//首页组件
	{
		path     : "/home",
		component: () => import(/* webpackChunkName: "home" */ "@/views/Home"),
		name     : "home"
	},
	//全部商品组件
	{
		path     : "/goods",
		component: () =>
			import(/* webpackChunkName: "goods" */ "@/views/Goods"),
		name: "goods"
	},
	//个人中心组件
	{
		path     : "/user",
		component: () => import(/* webpackChunkName: "user" */ "@/views/User"),
		name     : "user",
		redirect : "user/cart",
		children : [
			//个人中心-购物车组件
			{
				path     : "/user/cart",
				component: () =>
					import(
						/* webpackChunkName: "cart" */ "@/components/user/Cart"
					),
				name: "cart"
			}
		]
	},
	//订单组件
	{
		path     : "/order",
		component: () =>
			import(/* webpackChunkName: "order" */ "@/views/Order"),
		name: "order"
	},
	//free
	{
		path     : "/free",
		component: () => import(/* webpackChunkName: "free" */ "@/views/Free"),
		name     : "free"
	},
	//详情页
	{
		path     : "/detail",
		component: () =>
			import(/* webpackChunkName: "detail" */ "@/views/Details"),
		name: "detail"
	}
];
