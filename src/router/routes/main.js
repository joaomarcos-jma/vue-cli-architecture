export default [{
    path: '/',
    component: () => import('../../components/Main.vue'),
    children: [{
            path: '',
            name: 'Home',
            meta: {
                title: 'Home',
                ignoreAuth: true
            },
            component: () => import('../../pages/Homepage'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../../pages/Login'),
            meta: {
                title: 'Login',
                ignoreAuth: true
            },
        },
        {
            path: '/auth-page',
            name: 'auth-page',
            component: () => import('../../pages/AuthPage'),
            meta: {
                title: 'Auth Page',
                requiresAuth: true
            },
        },
    ]
}, ]