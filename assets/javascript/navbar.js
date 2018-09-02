$(window).scroll(function() {
   if($(document).scrollTop() > 750) {
   $('#fixedTop').attr('class','fixed-top container-fluid naver')
   $('#navLinks').addClass("anchorTags");
//    alert("helo");
   }
else{
    // $('nav').removeClass('naver');
}


 
// $("#seeWorkBtn").on("click", function(){
//     alert("Hello");
// });



















});