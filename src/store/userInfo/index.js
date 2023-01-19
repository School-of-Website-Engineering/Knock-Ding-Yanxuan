import { reqGetUserInfo } from "@/request/api";

export default {
	namespaced: true,
	actions   : {
		// 获取用户信息
		async asyncGetUserInfo({ commit }) {
			let { data: res } = await reqGetUserInfo();
			commit("setUserInfo", res);
		}
	},
	mutations: {
		// 用户信息
		setUserInfo(state, userInfo) {
			state.userInfo = userInfo.userInfo;
			state.cartTotal = userInfo.cartTotal;
		},
		initUserInfo(state) {
			(state.cartTotal = 0),
			//用户信息
			(state.userInfo = {
				//用户昵称
				nickName: "游客",
				//鸡腿数
				coin    : 0,
				//头像
				headImg : require("../../assets/img/userImg.f8bbec5e.png")
			});
		}
	},
	//登录状态
	state: {
		//购物车数量
		cartTotal: 0,
		//用户信息
		userInfo : {
			//用户昵称
			nickName: "游客",
			//鸡腿数
			coin    : 0,
			//头像
			headImg : require("../../assets/img/userImg.f8bbec5e.png")
		}
	}
};
