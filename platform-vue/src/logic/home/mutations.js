import * as types from './mutation-types'

export const mutations = {
  [types.INIT_HOME] (state, o) {
    state.recommend = o
    state.categoryList = o.categoryList
  }
}
