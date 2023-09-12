$(document).ready(function() {
  $('.carousel .slides').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false, // Desactivar los botones de siguiente y anterior
    draggable: true,
    infinite: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $('.carousel .slides').on('swipe', function(event, slick, direction) {
    if (direction === 'left') {
      $('.carousel .slides').slick('slickNext');
    } else if (direction === 'right') {
      $('.carousel .slides').slick('slickPrev');
    }
  });

  $('.carousel .slides li img').on('click', function() {
    console.log('Has hecho clic en una película');
  });
});
