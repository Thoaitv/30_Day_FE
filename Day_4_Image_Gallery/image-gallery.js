let images = document.querySelectorAll('.image img');
let close = document.querySelector('.close');
let pre = document.querySelector('.pre');
let next = document.querySelector('.next');
let gallery = document.querySelector('.gallery');
let galleryImg = document.querySelector('.gallery__img img');

let currentImg = 0;

function gallryShow() {
    //pre
    if (currentImg === 0) {
        pre.classList.add('hide');
    } else {
        pre.classList.remove('hide');
    }

    //next
    if (currentImg === images.length - 1) {
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }

    galleryImg.src = images[currentImg].src;
    gallery.classList.add('show');
}

images.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentImg = index;
        gallryShow();
    })
});

close.addEventListener('click', function () {
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        gallery.classList.remove('show');
    }
})

pre.addEventListener('click', function () {
    currentImg--;
    gallryShow();
})

next.addEventListener('click', function () {
    currentImg++;
    gallryShow();
})