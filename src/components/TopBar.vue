<template>
	<nav class="top-bar">
		<div class="warp">
			<div class="left">欢迎来到叩丁狼积分商城</div>
			<div class="right">
				<ul>
					<li>
						<img src="../assets/img/userImg.f8bbec5e.png" alt="" />
						<span>用户名：游客</span>
					</li>
					<li>我的鸡腿：--</li>
					<li>获取鸡腿</li>
					<li>叩丁狼官网</li>
					<li class="btn" @click="login">登录</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapMutations } from "vuex";
export default {
	name   : "TopBar",
	methods: {
		...mapMutations({setIsShowLoginModal: "isShowLoginModal/setIsShowLoginModal"}),
		login() {
			// 触发登录弹窗
			this.setIsShowLoginModal(true);
		}
	}
};
</script>

<style scoped lang="scss">
.top-bar {
	width: 100%;
	height: 40px;
	background-color: #242b39;
	color: #fffefe;
	.warp {
		display: flex;
		justify-content: space-between;
		.left {
			line-height: 40px;
		}
		.right {
			ul {
				display: flex;
				width: 520px;
				li {
					line-height: 40px;
					margin-left: 20px;
					cursor: pointer;
					display: flex;
					align-items: center;
					img {
						height: 35px;
						margin-right: 5px;
						border-radius: 50%;
					}
				}
				.btn {
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #f5a623;
					padding: 0 10px;
					width: 70px;
					text-align: center;
					font-size: 14px;
				}
			}
		}
	}
}
</style>
