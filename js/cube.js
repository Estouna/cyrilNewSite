/*---------------CONTENU CUBE---------------*/
const modal1 = document.getElementById("modal_1")
const modal2 = document.getElementById("modal_2")
const modal3 = document.getElementById("modal_3")
const modal4 = document.getElementById("modal_4")
const modal5 = document.getElementById("modal_5")
const modal6 = document.getElementById("modal_6")

face_1.onclick = displayModal1;
function displayModal1() {
  modal1.classList.toggle("active");
}
face_2.onclick = displayModal2;
function displayModal2() {
  modal2.classList.toggle("active");
}
face_3.onclick = displayModal3;
function displayModal3() {
  modal3.classList.toggle("active");
}
face_4.onclick = displayModal4;
function displayModal4() {
  modal4.classList.toggle("active");
}
face_5.onclick = displayModal5;
function displayModal5() {
  modal5.classList.toggle("active");
}
face_6.onclick = displayModal6;
function displayModal6() {
  modal6.classList.toggle("active");
}


//Ferme la modal quand clic sur croix
const close = document.querySelectorAll(".btn-close");

close.forEach(n => n.addEventListener("click", closeModal));

function closeModal() {
  modal1.classList.remove("active");
  modal2.classList.remove("active");
  modal3.classList.remove("active");
  modal4.classList.remove("active");
  modal5.classList.remove("active");
  modal6.classList.remove("active");
}




// // Clic pour ouvrir la fenêtre du slider
// const btn = document.querySelectorAll(".btn-voir, .btn-img");
// const content = document.querySelectorAll(".content");

// btn.forEach(function (element) {
//     element.addEventListener('click', function () {
//         for (let b = 0; b < content.length; b++) {
//             content[b].classList.toggle("active")
//         }
//     })
// })

// // Ferme la fenêtre
// const btnClose = document.querySelectorAll(".btn-close");

// btnClose.forEach(function (element) {
//     element.addEventListener('click', function () {
//         for (let b = 0; b < content.length; b++) {
//             content[b].classList.remove("active")
//         }
//     })
// })