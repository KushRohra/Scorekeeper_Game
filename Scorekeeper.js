var p1Button=document.querySelector("#p1");
var p2Button=document.querySelector("#p2");

console.log(p1Button, p2Button);
var p1Score=0;
var p2Score=0;

var numInput=document.querySelector("#inputField");
var winningScoreDisplay=document.querySelector("p span");
var winnerDisplay=document.querySelector("div h2 span");

var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var resetButton=document.querySelector("#reset");

var gameOver=false;
var winningScore=5;

p1Button.addEventListener("click",function(){
	if (!gameOver) 
	{
		p1Score++;
		if(p1Score===winningScore)
		{
			p1Display.classList.toggle("winner");
			gameOver=true;
			winnerDisplay.textContent="Player One won the Game";
		}
		document.querySelector("#p1Display").innerHTML=p1Score;
	}
});

p2Button.addEventListener("click",function()
{
	if (!gameOver) 
	{
		p2Score++;
		if(p2Score===winningScore)
		{
			p2Display.classList.toggle("winner");
			gameOver=true;
			winnerDisplay.textContent="Player Two won the Game";
		}
		document.querySelector("#p2Display").innerHTML=p2Score;
	}
});

resetButton.addEventListener("click",function(){
	reset();
});
function reset()
{
	p1Score=0;
	p2Score=0;
	p1Display.textContent=p1Score;
	p2Display.textContent=p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver=false;
	winnerDisplay.textContent=" ";
	numInput.value=" ";
}

numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent=this.value;
	winningScore=Number(this.value);
	reset();
});