import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'Accueil', icon: 'home', class: '' },
  { path: '/user-profile', title: 'Compte personnel', icon: 'person', class: '' },
  { path: '/table-list', title: 'Toutes nos offres', icon: 'local_offer', class: '' },
  { path: '/typography', title: '(gérant) Ajouter une offre', icon: 'note_add', class: '' },
  { path: '/icons', title: '(admin) gérer les utilisateurs', icon: 'settings_applications', class: '' },
  { path: '/maps', title: '(admin) Statistiques', icon: 'create', class: '' },
  // { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
  { path: '/upgrade', title: 'Contactez-nous !', icon: 'unarchive', class: 'active-pro' },
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
