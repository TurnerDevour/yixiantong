import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js'
import mutations from './mutation.js';

Vue.use(Vuex);

var store = new Vuex.Store({
  state,
  mutations
});

export default store;
