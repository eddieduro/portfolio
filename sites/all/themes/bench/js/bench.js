(function($) {
  $(function() {
  // let $projects = $('.projects'),
  let $smoothScroll = $('.smoothScroll');

  TweenMax.set($projects, {y: -10, autoAlpha: 0});

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
  // if ($projects.visible()) {
  //   TweenMax.to($arrow, 
  //               1,
  //               {y:0, autoAlpha: 1});
  // } else {
  //    TweenMax.to($arrow, 
  //               1,
  //               {y:0, autoAlpha: 1});
  // }
  // });
})(jQuery);
