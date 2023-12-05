const btns = document.querySelectorAll('._face');
const modals = document.querySelectorAll('.modal-content');


// Avec classe
btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modals[index].classList.add('active');
  });
});


const closeBtns = document.querySelectorAll('.btn-close');
closeBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modals[index].classList.remove('active');
  });
});

// // Sans classe
// btns.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     modals[index].style.visibility = 'visible';
//     modals[index].style.opacity = '1';
//   });
// });


// const closeBtns = document.querySelectorAll('.btn-close');
// closeBtns.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     modals[index].style.visibility = 'hidden' ;
//     modals[index].style.opacity = '0' ;
//   });
// });
