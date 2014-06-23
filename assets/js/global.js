$(document).ready(function () {
  function scrollToTarget(target, instant) {
    var scrollTo = 0;
    if (target == '#splash' || target == '#service' || target == '#team' || target == '#faq' || target == '#contact') {
      var scrollTo = $(target).offset().top;
      if (target == '#faq') {
        scrollTo -= 105;
      } else if (target != '#splash') {
        scrollTo -= 80;
      }
    }

    if (instant) {
      $(document.body).scrollTop(scrollTo);
    } else {
      $(document.body).stop().animate({
        'scrollTop': scrollTo
      }, 1500);
    }
  }

  $('#links a').click(function () {
    scrollToTarget($(this).data('hash'), false);
    return false;
  });

  if (location.hash != '') {
    scrollToTarget(location.hash.toString(), true)
  }

  $('#team .team_member .title').click(function () {
    var shown = $('#team .team_member .description').is(':visible');
    $('#team .team_member .description').toggle(!shown);
  });

  $('#faq .title').click(function () {
    $('#faq #questions').toggle();
  });

  $('#lightbox .close').click(function () {
    $('#lightbox').hide();
    $('body').toggleClass('body_noscroll',false);
    $f( $('video') ).api('pause')
  });

  $('#splash #play').click(function () {
    $('#lightbox').show();
    $('body').toggleClass('body_noscroll',true);
    $f( $('video') ).api('play')
  });
});
