(function () {
  "use strict";

  function shopmightySetAttributes(selector, attributes) {
    document.querySelectorAll(selector).forEach(function (element) {
      Object.keys(attributes).forEach(function (attributeName) {
        element.setAttribute(attributeName, attributes[attributeName]);
      });
    });
  }

  var shopmightyAosAttributes = {
    ".shopmighty-fade-up": { "data-aos": "fade-up" },
    ".shopmighty-fade-down": { "data-aos": "fade-down" },
    ".shopmighty-fade-left": { "data-aos": "fade-left" },
    ".shopmighty-fade-right": { "data-aos": "fade-right" },
    ".shopmighty-fade-up-right": { "data-aos": "fade-up-right" },
    ".shopmighty-fade-up-left": { "data-aos": "fade-up-left" },
    ".shopmighty-fade-down-right": { "data-aos": "fade-down-right" },
    ".shopmighty-fade-down-left": { "data-aos": "fade-down-left" },
    ".shopmighty-slide-left": { "data-aos": "slide-left" },
    ".shopmighty-slide-right": { "data-aos": "slide-right" },
    ".shopmighty-slide-up": { "data-aos": "slide-up" },
    ".shopmighty-slide-down": { "data-aos": "slide-down" },
    ".shopmighty-zoom-in": { "data-aos": "zoom-in" },
    ".shopmighty-zoom-in-up": { "data-aos": "zoom-in-up" },
    ".shopmighty-zoom-in-down": { "data-aos": "zoom-in-down" },
    ".shopmighty-zoom-in-left": { "data-aos": "zoom-in-left" },
    ".shopmighty-zoom-in-right": { "data-aos": "zoom-in-right" },
    ".shopmighty-zoom-out": { "data-aos": "zoom-out" },
    ".shopmighty-zoom-out-up": { "data-aos": "zoom-out-up" },
    ".shopmighty-zoom-out-down": { "data-aos": "zoom-out-down" },
    ".shopmighty-zoom-out-left": { "data-aos": "zoom-out-left" },
    ".shopmighty-zoom-out-right": { "data-aos": "zoom-out-right" },
    ".shopmighty-flip-up": { "data-aos": "flip-up" },
    ".shopmighty-flip-down": { "data-aos": "flip-down" },
    ".shopmighty-flip-left": { "data-aos": "flip-left" },
    ".shopmighty-flip-right": { "data-aos": "flip-right" },
    ".shopmighty-linear": { "data-aos-easing": "linear" },
    ".shopmighty-ease": { "data-aos-easing": "ease" },
    ".shopmighty-ease-in": { "data-aos-easing": "ease-in" },
    ".shopmighty-ease-in-back": { "data-aos-easing": "ease-in-back" },
    ".shopmighty-ease-out": { "data-aos-easing": "ease-out" },
    ".shopmighty-ease-out-back": { "data-aos-easing": "ease-out-back" },
    ".shopmighty-ease-in-out-back": { "data-aos-easing": "ease-in-out-back" },
    ".shopmighty-ease-in-shine": { "data-aos-easing": "ease-in-shine" },
    ".shopmighty-ease-out-shine": { "data-aos-easing": "ease-out-shine" },
    ".shopmighty-ease-in-out-shine": { "data-aos-easing": "ease-in-out-shine" },
    ".shopmighty-ease-in-quad": { "data-aos-easing": "ease-in-quad" },
    ".shopmighty-ease-out-quad": { "data-aos-easing": "ease-out-quad" },
    ".shopmighty-ease-in-out-quad": { "data-aos-easing": "ease-in-out-quad" },
    ".shopmighty-ease-in-cubic": { "data-aos-easing": "ease-in-cubic" },
    ".shopmighty-ease-out-cubic": { "data-aos-easing": "ease-out-cubic" },
    ".shopmighty-ease-in-out-cubic": { "data-aos-easing": "ease-in-out-cubic" },
    ".shopmighty-ease-in-quart": { "data-aos-easing": "ease-in-quart" },
    ".shopmighty-ease-out-quart": { "data-aos-easing": "ease-out-quart" },
    ".shopmighty-ease-in-out-quart": { "data-aos-easing": "ease-in-out-quart" },
  };

  function shopmightyRequestAnimationFrame(callback) {
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(callback);
      return;
    }

    setTimeout(function () {
      callback(Date.now());
    }, 16);
  }

  Object.keys(shopmightyAosAttributes).forEach(function (selector) {
    shopmightySetAttributes(selector, shopmightyAosAttributes[selector]);
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

  function shopmightyFade(element, show) {
    if (!element || shopmightyScrollTopVisible === show) {
      return;
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
