

$(function() {

// Painting upon reaching ============

  var   headerHeight = $("#header").height();
        mainH = $("#main").offset().top,
        aboutH = $("#about").offset().top,
        servicesH = $("#services").offset().top,
        contactH = $("#contact").offset().top,
        scrollOffset = $(window).scrollTop() + headerHeight;


    checkScroll(scrollOffset);


    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
      });
      
    function checkScroll(scrollOffset) {
      scrollOffset = scrollOffset + headerHeight + 150;
      if( scrollOffset >= mainH && scrollOffset <= aboutH) {
        $("#nav a").removeClass("nav-active");
        $("#main_a").addClass("nav-active");
      } else {
        if( scrollOffset >= aboutH && scrollOffset <= servicesH) {
          $("#nav a").removeClass("nav-active");
          $("#about_a").addClass("nav-active");
        } else {
          if( scrollOffset >= servicesH && scrollOffset <= contactH) {
            $("#nav a").removeClass("nav-active");
            $("#services_a").addClass("nav-active");
          } else {
            if(scrollOffset >= contactH) {
              $("#nav a").removeClass("nav-active");
              $("#contact_a").addClass("nav-active");
            }}}}
     }

// Scroll to anchor ============

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top,
        headerHeight = $("#header").height();

    // $("#nav a").removeClass("nav-active");
    

    $("html, body").animate({
      scrollTop: blockOffset-headerHeight
    }, 500);
    // $this.addClass("nav-active");
    $("#nav_toggle").removeClass("active");
    $("#nav").removeClass("active");
  });


  // Telephone burger menu ============

  // burger menu active ============
  
  /* Menu nav toggle */
  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");

  });

// burger menu deactivated ============

  /* Collapse */
  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this);

    $this.toggleClass("active");
  });

});



// Initialising scripts ============


$(".paroller").paroller({ factor: 0.5, factorXs: 0.2, factorSm: 0.1,});  


AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});