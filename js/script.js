// /*
//   TITRE HOME
// */
// const textHome = "DEVELOPPEUR WEB";

// let index = 0;
// function writeText() {
//   document.querySelector('p.p-home').textContent = textHome.slice(0, index);
//   index++;
//   // // Boucle
//   // if (index > text.length) {
//   //     index = 0;
//   // }
// }
// setInterval(writeText, 150);

/*
  TEXT A PROPOS
*/
// Divise le texte en lettre (expressions régulières " /\S/g, "<span>$&</span>" " à voir)
const texts = document.querySelectorAll('.p-aPropos');
texts.forEach(function (p) {
  p.innerHTML = p.textContent.replace(/\S/g, "<span>$&</span>")
});

// texts.innerHTML = texts.textContent.replace(/\S/g, "<span>$&</span>");

// Sélectionnez tous les éléments span
const spans = document.querySelectorAll('span');

// Fonction pour ajouter la classe active et planifier son retrait après 10 secondes
function addAndRemoveClassWithTimeout(span) {
  span.classList.add('active');
  setTimeout(function () {
    span.classList.remove('active');
  }, 10000);
}

// Ajoutez un écouteur d'événements "mouseenter" pour chaque élément span
spans.forEach(function (span) {
  span.addEventListener('mouseenter', function () {
    addAndRemoveClassWithTimeout(span);
  });
});

//FLOWER
const btnFlower = document.querySelector(".btn-flower");
const flower = document.querySelector(".flower")

btnFlower.addEventListener("click", openFlower);

function openFlower() {
    flower.classList.toggle("active");
}
/*
  CARDS TARIFS
*/
// let card = document.querySelector('.card-1');
// card.addEventListener('click', function () {
//   card.classList.toggle('is-flipped');
// });

// let card2 = document.querySelector('.card-2');
// card2.addEventListener('click', function () {
//   card2.classList.toggle('is-flipped');
// });
