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
		if(j%2 == 0)
		{
		col.setAttribute("class", "tableData");
		}
		else
		{
		col.setAttribute("class", "tabData");
		}
		row.append(col);
	}

}