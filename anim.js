$(window).scroll(function(){
  var offset = $('.about').offset(),
      offsetwb = $('.white + .black').offset();
  if ($(this).scrollTop() > offset.top && $(this).scrollTop() < offsetwb.top) {
    $('.icon').css('background-color','black');
  }
  else {
    $('.icon').css('background-color','white');
  }
});


const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });