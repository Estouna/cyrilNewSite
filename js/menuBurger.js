const burger = document.querySelector(".burger");
const container_circle = document.querySelector(".container-circle");
const circle = document.querySelector(".circle");
const arrow = document.querySelector(".circle__div--arrow");
const parts = document.querySelectorAll(".circle__div--part");
const navLink = document.querySelectorAll(".circle__a--link");

//Détermine le nombre de parts utilisées du cercle (1 part = 1/4 du cercle et 3 liens)
let nbParts = verifParts();

burger.addEventListener("click", mobileMenu);
function mobileMenu() {
    burger.classList.toggle("active");
    container_circle.classList.toggle("active");
    circle.classList.toggle("active");
    (nbParts > 1) ? arrow.classList.toggle("active") : '';
}

// Ferme le menu quand clic sur liens
// navLink.forEach(n => n.addEventListener("click", closeMenu));
// function closeMenu() {
//     burger.classList.remove("active");
//     container_circle.classList.remove("active");
//     circle.classList.remove("active");
//     arrow.classList.remove("active");
// }

let degree = 0;
let clickStart = 1;
let nbClicks = 1;

arrow.onclick = function () {
    if (nbClicks < nbParts) {
        nbClicks++
        degree += 90;
        circle.style.transform = 'rotate(' + degree + 'deg)';
    } else {
        nbClicks = 1;
        degree -= 90 * (nbParts - 1);
        circle.style.transform = 'rotate(' + degree + 'deg)';
    }
}

// Vérifie si au moins un lien existe dans chaque partie du cercle
function verifParts() {
    const returnedArray = []
    for (let item of parts) {
        if (item.querySelector("div.circle__div--subPart") !== null) {
            returnedArray.push(item);
        }
    }
    return returnedArray.length;
}


// MENU BURGER ORIGINE
// const burger = document.querySelector(".burger");
// const navMenu = document.querySelector(".nav-main-ul");

// burger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//   burger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// }

// // Ferme le menu quand clic sur lien
// const navLink = document.querySelectorAll(".nav-main-li");

// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//   burger.classList.remove("active");
//   navMenu.classList.remove("active");
// }