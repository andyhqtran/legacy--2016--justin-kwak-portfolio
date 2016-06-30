$( document ).ready(function() {
  var containerWidth = $( '.container' ).width();
  var bodyWidth = $( 'body' ).width();

  $( window ).resize(function() {
    containerWidth = $( '.container' ).width();
    bodyWidth = $( 'body' ).width();

    $( 'article' ).each(function() {
      if (containerWidth - 200 >= 600) {
        $(this)
          .find('.blockquote, blockquote')
          .css({
            position: 'relative',
            left: '50%',
            width: containerWidth,
            transform: 'translate(-50%, 0)',
          });

        $(this)
          .find('.image, img')
          .css({
            position: 'relative',
            left: '50%',
            width: containerWidth - 200,
            transform: 'translate(-50%, 0)',
          });
        } else {
          $(this)
            .find('.blockquote, blockquote, .image, img')
            .attr('style', '')
        }

        $(this)
          .find('.image--fullwidth')
          .css({
            position: 'relative',
            left: '50%',
            width: bodyWidth,
            transform: 'translate(-50%, 0)',
          });
    });
  });

  $( 'article' ).each(function() {
    $(this)
      .find('.blockquote, blockquote')
      .css({
        position: 'relative',
        left: '50%',
        width: containerWidth,
        transform: 'translate(-50%, 0)',
      });

    $(this)
      .find('.image, img')
      .css({
        position: 'relative',
        left: '50%',
        width: containerWidth - 200,
        transform: 'translate(-50%, 0)',
      });

    $(this)
      .find('.image--fullwidth')
      .css({
        position: 'relative',
        left: '50%',
        width: bodyWidth,
        transform: 'translate(-50%, 0)',
      });
  });
});