export default {
    data: () => ({
        rules: {
            login: [{
                required: true,
                message: "Por favor preencha o campo Login",
                trigger: "blur"
            }],
            password: [{
                required: true,
                message: "Por favor preencha o campo Senha",
                trigger: "blur"
            }]
        }
    })
};