import api from "../../services/api"
const state = () => ({
    isLoading: false,
    notify: {},
    isLoggedIn: false
})

const mutations = {
    NOTIFICATION_HANDLER(state, data) {
        state.notify = data
    },
    AUTH_USER(state, value) {
        state.isLoggedIn = true
        state.token = value.token;
        state.userData = value;
        state.expiresUser = Math.round(new Date().getTime() / 1000) + 86400
    },
    SET_LOADING(state, value) {
        state.isLoading = value
    }
};

const actions = {
    async login({
        commit
    }, payload) {
        const body = {
            login: payload.username,
            password: payload.password,
        }
        const response = await api.store('post', '/sessions', body)
        if (response) {
            commit('AUTH_USER', response.data)
        }
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}