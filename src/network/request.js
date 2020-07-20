import axios from 'axios'
//封装好的请求函数组件，可根据需求创建JS调用该函数
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //请求拦截器，登录加载等
  instance.interceptors.request.use(config => {
      return config//拦截后返回
    },
    err => {
      console.log(err)
    })
  //响应拦截器,登录失效等
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config)
}
export function request2(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 8000
  })
  //请求拦截器，登录加载等
  instance.interceptors.request.use(config => {
      return config//拦截后返回
    },
    err => {
      console.log(err)
    })
  //响应拦截器,登录失效等
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config)
}