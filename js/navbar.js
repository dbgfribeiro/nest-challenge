$(window).scroll(function () {
  if (start()) {
    $("header").fadeIn(300);

    $("#welcome").fadeOut();
    $("body").css("overflow", "visible");
  }
});

function start() {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $("#about").offset().top;

  return elemTop <= docViewBottom;
}

//menu
$(".menu-container a").click(function () {
  $(".menu input").prop("checked", false);
});
