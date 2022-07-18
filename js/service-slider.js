var breakpoint = window.matchMedia('(min-width: 700px)');
var newsSwiper;
var breakpointChecker = function() {
  if (breakpoint.matches === true) {
    if (newsSwiper !== undefined) newsSwiper.destroy(true, true);
    return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
};

var enableSwiper = function() {
  newsSwiper = new Swiper ('.service__slider', {
    pagination: {
      el: '.service__pagination',
      clickable: true,
    },
    simulateTouch: false,
    preventClicks: false,
    preventClicksPropagation: false,
    slidesPerView: 'auto',
    spaceBetween: 10,
  })
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();

