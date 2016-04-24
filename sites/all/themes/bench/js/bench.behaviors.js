(function ($) {   
  $(document).ready(function(){
  var timeline     = new TimelineMax({delay:1.0}),
      site_name    = $('.site-name'),
      site_slogan  = $('.site-slogan');
  $('.site-name').each(function (index) {
    var characters = $.trim($(this).text());
    characters = characters.split("");
    $this = $(this);
    $this.empty();

    $.each(characters, function (i, el) {
      $this.append("<span class='character'>" + el + "</span");
    });
  });

  $(window).load(function(){

  timeline.staggerFromTo($('.site-name').find("span"), 
                        1, 
                        {autoAlpha: 0}, 
                        {autoAlpha: 1, ease: Back.easeOut}, 
                        0.1 );  
  timeline.add(
    TweenMax.fromTo(site_slogan, 
                    1, 
                    { y: -30, autoAlpha: 0, transformPerspective: 600, rotationX: -90 }, 
                    { y: 0, autoAlpha: 1, rotationX: 0, ease: Back.easeOut }, 0.1)
              );
    });
  });
})(jQuery);
