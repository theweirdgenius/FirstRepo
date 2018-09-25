$(document).ready(function(){
console.log("Hello World!");


$("#toggleB").click(function()
{
$("h1").toggle(2000);
});


$("#p1").click(function(){
    alert("Hola!");
});

$("#bgColor").click(function(){
	$(".para").css("background-color", "yellow");

});

var count = 0;
$("#dateB").click(function DateApp(){
    if(count%2 == 0){
    	$("#DateP").append("<p class='evenClass'>" + Date() + "</p>" );
    }
    else
    {
    	$("#DateP").append("<p class='oddClass'>" + Date() + "</p>");
    }
    count++;
});

$("#dateD").click(function (){

	AddDate();

	
})

var t;

function AddDate(){

var r= Math.floor(Math.random()*256);
var g= Math.floor(Math.random()*256);
var b= Math.floor(Math.random()*256);


	clearTimeout(t);

	if(count%2 == 0){
    	$("#DateP").append("<p class='evenClass' style='background-color: rgb(" + r +"," + g + "," + b + ")'>" + Date() + "</p>" );
    }
    else
    {
    	$("#DateP").append("<p class='oddClass' style='background-color: rgb(" + r +"," + g + "," + b + ")'>" + Date() + "</p>");
    }
    count++;

    if (count%11 == 0)
    {
    	$("#DateP").empty();
    }

	
	t = setTimeout(AddDate,1000);

}


var data=[];
var myTable = document.getElementById("nestedTable");
for(var i = 0; i<21; i++)
{
	var row = document.createElement("tr");
	myTable.append(row);

	for(j=0; j<21; j++)
	{
		var col = document.createElement("td");
		data.push(col);
		row.append(col);
	}
}

var tableIndex;

function ColourfulTable()
{
	tableIndex = Math.floor(Math.random() * data.length);
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	data[tableIndex].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
	setTimeout(ColourfulTable, 0);

}
ColourfulTable();

})