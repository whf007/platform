import axios from '@/libs/api.request'
export const user = {
  login: (params) => {
    let formData = new FormData();
    formData.append('mobile', params.mobile);
    formData.append('password', params.password);
    return axios.request({
      url: 'auth/login',
      data: formData,
      method: 'post'
    })
  },
  wechatLogin: (params) => {
    return axios.request({
      url: 'user/wechatLogin',
      data: params,
      method: 'post'
    })
  },
  getUserInfo: (params) => {
    return axios.request({
      url: 'user/getUserInfo',
      data: params,
      method: 'post'
    })
  },
  updateUserInfo: (params) => {
    return axios.request({
      url: 'user/updateUserInfo',
      data: params,
      method: 'post'
    })
  }
}
