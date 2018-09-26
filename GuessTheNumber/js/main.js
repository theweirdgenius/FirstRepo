console.log("Hello World!");


function PlayGame()
{
	var num = Math.ceil(Math.random()*20);
	console.log(num);
	var count=0;
	var inp = window.prompt("Guess the number between 1 & 20");
	
	while(isNaN(inp))
	{
		inp = window.prompt("Please enter a number");
	}

	while(inp != num){
	if(inp == null)
	{
		return;
	}



	while (inp>num)
	{
		alert("Try lower number");
		inp = window.prompt("Try again. Guess the number.");
		count++;
	}

	while (inp<num)

	{
		alert("Try higher number");
		inp = window.prompt("Try again. Guess the number.");
		count++;
	}
		
	}

		alert("Congrats! You've got it!");
		count++;

		if(count<=3)
		{
			alert("Great job Sherlock! Number of guesses: " + count);
			
		}

		else if(count>3 && count<6)
		{
			alert("Not bad! Number of guesses: " + count);

		}

		else
		{
			alert("You really suck at guessing. Number of guesses: " + count);
		}


}

$("#gameButton").click(function(){

	PlayGame();

	

});
