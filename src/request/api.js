import request from "@/request/request";
import qs from "qs";

//精品推荐
export const reqGetRecommended = () => request.get("/products/recommend");

//短信验证码
export const reqGetSmsCode = (params) => request.post("/sendSMS", qs.stringify( params ));

//登录
export const reqLogin = (params) => request.post("/phoneRegin", qs.stringify( params ));

//扫码登录
export const reqQrcodeLogin = (params) => request.post("/wechatUsers/PCLogin", qs.stringify( params ));
