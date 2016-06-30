$( document ).ready(function() {
  var containerWidth = $( '.container' ).width();
  var bodyWidth = $( 'body' ).width();

  $( window ).resize(function() {
    containerWidth = $( '.container' ).width();
    bodyWidth = $( 'body' ).width();

    $( 'article' ).each(function() {

      /**
       * Remove inline-styles if value is smaller then 600
       */
      if (containerWidth - 200 >= 600) {
        $(this)
          .find('.blockquote, blockquote, .slider, .image, .image--fullwidth, img')
          .css({
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%, 0)',
          });

        $(this)
          .find('.blockquote, blockquote, .slider')
          .css('width', containerWidth);

        $(this)
          .find('.image, img')
          .css('width', containerWidth - 200);
        } else {
          $(this)
            .find('.blockquote, blockquote, .image, img')
            .attr('style', '')
        }

        $(this)
          .find('.image--fullwidth')
          .css('width', bodyWidth);
    });
  });

  $( 'article' ).each(function() {
    $(this)
      .find('.blockquote, blockquote, .slider, .image, .image--fullwidth, img')
      .css({
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%, 0)',
      });

    $(this)
      .find('.blockquote, blockquote, .slider')
      .css('width', containerWidth);

    $(this)
      .find('.image, img')
      .css('width', containerWidth - 200);

    $(this)
      .find('.image--fullwidth')
      .css('width', bodyWidth);
  });

  // $('.slider').each(function() {
  //   var children = $(this).children();
  //   var wrapper = $(this).children('.slider__wrapper');
  //   var width = 0;
  //   var widthArray = [];
  //   var height = wrapper.children().height();
  //   var activeChild = 1;

  //   wrapper.children().each(function(i) {
  //     $(this).css({
  //       position: 'absolute',
  //       top: 0,
  //       left: width + ((i + 1) * 100),
  //     });

  //     width += $(this).children('.image, img').width();
  //     widthArray.push($(this).children('.image, img').width());
  //   });

  //   wrapper.css({
  //     width: width,
  //     height: height,
  //   });


  //   $(this)
  //     .find('#prev')
  //     .on('click', function(e) {
  //       console.log(activeChild)
  //       e.preventDefault();

  //       if (activeChild === 0) {
  //         wrapper.css({
  //           'margin-left': -(widthArray[activeChild] * activeChild)
  //         });
  //       } else {
  //         wrapper.css({
  //           'margin-left': -widthArray[activeChild] * activeChild - 100
  //         });
  //       }

  //       if (activeChild !== 0) {
  //         activeChild--;
  //       }

  //       console.log('prev')
  //     });

  //   $(this)
  //     .find('#next')
  //     .on('click', function(e) {
  //       console.log(activeChild)
  //       e.preventDefault();

  //       if (activeChild === 0) {
  //         wrapper.css({
  //           'margin-left': -(widthArray[activeChild] * activeChild)
  //         });
  //       } else {
  //         wrapper.css({
  //           'margin-left': -widthArray[activeChild] * activeChild - 100
  //         });
  //       }

  //       if (activeChild < wrapper.children().length - 1) {
  //         activeChild++;
  //       }

  //       console.log('next')
  //     });

  //   console.log(widthArray);
  //   console.log(width);
  //   console.log(height);
  //   // for (var i = 0; children.length > i; i++) {
  //   //   console.log(children.index());
  //   // }
  // });
});