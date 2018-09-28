console.log("Hello World!");

$("#toggle").click(function(){
  
  var disp = $("#sideBar").css("display");
  if(disp == "none")
  {
      //$("#sideBar").css("display", "block");
      $("#sideBar").animate({display:'block'});
  }
  else
  {
      $("#sideBar").css("display", "none");
  }

})