import axios from "axios";
import store from "@/store"
import {
    errorHandler
} from "../util/module";
export const request = async (method, path, data, params) => {
    const token = store.state.moduleA.token
    if (!method && !path) return;

    if (token) {
        axios.defaults.headers.common = {
            Authorization: `Bearer ${token}`
        };
    }

    const url = process.env.VUE_APP_URL + path;
    store.dispatch("moduleA/loading", true)
    return await axios({
        method,
        url,
        data,
        params
    }).catch(err => errorHandler(err.response)).finally(() => store.dispatch("moduleA/loading", false));
}