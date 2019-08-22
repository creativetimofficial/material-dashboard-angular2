import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'TRANG CHỦ',  icon: 'dashboard', class: '' },
    { path: '/article', title: 'TIN TỨC COIN',  icon:'library_books', class: '' },
    { path: '/user-profile', title: 'HƯỚNG DẪN COIN',  icon:'person', class: '' },
    { path: '/table-list', title: 'SÀN GIAO DỊCH',  icon:'content_paste', class: '' },
    { path: '/icons', title: 'ICO, IEO & STO',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'BLOCKCHAIN',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'GIÁ BITCOIN HÔM NAY',  icon:'notifications', class: '' },
    { path: '/notifications', title: 'Forums    ',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
