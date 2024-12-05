
const lista_canciones = ["Billie Jean", "Loose Yourself", "Smooth Crininal", "Beat it", "Sorry Mama"];
const lista_artistas = ["Michael Jackson", "Eminem", "Michael Jackson", "Michael Jackson", "Eminem"];

const divLista = document.getElementById("ListaCanciones");

let idCancionActual = 0; 

// Ejercicio 3
lista_canciones.forEach((cancion, idx) => {
    concole.log(`${cancion} - id: ${idx}`);
    //dentro del bucle se genero otras dos variables que se imprimen debajo, teniendo el mismo indice buscamos la informacion en dos arrays diferentes (uniendo camción y artista)
    const song = lista_canciones[idx];
    const artist = lista_artistas[idx];


    //inner HTML (+= :append es añadir, al igual que push, son distintas formas de agregar mas informacion a una lista de html)
    // divLista.innerHTML += `<div class= "Lista_cancion">${idx}.${song}.<br>${artist}</div>`;

    innerHTML += `<div id="song_${idx}" class="Lista-cancion">${song}<br>${artist}</div>`
});


// Ejercicio 4
const btnTema3 = documento.querySelector("#btnTema3");
btnTema3.addEventListener("click", () => {
    console.log("Lista canciones:", lista_canciones[2]);//indice 2 es cancion num3 porque empieza en 0
    console.log(`Artista:${lista_artistas[2]}`);
});


// Ejerccicio 5
document.addEventListener('click', (event) => {
    console.log(event.target.id);
    //lo que devuelve del evento que se ejecuta que es el click, es a quien le hice el click, mosrtandose el ID del botón que se clickeo, si se quita el id, te devuelve el html entero.
});


// Ejercicio 6
//esto se podria añadir en el innerHTML
//para buscar clickar en diferentes elementos, es all en el selector

//buscamos en nuestro HTML todos los divs con class= "Lista-cancion"
const divsCanciones = document.querySelectorAll(".Lista-cancion");
const divPlayingSong = document.getElementById ("#playingSong");


divsCanciones.forEach((divCancion, i) => {
    divsCancion.addEventListener("click", () => {

        imprimirReproduciendo();
        // const song = lista_canciones[i];
        // const artist = lista_artistas[i];
        // console.log("Artista:"+artist+" - canción: "+song);

        // // Ejercicio 7

        // divPlayingSong.innerHTML = `<div>
        //     canción: ${song} <br/>
        //     artista: ${artist} </div>`; //no es += porque sino va a seguir agregando el texto una y otra vez, y lo que se quiere es que se sobreescriba, no que agregue uno debajo del otro.
    });
});



function imprimirReproduciendo (indice) {
    const song = lista_canciones[indice];
    const artist = lista_artistas[indice];
    console.log("Artista:"+artist+" - canción: "+song);

    divPlayingSong.innerHTML = `<div>
        canción: ${song} <br/>
        artista: ${artist} </div>`;

};




// Ejercicio 8

const btnSig = document.querySelector("#btnSig");
const btnAnt = document.querySelector("#btnAnt");
//let idCancionActual = 0; // primer canción

btnSig.addEventListener("click", ()=>{
    idCancionActual++;
    //revisarr que no me pase de la ultima cancion (empiece por la primera)
    imprimirReproduciendo (idCancionActual);
});

btnAnt.addEventListener("click", ()=>{
    idCancionActual--;
    //que si estoy en la primera, se vaya a la ultima
    imprimirReproduciendo (idCancionActual);
});

