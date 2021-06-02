$("nav").hide();

$(window).scroll(function () {
  if (start()) {
    $("nav").fadeIn();

    $("#welcome").fadeOut();
    $("body").css("overflow", "visible");
  }

  if ($("#welcome").css("display") == "none") {
    console.log("escondeu");
  }
});

function start() {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $("#about").offset().top;

  return elemTop <= docViewBottom;
}
