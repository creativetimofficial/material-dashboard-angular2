import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

declare const $: any;
declare var _gaq:Function;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    location: Location;
    private currentRoute:string;

    constructor(_router:Router,
                _location:Location,
                private elRef: ElementRef) {
        this.location = _location;
        _router.events.subscribe((event:any) => {
            // Send GA tracking on NavigationEnd event. You may wish to add other
            // logic here too or change which event to work with
            if (event instanceof NavigationEnd) {
                // When the route is '/', location.path actually returns ''.
                let newRoute = _location.path() || '/';
                // If the route has changed, send the new route to analytics.
                if (this.currentRoute != newRoute) {
                    _gaq('send', 'pageview', newRoute);
                    this.currentRoute = newRoute;
                }
            }
        });
    }

  ngOnInit() {
      const window_width = $(window).width();
      let $sidebar = $('.sidebar');
      let $sidebar_responsive = $('body > .navbar-collapse');
      let $sidebar_img_container = $sidebar.find('.sidebar-background');

      if(window_width > 767){
          if($('.fixed-plugin .dropdown').hasClass('show-dropdown')){
              $('.fixed-plugin .dropdown').addClass('open');
          }

      }

      $('.fixed-plugin a').click(function(event){
        // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
          if($(this).hasClass('switch-trigger')){
              if(event.stopPropagation){
                  event.stopPropagation();
              }
              else if(window.event){
                 window.event.cancelBubble = true;
              }
          }
      });

      $('.fixed-plugin .badge').click(function(){
          let $full_page_background = $('.full-page-background');


          $(this).siblings().removeClass('active');
          $(this).addClass('active');

          var new_color = $(this).data('color');

          if($sidebar.length !== 0){
              $sidebar.attr('data-color', new_color);
          }

          if($sidebar_responsive.length != 0){
              $sidebar_responsive.attr('data-color',new_color);
          }
      });

      $('.fixed-plugin .img-holder').click(function(){
          let $full_page_background = $('.full-page-background');

          $(this).parent('li').siblings().removeClass('active');
          $(this).parent('li').addClass('active');


          var new_image = $(this).find("img").attr('src');

          if($sidebar_img_container.length !=0 ){
              $sidebar_img_container.fadeOut('fast', function(){
                 $sidebar_img_container.css('background-image','url("' + new_image + '")');
                 $sidebar_img_container.fadeIn('fast');
              });
          }

          if($full_page_background.length != 0){

              $full_page_background.fadeOut('fast', function(){
                 $full_page_background.css('background-image','url("' + new_image + '")');
                 $full_page_background.fadeIn('fast');
              });
          }

          if($sidebar_responsive.length != 0){
              $sidebar_responsive.css('background-image','url("' + new_image + '")');
          }
      });
      $('#twitter').sharrre({
        share: {
          twitter: true
        },
        enableHover: false,
        enableTracking: true,
        buttons: { twitter: {via: 'CreativeTim'}},
        click: function(api, options){
          api.simulateClick();
          api.openPopup('twitter');
        },
        template: '<i class="fa fa-twitter"></i> &middot; 182',
        url: 'http://md-angular.creative-tim.com/'
      });

      $('#facebook').sharrre({
        share: {
          facebook: true
        },
        enableHover: false,
        enableTracking: true,
        click: function(api, options){
          api.simulateClick();
          api.openPopup('facebook');
        },
        template: '<i class="fa fa-facebook-square"></i> &middot; 270',
        url: 'http://md-angular.creative-tim.com/'
      });
  }

    isMaps(path){
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
