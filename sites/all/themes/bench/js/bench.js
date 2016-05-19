(function($) {
  $(document).ready(function() {
  var $smoothScroll = $('.smoothScroll'),
      $hamburger    = $(".hamburger"),
      $menu         = $("#block-system-main-menu"),
      timeline      = new TimelineMax({delay:1.0});

  $smoothScroll.click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
    });
  $('a').click(function(event) {
    TweenMax.set($menu, {autoAlpha: 0});
    
    event.preventDefault();

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    $hamburger.toggleClass("is-active");
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
    });
  });
})(jQuery);
