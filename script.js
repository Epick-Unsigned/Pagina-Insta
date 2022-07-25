const TXT = "Welcome! :D"

const imagenesCard = ["img/card1.jpg", "img/card2.png"]

document.querySelector("#contenido_txt").innerHTML = TXT;

document.querySelector("#contenido_cards").innerHTML = `
    <div class="card card-style">
        <img src="${imagenesCard[0]}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

`