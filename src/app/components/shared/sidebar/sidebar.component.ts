import { UsersDataProService } from 'app/services/usersDataPro/users-data-pro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/admin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/admin/restaurants', title: 'Restaurants', icon: 'restaurant', class: '' },
  { path: '/admin/clients', title: 'Clients', icon: 'person', class: '' },
  { path: '/admin/orders', title: 'Commandes', icon: 'local_shipping', class: '' },
  { path: '/admin/products', title: 'Produits', icon: 'local_offer', class: '' },
  // { path: '/admin/user-profile', title: 'User Profile',  icon:'person', class: '' },
  // { path: '/admin/table-list', title: 'Table List',  icon:'content_paste', class: '' },
  // { path: '/admin/typography', title: 'Typography',  icon:'library_books', class: '' },
  // { path: '/admin/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  // { path: '/admin/maps', title: 'Maps',  icon:'location_on', class: '' },
  // { path: '/admin/notifications', title: 'Notifications', icon: 'notifications', class: '' },
  // { path: '/admin/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private usersDataProService: UsersDataProService, private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  logout() {
    this.usersDataProService.logout().subscribe(
      response => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        this.router.navigate(['/']);

        console.log('Utilisateur déconnecté avec succès!', response);
      },
      error => {
        console.error("Il y a eu une erreur lors de la déconnexion de l'utilisateur", error);
      }
    );
  }

  navigateToDashboard(){
    this.router.navigate(['/admin/dashboard']);
  }
}
