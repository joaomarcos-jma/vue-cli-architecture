export default [
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        redirect: 'pageError'
    },
    {
        path: '/error-page',
        name: 'pageError',
        component: () => import('../pages/util/NotFound.vue')
    },
]