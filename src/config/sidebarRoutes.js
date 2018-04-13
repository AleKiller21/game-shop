const sidebarRoutes = [
    {
        path: '/store',
        icon: 'dashboard',
        title: 'Games',
        role: 'customer',
        active: true,
        auth: false
    },
    {
        path: '/user',
        icon: 'person',
        title: 'Profile',
        role: 'customer',
        active: false,
        auth: true
    },
    {
        path: '/orders',
        icon: 'book',
        title: 'Billing History',
        role: 'customer',
        active: false,
        auth: true
    },
    {
        path: '/users',
        icon: 'group',
        title: 'Users',
        role: 'admin',
        active: false,
        auth: true
    },
    {
        path: '/',
        icon: 'person',
        title: 'Log Out',
        role: 'customer',
        active: false,
        auth: true
    }
]

export default sidebarRoutes;