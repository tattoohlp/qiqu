import Vue from "vue";
import Vuex from "vuex";
import indexState from "./states/indexState.js";
import indexActions from "./actions/indexActions.js";
import indexMutations from "./mutations/indexMutations.js";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    "index": indexState
  },
  mutations: {
    ...indexMutations
  },
  actions:{
  	...indexActions
  },
  getters:{

  }
})
export default store;