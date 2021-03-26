import {
    request
} from "./request"
import {
    commonHandler
} from "../util/module";
import fetch from "./fetch"
export default {
    index(path, params) {
        return request("get", `${path}`, null, params)
    },
    show: async (path, id) => {
        return request("get", `${path}/${id}`)
    },
    store: async (path, data) => {
        return await request("post", path, data).then(res => {
            if (res) {
                commonHandler(res)
            }
        })
    },
    update: async (path, id, data) => {
        return await request("put", `${path}/${id}`, data).then(res => {
            if (res) {
                commonHandler(res)
            }
        })
    },
    patch: async (path, id, data) => {
        return await request("patch", `${path}/${id}`, data).then(res => {
            if (res) {
                commonHandler(res)
            }
        })
    },
    destroy: async (path, id) => {
        return await request("delete", `${path}/${id}`).then(res => {
            if (res) {
                commonHandler(res)
            }
        })
    },
    fetch(name, data) {
        return fetch[name](data)
    }
}