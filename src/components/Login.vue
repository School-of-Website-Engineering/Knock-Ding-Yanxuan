<template>
	<div class="login-modal">
		<div class="mask" @click="this.close"></div>
		<div class="login-box">
			<img
				src="../assets/img/close.png"
				alt=""
				class="close"
				@click="this.close"
			/>
			<ul class="title">
				<li
					:class="isShowFrom ? 'login-active' : ''"
					@click="isShowFrom = true"
				>
					手机号码登录
				</li>
				<li>|</li>
				<li
					:class="!isShowFrom ? 'login-active' : ''"
					@click="isShowFrom = false"
				>
					微信扫码登录
				</li>
			</ul>

			<div class="login-body">
				<div class="from" v-show="isShowFrom">
					<div class="input-box">
						<input type="text" placeholder="请输入手机号" />
					</div>
					<slide-verify
						:l="42"
						:r="10"
						:w="359"
						:h="155"
						slider-text="向右滑动"
						@success="onSuccess"
						@fail="onFail"
						@refresh="onRefresh"
					></slide-verify>
					<br />
					<div class="input-codebox">
						<input type="text" placeholder="请输入验证码" />
						<div class="get-code">获取验证码</div>
					</div>
					<button class="btn">
						登录
					</button>
				</div>
				<div class="wx-qrcode" v-show="!isShowFrom">二维码</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
	data() {
		return { isShowFrom: true };
	},
	methods: {
		...mapMutations({setIsShowLoginModal: "isShowLoginModal/setIsShowLoginModal"}),
		close() {
			this.setIsShowLoginModal(false);
		},
		onSuccess() {
			this.msg = "验证成功";
		},
		onFail() {
			this.msg = "验证失败";
		},
		onRefresh() {
			this.msg = "刷新成功";
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_color.scss";
.login-modal {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	.mask {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}
	.login-box {
		width: 555px;
		height: 423px;
		background-image: url(../assets/img/login-box-bg.png);
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		.close {
			position: absolute;
			top: 15px;
			right: 56px;
			width: 20px;
			height: 20px;
			cursor: pointer;
		}
		.title {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 40px 10px 20px 10px;
			li {
				font-size: 18px;
				color: $aw-color-gray-4;
				cursor: pointer;
			}
			.login-active {
				color: $aw-color-gray-2;
			}
			li:nth-child(2) {
				margin: 0 20px;
			}
		}
		.login-body {
			width: 360px;
			height: 250px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			.from {
				width: 100%;
				height: 100%;
				.btn {
					width: 356px;
					font-size: 18px;
					font-weight: normal;
					font-stretch: normal;
					line-height: 50px;
					color: #ffffff;
					background-color: #0a328e;
					text-align: center;
				}
				.input-box {
					width: 100%;
					height: 50px;
					border-radius: 4px;
					margin-bottom: 20px;
					input {
						border: 1px solid #0a328d;
						width: 348px;
						height: 100%;
						outline: none;
						padding-left: 10px;
					}
				}
				.input-codebox {
					width: 100%;
					height: 50px;
					border-radius: 4px;
					margin-bottom: 20px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					input {
						border: 1px solid #0a328d;
						width: 100%;
						height: 100%;
						outline: none;
						padding-left: 10px;
					}
					.get-code {
						width: 100px;
						height: 104%;
						background-color: #0a328e;
						color: #fff;
						text-align: center;
						line-height: 50px;
						cursor: pointer;
					}
				}
			}
			.wx-qrcode {
			}
		}
	}
}
::v-deep .slide-verify {
	width: 100%;
	position: relative;
	box-sizing: border-box;
	canvas {
		position: absolute;
		left: 0;
		top: -120px;
		display: none;
		width: 100%;
		box-sizing: border-box;
	}
	.slide-verify-block {
		width: 85px;
		height: 136px;
	}
	.slide-verify-refresh-icon {
		top: -120px;
		display: none;
	}
	&:hover {
		canvas {
			display: block;
		}
		.slide-verify-refresh-icon {
			display: block;
		}
	}
}
</style>
