$(window).scroll(function() {
    parallax();
});

function parallax() {
    var wScroll = $(window).scrollTop();
    $(".parallax--bg").css('background-position', 
'center ' +(wScroll*0.55) +'px');
    $('.parallax--box').css('top', 
    -5+(wScroll*0.01101)+'em');


}