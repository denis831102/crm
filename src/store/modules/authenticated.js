export default {
  state: {
    isAuthenticated: false,
    users: [{ login: "", password: 111 }],
  },
  actions: {},
  mutations: {
    changeAuthenticated(state, val) {
      state.isAuthenticated = val;
    },
  },
  getters: {
    getAuthenticated(state) {
      return state.isAuthenticated;
    },
    getUsers(state) {
      return state.users;
    },
  },
  //namespaced: true,
};
