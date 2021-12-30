import axios from 'axios'
import router from '@/router/index.js'
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) { // 判断token是否存在
      config.headers.Authorization = localStorage.getItem('token') // 将token设置成请求头
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  response => {
    if (response.data === 999) {
      router.replace('/login')
      console.log('token过期')
    }
    return response
  },
  error => {
    return Promise.reject(error)
  })
export function getRequest (url, data) {
  return axios.get(url, data)
}
export function postRequest (url, data) {
  return axios.post(url, data)
};
export function deleteRequest (url, data) {
  return axios.delete(url, data)
};
export function putRequest (url, data) {
  return axios.put(url, data)
};
