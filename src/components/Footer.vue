<template>
	<footer>
		<div class="integralmall-footer">
			<div class="footer-content warp">
				<div class="footer-logo">
					<img
						src="http://sc.wolfcode.cn/assets/integralMall/img/index/slogan.png"
						alt=""
					/>
					<p>
						叩丁狼是一家专注于培养高级IT技术人才，为学员提供定制化IT职业规划方案及意见咨询服务的教育科技公司，为您提供海量优质课程，以及创新的线上线下学习体验，帮助您获得全新的个人发展和能力提升。
					</p>
				</div>
				<div class="footer-relation">
					<ul class="relation-list">
						<li class="relation-text footer-wx">微信公众号</li>
						<li class="relation-text">
							<a href="#" target="_blank" class="footer-xl"
								>新浪微博</a
							>
						</li>
						<li class="relation-text footer-waiter">在线客服</li>
					</ul>
				</div>
				<div class="footer-phone">
					<p>全国免费咨询热线：</p>
					<h2>020-85628002</h2>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.integralmall-footer {
	width: 100%;
	height: 240px;
	background-color: #242b39;
}
.footer-content {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}
.footer-logo {
	width: 426px;
	padding: 30px 0 0 0;
	box-sizing: border-box;
}
img {
	border: none;
}
.footer-logo p {
	font-family: MicrosoftYaHei;
	font-size: 12px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #7d879a;
	padding-top: 22px;
	box-sizing: border-box;
}
.relation-list {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.relation-text {
	padding: 0 8px;
	box-sizing: border-box;
	font-family: MicrosoftYaHei;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 21px;
	letter-spacing: 0px;
	color: #7d879a;
	position: relative;
	cursor: pointer;
	border-right: 1px solid #7d879a;
}
.footer-xl {
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 21px;
	letter-spacing: 0px;
	color: #7d879a;
}
.footer-phone {
	margin-top: 60px;
}
.footer-phone h2 {
	font-family: SourceHanSansSC-Bold;
	font-size: 28px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #ffffff;
	margin-top: 7px;
	line-height: 24px;
}
.footer-phone p {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #7d879a;
}
.footer-relation {
    flex: 1;
    margin-top: 86px;
}
</style>
