import {
    createRouter,
    createWebHistory
} from 'vue-router'
import RoutesMapConfig from './routes';
import defaultRoutes from './defaultRoutes';
import beforeEachHooks from './beforeEachHooks';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: RoutesMapConfig.concat(defaultRoutes)
})

Object.values(beforeEachHooks).forEach(hook => {
    router.beforeEach(hook)
})

export default router