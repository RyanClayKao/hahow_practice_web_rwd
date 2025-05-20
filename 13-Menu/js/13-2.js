$(function(){
  $(".menu").on("click", function(){  
    $("#menu").fadeIn(2000);
  });
  
  $("#close_btn").on("click", function(){
    $("#menu").fadeOut(2000);
  });
});