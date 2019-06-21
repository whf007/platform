import * as types from './mutation-types'
import {api} from '@/service/api'

export const actions = {
  async getHomeInfo ({commit}) {
    let res = await api.home.getHomeInfo()
    if (res.errno == 0) {
      console.log(res.data);
      commit(types.INIT_HOME, res.data)
    }
  }
}
