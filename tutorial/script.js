let numeroAcertado = Math.floor(Math.random() * 10) + 1;
let intentos = 5;

function adivinar() {
    let numeroUsuario = document.getElementById('numero').value;
    let mensajeResultado = document.getElementById('resultado');
    let mensajeError = document.getElementById('error');
    let mensajeIntentos = document.getElementById('intentos');

    mensajeError.textContent = "";  

    if (numeroUsuario === "") {
        mensajeError.textContent = "Introduce un número";
        return;
    }

    numeroUsuario = parseInt(numeroUsuario);

    if (numeroUsuario < 1 || numeroUsuario > 10) {
        mensajeError.textContent = "El número esta entre 1 y 10";
        return;
    }

    intentos--;

    if (numeroUsuario === numeroAcertado) {
        mensajeResultado.textContent = `Venga, acertaste en ${5 - intentos} intentos`;
        mostrarAnuncio(true, 5 - intentos);
        deshabilitarJuego();
    } else if (intentos > 0) {
        mensajeResultado.textContent = `Incorrecto, vuelve a intentarlo`;
        mensajeIntentos.textContent = `Te quedan ${intentos} intentos`;
    } else {
        mensajeResultado.textContent = `Perdiste, el número era ${numeroAcertado}`;
        mostrarAnuncio(false);
        deshabilitarJuego();
    }
}

function deshabilitarJuego() {
    document.getElementById('numero').disabled = true;
    document.querySelector('button').disabled = true;
}

function mostrarAnuncio(ganado, intentos) {
    if (ganado) {
        alert(`Ganaste en ${intentos} intentos`);
    } else {
        alert("Perdiste, vuelve a intentarlo");
    }
}
