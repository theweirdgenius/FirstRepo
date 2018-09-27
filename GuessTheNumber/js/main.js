console.log("Hello World!");


function PlayGame()
{
	var num = Math.ceil(Math.random()*20);
	console.log(num);
	var count=0;
	var inp = window.prompt("Guess the number between 1 & 20");
	

	while(inp != num){
		

	if(isNaN(inp))
		inp = window.prompt("Please enter a number");
	if(inp == null)
		return;
	if (inp>num)
	{
		alert("Try lower number");
		inp = window.prompt("Try again. Guess the number.");
		count++;
	}
	if (inp<num)

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



function PalindromeChecker(str)
{
	var arr =[];
	var revArr =[];
	str = str.toLowerCase();
	for(var i=0; i<str.length; i++)
	{
		arr.push(str.charAt(i));
	}

	revArr = arr.reverse();


	var str1 = revArr.join("");


	if(str1 == str)

	{
		return true;
	}
	else
	{
	
		return false;
	}




}

console.log(PalindromeChecker("winf"));
console.log(PalindromeChecker("racecar"));
console.log(PalindromeChecker("cat"));
console.log(PalindromeChecker("dog"));
console.log(PalindromeChecker("anna"));

