import Vue from "vue";
import Vuex from "vuex";
import isShowLoginModal from "@/store/isShowLoginModal";
import loginStatus from "@/store/loginStatus";

Vue.use(Vuex);

export default new Vuex.Store({ modules: { isShowLoginModal, loginStatus } });
