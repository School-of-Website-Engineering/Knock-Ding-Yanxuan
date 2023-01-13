export default {
	namespaced: true,
	actions   : {},
	mutations : {
		setIsShowLoginModal(state, isShowLoginModal) {
			state.isShowLoginModal = isShowLoginModal;
		}
	},
	state: { isShowLoginModal: false }
};
