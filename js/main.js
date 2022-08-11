$(document).ready(function(){
  // nav
  $("#GNB > ul > li").hover(function(){
    $("#GNB .sub").stop().slideDown(200);
  },function(){
    $("#GNB .sub").stop().slideUp(200);
  });

  // slide
  function slidemove(){
    var slidewd=$(".slide-con").width();
    $(".slide-box2").animate({
      left:-slidewd
    },function(){
      $(".slide-con:first-child").appendTo(".slide-box2");
      $(".slide-box2").css({
        left:0
      })
    });
  }
  setInterval(slidemove, 3000);

  // tab
  $(".nc-list").hide();
  $(".nc-list:first-child").show();
  $(".notgall-title a").click(function(){
    var num=$(this).index();
    $(".notgall-title a").removeClass('on');
    $(this).addClass('on');   
    $(".nc-list").hide();
    $(".nc-list").eq(num).show();
  });

  //pop
  $("#pop").hide();
  $(".notice ul li:first-child").click(function(){
    $("#pop").show();
  });
  $("#pop button").click(function(){
    $("#pop").hide();
  });

});