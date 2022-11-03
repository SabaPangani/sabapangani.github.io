$(window).scroll(function(){
   console.log($(window).scrollTop())
   $(window).scrollTop() >= 72 ? $(".sectionOne").css("transform",'scale(1)') : ""
   $(window).scrollTop() >= 1100 ? $(".sectionTwo").css("transform",'scale(1)') : ""
   $(window).scrollTop() >= 2251 ? $(".sectionThree").css("transform",'scale(1)') : ""
   $(window).scrollTop() >= 3306 ? $(".testimonials").css("transform",'scale(1)') : ""
   $(window).scrollTop() >= 3830 ? $(".showCase").css("transform",'scale(1)') : ""
   $(window).scrollTop() >= 4280 ? $("footer").css("transform",'scale(1)') : ""
})

$(".menuBtn").click(function(){
    $(".navbar").toggleClass("active")
})
//72
//1100
//2251
//3306