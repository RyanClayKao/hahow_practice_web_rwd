$(function(){
  $(".menu").on("click", function(){  
    $("#menu").show();
  });
  
  $("#close_btn").on("click", function(){
    $("#menu").hide();
  });
});