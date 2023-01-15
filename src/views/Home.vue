<template>
	<div>
		<div class="wac">
			<div class="warp home">
				<div class="banner">
					<img src="../assets/img/banner.f559b49d.png" alt="" />
				</div>
			</div>
		</div>
		<!-- 精品推荐html结构 -->
		<div class="bac">
			<div class="warp">
				<div class="recommend">
					<div class="title">
						<div class="recl">
							<img src="../assets/img/jingpin.png" alt="" />
							<h2>精品推荐</h2>
						</div>
						<div class="recr">
							<a href="javascript:;">查看更多</a>
							<img src="../assets/img/arrow.png" alt="" />
						</div>
					</div>
					<div class="list">
						<div class="item">
							<img src="../assets/img/listimg.jpg" alt="" />
							<div class="info">
								<p class="name">叩丁狼精品T恤</p>
								<p class="price">￥1999</p>
							</div>
							<button class="exchange">立即兑换</button>
						</div>
						<div class="item">
							<img src="../assets/img/listimg.jpg" alt="" />
							<!-- hot小标 -->
							<div class="hotimg"></div>
							<div class="info">
								<p class="name">叩丁狼精品T恤</p>
								<p class="price">￥1999</p>
							</div>
							<button class="exchange">立即兑换</button>
						</div>
						<div class="item">
							<img src="../assets/img/listimg.jpg" alt="" />
							<div class="info">
								<p class="name">叩丁狼精品T恤</p>
								<p class="price">￥1999</p>
							</div>
							<button class="exchange">立即兑换</button>
						</div>
						<div class="item">
							<img src="../assets/img/listimg.jpg" alt="" />
							<div class="newimg"></div>
							<div class="info">
								<p class="name">叩丁狼精品T恤</p>
								<p class="price">￥1999</p>
							</div>
							<button class="exchange">立即兑换</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 热门兑换 -->
		<div class="wac">
			<div class="warp">
				<div class="hot">
					<div class="title">
						<div class="hotl">
							<img src="../assets/img/hot.png" alt="" />
							<h2>热门兑换</h2>
						</div>
						<div class="hotr">
							<a href="javascript:;">查看更多</a>
							<img src="../assets/img/arrow.png" alt="" />
						</div>
					</div>
					<!-- 广告条 -->
					<div class="ad">
						<img src="../assets/img/ad.4c6b6225.png" alt="" />
					</div>
					<div class="list">
						<div class="item">
							<img src="../assets/img/listimg.jpg" alt="" />
							<div class="info">
								<p class="name">叩丁狼精品T恤</p>
								<p class="price">￥1999</p>
							</div>
							<div class="newimg"></div>
							<button class="exchange">立即兑换</button>
						</div>
						<div class="item">
							<img src="../assets/img/listimg.jpg" alt="" />
							<div class="info">
								<p class="name">叩丁狼精品T恤</p>
								<p class="price">￥1999</p>
							</div>
							<button class="exchange">立即兑换</button>
						</div>
						<div class="item">
							<img src="../assets/img/listimg.jpg" alt="" />
							<div class="newimg"></div>
							<div class="info">
								<p class="name">叩丁狼精品T恤</p>
								<p class="price">￥1999</p>
							</div>
							<button class="exchange">立即兑换</button>
						</div>
						<div class="item">
							<img src="../assets/img/listimg.jpg" alt="" />
							<div class="newimg"></div>
							<div class="info">
								<p class="name">叩丁狼精品T恤</p>
								<p class="price">￥1999</p>
							</div>
							<button class="exchange">立即兑换</button>
						</div>
						<div class="item">
							<img src="../assets/img/listimg.jpg" alt="" />
							<div class="newimg"></div>
							<div class="info">
								<p class="name">叩丁狼精品T恤</p>
								<p class="price">￥1999</p>
							</div>
							<button class="exchange">立即兑换</button>
						</div>
						<div class="item">
							<img src="../assets/img/listimg.jpg" alt="" />
							<div class="newimg"></div>
							<div class="info">
								<p class="name">叩丁狼精品T恤</p>
								<p class="price">￥1999</p>
							</div>
							<button class="exchange">立即兑换</button>
						</div>
						<div class="item">
							<img src="../assets/img/listimg.jpg" alt="" />
							<div class="newimg"></div>
							<div class="info">
								<p class="name">叩丁狼精品T恤</p>
								<p class="price">￥1999</p>
							</div>
							<button class="exchange">立即兑换</button>
						</div>
						<div class="item">
							<img src="../assets/img/listimg.jpg" alt="" />
							<div class="newimg"></div>
							<div class="info">
								<p class="name">叩丁狼精品T恤</p>
								<p class="price">￥1999</p>
							</div>
							<button class="exchange">立即兑换</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 积分攻略 -->
		<div class="integral warp">
			<div class="title">
				<img src="../assets/img/score.png" alt="" />
				<h2>积分攻略</h2>
			</div>
			<ul class="integralimg">
				<li>
					<h2>签到得鸡腿</h2>
					<br />
					<span>去签到</span>
				</li>
				<li>
					<h2>购课得鸡腿</h2>
					<br />
					<span>去购课</span>
				</li>
				<li>
					<h2>推荐得鸡腿</h2>
					<br />
					<span>去推荐</span>
				</li>
				<li>
					<h2>拼团得鸡腿</h2>
					<br />
					<span>去拼团</span>
				</li>
			</ul>
		</div>
		<br>
		<br>
	</div>
