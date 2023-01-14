import request from "@/request/request";
import qs from "qs";

//精品推荐
export const reqGetRecommended = () => request.get("/products/recommend");

//短信验证码
export const reqGetSmsCode = (phone) => request.post("sendSMS", qs.stringify( phone ));
