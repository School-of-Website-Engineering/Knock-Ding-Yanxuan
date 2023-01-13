export default {
	namespaced: true,
	state     : { isShowLoginModal: true },
	mutations : {
		setIsShowLoginModal(state, isShowLoginModal) {
			state.isShowLoginModal = isShowLoginModal;
		}
	},
	actions: {}
};
