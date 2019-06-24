import * as types from './mutation-types'
import {api} from '@/service/api'
import {toast} from '@/libs/cube-ui'

export const actions = {
  async getIdentifyingCode ({commit, state}, o) {
    if (state.identifyingCode.time !== 60) {
      toast('请稍后重试', 'correct')
    } else {
      let res = await api.common.getIdentifyingCode()
      if (res.success) {
        toast('发送验证码成功', 'correct')
        const timer = setInterval(() => {
          if (state.identifyingCode.time === 0) {
            commit(types.CLEAR_IDENTIFY_TIMER)
          } else {
            commit(types.UPDATE_IDENTIFY_TIMER, state.identifyingCode.time - 1)
          }
        }, 1000)
        commit(types.INIT_IDENTIFY_TIMER, timer)
      } else {
        toast(res.msg, 'warn')
      }
    }
  },
  async getGoodsInfo ({commit}) {
    var params = new URLSearchParams();
    params.append('id', 1181000); //你要传给后台的参数值 key/value

      let res = await api.goods.getGoodsInfo(params)
    console.log(res)
      if (res.errno == 0) {
        commit(types.INIT_GOODS, res.data)
      }
    }
}
