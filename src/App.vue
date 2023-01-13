<template>
	<div class="root">
		<!-- 顶部 -->
		<TopBar></TopBar>
		<Header></Header>
		<!-- 路由出口 -->
		<router-view></router-view>
		<Footer></Footer>

		<!-- 登录 -->
		<Login v-show="isShowLoginModal"></Login>
	</div>
</template>

<script>
// 引入页面
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Login from "./components/Login";
import { mapState } from "vuex";

export default {
	data() {
		return {};
	},
	name      : "App",
	//注册组件
	components: {
		TopBar,
		Header,
		Footer,
		Login
	},
	// 计算属性
	computed: {
		...mapState({
			isShowLoginModal: (state) =>
				state.isShowLoginModal.isShowLoginModal
		})
	}
};
</script>

<style lang="scss" scoped></style>
