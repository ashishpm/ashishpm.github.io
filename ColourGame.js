
window.setTimeout(function(){

var newColors = document.querySelectorAll("button")[0];
var easy = document.querySelectorAll("button")[1];
var hard = document.querySelectorAll("button")[2];
var display = document.querySelector("#display");
var again = document.querySelector("#again");
var square = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var correctColor ;
var pickedColor;
var numOfSquares = 6;

reset();

function generateColors(num){
	var arr = [];
   for(var i=0;i<num;i++){
      arr.push(randomColor());
      square[i].style.background = arr[i];
   }
   correctColor = arr[Math.floor(Math.random()*num)];
   
   if(num === 3){
        square[3].style.background = "#232323";
        square[4].style.background = "#232323";
        square[5].style.background = "#232323";
   }
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
   generateColors(numOfSquares);
   h1.style.background = "steelblue";
   again.textContent = "";
   newColors.textContent = "NEW COLORS";
   display.textContent = correctColor.toUpperCase();
}

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
   numOfSquares = 3;
   reset();
});

hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
   numOfSquares = 6;
   reset();
});

newColors.addEventListener("click",function(){
  reset();
});

for(var i=0;i<numOfSquares;i++){
  square[i].addEventListener("click",function() {
  	pickedColor = this.style.background;
    
    if(pickedColor === correctColor){
     for(var i = 0;i<numOfSquares;i++){
     square[i].style.background = correctColor;
     }
     again.textContent = "Correct!";
     h1.style.background = correctColor;
     newColors.textContent = "PLAY AGAIN?"
    }
    else{
      this.style.background = "#232323";
      again.textContent = "Try again";
    }
  });
}


},1);