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
    { path: '1', title: 'TIN TỨC COIN',  icon:'library_books', class: 'dropdown', subMenu: [
        { path: '2', title: 'Tin Tức Bitcoin',  icon: 'dashboard', class: '', subMenu: []},
        { path: '3', title: 'Tin Tức Ethereum',  icon:'library_books', class: '', subMenu: []},
        { path: '4', title: 'Tin Tức Ripple',  icon:'book', class: '', subMenu: []},
        { path: '5', title: 'Tin tức Bitcoin cash',  icon:'timeline', class: '', subMenu: []},
        { path: '6', title: 'Tin tức Litecoin',  icon:'bubble_chart', class: '', subMenu: []},
        { path: '7', title: 'Tin tức Altcoins  ',  icon:'code', class: '', subMenu: []},
        { path: '8', title: 'Tin tổng hợp',  icon:'monetization_on', class: '', subMenu: []},
    ]},
    { path: '9', title: 'SÀN GIAO DỊCH',  icon:'timeline', class: '', subMenu: [
      { path: '10', title: 'Sàn Remitano',  icon: 'dashboard', class: '', subMenu: []},
      { path: '11', title: 'Sàn Binance',  icon:'library_books', class: '', subMenu: []},
      { path: '12', title: 'Sàn Huobi',  icon:'book', class: '', subMenu: []},
      { path: '13', title: 'Sàn Okex',  icon:'timeline', class: '', subMenu: []},
      { path: '14', title: 'Sàn Bittrex',  icon:'bubble_chart', class: '', subMenu: []},
    ]},
    { path: '15', title: 'HƯỚNG DẪN COIN',  icon:'book', class: '', subMenu: [
      { path: '16', title: 'Từ Điển Coin',  icon: 'dashboard', class: '', subMenu: []},
      { path: '17', title: 'Kiến thức coins',  icon:'library_books', class: '', subMenu: []},
      { path: '18', title: 'Hướng dẫn trade',  icon:'book', class: '', subMenu: []},
    ]},
    { path: '19', title: 'ICO, IEO & STO',  icon:'bubble_chart', class: '', subMenu: [
      { path: '20', title: 'Đầu tư ICO, IEO & STO',  icon: 'dashboard', class: '', subMenu: []},
      { path: '21', title: 'Đánh giá ICO, IEO & STO',  icon:'library_books', class: '', subMenu: []},
    ]}, 
    { path: '22', title: 'BLOCKCHAIN',  icon:'code', class: '', subMenu: [
      { path: '23', title: 'Tin tức Blockchain',  icon: 'dashboard', class: '', subMenu: []},
      { path: '24', title: 'Kiến thức Blockchain',  icon:'library_books', class: '', subMenu: []},
    ]}, 
    { path: '/category-inside/25', title: 'GIÁ BITCOIN HÔM NAY',  icon:'monetization_on', class: '', subMenu: []}, 
    // { path: '/table-list', title: 'SÀN GIAO DỊCH',  icon:'timeline', class: '', subMenu: []},
    // { path: '/icons', title: 'ICO, IEO & STO',  icon:'bubble_chart', class: '', subMenu: []},
    // { path: '/maps', title: 'BLOCKCHAIN',  icon:'code', class: '', subMenu: []},
    // { path: '/notifications', title: 'GIÁ BITCOIN HÔM NAY',  icon:'monetization_on', class: '', subMenu: []},
    // { path: '/notifications', title: 'Forums    ',  icon:'forum', class: '', subMenu: []},
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
