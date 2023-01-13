<template>
	<div class="login-modal">
		<div class="mask"></div>
		<div class="login-box"></div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
	}
}
</style>
