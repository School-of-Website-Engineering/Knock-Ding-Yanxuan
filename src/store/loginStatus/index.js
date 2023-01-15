export default {
	namespaced: true,
	actions   : {},
	mutations : {
		setLoginStatus(state, payload) {
			state.isLogined = payload;
		}
	},
	//登录状态
	state: { isLogined: !!sessionStorage.getItem("token") }
};
