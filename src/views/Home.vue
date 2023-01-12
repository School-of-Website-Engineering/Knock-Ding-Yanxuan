<template>
	<div>
		sdfg通过好地方规划
	</div>
</template>

<script>
import { reqGetRecommended } from "@/request/api";

export default {
	name    : "Home",
	comments: {},
	async created() {
		const { data: res } = await reqGetRecommended();
		console.log(res);
	}
};
</script>

<style scoped lang="scss"></style>
