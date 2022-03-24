$(function () {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.position = "fixed";
      document.getElementById("navbar").style.opacity = "1";
    } else {
      document.getElementById("navbar").style.position = "absolute";
      document.getElementById("navbar").style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
  };
});
