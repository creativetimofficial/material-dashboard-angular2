import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    subMenu: RouteInfo[];
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'TRANG CHỦ',  icon: 'dashboard', class: '', subMenu: []},
    { path: 'javascript:void(0)', title: 'TIN TỨC COIN',  icon:'library_books', class: 'dropdown', subMenu: [
        { path: '/article', title: 'Tin Tức Bitcoin',  icon: 'dashboard', class: '', subMenu: []},
        { path: '#1', title: 'Tin Tức Ethereum',  icon:'library_books', class: '', subMenu: []},
        { path: '#2', title: 'Tin Tức Ripple',  icon:'book', class: '', subMenu: []},
        { path: '#3', title: 'Tin tức Bitcoin cash',  icon:'timeline', class: '', subMenu: []},
        { path: '#4', title: 'Tin tức Litecoin',  icon:'bubble_chart', class: '', subMenu: []},
        { path: '#5', title: 'Tin tức Altcoins  ',  icon:'code', class: '', subMenu: []},
        { path: '#6', title: 'Tin tổng hợp',  icon:'monetization_on', class: '', subMenu: []},
    ]},
    { path: '/category-inside', title: 'HƯỚNG DẪN COIN',  icon:'book', class: '', subMenu: []},
    { path: '/table-list', title: 'SÀN GIAO DỊCH',  icon:'timeline', class: '', subMenu: []},
    { path: '/icons', title: 'ICO, IEO & STO',  icon:'bubble_chart', class: '', subMenu: []},
    { path: '/maps', title: 'BLOCKCHAIN',  icon:'code', class: '', subMenu: []},
    { path: '/notifications', title: 'GIÁ BITCOIN HÔM NAY',  icon:'monetization_on', class: '', subMenu: []},
    { path: '/notifications', title: 'Forums    ',  icon:'forum', class: '', subMenu: []},
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
