

var i = 0;
var txt = 'WE  WERE  INFORMED  THAT  A  EARTH  BIRTHDAY  HAS  OCCURED  FOR CITIZEN  0756  BIRTHDAY  JANUARY  17TH';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  var b = function($b,speed){


    $b.animate({
        "left": "10%"
    }, speed);
  };
  $(function(){
    b($("#b"), 5000);
  });
  document.getElementById("yt").style.display = "flex";
}
typeWriter();

startConfetti();