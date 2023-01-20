<template>
	<div class="crumb">
		<span>
			<span
				:style="{ color: index === nav.length - 1 ? '#333' : '#999' }"
				v-for="(item, index) in nav"
				:key="index"
			>
				{{ item.name }}
				<i v-if="index != nav.length - 1">/</i>
			</span>
		</span>
	</div>
</template>

<script>
export default {
	name : "Crumb",
	props: ["nav"],
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.crumb {
	font-size: 14px;
	margin: 10px 0;
	i {
		margin: 0 5px;
	}
}
</style>
