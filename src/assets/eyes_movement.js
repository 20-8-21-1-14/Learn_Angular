//based on https://dribbble.com/shots/3913847-404-page
//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
var pageX = $(document).width();
var pageY = $(document).height();
var mouseY = 0;
var mouseX = 0;

$(document).mousemove(function (event) {
  //verticalAxis
  mouseY = event.pageY;
  yAxis = ((pageY / 2 - mouseY) / pageY) * 300;
  //horizontalAxis
  mouseX = event.pageX / -pageX;
  xAxis = -mouseX * 100 - 100;

  $(".box__ghost-eyes").css({
    transform: "translate(" + xAxis + "%,-" + yAxis + "%)"
  });

  //console.log('X: ' + xAxis);
});
