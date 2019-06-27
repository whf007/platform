import * as types from './mutation-types'

export const mutations = {
  [types.INIT_IDENTIFY_TIMER] (state, o) {
    state.identifyingCode.timer = o
  },
  [types.CLEAR_IDENTIFY_TIMER] (state) {
    clearInterval(state.identifyingCode.timer)
    state.identifyingCode.timer = null
    state.identifyingCode.time = 60
  },
  [types.UPDATE_IDENTIFY_TIMER] (state, n) {
    state.identifyingCode.time = n
  },
  [types.INIT_GOODS] (state, o) {
    state.gallery = o.gallery
    state.attribute=o.attribute
    state.specificationList=o.specificationList
    state.issue=o.issue
    state.userHasCollect=o.userHasCollect
    state.comment=o.comment
    state.brand=o.brand
    state.info=o.info
    state.productList=o.productList
    state.datainfo = o
  }
}
