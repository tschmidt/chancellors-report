$(document).ready(function () {
  
  // Make the scroll hint bounce
  var bounceInterval = setInterval(function () {
    var $scrollHint = $('.scroll-hint');
    $scrollHint.removeClass('bounce');
    setTimeout(function () {
      $scrollHint.addClass('bounce');
    }, 100);
  }, 5000);
  
  
  // Fade in the navbar after the intro have been scrolled
  var $mainNav = $('body > header');
  var $intro = $('#lead-in');
  $mainNav.hide();
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > ($intro.height() - 50)) {
      $mainNav.fadeIn()
    } else {
      $mainNav.fadeOut();
    }
  });
  
  $('.overlay-trigger').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $('.overlay').removeClass('open');
    $this.siblings('.overlay').addClass('open');
  });
  
  $('.overlay-close').on('click', function (e) {
    e.preventDefault();
    $(this).parent().removeClass('open');
  });
  
  $('.puppet').puppeteer();
});