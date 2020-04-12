import * as types from '../types'

const test = {
  state: {
    num: 0
  },
  mutations: {
    [types.SET_TEST](state,num){
      state.num = num
    }
  }
}
export default test
