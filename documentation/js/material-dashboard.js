/*!

 =========================================================
 * Material Dashboard Angular 2 - V1.2.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
 * Copyright 2017 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */


var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var seq = 0, delays = 80, durations = 500;
var seq2 = 0, delays2 = 80, durations2 = 500;

$(document).ready(function(){

    $sidebar = $('.sidebar');

    $.material.init();

    window_width = $(window).width();
    // check if there is an image set for the sidebar's background
    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();


    $('.form-control').on("focus", function(){
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function(){
        $(this).parent(".input-group").removeClass("input-group-focus");
    });

});

// activate collapse right menu when the windows is resized
$(window).resize(function(){
    // reset the seq for charts drawing animations
    seq = seq2 = 0;

});

md = {
    misc:{
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,
    },


    checkScrollForTransparentNavbar: debounce(function() {
            if($(document).scrollTop() > 381 ) {
                if(transparent) {
                    transparent = false;
                    $('.navbar-color-on-scroll').removeClass('navbar-transparent');
                    $('.navbar-title').removeClass('hidden');
                }
            } else {
                if( !transparent ) {
                    transparent = true;
                    $('.navbar-color-on-scroll').addClass('navbar-transparent');
                    $('.navbar-title').addClass('hidden');
                }
            }
    }, 17),


    startAnimationForLineChart: function(chart){

        chart.on('draw', function(data) {
          if(data.type === 'line' || data.type === 'area') {
            data.element.animate({
              d: {
                begin: 600,
                dur: 700,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
              }
            });
          } else if(data.type === 'point') {
                seq++;
                data.element.animate({
                  opacity: {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'ease'
                  }
                });
            }
        });

        seq = 0;
    },
    startAnimationForBarChart: function(chart){

        chart.on('draw', function(data) {
          if(data.type === 'bar'){
              seq2++;
              data.element.animate({
                opacity: {
                  begin: seq2 * delays2,
                  dur: durations2,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
        });

        seq2 = 0;
    }
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};
