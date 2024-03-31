const navList = document.querySelector('.nav-list');
const navBtn = document.querySelector('.nav-btn');
const navCloseBtn = document.querySelector('.close-btn');

navBtn.addEventListener('click', () => {
    navList.classList.add('show-list');
});

navCloseBtn.addEventListener('click', () => {
    navList.classList.remove('show-list');
})


// product details page

const mainImg = document.querySelector('.main-img img');
const smallImgs = document.querySelectorAll('.small-img-col img');
const products = document.querySelectorAll('.product-card');


products.forEach(function(product) {
    product.addEventListener('click', function(e) {
        const src = e.currentTarget.children[0].children[0].src;
         window.location.href = "prodetails.html";
         
    })
})

smallImgs.forEach(function(smallImg) {
    smallImg.addEventListener('click', function(e) {
       // console.log(e.target.src);
       const source = e.target.src;
       mainImg.src = source;
    })
});