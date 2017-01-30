if ('undefined' !== typeof module) {

    background_image = true;

    module.exports = function initFixedPlugin(){
        $sidebar = $('.sidebar');
        $sidebar_img_container = $sidebar.find('.sidebar-background');
        $full_page = $('.full-page');

        $sidebar_responsive = $('body > .navbar-collapse');

        window_width = $(window).width();

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
            $full_page_background = $('.full-page-background');

            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            var new_color = $(this).data('color');

            if($sidebar.length != 0){
                $sidebar.attr('data-color',new_color);
            }

            if($full_page.length != 0){
                $full_page.attr('data-color',new_color);
            }

            if($sidebar_responsive.length != 0){
                $sidebar_responsive.attr('data-color',new_color);
            }
        });

        $('.fixed-plugin .img-holder').click(function(){
            $full_page_background = $('.full-page-background');

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

        $('.switch-sidebar-image input').change(function(){
            $full_page_background = $('.full-page-background');

            $input = $(this);

            if($input.is(':checked')){
                if($sidebar_img_container.length != 0){
                    $sidebar_img_container.fadeIn('fast');
                    $sidebar.attr('data-image','#');
                }

                if($full_page_background.length != 0){
                    $full_page_background.fadeIn('fast');
                    $full_page.attr('data-image','#');
                }

                background_image = true;
            } else {
                if($sidebar_img_container.length != 0){
                    $sidebar.removeAttr('data-image');
                    $sidebar_img_container.fadeOut('fast');
                }

                if($full_page_background.length != 0){
                    $full_page.removeAttr('data-image','#');
                    $full_page_background.fadeOut('fast');
                }

                background_image = false;
            }
        });

        $('.switch-sidebar-mini input').change(function(){
            $body = $('body');

            $input = $(this);

            if(lbd.misc.sidebar_mini_active == true){
                $('body').removeClass('sidebar-mini');
                lbd.misc.sidebar_mini_active = false;

                if(isWindows){
                    $('.sidebar .sidebar-wrapper').perfectScrollbar();
                }

            }else{

                $('.sidebar .collapse').collapse('hide').on('hidden.bs.collapse',function(){
                    $(this).css('height','auto');
                });

                if(isWindows){
                    $('.sidebar .sidebar-wrapper').perfectScrollbar('destroy');
                }

                setTimeout(function(){
                    $('body').addClass('sidebar-mini');

                    $('.sidebar .collapse').css('height','auto');
                    lbd.misc.sidebar_mini_active = true;
                },300);
            }

            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function(){
                window.dispatchEvent(new Event('resize'));
            },180);

            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function(){
                clearInterval(simulateWindowResize);
            },1000);

        });

        $('.switch-navbar-fixed input').change(function(){
            $nav = $('nav.navbar').first();

            if($nav.hasClass('navbar-fixed')){
                $nav.removeClass('navbar-fixed').prependTo('.main-panel');
            } else {
                $nav.prependTo('.wrapper').addClass('navbar-fixed');
            }

        });


        $('#twitter').sharrre({
          share: {
            twitter: true
          },
          enableHover: false,
          enableTracking: false,
          buttons: { twitter: {via: 'CreativeTim'}},
          click: function(api, options){
            api.simulateClick();
            api.openPopup('twitter');
          },
          template: '<i class="fa fa-twitter"></i> &middot; 20',
          url: 'http://md-angular2.creative-tim.com/'
        });

        $('#facebook').sharrre({
          share: {
            facebook: true
          },
          enableHover: false,
          enableTracking: false,
          click: function(api, options){
            api.simulateClick();
            api.openPopup('facebook');
          },
          template: '<i class="fa fa-facebook-square"></i> &middot; 60',
          url: 'http://md-angular2.creative-tim.com/m'
        });
    }
}
