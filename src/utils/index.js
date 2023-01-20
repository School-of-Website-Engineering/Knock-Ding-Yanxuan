// validatePhoneNumber这个方法用来验证手机号是否符合规则
export const validatePhoneNumber = (value) => {
	let reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
	return reg.test(value);
};

//获取滚动条当前的位置
export function getScrollTop() {
	var scrollTop = 0;
	if (document.documentElement && document.documentElement.scrollTop) {
		scrollTop = document.documentElement.scrollTop;
	}
	else if (document.body) {
		scrollTop = document.body.scrollTop;
	}
	return scrollTop;
}

//获取当前可视范围的高度
export function getClientHeight() {
	var clientHeight = 0;
	if (document.body.clientHeight && document.documentElement.clientHeight) {
		clientHeight = Math.min(
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
	}
	else {
		clientHeight = Math.max(
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
	}
	return clientHeight;
}

//获取文档完整的高度
export function getScrollHeight() {
	return Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight
	);
}
