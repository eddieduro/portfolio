(function ($) {
  $(document).ready(function(){

    let timeline      = new TimelineMax({delay:3.0}),
        startup       = new TimelineMax({delay:3.0}),
        $site_name    = $('.site-name'),
        $site_slogan  = $('.site-slogan'),
        $hamburger    = $(".hamburger"),
        $menu         = $("#block-system-main-menu"),
        $active       = $(".is-active"),
        $body         = $("body"),
        $html         = $("html"),
        $arrow        = $(".fa");
        $work         = $(".work");

    TweenMax.set($arrow, {autoAlpha: 0});
    TweenMax.set($site_name.find("span"), {autoAlpha: 0}); //Set site name opactiy to 0.
    TweenMax.set($site_slogan, {autoAlpha: 0}); //Set site slogan opactiy to 0.

    //When window loads animations

    $(window).load(function(){

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
          //Black bg menu animation
          timeline.to($menu,
                      0.5,
                      {autoAlpha: 1, ease: Back.easeOut});
          TweenMax.add(
            //Nav link animations from left to right
            TweenMax.staggerFromTo($menu.find("li"),
                        1,
                        {autoAlpha: 0, x:-1000},
                        {autoAlpha: 1, ease: Sine.easeOut, x:0},
                        0.1)
          );
        } else if(!($hamburger.hasClass('is-active'))) {
          //closing animation
          timeline.to($menu,
                      0.5,
                      {autoAlpha: 0, ease: Back.easeOut});
        }
      });
      //eddie duro animation
      timeline.staggerFromTo($site_name.find("span"),
                            1,
                            {autoAlpha: 0},
                            {autoAlpha: 1, ease: Back.easeOut},
                            0.1);
      //web developer animation
      timeline.add(
        TweenMax.fromTo($site_slogan,
                        1,
                        { y: -30, autoAlpha: 0, transformPerspective: 600, rotationX: -90 },
                        { y: 0, autoAlpha: 1, rotationX: 0, ease: Back.easeOut }, 0.1)
                  );
      //hamburger animation
      timeline.fromTo($hamburger,
                            1,
                            {y: -30, autoAlpha: 0},
                            {y: 0, autoAlpha: 1, ease: Back.easeOut},
                            0.1);
      // arrow animation
      timeline.add(
        TweenMax.fromTo($arrow,
                        1,
                        {autoAlpha: 0},
                        {autoAlpha: 1})
      );


        //navigation link transition animations
      $menu.find("a").on("click", function(e) {
        TweenMax.set($html, {backgroundColor: "black"});
        TweenMax.staggerFromTo($menu.find("li"),
                      1,
                      {autoAlpha: 1, x:0},
                      { x:1000},
                      0.1)

      });
    });
  });
})(jQuery);
