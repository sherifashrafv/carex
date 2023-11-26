$(document).ready(function () {
  $(window).on("load", () => {
    $(".preloader-bg").fadeOut();
  });
  $(window).on("resize", () => {
    $(document.body).removeClass("menu-on");
    $(".navMenu-links").removeClass("active");
    $(".hamburger").removeClass("close");
  });
  $(".hamburger").click(function () {
    $(document.body).toggleClass("menu-on");
    $(".navMenu-links").toggleClass("active");
    $(this).toggleClass("close");
  });
  $(".stg-1").owlCarousel({
    loop: false,
    responsiveClass: true,
    margin: 10,
    nav: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 1,
      },
    },
  });
  $(".stg-2").owlCarousel({
    loop: false,
    responsiveClass: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  });
  $(".stg-3").owlCarousel({
    loop: false,
    responsiveClass: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 1,
      },
    },
  });
  $(".stg-4").owlCarousel({
    loop: false,
    responsiveClass: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  });
  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    var topDist = $(".carex-nav").position();
    if (scroll > topDist.top) {
      $(".carex-nav").addClass("fixedNavbar").fadeIn(3000);
      $(".logo img").attr("src", "../images/logo-dark.png");
      $(".nav-links ul li a").not(".active").addClass("text-dark");
      $(".n_h").addClass("text-dark");
      $(".num-call").addClass("text-dark");
      $(".hamburger span").addClass("bg-dark");
    } else {
      $(".logo img").attr("src", "../images/logo-light.png");
      $(".hamburger span").removeClass("bg-dark");
      $(".nav-links ul li a").not(".active").removeClass("text-dark");
      $(".n_h").removeClass("text-dark");
      $(".num-call").removeClass("text-dark");
      $(".carex-nav").removeClass("fixedNavbar");
    }
  });
  $(".vedio-modal").click(function () {
    $(".modal").fadeIn();
  });
  jQuery(".modal .close").click(function () {
    jQuery(".modal").fadeOut();
  });
  $(".vid-butn").click(function () {
    $(".modal").fadeIn();
  });
  jQuery(".modal .close").click(function () {
    jQuery(".modal").fadeOut();
  });
});
