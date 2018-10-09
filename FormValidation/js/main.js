console.log("Hello World!");


var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];
var strArr = ["!", "@", "#", "$", "&"];
var chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",";","!","@","#","$","%","^","&","*","(",")","/","<"];



function PasswordValidator()
{
	var pass=document.getElementById("pass").value;
	var condMet = 0;
	if (pass.length >= 10)
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
		return true;
	}
	else
	{
		return false;
	}


}

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
	var emailEntry = document.getElementById("email").value;
	if(EmailValidator(emailEntry))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function CheckPhoneNumber()
{
	var arr = [];
	var ph = document.getElementById("pNum").value;
	for(var i=0; i<ph.length; i++)
	{
		arr.push(ph.charAt(i));
	}
	for(var i=0; i<arr.length; i++)
	{
		if(isNaN(arr[i]) || arr[i] == "(" || arr[i] == ")" || arr[i] == "-")
		{
			arr.splice(i,1);
			i -= 1;
		}
		if(isNaN(arr[i]))
		{
			return false;
		}
		if(arr.length<10)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}

function FirstName(){
	var fir = $("#fName").val();
	if(fir.length>0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function LastName(){


	var fir = $("#lName").val();
	if(fir.length>0)
	{
		return true;
	}
	else
	{
		return false;
	}
}
$(document).keyup(function(){
	var fName = false;
	var lName = false;
	var pNum = false;
	var email = false;
	var pass = false;


	fName = FirstName();
	lName = LastName();
	pNum = CheckPhoneNumber();
	email = EmailCheck();
	pass = PasswordValidator();


	if(fName)
	{
		$("#r1").css("display", "inline-block");
		$("#w1").css("display", "none");

	}
	else
	{
		$("#w1").css("display", "inline-block");
		$("#r1").css("display", "none");

	}
if(lName)
	{
		$("#r2").css("display", "inline-block");
		$("#w2").css("display", "none");

	}
	else
	{
		$("#w2").css("display", "inline-block");
		$("#r2").css("display", "none");

	}
if(pNum)
	{
		$("#r3").css("display", "inline-block");
		$("#w3").css("display", "none");

	}
	else
	{
		$("#w3").css("display", "inline-block");
		$("#r3").css("display", "none");

	}
if(email)
	{
		$("#r4").css("display", "inline-block");
		$("#w4").css("display", "none");

	}
	else
	{
		$("#w4").css("display", "inline-block");
		$("#r4").css("display", "none");

	}
if(pass)
	{
		$("#r5").css("display", "inline-block");
		$("#w5").css("display", "none");

	}
	else
	{
		$("#w5").css("display", "inline-block");
		$("#r5").css("display", "none");

	}



	












	if(fName && lName && pNum && email && pass)
	{
		$("#submitButton").removeAttr("disabled");
	}
	else
	{
		$("#submitButton").attr("disabled", "disabled");
	}




})

$("#submitButton").click(function(){

	alert("Thank you. Your form is submitted.")
})
