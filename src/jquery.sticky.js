(function($){
  var SCROLL = {
    DOWN : "down",
    UP   : "up"
  };

  $.fn.sticky = function($header, $content, $footer) {
    var $el = $(this);
    var bh = $("body").height();
    var hh = $header.height();
    var ch = $content.height();
    var fh = $footer.height();
    var ah = $el.height();
    var offsetY = $el.offset().top;

    var direction;
    var preScrollY = $(window).scrollTop();

    $content.css("position", "relative");

    $(window).on("scroll", function () {
      var scrollY = $(this).scrollTop();
      direction = (preScrollY < scrollY) ? SCROLL.DOWN : SCROLL.UP;
      preScrollY = scrollY;

      switch (direction) {
        case SCROLL.DOWN:
          if (!isStickTop() && !isStickBottom() && offsetY < scrollY) {
            addStickTop();
          } else if (!isStickBottom() && hh + ch < scrollY + ah) {
            addStickBottom();
          } else if (offsetY >= scrollY && hh + ch >= scrollY + ah){
            removeStick();
          }
          break;
        case SCROLL.UP:
          if (isStickBottom() && bh - scrollY > fh + ah) {
            addStickTop();
          } else if (offsetY > scrollY) {
            removeStick();
          }
          break;
      }
    });
    var isStickTop = function () {
      return $el.css("position") === "fixed";
    };

    var isStickBottom = function () {
      return $el.css("position") === "absolute";
    };

    var addStickTop = function () {
      $el.css({
        "position": "fixed",
        "top": 0,
        "bottom": "auto"
      });
    };
    var addStickBottom = function () {
      $el.css({
        "position": "absolute",
        "top": "auto",
        "bottom": 0
      });
    };
    var removeStick = function () {
      $el.css({
        "position": "static",
        "top": "auto",
        "bottom": "auto"
      });
    };
    return $el;
  };
})(jQuery);
