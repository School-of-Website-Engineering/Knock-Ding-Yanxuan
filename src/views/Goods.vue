<template>
	<div class="goods">
		<div class="wrap">
			<Crumb> </Crumb>
			<img src="../assets/img/banner.4c6b6225.png" width="100%" alt="" />
			<ul class="options">
				<li>
					<strong>排序：</strong>
					<span
						:class="num1 == index ? 'active' : ''"
						v-for="(item, index) in option1"
						:key="index"
						@click="option1Click(index, item.min, item.max)"
					>
						{{ item.txt }}</span
					>
				</li>
				<li>
					<strong>分类：</strong>
					<span
						:class="num2 == index ? 'active' : ''"
						v-for="(item, index) in option2"
						:key="index"
						@click="option2Click(index, item.type)"
					>
						{{ item.txt }}</span
					>
				</li>
			</ul>
			<List :arr="goodsListShow" :maxLength="300" />
			<p style="text-align: center; margin-top: 20px;">
				{{ isReachBottom ? "已经没有数据了" : "正在加载 ... ..." }}
			</p>
		</div>
	</div>
</template>
<script>
import Crumb from "../components/Crumb.vue";
import List from "../components/home/List.vue";
import { reqGetGoodsSearch } from "@/request/api";
import { getClientHeight, getScrollHeight, getScrollTop } from "@/utils";
export default {
	data() {
		return {
			// 请求回来的商品列表数据
			goodsList    : [],
			// 用来展示的goodsList数组
			goodsListShow: [],
			// 每页条数 size
			size         : 8,
			page         : 1,
			// isLoading 是否正在加载
			isLoading    : false,
			// 是不是已经没有数据的布尔值
			isReachBottom: false,
			// 栏目 目前可提供的参数是 1->精品推荐 2-> 热门兑换 0->全部
			did          : 0,
			// ( 1->实体商品 2->虚拟商品 0->全部 )
			type         : 0,
			// 积分范围的最小值
			min          : 0,
			// 积分返回的最大值
			max          : 0,
			// 搜索框中的关键词
			keyword      : "",

			// 排序的数组项
			// 我能兑换的 0-500分 1000-1500分 1500-2500分
			option1: [
				{ min: 0, max: 100000, txt: "全部" },
				{ min: 0, max: 0, txt: "我能兑换的" },
				{ min: 0, max: 500, txt: "0-500分" },
				{ min: 500, max: 1000, txt: "500-1000分" },
				{ min: 1000, max: 1500, txt: "1500-2500分" },
				{ min: 2500, max: 6500, txt: "2500-6500分" },
				{ min: 6500, max: 10000, txt: "6500-10000分" }
			],
			// 分类的数组项
			option2: [
				{ type: 0, txt: "全部" },
				{ type: 1, txt: "实物商品" },
				{ type: 2, txt: "虚拟商品" }
			],
			// 排序当前项记录
			num1: 0,
			// 分类当前项记录
			num2: 0
		};
	},
	created() {
		// this.keyword=路由参数keyword
		this.keyword = this.$route.query.keyword || "";
		console.log("this.keyword", this.keyword);
		this.goodsSearch();
	},
	mounted() {
		window.addEventListener("scroll", this.scrollFn);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.scrollFn);
	},
	watch: {
		"$route.query.keyword": {
			handler(newVal, oldVal) {
				// 什么时候执行? 地址栏上面的keyword一变化就会执行
				this.keyword = newVal;
				// 发送请求
				this.goodsSearch();
			}
		}
	},
	methods: {
		scrollFn() {
			// 节流:利用一个变量,控制代码在一段时间内(setTimeout)不会重复触发执行

			// if(有没有到底部了){
			// if(窗口高度+超出窗口高度的网页>= 页面高度){
			if (getClientHeight() + getScrollTop() >= getScrollHeight() - 20) {
				// 到底部了就在goodsList数组中取8个元素到goodsListShow数组中
				console.log("到底部了");
				// if(是不是没有数据了){
				if (this.goodsListShow.length >= this.goodsList.length) {
					this.isReachBottom = true;
					return;
				}

				if (this.isLoading == false) {
					this.isLoading = true;
					// 下一次加载第page页的数据,所以page需要++
					this.page++;

					setTimeout(() => {
						for (
							var i = this.size * (this.page - 1);
							i < this.size * this.page;
							i++
						) {
							// 处理最后一页没有整除的情况,加了个判断
							this.goodsList[i]
								? this.goodsListShow.push(this.goodsList[i])
								: "";
						}
						this.isLoading = false;
					}, 500);
				}
			}
		},
		option1Click(i, min, max) {
			// 处理样式
			this.num1 = i;
			// 需要要传参的数据
			this.min = min;
			this.max = max;

			// 发送请求
			this.goodsSearch();
		},
		option2Click(i, type) {
			// 处理样式
			this.num2 = i;
			// 需要要传参的数据
			this.type = type;
			// 发送请求
			this.goodsSearch();
		},
		async goodsSearch() {
			let res = await reqGetGoodsSearch({
				did    : this.did,
				type   : this.type,
				min    : this.min,
				max    : this.max,
				keyword: this.keyword
			});
			if (!res) {
				return;
			}

			this.goodsList = res.data;
			console.log(this.goodsList);
			// 处理初始的前8条数据
			this.goodsListShow = this.goodsList.filter(
				(item, index) => index < this.size
			);
			// 初始化数据
			this.isReachBottom = false;
			this.page = 1;
			// if(是不是没有数据了){
			if (this.goodsListShow.length >= this.goodsList.length) {
				this.isReachBottom = true;
				return;
			}
		}
	},
	components: {
		Crumb,
		List
	}
};
</script>

<style lang="scss" scoped>
.goods {
	padding-bottom: 50px;
	background: #efefef;
	padding-top: 20px;
	.options {
		padding-top: 20px;
		padding-bottom: 40px;
		li {
			margin-top: 20px;
			strong {
				color: #000;
				font-weight: bold;
			}
			span {
				margin-right: 20px;
				margin-left: 10px;
				cursor: pointer;
				color: #999;
				&.active {
					color: #0a328d;
					font-weight: bold;
				}
			}
		}
	}
}
</style>
