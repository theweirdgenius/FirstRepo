console.log("Hello World!");

$("#toggle").click(function(){
  
  var disp = $("#sideBar").css("display");
  $("#sideBar").fadeToggle(500);
/*  if(disp == "none")
  {
      $("#sideBar").css("display", "block");
  }
  else
  {
      $("#sideBar").css("display", "none");
  }*/

})