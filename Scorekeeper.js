var p1Button=document.querySelector("#p1");
var p2Button=document.querySelector("#p2");

console.log(p1Button, p2Button);
var p1Score=0;
var p2Score=0;

var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");

p1Button.addEventListener("click",function(){
	p1Score++;
	document.querySelector("#p1Display").innerHTML=p1Score;
});

p2Button.addEventListener("click",function()
{
	p2Score++;
	document.querySelector("#p2Display").innerHTML=p2Score;
});