const sidebarRoutes = [
    {
        path: '/games',
        icon: 'dashboard',
        title: 'Games',
        role: 'customer',
        'active': true
    },
    {
        path: '/user',
        icon: 'person',
        title: 'Profile',
        role: 'customer',
        'active': false
    },
    {
        path: '/orders',
        icon: 'book',
        title: 'Billing History',
        role: 'customer',
        'active': false
    },
    {
        path: '/users',
        icon: 'group',
        title: 'Users',
        role: 'admin',
        'active': false
    }
]

export default sidebarRoutes;