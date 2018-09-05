$(document).ready(function() {


//Nav Scroll    

// ^= means hrefs target any a that have #1
$('a[href^="#1"]').on('click', function(e) {
e.preventDefault();

var target = this.hash;
var $target = $(target);

$('html, body').animate({
    'scrollTop': $target.offset().top 
}, 1000, 'swing', function () {
    window.location.hash = target;
 });
});

$('#seeWorkBtn').on('click', function(e){

    e.preventDefault();
    var buttonTarget = this.seeWorkBtn; 
    var $buttonTarget = $('#1abtsm');

    $('html, body').animate({
        'scrollTop': $buttonTarget.offset().top 
    }, 1000, 'swing', function () {
        window.location.hash = $buttonTarget;
     });
    });

 


// Nav Bar sticky
$(window).scroll(function() {
   if($(document).scrollTop() > 760) {
   $('#fixedTop').attr('class','fixed-top container-fluid naver')
   $('#navLinks').addClass("anchorTags");
   }
else{
 }
});




    
});