<template>
	<div class="root">
		<!-- 顶部 -->
		<TopBar></TopBar>
		<Header></Header>
		<!-- 路由出口 -->
		<router-view></router-view>
    <Home></Home>
		<Footer></Footer>
	</div>
</template>

<script>
// 引入页面
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Home from "./views/Home";

export default {
	name      : "App",
	//注册组件
	components: {
		TopBar,
		Header,
		Footer,
		Home
	}
};
</script>

<style lang="scss" scoped></style>
