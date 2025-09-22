let arregloNombres = [];

function agregarAmigo(){
    let obtenerNombre = document.querySelector('.input-name').value.trim();
    if (!arregloNombres.includes(obtenerNombre)){
        arregloNombres.push(obtenerNombre);
        actualizarAmigos(arregloNombres)
    }
    limpiarInput();

}

function limpiarInput(){
    document.querySelector('.input-name').value = '';
}