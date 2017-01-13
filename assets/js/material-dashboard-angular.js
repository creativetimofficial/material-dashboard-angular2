$(document).ready(function(){
    $moving_tab = $('<div class="moving-tab"/>');
    $('.sidebar .nav-container').append($moving_tab);

    $this = $('.sidebar .nav').find('li.active a');
    animationSidebar($this, false);
    $('div').removeClass('.moving-tab');
    if (window.history && window.history.pushState) {

        // console.log('sunt in window.history');
        $(window).on('popstate', function() {

            // console.log('am apasat pe back, locatia noua: ', window.location.pathname);

            setTimeout(function(){
                // console.log('incep animatia cu 1ms delay');
                $this = $('.sidebar .nav').find('li.active a');
                animationSidebar($this,true);
            },1);

        });

    }
});

$('.sidebar .nav > li > a').click(function(){
    $this = $(this);
    animationSidebar($this, true);
});

function animationSidebar($this, animate){
    // console.log('incep animatia si butonul pe care sunt acum este:', $this[0].href );

    $current_li_distance = $this.parent('li').position().top - 10;

    button_text = $this.html();

    $(".moving-tab").css("width", 230 + "px");

    if(animate){
        $('.moving-tab').css({
            'transform':'translate3d(0,' + $current_li_distance + 'px, 0)',
            'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
        });
    }else{
        $('.moving-tab').css({
            'transform':'translate3d(0,' + $current_li_distance + 'px, 0)'
        });
    }

    setTimeout(function(){
        $('.moving-tab').html(button_text);
    }, 100);
}
