<template>
	<!-- 封装提示框组件 -->
	<!-- 
  看type的值:
  success   iconfont icon-toast_chenggong
  warning  iconfont icon-toast-jinggao 
  danger   iconfont icon-toast-shibai_huaban
 -->
	<div class="toast">
		<i
			:class="
				type == 'success'
					? 'iconfont icon-toast_chenggong'
					: type == 'warning'
					? 'iconfont icon-toast-jinggao'
					: 'iconfont icon-toast-shibai_huaban'
			"
		></i>
		<span>{{ msg }}</span>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	data() {
		return {};
	},
	computed: {
		...mapState({
			msg : (state) => state.showToast.msg,
			type: (state) => state.showToast.type
		})
	}
};
</script>

<style lang="scss" scoped>
.toast {
	background-color: #fff;
	position: fixed;
	left: 50%;
	top: 0;
	transform: translateX(-50%);
	padding: 10px 20px;
	border-radius: 6px;
	box-shadow: 0 0 10px #fff;
	i {
		margin-right: 8px;
	}

	.icon-toast_chenggong {
		color: green;
	}
	.icon-toast-jinggao {
		color: orange;
	}
	.icon-toast-shibai_huaban {
		color: red;
	}
}
</style>
