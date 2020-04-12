import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import test from './modules/test'

const store = new Vuex.Store({
  modules:{
    test
  }
})

export default store
