import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'dashboard' },
    { path: 'user', title: 'User profile', menuType: MenuType.LEFT, icon:'person' },
    { path: 'table', title: 'Table List', menuType: MenuType.LEFT, icon:'content_paste' },
    { path: 'typography', title: 'Typography', menuType: MenuType.LEFT, icon:'library_books' },
    { path: 'icons', title: 'Icons', menuType: MenuType.LEFT, icon:'bubble_chart' },
    { path: 'maps', title: 'Maps', menuType: MenuType.LEFT, icon:'location_on' },
    { path: 'notifications', title: 'Notifications', menuType: MenuType.LEFT, icon:'notifications' },
];
