$(function() {

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("main").animate({
      scrollTop: blockOffset-100
    }, 500);

  });

});