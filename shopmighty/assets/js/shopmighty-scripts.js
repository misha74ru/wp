(function ($) {
  "use strict";
  //Loading AOS animation with css class

  //fade animation
  $(".shopmighty-fade-up").attr({
    "data-aos": "fade-up",
  });
  $(".shopmighty-fade-down").attr({
    "data-aos": "fade-down",
  });
  $(".shopmighty-fade-left").attr({
    "data-aos": "fade-left",
  });
  $(".shopmighty-fade-right").attr({
    "data-aos": "fade-right",
  });
  $(".shopmighty-fade-up-right").attr({
    "data-aos": "fade-up-right",
  });
  $(".shopmighty-fade-up-left").attr({
    "data-aos": "fade-up-left",
  });
  $(".shopmighty-fade-down-right").attr({
    "data-aos": "fade-down-right",
  });
  $(".shopmighty-fade-down-left").attr({
    "data-aos": "fade-down-left",
  });

  //slide animation
  $(".shopmighty-slide-left").attr({
    "data-aos": "slide-left",
  });
  $(".shopmighty-slide-right").attr({
    "data-aos": "slide-right",
  });
  $(".shopmighty-slide-up").attr({
    "data-aos": "slide-up",
  });
  $(".shopmighty-slide-down").attr({
    "data-aos": "slide-down",
  });

  //zoom animation
  $(".shopmighty-zoom-in").attr({
    "data-aos": "zoom-in",
  });
  $(".shopmighty-zoom-in-up").attr({
    "data-aos": "zoom-in-up",
  });
  $(".shopmighty-zoom-in-down").attr({
    "data-aos": "zoom-in-down",
  });
  $(".shopmighty-zoom-in-left").attr({
    "data-aos": "zoom-in-left",
  });
  $(".shopmighty-zoom-in-right").attr({
    "data-aos": "zoom-in-right",
  });
  $(".shopmighty-zoom-out").attr({
    "data-aos": "zoom-out",
  });
  $(".shopmighty-zoom-out-up").attr({
    "data-aos": "zoom-out-up",
  });
  $(".shopmighty-zoom-out-down").attr({
    "data-aos": "zoom-out-down",
  });
  $(".shopmighty-zoom-out-left").attr({
    "data-aos": "zoom-out-left",
  });
  $(".shopmighty-zoom-out-right").attr({
    "data-aos": "zoom-out-right",
  });

  //flip animation
  $(".shopmighty-flip-up").attr({
    "data-aos": "flip-up",
  });
  $(".shopmighty-flip-down").attr({
    "data-aos": "flip-down",
  });
  $(".shopmighty-flip-left").attr({
    "data-aos": "flip-left",
  });
  $(".shopmighty-flip-right").attr({
    "data-aos": "flip-right",
  });

  //animation ease attributes
  $(".shopmighty-linear").attr({
    "data-aos-easing": "linear",
  });
  $(".shopmighty-ease").attr({
    "data-aos-easing": "ease",
  });
  $(".shopmighty-ease-in").attr({
    "data-aos-easing": "ease-in",
  });
  $(".shopmighty-ease-in-back").attr({
    "data-aos-easing": "ease-in-back",
  });
  $(".shopmighty-ease-out").attr({
    "data-aos-easing": "ease-out",
  });
  $(".shopmighty-ease-out-back").attr({
    "data-aos-easing": "ease-out-back",
  });
  $(".shopmighty-ease-in-out-back").attr({
    "data-aos-easing": "ease-in-out-back",
  });
  $(".shopmighty-ease-in-shine").attr({
    "data-aos-easing": "ease-in-shine",
  });
  $(".shopmighty-ease-out-shine").attr({
    "data-aos-easing": "ease-out-shine",
  });
  $(".shopmighty-ease-in-out-shine").attr({
    "data-aos-easing": "ease-in-out-shine",
  });
  $(".shopmighty-ease-in-quad").attr({
    "data-aos-easing": "ease-in-quad",
  });
  $(".shopmighty-ease-out-quad").attr({
    "data-aos-easing": "ease-out-quad",
  });
  $(".shopmighty-ease-in-out-quad").attr({
    "data-aos-easing": "ease-in-out-quad",
  });
  $(".shopmighty-ease-in-cubic").attr({
    "data-aos-easing": "ease-in-cubic",
  });
  $(".shopmighty-ease-out-cubic").attr({
    "data-aos-easing": "ease-out-cubic",
  });
  $(".shopmighty-ease-in-out-cubic").attr({
    "data-aos-easing": "ease-in-out-cubic",
  });
  $(".shopmighty-ease-in-quart").attr({
    "data-aos-easing": "ease-in-quart",
  });
  $(".shopmighty-ease-out-quart").attr({
    "data-aos-easing": "ease-out-quart",
  });
  $(".shopmighty-ease-in-out-quart").attr({
    "data-aos-easing": "ease-in-out-quart",
  });

  setTimeout(function () {
    if (typeof AOS !== "undefined") {
      AOS.init({
        once: true,
        duration: 1200,
      });
    }
  }, 100);

  var shopmightyStickyMenu = $(".shopmighty-sticky-menu");
  var shopmightyScrollTopLink = $(".shopmighty-scrollto-top a");
  var shopmightyScrollTicking = false;

  function shopmightyHandleScroll() {
    var scrollTop = $(window).scrollTop();

    if (shopmightyStickyMenu.length && scrollTop > 0) {
      shopmightyStickyMenu.addClass("sticky-menu-enabled shopmighty-zoom-in-up");
    } else {
      shopmightyStickyMenu.removeClass("sticky-menu-enabled");
    }

    if (scrollTop > 100) {
      shopmightyScrollTopLink.fadeIn();
    } else {
      shopmightyScrollTopLink.fadeOut();
    }

    shopmightyScrollTicking = false;
  }

  $(window).on("scroll", function () {
    if (!shopmightyScrollTicking) {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(shopmightyHandleScroll);
      } else {
        setTimeout(shopmightyHandleScroll, 16);
      }
      shopmightyScrollTicking = true;
    }
  });
  shopmightyScrollTopLink.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  /* Featured Slider */
  if (typeof Swiper !== "undefined" && $(".shopmighty-slider").length) {
    var shopmightySlider = new Swiper(".shopmighty-slider", {
      slidesPerView: 1,
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".shopmighty-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".shopmighty-button-next",
        prevEl: ".shopmighty-button-prev",
      },
    });
  }
})(jQuery);
