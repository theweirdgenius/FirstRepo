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
for(var i = 0; i<15; i++)
{
	var row = document.createElement("tr");
	myTable.append(row);

	for(j=0; j<15; j++)
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



$("#changeBack").click(function(){
	
	if ($(".para").css("background-color") == "rgba(0, 0, 0, 0)")
	{
		$(".para").css("background-color", "yellow");
	}
	else
	{
		$(".para").css("background-color", "rgba(0, 0, 0, 0)");
	}

});

 $("#startB").click(function(){
        var div = $("#animateDiv");  
        div.animate({left: '500px'}, 10000);
});

 $("#stopB").click(function(){
    $("#animateDiv").stop();
});

  $("#startA").click(function(){
        var div = $("#animateDiv1");  
        div.animate({left: '100vw'}, 5000);
        div.animate({left:'0'}, 5000);
});

  $("#changeB").click(function(){
        var col = $("#colorInput").val();
        console.log(col);
        $("body").css("background-color", col);
        
});

  $("#displayAlert").click(function(){
        var aler = $("#alertInput").val();
        console.log(aler);
        alert(aler);
        
});

  function WordJumbler(str)
  {
  	var letter = str;

	var jumbledWord = "";

	for (var i = 0; i < str.length; i++) 
	{
    var index = Math.floor(Math.random() * letter.length);
    jumbledWord = jumbledWord + letter.charAt(index);
    letter = letter.substr(0, index) + letter.substr(index + 1);
	}

	return jumbledWord;


  }

  console.log(WordJumbler("animal"));

var randomWords=["cat", "dog", "lion", "mouse", "horse", "bat", "deer", "duck", "cow"];

var ranTable = document.getElementById("randomTable");
var randData = []
for(var i = 0; i<3; i++)
{
	var row = document.createElement("tr");
	ranTable.append(row);

	for(j=0; j<3; j++)
	{
		var col = document.createElement("td");
		col.setAttribute('class', 'tableData');
		randData.push(col)
		row.append(col);
	}
}
/*$(".tableData").text(function(){
    return randomWords[Math.floor(Math.random()*randomWords.length)];
});*/
var ranCount = 0;
var ind;
while(randomWords.length >= 1)
{
	ind = Math.floor(Math.random()*randomWords.length);
	randData[ranCount].innerHTML = randomWords[ind];
	randomWords.splice(ind, 1);
	ranCount++;
}
})
