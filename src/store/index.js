import Vue from "vue";
import Vuex from "vuex";
import isShowLoginModal from "@/store/isShowLoginModal";
import loginStatus from "@/store/loginStatus";
import userInfo from "@/store/userInfo";
import showToast from "@/store/showToast";

Vue.use(Vuex);

export default new Vuex.Store({modules: { isShowLoginModal, loginStatus, userInfo, showToast }});
