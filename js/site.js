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
    $('body').addClass('modal-open');
    var $this = $(this);
    $('.overlay').removeClass('open');
    $this.parents('.overlay-container').find('.overlay').addClass('open');
  });
  
  $('.overlay-close').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('modal-open');
    $(this).parent().removeClass('open');
  });
  
  $('.puppet').puppeteer();
  
  $('.navbar-nav a').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    $('html, body').stop().animate({
      scrollTop: $($this.attr('href')).offset().top
    }, 1500, 'easeInOutCubic');
  })
});