// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo.trim() !== "") { // Verifica que el nombre no esté vacío
        const listaAmigos = document.getElementById('listaAmigos');
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = nombreAmigo;
        listaAmigos.appendChild(nuevoItem);
        document.getElementById('amigo').value = ''; // Limpia el campo de entrada
    }
}

function sortearAmigo() {
    const listaAmigos = document.querySelectorAll('#listaAmigos li');
    const amigos = Array.from(listaAmigos).map(li => li.textContent);

    if (amigos.length < 2) {
        document.getElementById('resultado').textContent = "Necesitas al menos dos amigos para realizar el sorteo.";
        return;
    }

    const amigosCopia = [...amigos];
    const sorteos = {};

    amigos.forEach(amigo => {
        let amigoSecreto;
        do {
            amigoSecreto = amigosCopia[Math.floor(Math.random() * amigosCopia.length)];
        } while (amigoSecreto === amigo || (sorteos[amigo] && sorteos[amigo] === amigoSecreto));
        sorteos[amigo] = amigoSecreto;
        amigosCopia.splice(amigosCopia.indexOf(amigoSecreto), 1);
    });

    const resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = ''; // Limpia la lista antes de agregar nuevos elementos

    for (const amigo in sorteos) {
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = `${amigo}: ${sorteos[amigo]}`;
        resultadoList.appendChild(nuevoItem);
    }
}