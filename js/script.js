// _________________________________________________________ //
//                  1. Nuestros datos                        //
// _________________________________________________________ //

const lista_canciones = [
    {
        artista: "The Neighbourhood",
        url: "./audio/Sweater Weather.mp3",
        titulo: "Sweater Weather",
        //https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
        img: "../img/cancion0.jpg"
    }, {
        artista: "Post Malone",
        url: "./audio/Circles.mp3",
        //url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        titulo: "Circles",
        img: "../img/cancion1.jpg"
    }, {
        artista: "The Neighbourhood",
        url: "./audio/Afraid.mp3",
        // url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        titulo: "Afraid",
        img: "../img/cancion2.jpg"
    }, {
        artista: "Post Malone",
        url: "./audio/Better Now.mp3",
        //url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        titulo: "Better Now",
        img: "../img/cancion3.jpg"
    }, {
        artista: "The Neighbourhood",
        url: "./audio/Softcore.mp3",
        //url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        titulo: "Softcore",
        img: "../img/cancion4.jpg"
    }];


//primer elemento de la lista, cuarta canción
lista_canciones[0].artista;
console.log(lista_canciones[0].artista)//The Neighbourhood
console.log(lista_canciones[3].titulo)//Better Now



// _________________________________________________________ //
//       2. Constantes, Variables y QuerySelectors           //
// _________________________________________________________ //


//Botones
const btnSig = document.querySelector("#btnSig");
const btnAnt = document.querySelector("#btnAnt");
const btnPlay = document.querySelector("#btnPlay");
const btnPausa = document.querySelector("#btnPausa");

const btnTema = document.querySelector("#btnTema3");


//Audio
const divListaCanciones = document.getElementById("ListaCanciones");
const divAudioPlayer = document.querySelector("audio");
const divPlayingSong = document.getElementById("playingSong");

let idCancionActual = 0;


// LO QUE MODIFIQUE: const divsCanciones = document.querySelectorAll(".Lista_cancion");





btnSig.addEventListener("click", () => {

    if (idCancionActual == lista_canciones.length - 1) {
        idCancionActual = 0;
    } else {
        idCancionActual++;
    }

    imprimirReproduciendo();
});

btnAnt.addEventListener("click", () => {

    if (idCancionActual == 0) {
        idCancionActual = lista_canciones.length - 1;
    } else {
        idCancionActual--;
    }
    imprimirReproduciendo();
});


// _________________________________________________________ //
//                    3. Funciones                           //
// _________________________________________________________ //

function imprimirReproduciendo() {
    const song = lista_canciones[idCancionActual].titulo;
    const artist = lista_canciones[idCancionActual].artista;

    //variable para añadir imagen
    //const img = lista_canciones[idCancionActual].img;


    console.log("Artista:" + artist + " - canción: " + song);

    divPlayingSong.innerHTML = `
    
        ${song} <br/>
        artista: ${artist} 
       </div>`;
    console.log(audioPlayer);
    audioPlayer.src = lista_canciones[idCancionActual].url;
}


const handleReproducir = () => {
    audioPlayer.play();
}

const handlePausar = () => {
    audioPlayer.pause();
}

btnTema3.addEventListener("click", () => {
    imprimirReproduciendo();
});



document.addEventListener('click', (event) => {
    console.log(event.target.id);
});


btnPlay.addEventListener("click", handleReproducir);
btnPausa.addEventListener("click", handlePausar);



// _________________________________________________________ //
//      4. Su código una vez cargado todo lo demás           //
// _________________________________________________________ //


lista_canciones.forEach((cancion, idx) => {
    console.log(`${cancion} - id: ${idx}`);


    const song = cancion.titulo;
    const artist = cancion.artista;
    //const imgUrl = cancion.img;

    divListaCanciones.innerHTML += `
    <div id="song_${idx}" class="Lista-cancion">
    ${idx}. ${song} - ${artist} 
    </div>`;
});


divsCanciones.forEach((divCancion, idx) => {
    divCancion.addEventListener("click", (event) => {
        idCancionActual = 2;
        imprimirReproduciendo();
    });
});


















