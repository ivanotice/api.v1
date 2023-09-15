// Horarios de apertura y cierre del servidor
var horarios = [
  { turno: 'Terra-dia', inicio: 10, fin: 12 },
  { turno: 'Terra-tarde', inicio: 16, fin: 18 },
  { turno: 'Terra-noche', inicio: 20, fin: 22 }
];

// Función para verificar el estado del servidor según el horario
function verificarEstadoServidor() {
  var now = new Date();
  var currentHour = now.getHours();
  var isOpen = false;
  var turno = '';
  var nextOpening = '';

  // Verificar si el servidor está abierto en algún turno
  for (var i = 0; i < horarios.length; i++) {
    var horario = horarios[i];
    if (currentHour >= horario.inicio && currentHour < horario.fin) {
      isOpen = true;
      turno = horario.turno;
      break;
    } else if (currentHour < horario.inicio) {
      nextOpening = 'Próxima apertura a las ' + formatHours(horario.inicio) + ' ' + getAmPm(horario.inicio);
      break;
    }
  }

  // Mostrar el estado del servidor en la página
  if (isOpen) {
    $('#server-status .status-circle').addClass('open');
    $('#status-text').text('El servidor está abierto - ' + turno);
  } else {
    $('#server-status .status-circle').addClass('closed');
    $('#status-text').text('El servidor está cerrado');
    if (nextOpening !== '') {
      $('#status-text').append('<div class="next-opening">' + nextOpening + '</div>');
    }
  }
}

// Función para formatear las horas en formato AM/PM
function formatHours(hours) {
  if (hours >= 12) {
    return hours === 12 ? 12 : hours - 12;
  } else {
    return hours;
  }
}

// Función para obtener AM o PM
function getAmPm(hours) {
  return hours >= 12 ? 'PM' : 'AM';
}

// Verificar el estado del servidor al cargar la página
$(document).ready(verificarEstadoServidor);

// Actualizar el estado del servidor cada 1 minuto
setInterval(verificarEstadoServidor, 17000);
