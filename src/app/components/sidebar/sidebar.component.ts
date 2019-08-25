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
    { path: '/user-profile', title: 'HƯỚNG DẪN COIN',  icon:'book', class: '' },
    { path: '/table-list', title: 'SÀN GIAO DỊCH',  icon:'timeline', class: '' },
    { path: '/icons', title: 'ICO, IEO & STO',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'BLOCKCHAIN',  icon:'code', class: '' },
    { path: '/notifications', title: 'GIÁ BITCOIN HÔM NAY',  icon:'monetization_on', class: '' },
    { path: '/notifications', title: 'Forums    ',  icon:'forum', class: '' },
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
