console.log("Hello World");

var ImgCont = document.getElementById("ImageContainer");

var clic = 1;
function PlayGame()
{
	ImgCont.style.display="block";
	alert("Player1 Rock, Paper or Scissors?");
}

function Rock()
{
	if(clic ==1)
		{
			player1 = "rock";
			clic = clic + 1;
			console.log("player1 is " + player1);
			alert("Player2 Rock, Paper or Scissors?");
		}
	else
	{
		player2 = "rock";
		console.log("player2 is " + player2);
		Result();
	}


}
function Paper()
{
	if(clic ==1)
		{
			player1 = "paper";
			clic = clic + 1;
			console.log("player1 is " + player1)
			alert("Player2 Rock, Paper or Scissors?");
		}
	else
	{
		player2 = "paper";
		console.log("player2 is " + player2);
		Result();
	}


}
function Scissors()
{
	if(clic ==1)
		{
			player1 = "scissors";
			clic = clic + 1;
			console.log("player1 is " + player1);
			alert("Player2 Rock, Paper or Scissors?");
		}
	else
	{
		player2 = "scissors";
		console.log("player2 is " + player2);
		Result();
	}


}

function Result(){

	if (player1 == player2)
	{
		alert("It's a tie!!!")
		alert("Player1 gave -> " + player1 + "\n and Player2 gave -> " + player2)
	}
		else if(player1 == "rock" && player2 == "paper")
		{
			alert("Congratulations! \n Player2 wins");
			alert("Player1 gave -> " + player1 + "\n and Player2 gave -> " + player2)

		}
		else if(player1 == "rock" && player2 == "scissors")
		{
			alert("Congratulations! \n Player1 wins");
			alert("Player1 gave -> " + player1 + "\n and Player2 gave -> " + player2)

		}
		else if(player1 == "paper" && player2 == "rock")
		{
			alert("Congratulations! \n Player1 wins");
			alert("Player1 gave -> " + player1 + "\n and Player2 gave -> " + player2)

		}
		else if(player1 == "paper" && player2 == "scissors")
		{
			alert("Congratulations! \n Player2 wins");
			alert("Player1 gave -> " + player1 + "\n and Player2 gave -> " + player2)

		}
		else if(player1 == "scissors" && player2 == "rock")
		{
			alert("Congratulations! \n Player2 wins");
			alert("Player1 gave -> " + player1 + "\n and Player2 gave -> " + player2)

		}
		else if(player1 == "scissors" && player2 == "paper")
		{
			alert("Congratulations! \n Player1 wins");
			alert("Player1 gave -> " + player1 + "\n and Player2 gave -> " + player2)

		}else
		{
			console.log("Something is wrong!")
		}
}







