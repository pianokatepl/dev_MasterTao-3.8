const hamburger = document.querySelector('.hamburger')
const headerNav = document.querySelector('.header-nav')

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('is-active');
  headerNav.classList.toggle('show');
})


$('#first-screen-slider').slick({ 
   dots: true,
   appendArrows: $('.first-screen-arrows'),
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
      }
    },
  ]
});


//Function Declaration
const fileInput = document.querySelector('#calculation-file');
const fileName = document.querySelector('#file-name')

fileInput.addEventListener('change', function() {
  fileName.innerHTML = this.files[0].name
})

//Function Expression
// const fileInput = document.querySelector('#calculation-file');
// const fileName = document.querySelector('#file-name')

// fileInput.addEventListener('change', () => {
//   fileName.innerHTML = fileInput.files[0].name;
// });

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions
