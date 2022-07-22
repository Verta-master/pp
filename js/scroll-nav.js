//Scroll to menu anchor
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('.nav__link[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('.nav__link').each(function () {
        $(this).removeClass('nav__link--active');
    })
    $(this).addClass('nav__link--active');

    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 200
    }, 500, 'swing', function () {
        $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop() - 200;
  $('.nav__link').each(function () {
      event.preventDefault();
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.nav__link').removeClass("nav__link--active");
          currLink.addClass("nav__link--active");
      }
  });
};

$('.nav').sticky({
  topSpacing: 152,
  zIndex: 900,
  responsiveWidth: true,
});

if(window.innerWidth < 1200) {
  $('.nav').unstick();
  $('.nav').niceScroll({
    cursorcolor: '#2647E6',
  });
}

$('.nav').on('sticky-start', function() {
  $('.nav').addClass('nav--sticky');
});
$('.nav').on('sticky-end', function() { 
  $('.nav').removeClass('nav--sticky');
});