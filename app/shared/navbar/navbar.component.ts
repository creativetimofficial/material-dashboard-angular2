import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../.././sidebar/sidebar-routes.config';
import { MenuType } from '../.././sidebar/sidebar.metadata';

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle.menuType !== MenuType.BRAND);
    }
    getTitle(){
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
}
