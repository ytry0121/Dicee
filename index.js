//Random Dice
var dice1 = randomNumber1();
var dice2 = randomNumber1();
function randomNumber1(){
    var num = Math.floor(Math.random()*6)+1;
    return num;
}
//Set Dice Image
document.querySelector(".img1").setAttribute("src","images/dice"+dice1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+dice2+".png");

//title
if(dice1 > dice2){
  document.querySelector(".container h1").innerText="Player 1 Wins!";
}else if(dice1 < dice2){
  document.querySelector(".container h1").innerText="Player 2 Wins!";
}else{
  document.querySelector(".container h1").innerText="Draw";
}
