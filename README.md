# musicplayer actividad 8


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
```js
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



// separacion por ejercicio
//const lista_canciones = ["Sweater Weather", "Circles", "Afraid", "Better Now", "Softcore"];
const lista_artistas = ["The Neighbourhood", "Post Malone", "The Neighbourhood", "Post Malone", "The Neighbourhood"];
//PASAMOS DE TODO ESTO DE ABAJO A LA CONST MÁS CLARA, en vez de hacer tantos arrays, se usa el formato de abajo
/*const lista_mp3 = ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"];*/

 //creando un OBJETO para contener toda la información para hacerlo más accesible
   /* const song = {
        artista: "The Neighbourhood",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        titulo: "Sweater Weather"
    }*/



    const lista_canciones = [ //[] esto es un array de objetos
        {   artista: "The Neighbourhood",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            //img:
            titulo: "Sweater Weather"
        },{
            artista: "Post Malone",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
            titulo: "Circles"
        },{
            artista: "The Neighbourhood",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
            titulo: "Afraid"
        },{
            artista: "Post Malone",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
            titulo: "Better Now"
        },{
            artista: "The Neighbourhood",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        titulo: "Softcore"
        }];

//primer elemento de la lista, cuarta canción
lista_canciones[0].artista;
console.log(lista_canciones[0].artista)//The Neighbourhood
console.log(lista_canciones[3].titulo)//Better Now





const divListaCanciones = document.getElementById("ListaCanciones");

//obtener nuestro audio HTMl
const audioPlayer = document.querySelector("audio");
//en este caso podiamos haber puesto un id a la etiqueta HTML, pero en este caso usamos querySelector para agarrar una etiqueta (la primera que encuentre con ese nombre) [el otro modo es con id para que sea más específico].

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
    // console.log("Canción: ", lista_canciones[2]);
    // console.log(`Artista:${lista_artistas[2]}`);
    imprimirReproduciendo();
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
        idCancionActual = 2;
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

    divPlayingSong.innerHTML = `<div>idCancionActual: ${idCancionActual} </br>
        canción: ${song} <br/>
        artista: ${artist} </div>`;

    // cambiar el src de nuestro audio HTML
    console.log(audioPlayer);
    audioPlayer.src = lista_mp3[idCancionActual];
}




// Ejercicio 8

const btnSig = document.querySelector("#btnSig");
const btnAnt = document.querySelector("#btnAnt");
const btnPlay = document.querySelector("#btnPlay");
const btnPausa = document.querySelector("#btnPausa");


btnSig.addEventListener("click", () => {
    //idCancionActual++;

    //preguntar algo si es la ultima cancion... que si es cierto, idCancion=0 /

    if (idCancionActual == lista_canciones.length - 1) {
        idCancionActual = 0;
    } else {
        // si no es cierto idCancion va a sumar 1
        idCancionActual++;
    }


    //revisarr que no me pase de la ultima cancion (empiece por la primera)
    imprimirReproduciendo();
});

btnAnt.addEventListener("click", () => {
    // idCancionActual--;

    if (idCancionActual == 0) {
        idCancionActual = lista_canciones.length - 1; //5
    } else {
        idCancionActual--;
    }


    //que si estoy en la primera, se vaya a la ultima
    imprimirReproduciendo();
});


//o podemos tener una funcion flecha sin nombre como arriba, de este modo el handle agrega automaticamente un eventListener
const handleReproducir = () => {
    audioPlayer.play();
}

const handlePausar = () => {
    audioPlayer.pause();
}


//o se puede hacer de este modo:
//funciones: reproducir, pausar (que se llaman handle)
btnPlay.addEventListener("click", handleReproducir);
btnPausa.addEventListener("click", handlePausar);

```