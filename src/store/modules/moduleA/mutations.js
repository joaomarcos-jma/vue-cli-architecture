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
    LOGOUT(state, value) {
        let keys = []
        Object.keys(state).forEach(key => {
            keys.push(key)
            //   keys = keys.filter(res => !['exceptions'].includes(res))
            keys.forEach(res => state[res] = value)
        })
        state.isLoading = false
        state.isLoggedIn = false
    },
    SET_LOADING(state, value) {
        state.isLoading = value
    },
};

export default mutations;