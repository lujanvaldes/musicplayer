# musicplayer actividad 8
HTML song (para buscar y agregar la cancion de verdad)





1. Crear un array con 5 canciones, recorrer el array y mostrar en consola cada canción. (consola)
2. Crear un array con 5 artistas que correspondan a cada canción del primer array. (consola)
3. Mostrar en un HTML un DIV por cada canción y artista generado con JS a partir de la información del array.
4. Crear un botón con el texto "Tema 3" que al hacer click muestre en consola el nombre de la canción y el artista de la canción que se encuentra en la posición 3 del array.
5. Agrega botones de "siguiente", "anterior", "play", "pausa" con ids únicos para cada uno, y agrega el siguiente código JS en tu archivo, pruebalo y comenta que hace el código:

```js
document.addEventListener('click', (event) => {
    console.log(event.target.id);
});
```

6. Agregar un atributo id a cada div generado en el punto 3, y hacer que al hacer click en cada div muestre en consola el nombre de la canción y el artista de la canción correspondiente.
7. Actualiza el punto anterior para mostrar en el HTML un párrafo con el nombre de la canción y el artista de la canción correspondiente al hacer click en cada div. Te animas a agregar un tercer array con imágenes del artista y mostrar la imagen correspondiente al hacer click en cada div?
8. Dale la funcionalidad necesaria a los botones Siguiente, Anterior para que pase de una canción a otra en el array de canciones mostrado en el HTML.



-------------------------------------

// Ejercicio 1-2
const lista_canciones = ["Sweater Weather", "Circles", "Afraid", "Better Now", "Softcore"];
const lista_artistas = ["The Neighbourhood", "Post Malone", "The Neighbourhood", "Post Malone", "The Neighbourhood"];

//const divLista = document.getElementById("ListaCanciones");
const divCanciones= document.getElementById("ListaCanciones");

//let idCancionActual = 0;

// Ejercicio 3 
lista_canciones.forEach((cancion, idx) => {
    concole.log(`${cancion} - id: ${idx}`);
    //dentro del bucle se genero otras dos variables que se imprimen debajo, teniendo el mismo indice buscamos la informacion en dos arrays diferentes (uniendo camción y artista)

    divCanciones.innerHTML +=`<div class="Lista-cancion">$<{cancion}</div>`;
    
    //const song = lista_canciones[idx];
    //const artist = lista_artistas[idx];


    //inner HTML (+= :append es añadir, al igual que push, son distintas formas de agregar mas informacion a una lista de html)
    // divLista.innerHTML += `<div class= "Lista_cancion">${idx}.${song}.<br>${artist}</div>`;

    //innerHTML += `<div id="song_${idx}" class="Lista-cancion">${song}<br>${artist}</div>`
});


// Ejercicio 4
/*const btnTema3 = documento.querySelector("#btnTema3");
btnTema3.addEventListener("click", () => {
    console.log("Lista canciones:", lista_canciones[2]);//indice 2 es cancion num3 porque empieza en 0
    console.log(`Artista:${lista_artistas[2]}`);
});*/


// Ejerccicio 5
/*document.addEventListener('click', (event) => {
    console.log(event.target.id);
    //lo que devuelve del evento que se ejecuta que es el click, es a quien le hice el click, mosrtandose el ID del botón que se clickeo, si se quita el id, te devuelve el html entero.
});*/


// Ejercicio 6
//esto se podria añadir en el innerHTML
//para buscar clickar en diferentes elementos, es all en el selector

//buscamos en nuestro HTML todos los divs con class= "Lista-cancion"
/*const divsCanciones = document.querySelectorAll(".Lista-cancion");
const divPlayingSong = document.getElementById("#playingSong");
*/

/*
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
});*/


/*
function imprimirReproduciendo(indice) {
    const song = lista_canciones[indice];
    const artist = lista_artistas[indice];
    console.log("Artista:" + artist + " - canción: " + song);

    divPlayingSong.innerHTML = `<div>
        canción: ${song} <br/>
        artista: ${artist} </div>`;

};*/




// Ejercicio 8
/*
const btnSig = document.querySelector("#btnSig");
const btnAnt = document.querySelector("#btnAnt");
//let idCancionActual = 0; // primer canción

btnSig.addEventListener("click", () => {
    idCancionActual++;
    //revisarr que no me pase de la ultima cancion (empiece por la primera)
    imprimirReproduciendo(idCancionActual);
});

btnAnt.addEventListener("click", () => {
    idCancionActual--;
    //que si estoy en la primera, se vaya a la ultima
    imprimirReproduciendo(idCancionActual);
});
*/
