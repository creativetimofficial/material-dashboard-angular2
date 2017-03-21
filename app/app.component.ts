import { Component, OnInit } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';

declare var $:any;

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{
    location: Location;
    constructor(location:Location) {
        this.location = location;
    }
    ngOnInit(){
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    }
    public isMaps(path){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if(path == titlee){
            return false;
        }
        else {
            return true;
        }
    }
}
