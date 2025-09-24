// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista de amigos (se irá llenando dinámicamente)

let amigos = [];
let yaSorteados = []; // amigos ya sorteados

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
    } else if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
    } else {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Primero debes agregar al menos un amigo.");
        return;
    }

    // Filtramos los amigos que aún no fueron sorteados
    let disponibles = amigos.filter(a => !yaSorteados.includes(a));

    if (disponibles.length === 0) {
        alert("Todos los amigos ya fueron sorteados.");
        return;
    }

    // Elegimos un amigo aleatorio de los disponibles
    let indiceAleatorio = Math.floor(Math.random() * disponibles.length);
    let amigoSecreto = disponibles[indiceAleatorio];

    // Guardamos en yaSorteados
    yaSorteados.push(amigoSecreto);

    // Mostramos el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}