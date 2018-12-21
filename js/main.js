$(document).ready(function(){

  $('.link').click(function() {
      var id = $(this).attr('id');
      $('html, body').animate({
          scrollTop: ($('.' + id).offset().top)
      });
  });

  $('.btn').click(function() {
      $('html, body').animate({
          scrollTop: ($('.portfolio').offset().top)
      });
  });

});