import {
    createApp
} from "vue";
import App from "./App"
import router from "./router"
import store from "./store"
import installElementPlus from './plugins/element'
import './css/main.css'

const app = createApp(App);

app.use(store)
app.use(router)
app.use(installElementPlus)

app.mount("#app");