import api from "../../../services/api"
export default {
    async login({
        commit
    }, payload) {
        const response = await api.fetch('login', payload)
        if (response) {
            commit('AUTH_USER', response.data)
        }
    },
    loading({
        commit
    }, value) {
        commit("SET_LOADING", value)
    }
};