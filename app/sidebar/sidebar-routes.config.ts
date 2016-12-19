import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'material-icons' },
    { path: 'user', title: 'User profile', menuType: MenuType.LEFT, icon:'material-icons' },
    { path: 'table', title: 'Table List', menuType: MenuType.LEFT, icon:'material-icons' },
    { path: 'typography', title: 'Typography', menuType: MenuType.LEFT, icon:'material-icons' },
    { path: 'icons', title: 'Icons', menuType: MenuType.LEFT, icon:'material-icons' },
    { path: 'maps', title: 'Maps', menuType: MenuType.LEFT, icon:'material-icons' },
    { path: 'notifications', title: 'Notifications', menuType: MenuType.LEFT, icon:'material-icons text-gray' }
];
