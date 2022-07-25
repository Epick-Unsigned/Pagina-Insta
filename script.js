/*
    Arreglar imagen de fondo
*/


const TXT = "Welcome! :D"

const tituloCards = ["Youtube", "Twitch"];
const imagenesCard = ["img/card1.jpg", "img/card2.png"];
const cardTxt = ["Mi canal donde subo boludeces y tutoriales :D ","Donde strimeo para variar"];
const links = ["https://www.youtube.com/channel/UCZwxqFIJHoVyTn3CBO9DWzw/videos", "https://www.twitch.tv/epick_unsigned" ];


document.querySelector("#contenido_txt").innerHTML = TXT;

function insertarCardDefecto(numeroCard){
    document.querySelector("#contenido_cards").innerHTML += `
    <div class="col col-md-auto">
        <div class="card card-style">
            <img src="${imagenesCard[numeroCard]}" class="card-img-top card-img-modif" alt="...">
            <div class="card-body">
                <h5 class="card-title titulo-card">${tituloCards[numeroCard]}</h5>
                <p class="card-text estilo-txt">
                    ${cardTxt[numeroCard]}
                </p>            
                <a href="${links[numeroCard]}" class="btn btn-primary boton-links">Ir al canal</a>
            </div>
        </div>
    </div>
`
}

for(let i = 0 ; i < imagenesCard.length ; i++){
    insertarCardDefecto(i);
}