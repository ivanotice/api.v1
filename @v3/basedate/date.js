// Función para copiar texto al portapapeles y mostrar notificación
function copyToClipboard(id) {
  var element = document.getElementById(id);
  var text = element.textContent;

  navigator.clipboard.writeText(text).then(function() {
    showNotification("Texto copiado: " + text);
  }, function() {
    showNotification("¡Error al copiar el texto!");
  });
}

// Función para mostrar una notificación
function showNotification(message) {
  var notification = document.createElement("div");
  notification.classList.add("notification");
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(function() {
    document.body.removeChild(notification);
  }, 2000);
}

// Función para mostrar/ocultar la contraseña
var eyeIcon = document.getElementById("eye-icon");
var passwordField = document.getElementById("password");
var isPasswordVisible = false;

eyeIcon.addEventListener("click", function() {
  if (isPasswordVisible) {
    passwordField.textContent = "*********";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    passwordField.textContent = "0980"; // Reemplaza "TuContraseña" con la contraseña real
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
  isPasswordVisible = !isPasswordVisible;
});
