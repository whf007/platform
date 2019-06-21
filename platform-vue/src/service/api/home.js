import axios from '@/libs/api.request'
export const home = {
  getHomeInfo: (params) => {
  //   let s = axios.request({
  //   url: 'home/getHomeInfo',
  //   data: params,
  //   method: 'post'
  // });
    return axios.request({
    url: 'index/index',
    data: params,
    method: 'post'
  });

  }
}
