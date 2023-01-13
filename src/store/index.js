import Vue from "vue";
import Vuex from "vuex";
import isShowLoginModal from "@/store/isShowLoginModal";

Vue.use(Vuex);

export default new Vuex.Store({modules: {isShowLoginModal}});
