$(function() {

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("nav-active");
    $this.addClass("nav-active");

    $("main").animate({
      scrollTop: blockOffset-100
    }, 500);

  });
});

$('.parallax-window').parallax({imageSrc: 'assets/img/Image5.jpg'});