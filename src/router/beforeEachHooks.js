import store from "../store"
export default {
    async auth(to, from, next) {
        const requiresAuth = to.meta.requiresAuth;
        // if (to.meta.title && to.meta.title[Vue.config.lang]) {
        //   document.title = to.meta.title[Vue.config.lang]
        // }

        if (!requiresAuth) {
            next()
            return
        }

        await new Promise(resolve => {
            if (requiresAuth && !store.state.moduleA.isLoggedIn) {
                next('/login');
                return;
            } else {
                next();
            }
            resolve()
        })
    },
}