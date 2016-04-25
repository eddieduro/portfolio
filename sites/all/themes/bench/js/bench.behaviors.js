(function ($) {   
  $(document).ready(function(){

  let timeline      = new TimelineMax({delay:1.0}),
      $site_name    = $('.site-name'),
      $site_slogan  = $('.site-slogan'),
      $hamburger    = $(".hamburger"),
      $menu         = $("#block-system-main-menu"),
      $active       = $(".is-active");

  TweenMax.set($menu, {autoAlpha: 0}); //Menu opacity 0
  TweenMax.set($menu.find("li"), {x:-1000});

  $site_name.each(function (index) {
    //Split site name into span for animation.
    let characters = $.trim($(this).text());
    characters = characters.split("");
    $this = $(this);
    $this.empty();

    $.each(characters, function (i, el) {
      $this.append("<span class='character'>" + el + "</span");
    });
  });


  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");

    if($hamburger.hasClass('is-active')){
      timeline.to($menu,
                  0.5,
                  {autoAlpha: 1, ease: Back.easeOut}); 
      timeline.add(
        TweenMax.staggerFromTo($menu.find("li"), 
                    1, 
                    {autoAlpha: 0, x:-1000}, 
                    {autoAlpha: 1, ease: Back.easeOut, x:0}, 
                    0.1)
      );    
    } else if(!($hamburger.hasClass('is-active'))) {
        TweenMax.staggerTo($menu.find("li"), 
                    0.5, 
                    {autoAlpha: 0, x: -1000}, 
                    0.5);
      timeline.add(
        timeline.to($menu,
                    0.5,
                    {autoAlpha: 0, ease: Back.easeOut})  
      );    
    }
  });
  $(window).load(function(){

  timeline.staggerFromTo($site_name.find("span"), 
                        1, 
                        {autoAlpha: 0}, 
                        {autoAlpha: 1, ease: Back.easeOut}, 
                        0.1);  
  timeline.add(
    TweenMax.fromTo($site_slogan, 
                    1, 
                    { y: -30, autoAlpha: 0, transformPerspective: 600, rotationX: -90 }, 
                    { y: 0, autoAlpha: 1, rotationX: 0, ease: Back.easeOut }, 0.1)
              );
    });
  });
})(jQuery);
