import store from '@/store'
export const errorHandler = (response) => {
    switch (response.status) {
        case 400:
            store.commit("moduleA/NOTIFICATION_HANDLER", {
                label: response.data.message || "Servidor não entendeu a requisição",
                type: "error",
                title: "Houve um Erro!"
            })
            break;
        case 401:
            store.commit("moduleA/NOTIFICATION_HANDLER", {
                label: response.data.message || "Usuário não autorizado!",
                type: "error",
                title: "Houve um Erro!"
            })
            break;
        case 403:
            store.commit("moduleA/NOTIFICATION_HANDLER", {
                label: response.data.message || "Você não tem permissão para acessar esse conteúdo",
                type: "error",
                title: "Houve um Erro!"
            })
            break;
        case 404:
            store.commit("moduleA/NOTIFICATION_HANDLER", {
                label: response.data.message || "O servidor não pode encontrar o recurso solicitado!",
                type: "error",
                title: "Houve um Erro!"
            })
            break;
        case 406:
            store.commit("moduleA/NOTIFICATION_HANDLER", {
                label: response.data.message || "No momento essa operação não é possível!",
                type: "error",
                title: "Houve um Erro!"
            })
            break;
        case 422:
            store.commit("moduleA/NOTIFICATION_HANDLER", {
                label: response.data.message || "Verifique os campos informados e tente novamente!",
                type: "error",
                title: "Houve um Erro!"
            })
            break;
        case 429:
            store.commit("moduleA/NOTIFICATION_HANDLER", {
                label: response.data.message || "Você enviou muitas requisições nesse instante!",
                type: "error",
                title: "Houve um Erro!"
            })
            break;
        case 500:
            store.commit("moduleA/NOTIFICATION_HANDLER", {
                label: response.data.message || "O servidor encontrou uma situação com a qual não sabe lidar.",
                type: "error",
                title: "Houve um Erro!"
            })
            break;
        case 504:
            store.commit("moduleA/NOTIFICATION_HANDLER", {
                label: response.data.message || "O servidor demorou pra processar essa solicitação.",
                type: "error",
                title: "Houve um Erro!"
            })
            break;
        default:
            store.commit("moduleA/NOTIFICATION_HANDLER", {
                label: "Houve um erro desconhecido",
                type: "error",
                title: "Houve um Erro!"
            })
    }
}

export const commonHandler = (response, type) => {
    store.commit("moduleA/NOTIFICATION_HANDLER", {
        label: response.data.message || "Operação realizada com sucesso!",
        type: type || "Success",
        title: ""
    })
}