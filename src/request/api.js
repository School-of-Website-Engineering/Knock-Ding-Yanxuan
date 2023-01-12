import request from "@/request/request";

//精品推荐
export const reqGetRecommended = () => request.get("/products/recommend");

