$(document).ready(function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.carousel .slides').slick({
      slidesToShow: 7, // Aumenta la cantidad de elementos a 7 en dispositivos móviles
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      draggable: true,
      infinite: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5 // Reduce la cantidad de elementos a 5 en tabletas
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3 // Reduce la cantidad de elementos a 3 en dispositivos móviles pequeños
          }
        }
      ]
    });
  } else {
    $('.carousel .slides').slick({
      slidesToShow: 5, // Mantiene la cantidad de elementos en 5 en Windows y otros dispositivos
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      draggable: true,
      infinite: true,
      swipeToSlide: true
    });
  }

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
