import api from "~/services/api.js";

export default {
    async login(loginForm) {
        await api('login',
            {
                method: "post",
                params: {
                    username: loginForm.username,
                    password: loginForm.password
                }
            })
    }
}