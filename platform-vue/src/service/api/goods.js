import axios from '@/libs/api.request'
export const goods = {
  getGoodsInfo: (params) => {
    return axios.request({
      url: 'goods/detail',
      data: params,
      method: 'post'
    })
  },
  addGoods: (params) => {
    return axios.request({
      url: 'buy/add',
      data: params,
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }
}
