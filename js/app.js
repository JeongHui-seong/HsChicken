//smooth scroll

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//AOS

AOS.init();

//스크롤 시 header 상단에 고정

$(document).ready(function () {
  let height = $("#header").offset();
  $(window).scroll(function () {
    if ($(document).scrollTop() > height.top + 100) {
      $("#header").addClass("fix");
    }
    else {
      $("#header").removeClass("fix");
    }
  });
});

//모바일 gnb

$(".bars").on("click", function () {
  if ($(".bars").hasClass("close")) {
    $("#header").css("z-index", 10);
    $("#mGnb").css("z-index", -1);
    $("#mGnb").css("opacity", 0);
    $("#mGnb").css("visibility", "hidden");
    $(".bars").removeClass("close");
    $(".bars .line:first-child").css("transform","rotate(0) translateY(0)");
    $(".bars .line:nth-child(2)").css("display","block");
    $(".bars .line:last-child").css("transform","rotate(0) translateY(0)");
  }else{
    $("#header").css("z-index", 999);
    $("#mGnb").css("z-index", 900);
    $("#mGnb").css("opacity", 1);
    $("#mGnb").css("visibility", "visible");
    $(".bars").addClass("close");
    $(".bars .line:first-child").css("transform","rotate(45deg) translateY(5px)");
    $(".bars .line:nth-child(2)").css("display","none");
    $(".bars .line:last-child").css("transform","rotate(-45deg) translateY(-6px)");
  }
});

$(".mGnb_inr a").on("click", function(){
  $("#header").css("z-index", 10);
  $("#mGnb").css("z-index", -1);
  $("#mGnb").css("opacity", 0);
  $("#mGnb").css("visibility", "hidden");
  $(".bars").removeClass("close");
  $(".bars .line:first-child").css("transform","rotate(0) translateY(0)");
  $(".bars .line:nth-child(2)").css("display","block");
  $(".bars .line:last-child").css("transform","rotate(0) translateY(0)");
})
