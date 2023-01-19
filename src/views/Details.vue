<template>
	<div></div>
</template>

<script>
import { reqGetDetail } from "@/request/api";

export default {
	name: "Details",
	data() {
		return {};
	},
	async created() {
		const goodsId = this.$route.query.id;
		const { data:res } = await reqGetDetail(goodsId);
		console.log(res);
	}
};
</script>

<style scoped lang="scss"></style>
