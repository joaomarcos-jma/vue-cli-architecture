import {
    createApp
} from "vue";
import App from "./App"
import router from "./router"
import store from "./store"
// import './assets/element-variables.scss'
import installElementPlus from './plugins/element'
import './css/main.css'
import LoadingComponent from "./components/util/LoadingComponent.vue"


const app = createApp(App);

app.use(store)
app.use(router)
app.use(installElementPlus)

app.component('loading-component', LoadingComponent)

app.mount("#app");