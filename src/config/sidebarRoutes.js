const sidebarRoutes = [
    {
        path: '/games',
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
        auth: false
    },
    {
        path: '/orders',
        icon: 'book',
        title: 'Billing History',
        role: 'customer',
        active: false,
        auth: false
    },
    {
        path: '/users',
        icon: 'group',
        title: 'Users',
        role: 'admin',
        active: false,
        auth: false
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