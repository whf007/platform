import * as types from './mutation-types'

export const mutations = {
  [types.INIT_USER_INFO] (state, o) {

    state.profile.nickName = o.profile.nickname
    state.profile.avatar = o.profile.avatar
    state.profile.age = o.profile.age
  },
  [types.SET_LOGIN_STATE] (state, b) {
    state.isLogin = b
  }
}
