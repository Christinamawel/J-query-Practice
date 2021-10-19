$(document).ready(function() {
  $("#cat-img").click(function() {
    $("#cat-info").show();
    $("#dog-info").hide();
  });
});

$(document).ready(function() {
  $("#dog-img").click(function() {
    $("#dog-info").show();
    $("#cat-info").hide();
  });
});