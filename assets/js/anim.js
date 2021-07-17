$(function() {

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("nav-active");
    $this.addClass("nav-active");

    $("html, body").animate({
      scrollTop: blockOffset-100
    }, 500);

  });
});

//b) initialize paroller.js and set attributes 
$(".paroller").paroller({ factor: 0.5, factorXs: 0.2, factorSm: 0.3,});  