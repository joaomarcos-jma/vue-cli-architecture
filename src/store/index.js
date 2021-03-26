import {
    createStore
} from 'vuex'
import moduleA from "./modules/moduleA/store.js";
import createPersistedState from "vuex-persistedstate";

// const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
    modules: {
        moduleA,
    },
    // strict: debug,
    plugins: [createPersistedState()]
})
export default store;