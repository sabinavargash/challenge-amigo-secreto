let arregloNombres = [];

function agregarAmigo(){
    let obtenerNombre = document.querySelector('.input-name').value.trim();
    if (!arregloNombres.includes(obtenerNombre)){
        arregloNombres.push(obtenerNombre);
        actualizarAmigos()
    }
    limpiarInput();

}

function limpiarInput(){
    document.querySelector('.input-name').value = '';
}


function actualizarAmigos(){
    let elementoLista = document.querySelector('.name-list');
    elementoLista.innerHTML ='';
    arregloNombres.forEach(elemento => {
    let item = document.createElement('li');
    item.textContent = elemento;
    elementoLista.appendChild(item);
    });
}

function sortearAmigo(){
    let numeroSorteado = Math.floor(Math.random() * arregloNombres.length)
    let amigoSorteado = document.querySelector('.result-list');
    amigoSorteado.innerHTML = '';
    let elemento = document.createElement('li');
    elemento.textContent = arregloNombres[numeroSorteado];
    amigoSorteado.appendChild(elemento);
}