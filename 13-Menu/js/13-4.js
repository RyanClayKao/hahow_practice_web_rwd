$(function() {
  $(".menuopen").on("click", function(){
    $("#app").addClass("left");
    $("#menu").addClass("open");
    $("footer").addClass("left");
  });

  $("#close_btn").on("click", function(){
    $("#app").removeClass("left");
    $("#menu").removeClass("open");
    $("footer").removeClass("left");
  });
})