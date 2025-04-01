import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: null,
    username: null,
    userStatus: null,
    userID: null,
    userImg: null,
  },
  getters: {
    getState: (state) => state,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUsername(state, username) {
      state.username = username;
    },
    setUserStatus(state, status) {
      state.userStatus = status;
    },
    setUserID(state, id) {
      state.userID = id;
    },
    setUserImg(state, img) {
      state.userImg = img;
    },
    clearUserData(state) {
      state.username = null;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setUsername({ commit }, username) {
      commit('setUsername', username);
    },
    setUserStatus({ commit }, status) {
      commit('setUserStatus', status);
    },
    setUserID({ commit }, id) {
      commit('setUserID', id);
    },
    setUserImg({ commit }, img) {
      commit('setUserImg', img);
    },
    logout({ commit }) {
      commit('clearUserData'); // Clear user data
      // Optionally, clear tokens or other session data here
    },
  },
});

console.log("Vuex store initialized:", store); // Debug log to verify store initialization

export default store; // Ensure the store is exported
