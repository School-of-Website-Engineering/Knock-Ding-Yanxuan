import request from "@/request/request";
import qs from "qs";

//精品推荐
export const reqGetRecommended = () => request.get("/products/recommend");

//热门兑换
export const reqGetHot = () => request.get("/products/hot");

//短信验证码
export const reqGetSmsCode = (params) => request.post("/sendSMS", qs.stringify( params ));

//登录
export const reqLogin = (params) => request.post("/phoneRegin", qs.stringify( params ));

//扫码登录
export const reqQrcodeLogin = (params) => request.post("/wechatUsers/PCLogin", qs.stringify( params ));

//绑定手机号
export const reqBindPhone = (params) => request.post("/wechatUsers/binding", qs.stringify( params ));

//获取用户信息
export const reqGetUserInfo = () => request.get("/shop/userProfiles");

//商品详情
export const reqGetDetail = (id) => request.get(`/products/${id}`);
