
 

$(window).scroll(function() {
   if($(document).scrollTop() > 750) {
   $('#fixedTop').attr('class','fixed-top container-fluid naver')
   $('#navLinks').addClass("anchorTags");

   }
else{
  
 }

});



$("#seeWorkBtn").scroll("click", function(){
    $(document).scrollTop() = 750;
});









