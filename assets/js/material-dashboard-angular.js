$(document).ready(function(){
    $moving_tab = $('<div class="moving-tab"/>');
    $('.nav-container').append($moving_tab);

    $this = $('.nav').find('li.active a');
    animationSidebar($this, false);
});

$('.nav > li > a').click(function(){
    $this = $(this);
    animationSidebar($this, true);
});

function animationSidebar($this, animate){
    $current_li_distance = $this.parent('li').position().top - 10;
    li_width = $('.nav').find('li a').innerWidth();


    index_current =  $this.parent('li').index() + 1;
    button_text = $('.sidebar .nav').find('li:nth-child(' + index_current + ') a').html();
    $(".moving-tab").css("width", li_width + "px");

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
