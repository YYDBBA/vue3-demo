import { createStore } from 'vuex'

const store = createStore({
  getters: {},
  state: {
    hello: '我是vuex4.0'
  },
  actions: {
    asyncChange({commit}){
      setTimeout(()=>{
        commit('changeHello','hjjjj')
      },1000)
    }
  },
  mutations: {
    changeHello(state, payLoad) {
      state.hello = payLoad
      console.log(state.hello)
    }
  }
})
export default store