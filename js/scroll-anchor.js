//Scroll to menu anchor
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('.sidebar__link[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('.sidebar__link').each(function () {
        $(this).removeClass('sidebar__link--active');
    })
    $(this).addClass('sidebar__link--active');

    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.sidebar__link').each(function () {
      event.preventDefault();
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.sidebar__link').removeClass("sidebar__link--active");
          currLink.addClass("sidebar__link--active");
      }
  });
};