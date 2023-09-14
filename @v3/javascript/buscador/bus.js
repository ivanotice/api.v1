function buscarTexto() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var contenido = document.body.innerHTML.toLowerCase();
    var index = contenido.indexOf(input);

    if (index !== -1) {
        var fragmento = contenido.substring(index, index + input.length);
        var elementos = document.getElementsByClassName("movie-title");

        for (var i = 0; i < elementos.length; i++) {
            var titulo = elementos[i].innerText.toLowerCase();

            if (titulo.includes(fragmento)) {
                elementos[i].style.backgroundColor = "yellow";
                elementos[i].scrollIntoView({ behavior: "smooth", block: "center" });
            } else {
                elementos[i].style.backgroundColor = "";
            }
        }
        document.getElementById("errorMessage").style.display = "none";
    } else {
        var errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "block";
        errorMessage.innerText = "Lo sentimos, pero el contenido que buscas no se encuentra en nuestro sistema. Por favor, verifica el título y/o el idioma y vuelve a intentarlo. ¡Gracias por tu comprensión!";
    }
}
