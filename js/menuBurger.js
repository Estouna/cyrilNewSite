const header = document.querySelector(".header-nav");
const burger = document.querySelector(".burger");
const container_circle = document.querySelector(".container-circle");
const menuCircle = document.querySelector(".circle");
const arrowTop = document.querySelector(".circle__div--arrowTop");
const arrowBottom = document.querySelector(".circle__div--arrowBottom");
const navLink = document.querySelectorAll(".circle__a--link");

// Nombre de lien max dans un quart de cercle
let linksPerQuarter = 3;
// Nombre de liens présents dans le cercle
let links = navLink.length;
/* Détermine le nombre de quart utilisé (Math.ceil() arrondi à l'entier le plus haut ex: 7 / 3 = 2.33... donc = 3 quarts pour 7 liens)*/
let nbQuarter = Math.ceil(links / linksPerQuarter);
let degree = 0;
let currentQuarter = 1;

arrowTop.onclick = function () {
    if (currentQuarter !== 1) {
        currentQuarter--
        degree -= 90;
        menuCircle.style.transform = 'rotate(' + degree + 'deg)';
    }
}

arrowBottom.onclick = function () {
    if (currentQuarter !== nbQuarter) {
        currentQuarter++
        degree += 90;
        menuCircle.style.transform = 'rotate(' + degree + 'deg)';
    }
}

// Avec retour début/fin quand début/fin menu
// arrowTop.onclick = function () {
//     if (currentQuarter !== 1) {
//         currentQuarter--
//         degree -= 90;
//         menuCircle.style.transform = 'rotate(' + degree + 'deg)';
//     } else {
//         currentQuarter = nbQuarter;
//         degree += 90 * (nbQuarter - 1);
//         menuCircle.style.transform = 'rotate(' + degree + 'deg)';
//     }
// }

// arrowBottom.onclick = function () {
//     if (currentQuarter !== nbQuarter) {
//         currentQuarter++
//         degree += 90;
//         menuCircle.style.transform = 'rotate(' + degree + 'deg)';
//     } else {
//         currentQuarter = 1;
//         degree -= 90 * (nbQuarter - 1);
//         menuCircle.style.transform = 'rotate(' + degree + 'deg)';
//     }
// }



burger.addEventListener("click", openMenu);
function openMenu() {
    burger.classList.toggle("active");
    container_circle.classList.toggle("active");
    menuCircle.classList.toggle("active");
    (nbQuarter > 1) ? arrowTop.classList.toggle("active") : '';
    (nbQuarter > 2) ? arrowBottom.classList.toggle("active") : '';
}

// Ferme le menu quand clique dans le vide
document.addEventListener('mouseup', function (e) {
    if (!header.contains(e.target)) {
        closeMenu()
    }
});

// Ferme le menu quand clic sur liens
// navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    burger.classList.remove("active");
    container_circle.classList.remove("active");
    menuCircle.classList.remove("active");
    arrowTop.classList.remove("active");
    arrowBottom.classList.remove("active");
}