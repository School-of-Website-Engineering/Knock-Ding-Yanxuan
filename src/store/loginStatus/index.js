export default {
	namespaced: true,
	actions   : {},
	mutations : {
		//登录状态
		setLoginStatus(state, payload) {
			state.isLogined = payload;
		}
	},
	//登录状态
	state: { isLogined: !!sessionStorage.getItem("token") }
};
