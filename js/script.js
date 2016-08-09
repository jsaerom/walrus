$(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle().fadeOut(1000);
    $("#initially-hidden").toggle().fadeIn(1000);
  });
});
