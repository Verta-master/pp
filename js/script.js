//Mobile menu
if (window.innerWidth < 701) {
  $('.mobile__link--menu').click(function() {
    event.preventDefault();
    $('.menu-mobile').addClass('menu-mobile--open');
  })
  
  $('.menu-mobile__close').click(function() {
    $('.menu-mobile').removeClass('menu-mobile--open');
  })
  
  $('.menu-mobile__btn').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('menu-mobile__btn--top');
    $('.menu-mobile__wrap').scroll(function(){
      $(".menu-mobile__wrap").getNiceScroll().resize();
    });
  })
  
  $('.menu-mobile__wrap').niceScroll({
    cursorcolor: '#2647E6',
  });
}
if ((window.innerWidth > 699) && (window.innerWidth < 1200)) {
  $('.header__menu-btn').click(function() {
    event.preventDefault();
    $('.menu-mobile').addClass('menu-mobile--open');
  })
  
  $('.menu-mobile__close').click(function() {
    $('.menu-mobile').removeClass('menu-mobile--open');
  })
  
  $('.menu-mobile__btn').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('menu-mobile__btn--top');
    $('.menu-mobile__wrap').scroll(function(){
      $(".menu-mobile__wrap").getNiceScroll().resize();
    });
  })
  
  $('.menu-mobile__wrap').niceScroll({
    cursorcolor: '#2647E6',
  });
}

//Mobile footer
$('.footer__down').click(function() {
  $(this).toggleClass('footer__down--top');
  $(this).next().slideToggle();
})

//Desktop menu slider
var mySwiper = new Swiper ('.menu__slider', {
  pagination: {
    el: '.menu__pagination',
    clickable: true,
  },
  simulateTouch: false,
  preventClicks: false,
  preventClicksPropagation: false,
  slidesPerView: 1,
  spaceBetween: 20,
});