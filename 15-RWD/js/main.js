$(function(){
  $("#menubtn").click(function(){
    if ($("header > nav").hasClass("open")){
      $("header > nav").removeClass("open");
    }else {
      $("header > nav").addClass("open");
    }
  })
});