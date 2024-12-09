const lista_canciones = ["Sweater Weather", "Circles", "Afraid", "Better Now", "Softcore"];
const lista_artistas = ["The Neighbourhood", "Post Malone", "The Neighbourhood", "Post Malone", "The Neighbourhood"];

const divListaCanciones = document.getElementById("ListaCanciones");
let idCancionActual = 0; // primer canción

lista_canciones.forEach((cancion, idx) => {
    console.log(`${cancion} - id: ${idx}`);

    const song = lista_canciones[idx];
    const artist = lista_artistas[idx];

    // innerHTML (append, push, para añadir elementos)
    //con id le agregamos un valor unico a cada cancion
    divListaCanciones.innerHTML += `<div id="song_${idx}" class="Lista-cancion">
                            ${idx}. ${song} - ${artist} 
                            </div>`;
    //esto agrego dentro del bucle todas las canciones de la lista
});

// ejercicio 4
const btnTema = document.querySelector("#btnTema3");
btnTema3.addEventListener("click", () => {
    console.log("Canción: ", lista_canciones[2]);
    console.log(`Artista:${lista_artistas[2]}`);
    imprimirReproduciendo(2);
});

// ejercicio 5

document.addEventListener('click', (event) => {
    console.log(event.target.id);
});



// Ejercicio 6
//esto se podria añadir en el innerHTML
//para buscar clickar en diferentes elementos, es all en el selector
//buscamos en nuestro HTML todos los divs con class= "Lista-cancion"
const divsCanciones = document.querySelectorAll(".Lista-cancion");
const divPlayingSong = document.getElementById("playingSong");

divsCanciones.forEach((divCancion, idx) => {
    divCancion.addEventListener("click", () => {
        idCancionActual = idx;
        imprimirReproduciendo();
        /*const song = lista_canciones[idx];
        const artist = lista_artistas[idx];
        console.log("Artista:"+artist+" - canción: "+song);

        // ejercicio 7
        divPlayingSong.innerHTML = `<div> Canción: ${song} <br/> Artista: ${artist} </div>`; //no es += porque sino va a seguir agregando el texto una y otra vez, y lo que se quiere es que se sobreescriba, no que agregue uno debajo del otro.*/
    });
});



function imprimirReproduciendo() {
    const song = lista_canciones[idCancionActual];
    const artist = lista_artistas[idCancionActual];
    console.log("Artista:" + artist + " - canción: " + song);

    divPlayingSong.innerHTML = `<div>
        canción: ${song} <br/>
        artista: ${artist} </div>`;
};




// Ejercicio 8

const btnSig = document.querySelector("#btnSig");
const btnAnt = document.querySelector("#btnAnt");


btnSig.addEventListener("click", () => {
    idCancionActual++;
    //revisarr que no me pase de la ultima cancion (empiece por la primera)
    imprimirReproduciendo();
});

btnAnt.addEventListener("click", () => {
    idCancionActual--;
    //que si estoy en la primera, se vaya a la ultima
    imprimirReproduciendo();
});