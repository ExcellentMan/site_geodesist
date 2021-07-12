function isVisible(elem){
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
console.log('scroll')
$('.fadeInBlock').each(function(i) {
  if (isVisible(this)) {
    $(this).animate({
      'opacity': '1'
    }, 1000);
  } else {
    $(this).css({
      'opacity': '0'
    });
  }
});
});