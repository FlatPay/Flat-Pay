
jQuery(document).ready(function( ){

 new WOW().init();


 
    $('.dropright button').on("click", function(e) {
      e.stopPropagation();
      e.preventDefault();
  
      if (!$(this).next('div').hasClass('show')) {
        $(this).next('div').addClass('show');
      } else {
        $(this).next('div').removeClass('show');
      }
  
    });
  

  });

