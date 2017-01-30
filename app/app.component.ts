import { Component, OnInit } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

declare var ga:Function;
declare var $:any;
import initFixedPlugin = require('../assets/js/initFixedPlugin.js');

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{
    private currentRoute:string;

    constructor(_router:Router,
                _location:Location) {
        _router.events.subscribe((event:any) => {
            // Send GA tracking on NavigationEnd event. You may wish to add other
            // logic here too or change which event to work with
            if (event instanceof NavigationEnd) {
                // When the route is '/', location.path actually returns ''.
                let newRoute = _location.path() || '/';
                // If the route has changed, send the new route to analytics.
                if (this.currentRoute != newRoute) {
                    ga('send', 'pageview', newRoute);
                    this.currentRoute = newRoute;
                }
            }
        });
    }
    ngOnInit(){
        initFixedPlugin();
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    }
    public isMaps(path){
        if(path == window.location.pathname){
            return false;
        }
        else {
            return true;
        }
    }
}
