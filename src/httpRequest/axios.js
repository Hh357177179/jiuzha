import axios from 'axios'
import app from '@/main'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let api = axios.create({
  baseURL: '/api',
  timeout: 8000
})

// 请求拦截
api.interceptors.request.use(
  config => {
    return config
  },
  e => Promise.reject(e)
)

// 响应拦截
api.interceptors.response.use(
  res => {
    if (res.data.code) {
      if (res.data.code == 200) {
        return res.data.data;
      } 
      else console.log('错误提示');
    } 
    else  return Promise.resolve(res.data);
  },
  e => Promise.reject(e)
)

export default api