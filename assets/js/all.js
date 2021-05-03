"use strict";

$('.button-toggle').click(function (e) {
  e.preventDefault();
  $('.nav-item').toggleClass('active');
});
$(".nav-item li a.work").addClass("act");
$(".nav-item li a").click(function () {
  $(this).parent().siblings().children("a").removeClass("act"), $(this).addClass("act"); // alert("我點到文字了");

  return this; // $(this).addClass("act")
});
//# sourceMappingURL=all.js.map
