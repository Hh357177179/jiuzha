import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/util/auth'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // refreshToken: getTokenCookie('refreshToken'),
    token: !getToken() ? '未登录' : JSON.parse(getToken()),
  },
  mutations: {
    login(state,token){
      state.token = token;
      setToken(JSON.stringify(user));
    },
  },
  actions: {
    // getUserInfo ({ commit }, userInfo) {
    //   return new Promise((resolve, reject) => {
    //     getUserInfo(userInfo).then(response => {
    //       const data = response.data
    //       commit('setRefreshToken', data.refresh_token)
    //       commit('setToken', data.access_token)
    //       commit('setOpenId', data.openId)
    //       commit('setUserId', data.frontUserId)
    //       commit('setTypeId', data.openId)
    //       setToken('openId', response.data.openId)
    //       setToken('userId', response.data.frontUserId)
    //       setTokenCookie('refreshToken', data.refresh_token)
    //       setTokenCookie('wxToken', response.data.access_token)
    //       resolve(response.data)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
   
  },
  getters: {
  }
})
export default store