</template>

<script>
import { reqGetRecommended } from "@/request/api";

export default {
	name    : "Home",
	comments: {},
	async created() {
		const { data: res } = await reqGetRecommended();
	}
};
</script>

<style scoped lang="scss">
@import "../assets/scss/color.scss";
.home {
	background: #fff;
	padding-bottom: 30px;
	.banner {
		width: 100%;
		height: 400px;
		background: #f5f5f5;
		img {
			width: 100%;
			height: 100%;
		}
	}
}
.wac {
	background-color: #fff;
}
.bac,
.wac {
	background: $aw-color-gray-8;
}
.hot {
	height: 1100px;
}
//精品推荐
.recommend,
.hot {
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
		height: 80px;
		margin: 0 0 15px 0;
		.recl,
		.hotl {
			display: flex;
			align-items: center;
			img {
				width: 40px;
				height: 36px;
			}
			h2 {
				margin-left: 5px;
				font-size: 30px;
				font-family: SourceHanSansSC-Bold, SourceHanSansSC;
				font-weight: bold;
				color: #232b39;
			}
		}
		.recr,
		.hotr {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100px;
			height: 36px;
			cursor: pointer;
			a {
				font-size: 16px;
				font-family: SourceHanSansSC-Light, SourceHanSansSC;
				color: #656565;
				margin-right: 5px;
			}
			img {
				width: 15px;
			}
		}
	}
	.ad {
		margin: 25px 0;
	}
	.list {
		height: 360px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		.item {
			height: 360px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-bottom: 10px;
			padding: 0 10px;
			margin: 12px;
			background-color: #fff;
			position: relative;
			img {
				width: 255px;
				height: 220px;
			}
			.info {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 10px 0;
				.name {
					font-size: 14px;
					color: #333;
					line-height: 20px;
				}
				.price {
					margin: 10px 0;
					font-size: 20px;
					font-weight: bold;
					color: #ff6700;
					line-height: 20px;
				}
			}
			transition: all 1s;
			//移入上移30px
			&:hover {
				transform: translateY(-30px);
			}
			// hot左上小标
			.hotimg {
				position: absolute;
				top: 0;
				left: 0;
				width: 40px;
				height: 40px;
				background: url(../assets/img/section_hot.png) no-repeat;
				background-size: 100% 100%;
			}
			.newimg {
				position: absolute;
				top: 0;
				left: 0;
				width: 40px;
				height: 40px;
				background: url(../assets/img/section_new.png) no-repeat;
				background-size: 100% 100%;
			}
		}
		.exchange {
			width: 100%;
			height: 40px;
			background: #ff6700;
			border: none;
			color: #fff;
			font-size: 16px;
			font-family: SourceHanSansSC-Light, SourceHanSansSC;
			cursor: pointer;
			&:hover {
				background: #fff;
				color: #ff6700;
				border: 1px solid #ff6700;
			}
		}
	}
}
// 积分攻略
.integral {
	background-color: #fff;
	.title {
		display: flex;
		align-items: center;
		padding: 0 10px;
		height: 80px;
		margin: 0 0 15px 0;
	}
	.integralimg {
		display: flex;
		justify-content: space-between;
		li {
			&:first-child {
				background-image: url(../assets/img/integral-01.9386d4bf.png);
			}
			&:nth-child(2) {
				background-image: url(../assets/img/integral-02.150d92a1.png);
			}
			&:nth-child(3) {
				background-image: url(../assets/img/integral-03.9870f3f1.png);
			}
			&:nth-child(4) {
				background-image: url(../assets/img/integral-04.afadcbdf.png);
			}
			color: #fff;
			width: 285px;
			height: 168px;
			padding-top: 43px;
			padding-left: 29px;
			box-sizing: border-box;
			transition: background-size 0.5s linear;
			background-size: 100% 100%;
			cursor: pointer;
			span {
				padding: 6px 30px;
				border: 1px solid #fff;
				text-align: center;
				line-height: 27px;
			}
		}
	}
}
</style>
