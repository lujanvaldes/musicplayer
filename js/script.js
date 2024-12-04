const lista_canciones = ["","","","",""];
const lista_artistas = ["","","","",""];

const divCanciones =document.getElementById("ListaCanciones");

listaCanciones.forEach((cancion, idx)=>{
    concole.log(`${cancion} - id: ${idx}`); 
    //inner HTML
    divCanciones.innerHTML+= `<div class= "Lista_cancion">${cancion} <bt/>${idx}</div>`;
});