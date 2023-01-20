export default {
	namespaced: true,
	state     : {
		// 显示与否  true 仅仅之决定了一个显示属性
		// 提示文本  "登录成功"
		// 提示类型  "sucess"   "warning"  "danger"
		// 用来表示提示框的显示true或隐藏false
		isShowToast: false,
		msg        : "",
		type       : ""
	},
	mutations: {
		// 修改isShowToast的值
		chanIsShowToast(state, payload) {
			state.isShowToast = payload.isShow;
			state.msg = payload.msg;
			state.type = payload.type;
		}
	},
	actions: {
		asyncChanIsShowToast({ commit }, payload) {
			//  let {commit} = context
			// 先展示,就是调用原先写的上面的这个方法chanIsShowToast
			commit("chanIsShowToast", {
				isShow: true,
				msg   : payload.msg,
				type  : payload.type
			});

			// 关闭的代码
			setTimeout(() => {
				commit("chanIsShowToast", {
					isShow: false,
					msg   : payload.msg,
					type  : payload.type
				});
			}, 1500);
		}
	}
};

// 封装Toast组件总结:
// 样式结构
// 显示隐藏变量存在Vuex中
// 过渡效果(进场离场)
// msg和type属性处理
// 定时器,关闭Toast组件
// 抽取定时器到actions的方法中

// 如何使用这个组件???

//this.xxx({msg:"xxx", type:"success"})   展示提示组件
