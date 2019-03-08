const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function rotate() {
  var hour,
      minute,
      second;
  var date= new Date();
  hour = date.getHours();
  minute = date.getMinutes()
  second = date.getSeconds();

  var hourdeg = hour*30 + minute/2 +second/120,
      minutedeg = minute * 6 + second/10;
      seconddeg = second * 6;

  HOURHAND.style.transform='rotate('+hourdeg+'deg)';
  MINUTEHAND.style.transform='rotate('+minutedeg+'deg)';
  SECONDHAND.style.transform='rotate('+seconddeg+'deg)';
}

var interval = setInterval(rotate,1000);
