console.log("Hello World");
console.log("Hello again!");
/*console.log(Math.ceil(Math.random()*16))*/

var randArr = [];
for(var i=0; i<10; i++)
{
	randArr.push(Math.floor(Math.random()*101));
}

/*console.log(randArr)*/


var chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",";","!","@","#","$","%","^","&","*","(",")","/","<"];

/*console.log(chars);*/



var a = Math.floor(Math.random()*5) + 12;


var pass = "";
for(var i=0; i<a; i++)
{
	var index = Math.floor(Math.random()*chars.length);
	if(index < 25 && Math.random() < 0.5){
		pass = pass + chars[i].toUpperCase();

	}
	else{
	pass = pass + chars[index];}

}
/*console.log(pass);*/

/*for(var row=0; row<5; row++)
{
	console.log("row");
	for(var col=0; col<10; col++)
	{
		console.log("col");
	}
}*/
var myTable = document.getElementById("nestedTable");
for(var i=0; i<10; i++)
{
	var row = document.createElement("tr");
	myTable.append(row);
	for(var j=0; j<10; j++)
	{
		var col = document.createElement("td");
		if(i%2 == 0)
		{
			if(j%2 == 0)
			{
			col.setAttribute("class", "tableData");
			}
			else
			{
			col.setAttribute("class", "tabData");
			}
		}
		else
		{
			if(j%2 != 0)
			{
				col.setAttribute("class", "tableData");
			}
			else
			{
				col.setAttribute("class", "tabData");
			}
		}
		row.append(col);
	}

}




var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];
var strArr = ["!", "@", "#", "$", "&"];


function PasswordValidator()
{
	var pass=document.getElementById("pass").value;
	var condMet = 0;
	if (pass.length >= 8)
	{
		condMet = 1;
	}

	for (var i=0; i<numArr.length; i++)
	{
		if(pass.includes(numArr[i]))
		{
			condMet+= 1;
			break;
		}
	}

	for (var i=0; i<strArr.length; i++)
	{
		if(pass.includes(strArr[i]))
		{
			condMet+=1;
			break;
		}
	}

	if(condMet==3)
	{
		alert("Correct Password");
	}
	else
	{
		alert("IncorrectPassword");
	}


}
/*console.log(PasswordValidator("11456789"));*/

var testString = "asdfg@hjkl@gdfgdgfdg@jkjkj";
var testArray = testString.split("@");
console.log(testArray);


function splitString (str, splitAt)
{
	var output = [];
	var lastIndex = 0;
	for(var i=0; i<str.length; i++)
	{
		if(str.charAt(i) == splitAt)
		{
			var addString = str.slice(lastIndex,i);
			output.push(addString);
			lastIndex = i+1;
			console.log(output);

		}
	}
	var lastString = str.slice(lastIndex,i);
	if(lastString.length !=0);
	output.push(lastString);
	console.log(output);

}
splitString("cattattatt", "a");

function EmailValidator(str)
{
	str = str.toLowerCase();
	
	if (str.charAt(0) == "@")
	{
		return false;
	}
	var array1 = str.split("@")
	if (array1.length != 2)
	{
		return false;
	}
	
	if(!array1[1].includes("."))
	{
		return false;
	}
	for(var i=0; i<26; i++)
	{
		if(array1[1].endsWith(chars[i]))
		{
			return true;
		}

	}
	return false;

}

function EmailCheck()
{
	var emailEntry = document.getElementById("emailId").value;
	if(EmailValidator(emailEntry))
	{
		alert("Correct Email");
	}
	else
	{
		alert("Incorrect Email");
	}
}


