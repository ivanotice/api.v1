$(document).ready(function(){
      $('.carousel .slides').slick({
        slidesToShow: 5, // Mostrar 4 películas a la vez
        slidesToScroll: 1, // Desplazarse de una película a la vez
        autoplay: true, // Activar reproducción automática
        autoplaySpeed: 1000, // Intervalo de tiempo entre cada película (en milisegundos)
        arrows: false, // Desactivar los botones de siguiente y anterior
        draggable: true, // Permitir el desplazamiento manual
        infinite: true // Reiniciar el carrusel automáticamente al llegar al final
      });

      $('.carousel .slides li img').on('click', function(){
        // Agregar aquí la animación al hacer clic en una película
        console.log('Has hecho clic en una película');
      });
    });
