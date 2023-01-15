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
					@click="showWeinxinLogin"
				>
					微信扫码登录
				</li>
			</ul>

			<div class="login-body">
				<div class="from" v-show="isShowFrom">
					<div class="input-box">
						<input
							type="text"
							v-model="phoneNum"
							placeholder="请输入手机号"
						/>
					</div>
					<slide-verify
						:l="42"
						:r="10"
						:w="359"
						:h="155"
						:slider-text="msg"
						@success="onSuccess()"
						@fail="onFail"
						@refresh="onRefresh"
					></slide-verify>
					<br />
					<div class="input-codebox">
						<input
							v-model="SMScode"
							ref="phone"
							type="text"
							placeholder="请输入验证码"
						/>
						<div class="get-code" @click="onGetCode">
							{{ codeText }}
						</div>
					</div>
					<button class="btn" @click="submitLogin">
						登录
					</button>
				</div>
				<div class="wx-qrcode" id="weixin" v-show="!isShowFrom">
					二维码
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
import { reqBindPhone, reqGetSmsCode, reqLogin } from "@/request/api";
export default {
	data() {
		return {
			isShowFrom: true,
			msg       : "请按住滑块，拖动对应位置",
			//手机号
			phoneNum  : "19183879605",
			//验证码
			codeText  : "获取验证码",
			SMScode   : "156"
		};
	},
	methods: {
		...mapMutations({
			setIsShowLoginModal: "isShowLoginModal/setIsShowLoginModal",
			setIsShowCartModal : "loginStatus/setLoginStatus"
		}),
		close() {
			this.setIsShowLoginModal(false);
		},
		onSuccess() {
			this.msg = "验证成功";
		},
		onFail() {
			this.msg = "验证失败";
			this.onRefresh();
		},
		onRefresh() {
			this.msg = "再试一次";
		},
		// 提交登录
		async submitLogin() {
			let uuid = sessionStorage.getItem("loginUuid");
			let res = null;
			if (uuid) {
				res = await reqBindPhone({
					phone     : this.phoneNum.trim(),
					verifyCode: this.SMScode.trim(),
					uuid
				});
			}
			else {
				res = await reqLogin({
					phone     : this.phoneNum.trim(),
					verifyCode: this.SMScode.trim()
				});
			}
			if (!this.verify()) {
				return;
			}
			//验证用户输入的验证码是不是为空,为空就return
			if (this.SMScode.trim() === "") {
				this.$message.error("请输入验证码");
				return;
			}

			//登录成功
			if (!res) {
				return;
			}
			console.log(res);
			this.$message.success("登录成功");
			this.close();
			sessionStorage.setItem("token", res["x-auth-token"]);
			this.setIsShowCartModal(true);
			if (uuid) {
				sessionStorage.removeItem("loginUuid");
				//清除地址栏code
				await this.$router.push("/home");
			}
		},
		verify() {
			//正则验证手机号
			if (!/^1[3456789]\d{9}$/.test(this.phoneNum)) {
				this.$message.error("请输入正确的手机号");
				this.$refs.phone.focus();
				return false;
			}
			//验证图片验证码
			if (this.msg !== "验证成功") {
				this.$message.error("请验证图片验证码");
				return false;
			}
			return true;
		},
		//倒计时
		countDown() {
			//倒计时
			let count = 60;
			let timer = setInterval(() => {
				count--;
				this.codeText = count + "s";
				if (count === 0) {
					clearInterval(timer);
					this.codeText = "获取验证码";
				}
			}, 1000);
		},
		// 获取验证码
		async onGetCode() {
			//防抖
			if (!this.verify()) {
				return;
			}
			//发送验证码
			let res = await reqGetSmsCode({ phone: this.phoneNum.trim() });
			if (res.code === 0 || res.code === 400) {
				this.countDown();
				this.$message.success("验证码已发送");
			}
			else {
				this.$message.error(res.msg);
			}
		},
		// 微信登录
		showWeinxinLogin() {
			// 切换到展示二维码的界面
			this.isShowFrom = false;
			// 获取二维码
			// 微信登录第一步：申请微信登录二维码
			let _this = this;
			new WxLogin({
				id          : "weixin",
				appid       : "wx67cfaf9e3ad31a0d", // 这个appid要填死
				scope       : "snsapi_login",
				// 扫码成功后重定向的接口
				redirect_uri: "https://sc.wolfcode.cn/cms/wechatUsers/shop/PC",
				// state填写编码后的url
				state       : encodeURIComponent(
					window.btoa("http://127.0.0.1:8080" + _this.$route.path)
				),
				// 调用样式文件
				href:
					"data:text/css;base64,Lyogd3hsb2dpbi5jc3MgKi8NCi5pbXBvd2VyQm94IC50aXRsZSwgLmltcG93ZXJCb3ggLmluZm97DQogIGRpc3BsYXk6IG5vbmU7DQp9DQoNCi5pbXBvd2VyQm94IC5xcmNvZGV7DQogIG1hcmdpbi10b3A6IDIwcHg7DQp9"
			});
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
		width: 70px;
		height: 154px;
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
.wx-qrcode {
	margin-top: 100px;
}
</style>
