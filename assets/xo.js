/*---xo animation---*/
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  // viewportTop +=200;
  var viewportBottom = viewportTop + $(window).height();
  viewportBottom -=100;

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  $('.xo').each(function() {
    if ($(this).isInViewport()) {
      $(this).addClass('visible');
    } else {
      $(this).removeClass('visible');
    }
  });
});