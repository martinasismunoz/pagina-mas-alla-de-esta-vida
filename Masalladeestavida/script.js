
document.addEventListener('DOMContentLoaded', () => {
     const elementosCarousel = document.querySelectorAll('.carousel');
     M.Carousel.init(elementosCarousel, {
         duration: 500,
         dist: 0,
         shift: 5,
         padding: 5,
         numVisible: 7,
         noWrap: false,
     });
});

let hideeTextBtn = document.getElementById('hideeTextBtn');
let hideeText = document.getElementById('hideeText');

hideeTextBtn.addEventListener('click', toggleText);

function toggleText() {
    hideeText.classList.toggle('shoow');
    if(hideeText.classList.contains('shoow')){
        hideeTextBtn.innerHTML = 'Leer menos';
    }
    else{ hideeTextBtn.innerHTML = 'Leer mas'};
};



let hideeeTextBtn = document.getElementById('hideeeTextBtn');
let hideeeText = document.getElementById('hideeeText');

hideeeTextBtn.addEventListener('click', tooggleText);

 function tooggleText() {
    hideeeText.classList.toggle('shooow');
    if(hideeeText.classList.contains('shooow')){
        hideeeTextBtn.innerHTML = 'Leer menos';
    }
    else{ hideeeTextBtn.innerHTML = 'Leer mas'};
 };


let hideeeeTextBtn = document.getElementById('hideeeeTextBtn');
let hideeeeText = document.getElementById('hideeeeText');

hideeeeTextBtn.addEventListener('click', toooggleText);

function toooggleText() {
     hideeeeText.classList.toggle('shoooow');
     if(hideeeeText.classList.contains('shoooow')){
         hideeeeTextBtn.innerHTML = 'Leer menos';
     }
     else{ hideeeeTextBtn.innerHTML = 'Leer mas'};
  };

