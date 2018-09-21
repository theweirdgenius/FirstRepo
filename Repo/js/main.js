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
/*var myTable = document.getElementById("nestedTable");
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

}*/


var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];
var strArr = ["!", "@", "#", "$", "&"];


function PasswordValidator(str)
{
	var condMet = 0;
	if (str.length >= 8)
	{
		condMet = 1;
	}

	for (var i=0; i<numArr.length; i++)
	{
		if(str.includes(numArr[i]))
		{
			condMet+= 1;
			break;
		}
	}

	for (var i=0; i<strArr.length; i++)
	{
		if(str.includes(strArr[i]))
		{
			condMet+=1;
			break;
		}
	}

	if(condMet==3)
	{
		return true;
	}
	else
	{
		return false;
	}


}
console.log(PasswordValidator("11456789"));






