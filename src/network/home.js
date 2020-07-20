import {request,request2} from "./request";// defalut导出才不需要大括号
//home调用request函数进行数据请求，封装成函数
export function getHomeMainData() {
  return request({
    url: '/home/multidata'
  })
}

export function getGoodsData(type,page) {
  return request2({
    url: '/home/data',
    params:{
      type,
      page
    }
  });
}