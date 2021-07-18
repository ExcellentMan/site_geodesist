$(".paroller").paroller({ factor: 0.5, factorXs: 0.2, factorSm: 0.1,});  


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



