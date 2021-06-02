$(".saudation").fadeIn();

setTimeout(function () {
  $(".braces").width(300);
  $("#star").fadeOut();

  $(".saudation h1").fadeIn();

  $("#arrow").fadeIn();
}, 2000);

/*toggle saudation words*/
saudations = ["HI", "HOLA", "OLÁ"];
count = -1;
setInterval(function () {
  count++;
  $(".saudation h1").fadeOut(200, function () {
    $(this)
      .text(saudations[count % saudations.length])
      .fadeIn(50);
  });
}, 2000);

/*arrow animation*/
setInterval(function () {
  for (i = 0; i < 2; i++) {
    $("#arrow")
      .animate({ marginTop: "-=" + "10px" }, 300)
      .animate({ marginTop: "+=" + "10px" }, 300);
  }
}, 4000);

/*toggle footer words*/
farewells = ["THANKS", "GRACIAS", "OBRIGADO"];
countf = -1;
setInterval(function () {
  countf++;
  $(".footer-top h1").fadeOut(200, function () {
    $(this)
      .text(farewells[countf % farewells.length])
      .fadeIn(400);
  });
}, 2000);
