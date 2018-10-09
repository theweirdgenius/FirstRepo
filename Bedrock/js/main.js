console.log("Hello World");

 $("#username").focus(function(){
    $("#username").animate({width: '250px'});
    $("#username").css({"background-image": "none"})

});  

  $("#password").focus(function(){
    $("#password").animate({width: '250px'});
    $("#password").css({"background-image": "none"})
});  

   $("#username").blur(function(){
    $("#username").animate({width: '200px'});
    $("#username").css({"background-image": "url('./img/un2.png')"})
});  

  $("#password").blur(function(){
    $("#password").animate({width: '200px'});
    $("#password").css({"background-image": "url('./img/un1.png')"})
});  