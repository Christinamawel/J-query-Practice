$(document).ready(function() {
  $("#cat-img").click(function() {
    $("#cat-info").show();
    $("#dog-info").hide();
  });


  $("#dog-img").click(function() {
    $("#dog-info").show();
    $("#cat-info").hide();
  });



  $("#light-mode-btn").click(function() {
    $("body").removeClass();
    $("body").addClass("light-mode");
  });

  $("#dark-mode-btn").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-mode");
  });

  $("#cat-btn").click(function() {
    $("#cat-side").prepend("<li>Meow!</li>")
  });
  
  $("#dog-btn").click(function() {
    $("#dog-side").prepend("<li>Wolf!</li>")
  });
});