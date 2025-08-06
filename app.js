// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    let verificarResultado = document.getElementById('amigo-secreto');

    if (verificarResultado){
        verificarResultado.remove();
    } 
    let valorInput = document.querySelector('.input-name').value;

    if (valorInput != ''){
        amigos.push(valorInput);
        recorrerAmigos();
        document.querySelector('.input-name').value = '';
    } else {
        alert('Por favor ingrese un nombre válido.');
    }
}

function recorrerAmigos (){
    let lista = document.querySelector('.name-list');
    let contenidoLista = '';
    amigos.forEach(element => {
        contenidoLista += `<li> ${element} </li>`;
    });

    lista.innerHTML = contenidoLista;
}

function sortearAmigo () {
    let hayResultado = document.getElementById('amigo-secreto');
    if (hayResultado){
        alert('Error. No agrego nombres de amigos.');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = '';
    
        let resultado = document.querySelector('.result-list');
    
        resultado.innerHTML = `<li id="amigo-secreto">Tu amigo secreto es: ${amigos[indiceAleatorio]}</li>`;
        amigos.splice(0, amigos.length);
    }

}