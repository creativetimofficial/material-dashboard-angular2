"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var initFixedPlugin = require('../assets/js/initFixedPlugin.js');
var AppComponent = (function () {
    function AppComponent(_router, _location) {
        var _this = this;
        _router.events.subscribe(function (event) {
            // Send GA tracking on NavigationEnd event. You may wish to add other
            // logic here too or change which event to work with
            if (event instanceof router_1.NavigationEnd) {
                // When the route is '/', location.path actually returns ''.
                var newRoute = _location.path() || '/';
                // If the route has changed, send the new route to analytics.
                if (_this.currentRoute != newRoute) {
                    _gaq('send', 'pageview', newRoute);
                    _this.currentRoute = newRoute;
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        initFixedPlugin();
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    };
    AppComponent.prototype.isMaps = function (path) {
        if (path == window.location.pathname) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: 'app.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map