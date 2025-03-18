let card = document.getElementById('myFlipCards');
let cardsArr = document.getElementsByClassName('flip-card-inner');

function watchCards() {
    card.addEventListener('click', e => {
        e.preventDefault();
        let cardElement = e.target.closest('.flip-card-inner');
        if (cardElement) {
            if (cardElement.style.transform === "rotateY(180deg)") {
                cardElement.style.transform = "none";
            } else {
                cardElement.style.transform = "rotateY(180deg)";
            }
        }
    });
}

function setDefault() {
    Array.from(cardsArr).forEach(element => element.style.transform = "none");
}

function init() {
    setDefault();
    watchCards();
}

init();