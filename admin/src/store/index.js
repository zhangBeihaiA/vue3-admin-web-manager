import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    isGetterRouter:false,
    isCollapsed:false
  },
  getters: {
  },
  mutations: {
    changeGetterRouter(state,value){      
      state.isGetterRouter = value
    },
    //控制折叠
    changeCollapsed(state,value){
      state.isCollapsed = !state.isCollapsed
    }
  },
  actions: {
  },
  modules: {
    // plugins: [VuexPersister({
    //   paths:["isCollapsed"] //控制是否持久化
    // })]
    plugins: [createPersistedState({
      paths:["isCollapsed"]
    })],//控制是否持久化
  }
})
