console.log("Hello World!");

$("#toggle").click(function(){
  
  var disp = $("#sideBar").css("display");
  $("#sideBar").fadeToggle(500);

 if(disp == "none")
  {
      $("body").animate({"padding-left" : "190px"})
  }
  else
  {
      $("body").animate({"padding-left" : "0px"})
  }

})