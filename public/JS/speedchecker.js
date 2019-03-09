const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var interval=null;
var time =[0,0,0,0];
var setintervalflag=true;


// Add leading zero to numbers 9 or below (purely for aesthetics):
function addLeadingZero(number){
  let num = number+"";
  if(num.length==1){
      num = 0+num;
  }
  return num;
}

// Run a standard minute/second/hundredths timer:
function timer(){
  time[3]++;
  time[0] = Math.floor(((time[3]/100)/60));
  time[1] = Math.floor(((time[3]/100)-time[0]*60));
  time[2] = Math.floor(time[3]-time[1]*100-time[0]*6000);
  theTimer.innerHTML = addLeadingZero(time[0]) +":"+ addLeadingZero(time[1]) +":"+ addLeadingZero(time[2]);
}

// Match the text entered with the provided text on the page:
function spellcheck(){
   let currentext = testArea.value;
   let substr = originText.substring(0,currentext.length);
   if(originText==substr){
      clearInterval(interval);
      testWrapper.style.border='10px solid  green';
   }else if(substr==currentext){
     testWrapper.style.border='10px solid  blue';
   }else{
     testWrapper.style.border='10px solid  orange'
   }
}

// Start the timer:
function start(){
   if(testArea.value.length == 0 && setintervalflag==true){
     interval = setInterval(timer,10);
     setintervalflag=false;
   }
}

// Reset everything:
function reset(){
   testArea.value="";
   testWrapper.style.border="10px solid  gray"
   clearInterval(interval);
   setintervalflag=true;
   theTimer.innerHTML="00:00:00";
   interval=null;
   time=[0,0,0,0];
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start);
testArea.addEventListener('keyup', spellcheck);
resetButton.addEventListener('click', reset);
