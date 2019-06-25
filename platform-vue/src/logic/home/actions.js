import * as types from './mutation-types'
import {api} from '@/service/api'

export const actions = {
  async getHomeInfo ({commit}) {
  console.log("home");
    let res = await api.home.getHomeInfo()
    if (res.errno == 0) {
      commit(types.INIT_HOME, res.data)
    }
  }
}
