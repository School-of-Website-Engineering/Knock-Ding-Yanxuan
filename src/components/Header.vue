<template>
	<div class="header warp">
		<h1>
			<img src="../assets/img/indexLogo.6f8ac4f0.png" alt="" />
		</h1>
		<!-- 导航与搜索 -->
		<div class="nav">
			<ul>
				<li>
					首页
				</li>
				<li>
					全部商品
				</li>
				<li>
					个人中心
				</li>
				<li>
					我的订单
				</li>
				<li>
					专属福利
				</li>
			</ul>
		</div>
		<div class="search">
			<input type="text" placeholder="请输入搜索内容" />
			<button>搜索</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_color.scss";
.header {
	height: 100px;
	background: $aw-color-gray-8;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.nav {
		float: left;
		margin-left: 50px;
		ul {
			li {
				float: left;
				margin-left: 20px;
				font-size: 16px;
				color: $aw-color-gray-1;
				line-height: 100px;
			}
		}
	}
	.search {
		float: right;
		margin-right: 50px;
		input {
			width: 300px;
			height: 40px;
			border: 1px solid $aw-color-gray-1;
			border-radius: 20px;
			padding-left: 20px;
			font-size: 16px;
			color: $aw-color-gray-1;
			&::placeholder {
				color: $aw-color-gray-1;
			}
		}
		button {
			width: 80px;
			height: 40px;
			border: 1px solid $aw-color-gray-1;
			border-radius: 20px;
			background: $aw-color-gray-1;
			color: $aw-color-gray-8;
			font-size: 16px;
			margin-left: 10px;
		}
	}
}
</style>
