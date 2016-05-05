(function($) {
  String.prototype.decodeHTML = function() {
    return $("<div>", {html: "" + this}).html();
  };
  var $main         = $("main"),
      $menu         = $("#block-system-main-menu"),
      $hamburger    = $(".hamburger");

      init = function() {
        $hamburger.removeClass('is-active');
        TweenMax.fromTo($main,
          1,
          {autoAlpha: 0},
          {autoAlpha: 1});
          TweenMax.to($menu,
            0.5,
            {autoAlpha: 0, ease: Back.easeOut});
          };

      ajaxLoad = function(html) {
      var title =  document.title = html
        .match(/<title>(.*?)<\/title>/)[1]
        .trim()
        .decodeHTML();
        console.log(title);
        init();
      },

  loadPage = function(href) {
    $main.load(href + " main>*", ajaxLoad);
  };

  init();

   $(document).on("click", "a, area", function() {
    var href = $(this).attr("href");
    if (href.indexOf(document.domain) > -1
     || href.indexOf(':') === -1)
   {
     history.pushState({}, '', href);
     loadPage(href);
     return false;
   }
  });
})(jQuery);
