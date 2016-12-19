export enum MenuType {
    BRAND,
    LEFT,
    RIGHT
}

export interface RouteInfo {
    path: string;
    title: string;
    menuType: MenuType;
    icon: string;
}
