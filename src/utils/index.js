import axios from "axios";
import { Toast } from "vant";
const req = axios.create({
  baseURL: 'https://m.maizuo.com',
    timeout: 10000,
    headers: { 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596502176387264316178433","bc":"310100"}' }
}
)
req.interceptors.request.use((config) => {
  Toast.loading({
    message: 'loading',
    forbidClick: true
  });
  return config
}, (error) => {
   return Promise.reject(error)
}
)
req.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  Toast.clear()
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default req