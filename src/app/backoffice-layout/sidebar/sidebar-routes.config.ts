import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'ft-home',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        path: '/equipments',
        title: 'Equipments',
        icon: 'ft-users',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
            {
                path: '/equipments/create',
                title: 'Create equipment ',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            }
        ]
    }
];
