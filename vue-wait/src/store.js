import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const delay = time => new Promise(resolve => {
  setTimeout(resolve, time);
})

export default new Vuex.Store({
  modules: {
    aModule: {
      namespaced: true,
      state: {
        user: {},
      },
      mutations: {
        CREATE_USER(state, payload) {
          state.user = payload;
        },
        UPDATE_USER(state, payload) {
          state.user = payload;
        }
      },
      actions: {
        async createUser(context, payload) {
          await delay(1000);
          context.commit('CREATE_USER', payload);
        },
        async updateUser(context, payload) {
          await delay(1000);
          context.commit('UPDATE_USER', payload);
        },
        async getUser(context, payload) {
          await delay(1000);
          return true;
        },
      }
    }
  }
});
