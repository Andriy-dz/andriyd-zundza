
var score = 0;
var tries = 0;
var currentExpr = "";

function main()
{
	clear();
	startORend();

	currentExpr = generateExpr();
	document.getElementById('expr').value = currentExpr;
}

function startORend()
{
	if (tries == 0) 
	{
		document.getElementById("info").value = "Multiplication table";
		document.getElementById("Calculate").value = "Calculate";
	}

	if (tries == 10)
	{
		var finalScore = "You finished. You answered " + score/10 + " from 10 correctly";
		document.getElementById("info").value = finalScore;
		tries = 0;
		score = 0;
	}
}


function generateExpr() 
{
	var genNumOne = Math.floor((Math.random() * 9) + 1)
	var genNumTwo = Math.floor((Math.random() * 9) + 1)

	return genNumOne + " * " + genNumTwo;
}


function printScore()
{
	document.getElementById("info").value = "Your current score " + score + "%. correctly answered " + score/10 + "/10";
}


function validation(obj)
{
	
	var expected = eval(currentExpr);
	if (expected == obj.value){

		score += 10;
		document.getElementById("result").value = "GOOD Job!";

	}else {

		document.getElementById("result").value = "False. The correct answer is " + expected; 
	}
	
	tries += 1;
	
	printScore();
	setTimeout(main(), 3000);
}


function clear()
{
		document.getElementById("inp").value = "";
		
}